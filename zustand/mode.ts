import { useColorScheme } from 'react-native'
import { create } from 'zustand'
import { devtools, persist, StorageValue } from 'zustand/middleware'

import { Storage } from '@/constants/Storage'
import { Zustand } from '@/constants/Zustand'
import { Mode } from '@/constants/app'
import { getDataLocal, saveDataLocal } from '@/utils/storage'

interface ModeState {
  [Zustand.Mode]: Mode
  hydrate: boolean
  setMode: (mode: Mode) => void
}
export const mode = create<ModeState>()(
  devtools(
    persist(
      (set) => ({
        hydrate: false,
        [Zustand.Mode]: Mode.light,

        setMode: (mode: Mode) => {
          set({
            [Zustand.Mode]: mode,
          })
        },
      }),
      {
        storage: {
          getItem: () => null,
          removeItem: () => null,
          setItem: (_: any, value: StorageValue<ModeState>) => {
            const mode = value.state[Zustand.Mode]

            saveDataLocal(Storage.Mode, mode)
          },
        },

        onRehydrateStorage: () => (state) => {
          if (state) {
            const mode = useColorScheme()
            const modeLocal = getDataLocal(Storage.Mode)

            state[Zustand.Mode] = modeLocal || mode
            state.hydrate = true
          }
        },
        name: 'modal-zustand',
      }
    ),
    {
      name: 'modal-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
