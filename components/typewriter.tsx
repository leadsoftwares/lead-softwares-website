"use client";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
};

export default function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseBetween = 1200,
}: Props) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[loopIndex % words.length];

    if (!isDeleting && text.length < currentWord.length) {
      // typing
      timer = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (isDeleting && text.length > 0) {
      // deleting
      timer = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeed
      );
    } else if (!isDeleting && text.length === currentWord.length) {
      // pause before delete
      timer = setTimeout(() => setIsDeleting(true), pauseBetween);
    } else if (isDeleting && text.length === 0) {
      // move to next word
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, words, loopIndex, typingSpeed, deletingSpeed, pauseBetween]);

  return (
    <span className="font-bold text-7xl bg-gradient-to-r  from-blue-500 to-pink-200 to-60% bg-clip-text text-transparent">
      {text}
      <span className="ml-1 relative top-3 inline-block w-[40px] h-[10px] bg-blue-500 animate-blink"></span>
    </span>
  );
}
