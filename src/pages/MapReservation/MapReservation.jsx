import React from 'react'
import './MapReservation.css'
import MapRes from '../../components/Map/Map'

function MapReservation() {
  return (
    <div className='map-reservation-container'>
      <div className="mapres-left-container">
        <MapRes />
      </div>
      <div className="mapres-right-container">
        
      </div>
    </div>
  )
}

export default MapReservation