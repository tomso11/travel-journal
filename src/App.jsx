import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Data from './data.js'

function App() {
  console.log(Data[0])
  const cards = Data.map((data) => {
    return(<Card key={data.key} data={data}/>)
  })
  console.log(cards)

  return (
    <div className="App">
      <Navbar/>
      <div className='card-container'>
        {cards}
      </div>
    </div>
  )
}

export default App
