import React, { useEffect } from 'react'
import ZodiacById from '../components/ZodiacById/ZodiacById'
import { useParams} from "react-router-dom"
import { useZodiaById } from '../hooks/useZodiacById'

const ZodiacPage = () => {

  const params = useParams()

  const { item } = useZodiaById(params.id)


  useEffect(() => {
    // Разворачиваем приложение на весь экран
    const tg = window.Telegram.WebApp

    tg.BackButton.isVisible = true
    tg.BackButton.show()
    
        
  

}, []);

  return (
    <>
      <ZodiacById item={item}/>
    </>
  )
}

export default ZodiacPage