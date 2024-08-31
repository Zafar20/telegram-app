import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/MainPage'
import ZodiacPage from '../pages/ZodiacPage'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/zodiac/:id',
        element: <ZodiacPage/>
    }
])