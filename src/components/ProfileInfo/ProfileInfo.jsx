import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import { updateProfile } from "firebase/auth";

function ProfileInfo() {
  const [user, setUser] = useState(auth.currentUser);
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleUpdateName = async () => {
    if (!user) return;

    try {
      await updateProfile(auth.currentUser, { displayName: newName });
      setEditingName(false);
    } catch (error) {
      console.log("Error updating name:", error.message);
    }
  };

  return (
    <div className="profile-info-container">
      {user && (
        <div>
          <h2>Your Profile</h2>
          <div className="user-details">
            <div>
              <p>Name: {editingName ? <input value={newName} onChange={(e) => setNewName(e.target.value)} /> : user.displayName}</p>
              {editingName ? <button onClick={handleUpdateName}>Save</button> : <button onClick={() => setEditingName(true)}>Edit</button>}
            </div>
            <div>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileInfo;
