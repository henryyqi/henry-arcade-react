const ResultsScreen = ({ result, restart }) => {
  const message = result === 'player' ? 'You Win!' : result === 'dealer' ? 'Dealer Wins!' : 'Push! It\'s a Tie!';
  return (
    <div className="results-screen">
        <h1>{message}</h1>
        <p>{result && result.reason ? result.reason : ''}</p>
        <button onClick={restart}>Play Again</button>
    </div>
  )
}

export default ResultsScreen