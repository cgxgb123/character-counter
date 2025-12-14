// src/components/StatsDisplay/StatsDisplay.tsx
import React from "react";
import { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div>
      <div>
        <p className="text-sm text-gray-500">Characters</p>
        <p className="text-2xl font-bold">{stats.characterCount}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Words</p>
        <p className="text-2xl font-bold">{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-500">Reading Time</p>
          <p className="text-2xl font-bold">
            {stats.readingTime.toFixed(2)} min
          </p>
        </div>
      )}
    </div>
  );
};
