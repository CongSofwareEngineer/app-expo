import { create } from 'zustand'
import { devtools, persist, StorageValue } from 'zustand/middleware'

import { Storage } from '@/constants/Storage'
import { Zustand } from '@/constants/Zustand'
import { getDataLocal, saveDataLocal } from '@/utils/storage'

interface UserProps {
  userName: string
  password: string
  token: string
  tokenRefresh: string
  age: number
  [key: string]: unknown
}
interface UserState {
  [Zustand.User]: UserProps | null
  hydrate: boolean
  setUser: (user: UserProps | null) => void
}
export const userZustand = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        hydrate: false,
        [Zustand.User]: null,

        setUser: (user: UserProps | null) => {
          set({
            [Zustand.User]: user,
          })
        },
      }),
      {
        storage: {
          getItem: () => null,
          removeItem: () => null,
          setItem: (_: any, value: StorageValue<UserState>) => {
            const user = value.state[Zustand.User]

            saveDataLocal(Storage.User, user)
          },
        },
        onRehydrateStorage: () => (state) => {
          if (state) {
            const data = getDataLocal(Storage.User) as UserProps

            if (data) {
              state[Zustand.User] = data
            }
            state.hydrate = true
          }
        },
        name: 'user-zustand',
      }
    ),
    {
      name: 'user-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
