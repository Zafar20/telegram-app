import React from 'react'
import { Link } from 'react-router-dom'

const ZodiacsItem = ({item}) => {
  return (
    <>
        <Link to={`/zodiac/${item.id}`} className="zodiacs__item">
            <img src={item.thumbnail} alt="" className="zodiacs__item-icon" />
            <h2 className="zodiacs__item-title">{item.title}</h2>
          
        </Link>
    </>
  )
}

export default ZodiacsItem