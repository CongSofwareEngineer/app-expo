import { userZustand } from '@/zustand/user'

export const useUser = () => {
  const { hydrate, setUser, user } = userZustand((state) => state)
  const login = async (userName: string, password: string) => {}

  const logOut = async () => {
    setUser(null)
  }
  return {
    hydrate,
    setUser,
    user,
    login,
    logOut,
    isLogin: !!user,
  }
}
