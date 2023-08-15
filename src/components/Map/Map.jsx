import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { db } from '../../config/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const MapRes = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'restaurants'), snapshot => {
      const restaurantData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRestaurants(restaurantData);
    });

    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array indicates the effect runs once after mount

  return (
    <MapContainer
      center={[51.5074, -0.1272]} // Fixed: negative longitude value and using actual coordinates
      zoom={12}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {restaurants.map(restaurant => (
        <Marker
          key={restaurant.id}
          position={[
            restaurant.coordinates.latitude,
            restaurant.coordinates.longitude,
          ]}
        >
          <Popup>
            <div>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              {/* Add more restaurant details here */}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapRes;
