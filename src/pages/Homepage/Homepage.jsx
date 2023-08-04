import React from 'react'
import Welcome from '../../components/Welcome/Welcome'
import './Homepage.css'
import BasicScene from '../../components/3DObject/3DObject'
import BasicAnimation from '../../components/BasicAnimation/BasicAnimation'

function Homepage() {
  return (
    <div className='homepage-container'>
      <Welcome />
      <br />
      <BasicScene />
      <BasicAnimation /> 
    </div>
  )
}

export default Homepage