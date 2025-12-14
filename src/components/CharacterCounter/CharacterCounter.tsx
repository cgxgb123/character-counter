// src/components/CharacterCounter/CharacterCounter.tsx
import React, { useState, useCallback } from "react";
import TextInput from "../TextInput/TextInput";
import { CharacterCounterProps, TextStats } from "../../types";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime,
}) => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const textChange = useCallback((value: string) => {
    const wordCount =
      value.trim() === "" ? 0 : value.trim().split(/\s+/).length;

    const newStats: TextStats = {
      characterCount: value.length,
      wordCount,
      readingTime: wordCount / 200,
    };

    setText(value);
    setStats(newStats);
  }, []);

  const wordStatus =
    stats.wordCount < minWords
      ? "text-red-500"
      : stats.wordCount > maxWords
      ? "text-yellow-500"
      : "text-green-600";

  return (
    <div className="max-w-3xl mx-auto p-6">
      <TextInput onTextChange={textChange} />

      <div className="mt-4 text-center">
        <p className={`font-medium ${wordStatus}`}>
          Min: {minWords} | Max: {maxWords}
        </p>

        {targetReadingTime && (
          <p className="text-sm text-gray-500 mt-1">
            Target Reading Time: {targetReadingTime} min
          </p>
        )}
      </div>
    </div>
  );
};
