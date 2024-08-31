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

      // Обработка свайпа вправо
      let touchstartX = 0;

      const handleTouchStart = (e) => {
          touchstartX = e.touches[0].clientX;
      };

      const handleTouchEnd = (e) => {
          const touchendX = e.changedTouches[0].clientX;
          const touchDiff = touchendX - touchstartX;

          // Определяем порог для свайпа вправо
          if (touchDiff > 50) {
              navigate('/'); // Закрываем описание при свайпе вправо
          }
      };

      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
          document.removeEventListener('touchstart', handleTouchStart);
          document.removeEventListener('touchend', handleTouchEnd);
          tg.BackButton.hide(); // Скрываем кнопку "Назад" при размонтировании
      };


}, [navigate]);

  return (
    <>
      <ZodiacById item={item}/>
    </>
  )
}

export default ZodiacPage