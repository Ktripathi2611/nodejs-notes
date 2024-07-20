import React from 'react';

const styles = {
  userCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
};

function UserCard({ username, email, age }) {
  return (
    <div style={styles.userCard}>
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
