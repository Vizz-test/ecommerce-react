import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="">
        <div>Home</div>
    <Link to="/about" >About</Link>
    </div>
  )
}

export default Home