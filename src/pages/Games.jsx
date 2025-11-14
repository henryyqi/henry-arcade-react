import GameCard from "../components/GameCard"

const Games = () => {
  
    return (
    <div className="gameMenu">
        <GameCard 
            title="Tic Tac Toe" 
            thumbnail="https://via.placeholder.com/150" 
            gamePath="/games/tic-tac-toe/tic_tac_toe.html" 
        />
        <GameCard 
            title="Connect Four" 
            thumbnail="https://via.placeholder.com/150" 
            gamePath="/games/connect-four/connect_four.html" 
        />
        <GameCard 
            title="Pac-Man" 
            thumbnail="https://via.placeholder.com/150" 
            gamePath="/games/pacman/pacman.html" 
        />
    </div>
  )
}

export default Games