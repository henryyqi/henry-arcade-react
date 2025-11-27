const GameCard = ({ title, name, thumbnail, onClick }) => {
  // Accept either `title` or `name` to be resilient to differing prop names
  const displayTitle = title || name || 'Untitled';
  return (
    // <div className="card" onClick={() => window.location.href = gamePath}>
    //     <img src={thumbnail} alt={title} className="game-thumbnail" height="120px" width="160px"/>
    //     <h3>{title}</h3>
    // </div>
    <div className="card" onClick={onClick}>
        <img src={thumbnail} alt={displayTitle} className="game-thumbnail" height="120px" width="160px"/>
        <h3>{displayTitle}</h3>
    </div>
  )
}

export default GameCard