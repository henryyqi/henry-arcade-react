import Card from "./Card"

const Hand = ({ cards, hideFirstCard }) => {
  return (
    <div className="hand">
        {cards.map((card, i) => 
            i === 0&& hideFirstCard ? <Card back key={i} /> : <Card key={i} {...card} />
        )}
    </div>
  )
}

export default Hand