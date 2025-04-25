import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Home() {
  const context = useOutletContext();

  // Only if you're using the context:
  const users = context?.users ?? [];

  return (
    <div>
      <h1>This is home</h1>
      {/* <p>Total users: {users.length}</p> */}
    </div>
  );
}

export default Home;
