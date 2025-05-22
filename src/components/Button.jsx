const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`calculator-button ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default Button
