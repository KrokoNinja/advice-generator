'use client'
import { getData } from "@/hooks/getData";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {

  const [id, setId] = useState(0);
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdvice().then(data => {
      setId(data.id);
      setAdvice(data.advice);
    });
  });

  const getAdvice = async () => {
    setLoading(true);
    const data = await getData();
    setId(data.id);
    setAdvice(data.advice);
    setLoading(false);
    return data.slip;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mx-auto flex flex-col p-10 items-center gap-y-7 bg-dark-grayish-blue rounded-xl relative max-w-[600px]">
        <h2 className="text-neon-green h2 text-md font-bold tracking-[0.3em]">ADVICE #{id}</h2>
        <h1 className="text-light-cyan text-[28px] font-bold text-center">"{advice}"</h1>
        <Image src="/pattern-divider-desktop.svg" alt="divider" className="mb-5" width={444} height={16} />
        <button className="bg-neon-green p-5 rounded-full absolute -bottom-7 button-hover disabled:hover:shadow-none disabled:bg-gray-500" onClick={() => getAdvice()} disabled={loading}>
          <Image src="/icon-dice.svg" alt="dice icon" width={20} height={20} />
        </button>
      </div>
      <div className="fixed bottom-0 w-full text-center text-light-cyan">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-neon-green underline">Frontend Mentor</a>.
        Coded by <a href="https://github.com/KrokoNinja/" className="text-neon-green underline">KrokoNinja</a>.
      </div>
    </main>
  );
}
