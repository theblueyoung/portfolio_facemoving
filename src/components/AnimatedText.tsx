import React, { useMemo, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedChar({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0" aria-hidden="true">
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = useMemo(() => {
    const splitWords = text.split(' ');
    const totalChars = text.length;
    let runningIndex = 0;

    return splitWords.map((word, wordIdx) => {
      const chars = word.split('').map((char) => {
        const start = runningIndex / totalChars;
        const end = (runningIndex + 1) / totalChars;
        runningIndex += 1;
        return { char, range: [start, end] as [number, number] };
      });
      // Account for space after word
      if (wordIdx < splitWords.length - 1) {
        runningIndex += 1;
      }
      return { word, chars };
    });
  }, [text]);

  return (
    <p ref={containerRef} className={className} style={style} aria-label={text}>
      {words.map((wordObj, wIdx) => (
        <React.Fragment key={wIdx}>
          <span className="inline-block whitespace-nowrap">
            {wordObj.chars.map((item, cIdx) => (
              <AnimatedChar
                key={cIdx}
                char={item.char}
                progress={scrollYProgress}
                range={item.range}
              />
            ))}
          </span>
          {wIdx < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </p>
  );
}
