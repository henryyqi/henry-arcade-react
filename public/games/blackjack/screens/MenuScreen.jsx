const MenuScreen = ({ startGame }) => {
  return (
    <div className="menu-screen">
        <h1>Blackjack</h1>
        <button onClick={startGame}>Start Hand</button>
    </div>
  )
}

export default MenuScreen