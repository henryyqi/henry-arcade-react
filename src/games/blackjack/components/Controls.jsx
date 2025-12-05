const Controls = ({ isPlayerTurn, gameOver, onHit, onStand, onReset }) => {
  return (
    <div className="controls">
        <button onClick={() => onHit && onHit()} disabled={!isPlayerTurn || gameOver}>Hit</button>
        <button onClick={() => onStand && onStand()} disabled={!isPlayerTurn || gameOver}>Stand</button>
        <button onClick={() => onReset && onReset()}>Reset</button>
    </div>
  )
}

export default Controls