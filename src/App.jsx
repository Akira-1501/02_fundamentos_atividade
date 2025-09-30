// src/App.jsx
import './App.css'
import FirtsComponent from './components/FirtsComponent.jsx'
import TemplateExpressions from './components/TemplateExpression.jsx'
import MyComponent from './components/MyComponent.jsx'
import Events from './components/Events.jsx'
import Challenge from './components/Chalenge.jsx'
import FinalChallenge from './components/FinalChallenge.jsx'
import Calculator from './components/Calculator.jsx'


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirtsComponent />
      <TemplateExpressions />
      <MyComponent />
      <MyComponent />
      <Events />
      <Challenge />
      <FinalChallenge x={11} y={5}/>
      <FinalChallenge x={12} y={4}/>
      <FinalChallenge x={16} y={8}/>
      <Calculator a={10} b={5}/>
    </div>
  )
}

export default App