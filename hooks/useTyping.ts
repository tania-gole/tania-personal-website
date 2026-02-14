"use client";

import { useState, useEffect } from "react";

interface UseTypingReturn {
  displayed: string;
  done: boolean;
}

export function useTyping(
  text: string,
  speed: number = 80,
  startDelay: number = 600
): UseTypingReturn {
  const [displayed, setDisplayed] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const start = setTimeout(() => {
      const tick = () => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
          timeout = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
