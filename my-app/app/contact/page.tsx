"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");

    return (
        <>
            <h1 className="text-3xl font-bold">Contact</h1>

            <input
                className="mt-4 block w-full rounded border p-2"
                placeholder="Naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p className="mt-2 text-sm text-gray-500">
                Ingevulde naam: {name}
            </p>
        </>
    );
}
