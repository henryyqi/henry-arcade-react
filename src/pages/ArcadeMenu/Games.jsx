import { useNavigate } from "react-router-dom"
import GameCard from "./GameCard"

const Games = () => {
    const navigate = useNavigate();

    const games = [
        {
            id: "blackjack",
            name: "Blackjack",
            thumbnail: "../src/assets/logos/thumbnails/blackjack_thumbnail.png",
            gamePath: "/games/blackjack/blackjack.html"
        },
        {
            id: "pacman",
            name: "PacMan",
            thumbnail: "../src/assets/logos/thumbnails/pacman_thumbnail.png",
            gamePath: "/games/pacman/pacman.html"
        },
        {
            id: "connect-four",
            name: "Connect Four",
            thumbnail: "../src/assets/logos/thumbnails/connect_four_thumbnail.png",
            gamePath: "/games/connect-four/connect_four.html"
        },
        {
            id: "tic-tac-toe",
            name: "Tic Tac Toe",
            thumbnail: "../src/assets/logos/thumbnails/tic_tac_toe_thumbnail.png",
            gamePath: "/games/tic-tac-toe/tic_tac_toe.html"
        },
        {
            id: "rock-paper-scissors",
            name: "Rock Paper Scissors",
            thumbnail: "../src/assets/logos/thumbnails/rps_thumbnail.png",
            gamePath: "/games/rock-paper-scissors/rock_paper_scissors.html"
        }
    ];  

    return (
    <div className="gameMenu">
        {games.map((game) => (
            <GameCard 
                key={game.id} 
                id={game.id}
                title={game.name} 
                thumbnail={game.thumbnail} 
                onClick={() => navigate(`/game/${game.id}`, { state: { gamePath: game.gamePath } })} 
            />
        ))}
        
    </div>
  )
}

export default Games