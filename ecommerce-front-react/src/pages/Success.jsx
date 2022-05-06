import React from 'react';
import { useLocation } from 'react-router';

const Success = () => {
  const location = useLocation();

  console.log('useloction', location);
  return <div>succefful</div>;
};

export default Success;
