import React from 'react'
import Zodiacs from '../components/Zodiacs/Zodiacs'
import { useEffect, useState } from 'react';
import { useZodiacs } from '../hooks/useZodiacs';

const MainPage = () => {


  const [language, setLanguage] = useState('ru'); 

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    if (tg.initDataUnsafe?.user?.language_code) {
      setLanguage(tg.initDataUnsafe.user.language_code);
    }
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  useEffect(() => {
      // Разворачиваем приложение на весь экран
      const tg = window.Telegram.WebApp;
      tg.expand();

      // Опционально: можно установить минимальную высоту приложения через стили
      document.body.style.height = '100vh';
    
  
}, []);
  


  const { zodiacs } = useZodiacs()

  return (
    <>
      <Zodiacs zodiacs={zodiacs}/>
    </>
  )
}

export default MainPage