import React, { useEffect } from 'react'
import {
  useToast
} from '@chakra-ui/react'


const ErrorAlert = () => {

  const toast = useToast();
  
  useEffect(() => {
    toast({
      title: 'Backend Server Down!',
      description: "Sebagian website yang menggunakan database server sedang tidak bisa digunakan!",
      status: "info",
      duration: 9000,
      position: "top",
      isClosable: true
    })
  }, [toast])

  return (
    <>
    <div></div>
    </>
  )
}

export default ErrorAlert