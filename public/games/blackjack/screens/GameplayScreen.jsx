import { useEffect } from "react";
import { useBlackjackLogic } from "../hooks/useBlackjackLogic";
import CardDisplay from "../components/CardDisplay.jsx";
import Controls from "../components/Controls.jsx";

const GameplayScreen = ({ endGame }) => {
    const { playerCards, dealerCards, playerScore, dealerScore, isPlayerTurn, gameOver, playerBust, dealerBust, winner, hit, stand, resetGame } = useBlackjackLogic();
    
    useEffect(() => { startGame(); }, []);

  return (
    <div className="gameplay-screen">
        <CardDisplay player={player} dealer={dealer} />
        <Controls 
            isPlayerTurn={isPlayerTurn} 
            gameOver={gameOver} 
            onHit={hit} 
            onStand={stand} 
            onReset={() => {
                resetGame();
                endGame({ playerBust, dealerBust, winner });
            }} 
        />
    </div>
  )
}

export default GameplayScreen