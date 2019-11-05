import React from 'react'

function FonctionDeclarativeComponent(props) {
  const color = props.color;
  const name = props.name;

  return (
    <div style={{ border: 'solid 5px ' + color }}>
      {name}
    </div>
  )
}

export default FonctionDeclarativeComponent;