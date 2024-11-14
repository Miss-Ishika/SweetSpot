import React, { useState } from 'react'
import Header from './Header'
import Explore from './Explore'
import FoodDisplay from './FoodDisplay'
import Appdownload from './Appdownload'

const Home = () => {

  const [category, setCategory] = useState("all")

  return (
    <div>
        <Header />
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload />
    </div>
  )
}

export default Home