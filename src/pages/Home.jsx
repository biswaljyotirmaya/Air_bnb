import React from 'react'
import { useState } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Feed from '../components/Feed/Feed'


const Home = () => {
  
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
    <Header setIsChecked={setIsChecked}/>
    <Feed isChecked={isChecked}/>
    <Footer/>
    </div>
  )
}

export default Home