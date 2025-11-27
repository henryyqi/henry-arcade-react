import { useState } from "react";
import MenuScreen from "./screens/MenuScreen.jsx";
import GameplayScreen from "./screens/GameplayScreen.jsx";
import ResultsScreen from "./screens/ResultsScreen.jsx";

export default function Blackjack() {
    const [screen, setScreen] = useState("menu");
    const [results, setResults] = useState(null);

    switch (screen) {
        case "menu":
            return <MenuScreen onStart={() => setScreen("play")} />;
        case "play":
            return (
                <GameplayScreen
                    onGameEnd={(result) => {
                        setResults(result);
                        setScreen("results");
                    }}
                />
            );
        case "results":
            return <ResultsScreen result={results} onRestart={() => setScreen("menu")} />;
        default:
            return <div>Invalid screen</div>;
    }
}