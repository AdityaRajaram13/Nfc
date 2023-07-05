import React from 'react';

const ProfilePage = () => {
  const person = {
    name: 'John Doe',
    age: 30,
    location: 'New York',
    bio: 'I am a software engineer passionate about web development.',
    // Add more properties as needed
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age} years old</h2>
      <h3>Location: {person.location}</h3>
      <p>{person.bio}</p>
      {/* Add more profile information here */}
    </div>
  );
};

export default ProfilePage;
