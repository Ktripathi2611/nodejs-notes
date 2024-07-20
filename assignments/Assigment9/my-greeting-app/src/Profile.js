function Profile({ user }) {
    const { name, email, address: { street, city, country } } = user;
  
    return (
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Address:</p>
        <ul>
          <li>Street: {street}</li>
          <li>City: {city}</li>
          <li>Country: {country}</li>
        </ul>
      </div>
    );
  }
  
  export default Profile;
  