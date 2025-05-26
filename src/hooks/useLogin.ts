import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRIVATE_ROUTE } from '@/routes'
import { ROUTE } from '@/routes/publicRoutes/route'
import { generateJWT } from '@/infrastructure'

export const useLogin = () => {
  const [data, setData] = useState({ userName: '', password: '' })
  const [errrorMessage, setErrorMessage] = useState<string>('')
  const navigate = useNavigate()

  const storedAuth = localStorage.getItem('authentication')
  const { userName, password } = storedAuth ? JSON.parse(storedAuth) : null

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      navigate(ROUTE.HOME)
    }
  }, [navigate, token])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (userName && password) {
      if (data.userName === userName && data.password === password) {
        generateJWT()
        navigate(PRIVATE_ROUTE.ACCOUNT)
      } else {
        setErrorMessage('Wrong Login or Password')
      }
    } else {
      console.log('No user found in localStorage')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return [handleChange, handleSubmit, errrorMessage] as const
}
