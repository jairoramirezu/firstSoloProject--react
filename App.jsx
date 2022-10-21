import React from "react";
import Nav from './src/components/Nav';
import Card from './src/components/Card';
import data from './src/data/data';
import './src/styles/App.css'

function App() {
  const Cards = data.map(item => {
    return <Card
              key={item.title}
              {...item}
          />
  })

  return(
    <>
      <Nav />
      <div className="cards--All">
      {Cards}
      </div>
    </>
  )
}

export default App;