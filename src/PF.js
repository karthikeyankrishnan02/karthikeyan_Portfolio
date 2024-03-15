import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>My Component</h1>
      <img src={process.env.PUBLIC_URL + '/demo.jpg'} alt="Demo" />
    </div>
  );
}

export default MyComponent;
