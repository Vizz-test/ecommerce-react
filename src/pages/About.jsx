import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Link to={'/contact'}>contact</Link>
    </div>
  )
}

export default About