import React from 'react'
import ZodiacById from '../components/ZodiacById/ZodiacById'
import { useParams} from "react-router-dom"
import { useZodiaById } from '../hooks/useZodiacById'

const ZodiacPage = () => {

  const params = useParams()

  const { item } = useZodiaById(params.id)

  return (
    <>
      <ZodiacById item={item}/>
    </>
  )
}

export default ZodiacPage