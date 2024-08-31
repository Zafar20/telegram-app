import React from 'react'

const ZodiacsItem = ({item}) => {
  return (
    <>
        <div className="zodiacs__item">
            <img src={item.thumbnail} alt="" className="zodiacs__item-icon" />
            <h2 className="zodiacs__item-title">{item.title}</h2>
            <p className="zodiacs__item-period">{item.description}</p>
        </div>
    </>
  )
}

export default ZodiacsItem