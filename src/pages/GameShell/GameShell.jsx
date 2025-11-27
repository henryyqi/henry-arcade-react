import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './gameshell.css';

function GameShell() {
    const { gameID } = useParams();
    const location = useLocation();

    // Prefer a gamePath passed in navigation state; fall back to known defaults.
    const defaultPaths = {
        blackjack: '/games/blackjack/blackjack.html',
        pacman: '/games/pacman/pacman.html',
        connectFour: '/games/connect-four/connect_four.html',
        ticTacToe: '/games/tic-tac-toe/tic_tac_toe.html',
        rockPaperScissors: '/games/rock-paper-scissors/rock_paper_scissors.html',
    };

    const gamePath = location?.state?.gamePath || defaultPaths[gameID];

    const navigate = useNavigate();

    if (!gamePath) {
        return <h1>Game not found</h1>;
    }

    // Full-screen overlay so the game's page has a full viewport and doesn't get squashed
    return (
        <div className={`gameshell gameshell--${gameID}`}>
            <div className="gameshell__topbar">
                <button onClick={() => navigate(-1)} className="gameshell__back">Back</button>
                <div className="gameshell__title">{gameID}</div>
                <a href={gamePath} target="_blank" rel="noreferrer" className="gameshell__link">Open in new tab</a>
            </div>

            <div className="gameshell__frame-wrapper">
                <iframe title={gameID} src={gamePath} className="gameshell__iframe" allowFullScreen />
            </div>
        </div>
    );
}

export default GameShell;