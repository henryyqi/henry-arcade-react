import GameCard from "../components/GameCard"

const Games = () => {
  
    return (
    <div className="gameMenu">
        <GameCard 
            title="Rock Paper Scissors" 
            thumbnail="../src/assets/logos/thumbnails/rps_thumbnail.png"
            gamePath="/games/rock-paper-scissors/rock_paper_scissors.html" 
        />
        <GameCard 
            title="Tic Tac Toe" 
            thumbnail="../src/assets/logos/thumbnails/tic_tac_toe_thumbnail.png"
            gamePath="/games/tic-tac-toe/tic_tac_toe.html" 
        />
        <GameCard 
            title="Connect Four" 
            thumbnail="../src/assets/logos/thumbnails/connect_four_thumbnail.png"
            gamePath="/games/connect-four/connect_four.html" 
        />
        <GameCard 
            title="Pac-Man"
            thumbnail="../src/assets/logos/thumbnails/pacman_thumbnail.png"
            gamePath="/games/pacman/pacman.html" 
        />
        <GameCard 
            title="Blackjack" 
            thumbnail="../src/assets/logos/thumbnails/blackjack_thumbnail.png"
            gamePath="/games/blackjack/blackjack.html" 
        />
    </div>
  )
}

export default Games