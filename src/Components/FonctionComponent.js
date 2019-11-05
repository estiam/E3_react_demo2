import React from 'react'

const FonctionComponent = ({ color, name }) => {
  return (
    <div style={{ border: 'solid 5px ' + color }}>
      {name}
    </div>
  );
}

export default FonctionComponent;