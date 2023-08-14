import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./Reservations.css";

function Reservations() {
  const [upcomingReservations, setUpcomingReservations] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const reservationsRef = collection(db, "reservations");
      const reservationsQuery = query(
        reservationsRef,
        where("uID", "==", user.uid)
      );

      getDocs(reservationsQuery)
        .then((querySnapshot) => {
          const upcomingReservations = [];
          querySnapshot.forEach((doc) => {
            const reservationData = doc.data();
            upcomingReservations.push({ id: doc.id, ...reservationData });
          });
          setUpcomingReservations(upcomingReservations);
        })
        .catch((error) => {
          console.error("Error fetching upcoming reservations:", error);
        });
    }
  }, []);

  return (
    <div className="reservation-container">
      {upcomingReservations.length > 0 ? (
        <div className="upcoming-reservations">
          <h2>Upcoming Reservations</h2>
          <ul>
            {upcomingReservations.map((reservation) => (
              <li key={reservation.id}>
                Restaurant ID: {reservation.rID}
                <br />
                Date and Time: {reservation.timestamp
                  ? reservation.timestamp.toDate().toString()
                  : "Timestamp not available"} {/* Check if timestamp exists */}
                <br />
                Number of Seats: {reservation.noOfSeats}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No upcoming reservations found.</p>
      )}
    </div>
  );
}

export default Reservations;
