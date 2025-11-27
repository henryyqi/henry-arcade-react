import Hand from "./Hand";

const CardDisplay = ({ player, dealer }) => {
  return (
    <div className="table">
        <h2>Dealer</h2>
        <Hand cards={dealer} hideFirstCard={true} />
        <h2>You</h2>
        <Hand cards={player}/>
    </div>
  )
}

export default CardDisplay