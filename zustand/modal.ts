import { ModalProps } from 'react-native'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { Zustand } from '@/constants/Zustand'

type Modal = {
  config?: ModalProps
  open?: boolean
  content?: React.ReactNode
  afterClose?: () => any
  onClose?: () => any
  showIconClose?: boolean
}

type ModalState = {
  [Zustand.Modal]: Modal
  openModal: (param?: Modal) => void
  closeModal: () => void
}

export const modalZustand = create<ModalState>()(
  devtools(
    (set, get) => ({
      [Zustand.Modal]: {},

      openModal: (param?: Modal) => {
        set({
          [Zustand.Modal]: {
            showIconClose: true,
            ...param,
            open: true,
          },
        })
      },
      closeModal: () => {
        const modal = get().modal

        if (modal.afterClose) {
          modal?.afterClose()
        }

        set({
          [Zustand.Modal]: {
            open: false,
          },
        })
      },
    }),
    {
      name: 'modal-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
