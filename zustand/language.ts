import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import MessageEN from '@/assets/language/en.json'
import MessageVN from '@/assets/language/vn.json'
import { getDataLocal, saveDataLocal } from '@/utils/storage'
import { Storage } from '@/constants/Storage'

export enum LANGUAGE_SUPPORT {
  EN = 'en',
  VN = 'VN',
}

export type TYPE_LANGUAGE = typeof MessageVN
export type PATH_LANGUAGE<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T]: PATH_LANGUAGE<T[K], `${Prefix}${Prefix extends '' ? '' : '.'}${K & string}`>
    }[keyof T]
  : Prefix

type Language = {
  locale: LANGUAGE_SUPPORT
  messages: any
}
type LanguageState = {
  language: Language
  setLanguage: (locale: LANGUAGE_SUPPORT) => void
}

const getLanguage = (language: LANGUAGE_SUPPORT): Language => {
  switch (language) {
    case LANGUAGE_SUPPORT.EN:
      return {
        locale: LANGUAGE_SUPPORT.EN,
        messages: MessageEN,
      }

    default:
      return {
        locale: LANGUAGE_SUPPORT.VN,
        messages: MessageVN,
      }
  }
}

export const languageZustand = create<LanguageState>()(
  devtools(
    persist(
      (set) => ({
        language: {
          locale: LANGUAGE_SUPPORT.VN,
          messages: MessageVN,
        },

        setLanguage: (locale: LANGUAGE_SUPPORT) => {
          const language = getLanguage(locale)

          set({ language })
          saveDataLocal(Storage.Language, language)
        },
      }),
      {
        storage: {
          getItem: () => null,
          setItem: () => null,
          removeItem: () => null,
        },
        onRehydrateStorage: () => (state) => {
          if (state) {
            const locale = getDataLocal(Storage.Language) as LANGUAGE_SUPPORT
            const language = getLanguage(locale || LANGUAGE_SUPPORT.VN)

            state.language = language
          }
        },
        name: 'language-zustand',
      }
    ),
    {
      name: 'language-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
