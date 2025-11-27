const ResultsScreen = ({ result, restart }) => {
  return (
    <div className="results-screen">
        <h1>
            {result === "win" && "You Win!"}
            {result === "lose" && "You Lose!"}
            {result === "draw" && "It's a Draw!"}
        </h1>
        <p>{result.reason}</p>
        <button onClick={restart}>Play Again</button>
        
    </div>
  )
}

export default ResultsScreen