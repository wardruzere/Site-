"use client";
import { useState } from "react";

export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbxLeNHwn4iQLbyOJl41qXV_4Rz8Mda-o1u-IOyEXxRLOf2DTOciOK66Fcl6_O5X09FkuA/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, guests }),
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Fout bij POST:", text);
                setErrorMsg(`Er is iets misgegaan: ${res.status} - ${text}`);
                setLoading(false);
                return;
            }

            const data = await res.json();
            console.log("Response van Web App:", data);
            setSubmitted(true);
        } catch (err: any) {
            console.error("Catch error:", err);
            setErrorMsg("Er is iets misgegaan bij het verzenden. Controleer de console voor details.");
        }

        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="text-center text-green-600 font-semibold text-lg">
                Bedankt voor je registratie! We kijken ernaar uit je te zien op het feest 🎉
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
        >
            <h3 className="text-xl font-bold text-center mb-4">Registreer je voor het feest</h3>

            <input
                type="text"
                placeholder="Naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
                type="number"
                min={1}
                max={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {errorMsg && (
                <div className="text-red-600 text-sm font-semibold">{errorMsg}</div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50"
            >
                {loading ? "Versturen..." : "Registratie bevestigen"}
            </button>
        </form>
    );
}
