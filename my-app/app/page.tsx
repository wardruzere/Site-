"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import RegistrationForm from "@/components/RegistrationForm";

// Countdown Timer component
function Timer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { dagen: 0, uren: 0, minuten: 0, seconden: 0 };

    if (difference > 0) {
      timeLeft = {
        dagen: Math.floor(difference / (1000 * 60 * 60 * 24)),
        uren: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuten: Math.floor((difference / 1000 / 60) % 60),
        seconden: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-6 font-semibold text-lg">
      {timeLeft.dagen} dagen, {timeLeft.uren} uur, {timeLeft.minuten} minuten, {timeLeft.seconden} seconden tot het feest!
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">

      {/* Intro */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Hoera voor opa Frans!</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Dit jaar wordt onze opa 85, en dat mag natuurlijk niet onopgemerkt voorbijgaan!
          Daarom organiseren we op 19 december een feest waarbij opa zijn dansbeentjes nog eens kan laten zien,
          samen met familie en vrienden. We zijn blij dat jullie allemaal aanwezig kunnen zijn om er een onvergetelijke avond van te maken.
          Om 12 uur wordt hij officieel 85 jaar, en daarom tellen we samen af tot middernacht, waarna de champagneflessen feestelijk worden ontkurkt!
        </p>

        {/* Countdown Timer */}
        <Timer targetDate="2025-12-20T12:00:00" />
      </div>

      {/* Over-sectie */}
      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Jeugd */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Jeugd</h2>
          <p>
            Frans Logghe groeide op in Sint-Jacobskapelle, waar hij van jongs af
            aan vertrouwd raakte met het leven op en rond het land. De waarden
            van hard werken, eenvoud en doorzettingsvermogen werden hem al vroeg
            meegegeven.
          </p>
          <Image
            src="/jeugd.jpg"
            alt="Frans als kind"
            width={800}
            height={500}
            className="rounded-lg shadow-md mt-4 mb-8 w-full h-auto"
          />
        </div>

        {/* Tienerjaren */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Tienerjaren</h2>
          <p>
            Tijdens zijn tienerjaren leerde Frans de verantwoordelijkheid kennen
            die het boerenleven met zich meebracht. Naast school hielp hij mee
            op de boerderij, waar hij stap voor stap uitgroeide tot een betrouwbare
            werkkracht.
          </p>
        </div>

        {/* Volwassen leven */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Volwassen leven</h2>
          <p>
            Als volwassene was Frans jarenlang actief als landbouwer in
            Sint-Jacobskapelle. Met toewijding en vakkennis werkte hij op het land
            en bouwde hij een leven op dat gekenmerkt werd door inzet, eenvoud en
            verbondenheid met zijn omgeving.
          </p>
          <p className="mt-3">
            Na het werk was er ook plaats voor ontspanning. Frans genoot van een
            pintje — of soms ook meerdere — in goed gezelschap, met ruimte voor
            verhalen, lachen en herinneringen.
          </p>
        </div>

        {/* Pensioen */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Pensioen</h2>
          <p>
            Tijdens zijn pensioen kon Frans meer genieten van rust, familie en
            vriendschap. Het actieve leven maakte plaats voor momenten van
            gezelligheid, terugblikken op een rijk gevuld leven en het koesteren
            van eenvoudige genoegens.
          </p>
        </div>

      </div>

      {/* Registratieformulier */}
      <div className="mt-12">
        <RegistrationForm />
      </div>

    </section>
  );
}
