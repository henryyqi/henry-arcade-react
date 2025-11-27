const Controls = () => {
  return (
    <div className="controls">
        <button onClick={hit}>Hit</button>
        <button onClick={stand}>Stand</button>
        {/* <button onClick={doubleDown}>Double Down</button> */}
        {/* <button onClick={split}>Split Hand</button> */}
    </div>
  )
}

export default Controls