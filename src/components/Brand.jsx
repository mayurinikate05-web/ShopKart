import React from 'react'

const Brand = ({image,name}) => {
  return (
    <div className='brand-card'>
      <img src={image}></img>
      <p>{name}</p>
    </div>
  )
}

export default Brand
