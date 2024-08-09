"use client";
import { motion } from "framer-motion";
import Logo from "@/../public/logo.webp";
import MainNav from "@/components/navbar/Navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Spinner } from "@nextui-org/react";
import { cn } from "@/components/cn/cn";
import useMeasure from "react-use-measure";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-hidden">
      <MainNav />
      <main className="flex justify-center items-center flex-col w-full h-full">
        <Image src={Logo} width={200} height={200} alt="logo" className="rounded-large" />
        <div className="w-full h-full flex justify-center items-center">
        </div>
      </main>
    </div>
  );
}
// //@ts-ignore
// const fetcher = (url) => fetch(url).then((res) => res.text());

// function SpeedTestText() {
//   const { data, error, isLoading } = useSWR("/api/chat", fetcher);

//   const [currentCharIndex, $currentCharIndex] = useState(0);
//   const [text, $text] = useState("");
//   const [ref, bounds] = useMeasure();

//   return (
//     <div className="speed-test flex flex-col mt-32 w-[80vw] h-full relative text-3xl leading-10">
//       {isLoading ? (
//         <Spinner size="lg" color="primary" label="Loading..." />
//       ) : (
//         <>
//           <motion.div
//             className="absolute inset-0 text-foreground pointer-events-none select-non flex w-fit"
//             draggable={false}
//             animate={{ x: window.innerWidth / 2 - bounds.width - bounds.right }}
//             ref={ref}
//           >
//             {text.split("").map((char, index) => (
//               <motion.span
//                 key={index} 
//                 className={cn(
//                   data?.split("")[index] === char ? "" : "text-danger",
//                   "block min-w-[18.1px]"
//                 )}
//                 initial={{ x: -10, opacity: 1 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ type: "just", duration: 0.05 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.div>
//           <motion.div
//             contentEditable
//             className="absolute inset-0 outline-none h-full text-transparent flex w-fit"
//             spellCheck="false"
//             suppressContentEditableWarning
//             // animate={{ x: window.innerWidth / 2 - bounds.width - bounds.right }}
//             onInput={(e) => {
//               e.preventDefault();
//               const txt = e.currentTarget.innerText;
//               $text(txt);
//               $currentCharIndex(txt.length);
//             }}
//           ></motion.div>
//           <motion.div
//             className="flex"
//             animate={{ x: window.innerWidth / 2 - bounds.width - bounds.right }}

//             // animate={{ x: -18.1 * currentCharIndex }}
//           >
//             {data?.split("").map((char, index) => {
//               const userEnteredChar = text?.split("")[index];
//               return (
//                 <span
//                   key={index}
//                   className={cn(
//                     currentCharIndex > index
//                       ? "text-transparent"
//                       : "text-foreground-500",
//                     userEnteredChar !== char && userEnteredChar != undefined
//                       ? "text-transparent"
//                       : "",
//                     "min-w-[18.1px] block"
//                   )}
//                 >
//                   {userEnteredChar === char && userEnteredChar != undefined
//                     ? char
//                     : userEnteredChar != undefined
//                     ? userEnteredChar
//                     : char}
//                 </span>
//               );
//             })}
//           </motion.div>
//         </>
//       )}
//     </div>
//   );
// }
