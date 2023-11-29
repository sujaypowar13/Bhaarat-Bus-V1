// src/components/MyAccount.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useAuth } from './AuthContext';

const MyAccount = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>My Account</h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login to view your account.</p>
      )}
    </div>
  );
};

export default MyAccount;
