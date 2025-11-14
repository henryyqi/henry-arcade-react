const GameCard = ({ title, thumbnail, gamePath }) => {
  return (
    <div className="card" onClick={() => window.location.href = gamePath}>
        <img src={thumbnail} alt={title} className="game-thumbnail" height="120px" width="160px"/>
        <h3>{title}</h3>
    </div>
  )
}

export default GameCard