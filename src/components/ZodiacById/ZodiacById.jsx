import React from 'react'

const ZodiacById = ({item}) => {
  return (
    <>
        {item && (
            <div className="item">
            <img src={item.thumbnail} alt="" className="item__img" />
            <p className="item__text">{item.description}</p>
            </div>
        )}
       
    </>
  )
}

export default ZodiacById