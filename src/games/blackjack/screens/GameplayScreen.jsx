import { useEffect } from "react";
import { useBlackjackLogic } from "../hooks/useBlackjackLogic.js";
import CardDisplay from "../components/CardDisplay.jsx";
import Controls from "../components/Controls.jsx";

const GameplayScreen = ({ endGame }) => {
    const { playerHand, dealerHand, isPlayerTurn, gameOver, result, startGame, playerHit, playerStand } = useBlackjackLogic(endGame);

    useEffect(() => { if (startGame) startGame(); }, [startGame]);

  return (
    <div className="gameplay-screen">
        <CardDisplay player={playerHand} dealer={dealerHand} />
        <Controls 
            isPlayerTurn={isPlayerTurn} 
            gameOver={gameOver} 
            onHit={playerHit} 
            onStand={playerStand} 
            onReset={() => {
                if (startGame) startGame();
                if (endGame) endGame(result);
            }} 
        />
    </div>
  )
}

export default GameplayScreen