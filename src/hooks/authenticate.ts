import { AUTH_INFO } from '@/constants'
import { ROUTE } from '@/routes'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuthenticate = () => {
  const navigate = useNavigate()

  const [logInfo, setLogInfo] = useState(AUTH_INFO.LOGIN)

  const updateLabel = () => {
    const token = localStorage.getItem('token')
    setLogInfo(token ? AUTH_INFO.LOGOUT : AUTH_INFO.LOGIN)
  }

  const handleAuthToggle = () => {
    if (logInfo === AUTH_INFO.LOGOUT) {
      localStorage.removeItem('token')
      updateLabel()
    }
    navigate(ROUTE.LOGIN)
  }

  useEffect(() => {
    updateLabel()
    window.addEventListener('storage', updateLabel)
    return () => window.removeEventListener('storage', updateLabel)
  }, [])

  return [logInfo, handleAuthToggle] as const
}
