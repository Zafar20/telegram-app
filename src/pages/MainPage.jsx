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
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
     tg.expand();
  }, []);

  
  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);


  


  const { zodiacs } = useZodiacs()

  return (
    <>
      <Zodiacs zodiacs={zodiacs}/>
    </>
  )
}

export default MainPage