import { useEffect, useState } from 'react';
import Zodiacs from './components/Zodiacs/Zodiacs';
import { useZodiacs } from './hooks/useZodiacs';

const App = () => {
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
    <div className="container">
      <div className='zodiacs'>
          <div className="zodiacs__settings">
            <h1>{language === 'en' ? 'Horoscopes' : 'Гороскопы'}</h1>
            <select onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <Zodiacs zodiacs={zodiacs}/>
      </div>
    </div>
   
    </>
   
  );
};

export default App;
