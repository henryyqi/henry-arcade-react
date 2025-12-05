import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './gameshell.css';

function GameShell() {
    const { gameID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    React.useEffect(() => {
        // no-op here; navigation for React games handled below in effect when reactGames map applies
    }, []);

    // Map of React-based games: gameID -> in-SPA route path
    const reactGames = {
        blackjack: '/game/react/blackjack',
    };

    const gamePath = location?.state?.gamePath;

    if (!gamePath) {
        return <h1>Game not found</h1>;
    }

    // If this game has a React component, navigate to the in-SPA route instead
    React.useEffect(() => {
        if (reactGames[gameID]) {
            navigate(reactGames[gameID], { replace: true });
        }
    }, [gameID, navigate]);

    if (reactGames[gameID]) return null; // waiting for redirect

    // Full-screen overlay so the game's page has a full viewport and doesn't get squashed
    return (
        <div className={`gameshell gameshell--${gameID}`}>
            <div className="gameshell__topbar">
                <button onClick={() => navigate(-1)} className="gameshell__back">Back</button>
                <div className="gameshell__title">{gameID}</div>
            </div>

            <div className="gameshell__frame-wrapper">
                <iframe title={gameID} src={gamePath} className="gameshell__iframe" allowFullScreen />
            </div>
        </div>
    );
}

export default GameShell;