import React, { useEffect } from 'react'
import ZodiacById from '../components/ZodiacById/ZodiacById'
import { useNavigate, useParams} from "react-router-dom"
import { useZodiaById } from '../hooks/useZodiacById'

const ZodiacPage = () => {

  const params = useParams()
  const navigate = useNavigate()

  const { item } = useZodiaById(params.id)


  useEffect(() => {
    // Разворачиваем приложение на весь экран
    const tg = window.Telegram.WebApp

    tg.BackButton.isVisible = true
    tg.BackButton.show()
    
    tg.onEvent('backButtonClicked',() =>  navigate('/'))

  

}, []);

  return (
    <>
      <ZodiacById item={item}/>
    </>
  )
}

export default ZodiacPage
