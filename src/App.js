import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Brand Name
        </span>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={getUsers}
        >
          Get Users
        </button>
      </nav>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {users.map(user => (
            <div
              key={user.id}
              style={{
                border: '1px solid #ccc',
                padding: '20px',
              }}
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                style={{
                  width: '100%',
                  marginBottom: '10px',
                }}
              />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
