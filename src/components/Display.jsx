const Display = ({ value }) => {
  return (
    <div className="calculator-display" data-testid="display">
      {value}
    </div>
  )
}

export default Display