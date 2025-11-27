const Card = ({ rank, suit, back = false }) => {
  
    if (back) return <div className="card back"></div>

    return (
    <div className="card">
        {rank} {suit}
    </div>
  )
}

export default Card