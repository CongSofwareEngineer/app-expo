import React from 'react'
import { useUser } from '@/hooks/useUser'
import { Redirect } from 'expo-router'

const CheckRoutePage = () => {
  const { isLogin, hydrate } = useUser()

  if (!hydrate) {
    return <></>
  }

  if (isLogin) {
    return <Redirect href='/home' />
  }

  return <Redirect href='/login' />
}

export default CheckRoutePage
