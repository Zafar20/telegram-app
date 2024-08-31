import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

export const useZodiaById= (id) => {

    const [item, setItem] = useState(null)

    const  getZodiacById = async() => {
        const res = await axios.get(`https://dummyjson.com/products/${id}`) 
        console.log(res.data);
        setItem(res.data)
    }

    useEffect(() => {
        getZodiacById()
    }, [])

    return {
        item
    }

}

