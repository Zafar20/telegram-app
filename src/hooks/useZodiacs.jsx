import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

export const useZodiacs= () => {

    const [zodiacs, setZodiacs] = useState(null)

    const  getZodiacs = async() => {
        const res = await axios.get(`https://dummyjson.com/products`) 
        console.log(res.data.products);
        setZodiacs(res.data.products)
        
    }


    useEffect(() => {
        getZodiacs()
    }, [])

    return {
        zodiacs
    }

}

