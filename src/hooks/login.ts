import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRIVATE_ROUTE, ROUTE } from '@/routes'
import { generateJWT } from '@/infrastructure'

export const useLogin = () => {
  const navigate = useNavigate()

  const [errrorMessage, setErrorMessage] = useState<string>('')
  const [data, setData] = useState({ userName: '', password: '' })

  const token = localStorage.getItem('token')
  const storedAuth = localStorage.getItem('authentication')

  const { userName: storageUserName, password: storagePassword } = storedAuth
    ? JSON.parse(storedAuth)
    : null

  useEffect(() => {
    if (!token) return

    navigate(ROUTE.HOME)
  }, [navigate, token])

  const handleSubmit = (e: FormEvent) => {
    const { userName, password } = data
    e.preventDefault()

    if (userName && password) {
      if (userName === storageUserName && password === storagePassword) {
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
