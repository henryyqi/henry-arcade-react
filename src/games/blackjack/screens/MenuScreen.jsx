const MenuScreen = ({ onStart }) => {
  return (
    <div className="menu-screen">
        <h1>Blackjack</h1>
        <button onClick={onStart}>Start Hand</button>
    </div>
  )
}

export default MenuScreen