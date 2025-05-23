import { useState } from 'react'
import Calculator from '../components/Calculator'
import '../App.css'

export default {
  title: 'Interactive/Calculator',
  component: Calculator
}

const InteractiveCalculatorTemplate = () => {
  const [operations, setOperations] = useState([])

  // Listener para agregar operaciones al historial
  const handleAddOperation = (operation) => {
    setOperations([...operations, operation])
  }

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <Calculator onOperation={handleAddOperation} />
      </div>
      
    </div>
  )
}

export const Interactive = {
  render: () => <InteractiveCalculatorTemplate />
}