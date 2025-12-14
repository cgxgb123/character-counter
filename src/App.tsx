import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TextInput from "./components/TextInput/TextInput";
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
import { TextStats } from "./types";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const handleTextChange = (value: string) => {
    const wordCount =
      value.trim() === "" ? 0 : value.trim().split(/\s+/).length;

    setText(value);
    setStats({
      characterCount: value.length,
      wordCount,
      readingTime: wordCount / 200,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
