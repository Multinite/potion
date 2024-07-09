"use client";
import { useChat } from "ai/react";
import Logo from "@/../public/logo_nobg.png";
import MainNav from "@/components/navbar/Navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-64px)]">
      <MainNav />
      <main className="flex justify-center items-center flex-col w-full h-full">
        <Image src={Logo} width={200} height={200} alt="logo" />
        <div className="w-full h-full flex justify-center items-center">
          <SpeedTestText />
        </div>
      </main>
    </div>
  );
}
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.text());

function SpeedTestText() {
  const { data, error, isLoading } = useSWR("/api/chat", fetcher);

  console.log(isLoading, data, error);
  const [currentCharIndex, $currentCharIndex] = useState(0);
  const [text, $text] = useState("");

  return (
    <div className="flex flex-col mt-32 w-[65vw] h-full relative text-2xl">
      {isLoading ? (
        <Spinner size="lg" color="primary" label="Loading..." />
      ) : (
        <>
          <div
            contentEditable
            className="absolute inset-0 outline-none h-full"
            spellCheck="false"
            onInput={(e) => {
              const text = e.currentTarget.innerText;
              $currentCharIndex(text.length);
            }}
          >
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={data?.split("")[index] === char ? "" : "text-danger"}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="">
            {data?.split("").map((char, index) => (
              <span
                key={index}
                className={
                  currentCharIndex > index + 1
                    ? "text-transparent"
                    : "text-foreground-500"
                }
              >
                {char}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
