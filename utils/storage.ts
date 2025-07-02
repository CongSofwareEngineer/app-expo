import { Storage } from '@/constants/Storage'

// export const storage = new MMKV({
//   encryptionKey: 'my-super-secret-key',
//   id: 'mmkv',
// })

export const storage = {
  set: (key: Storage, value: any) => {},
  getString: (key: Storage) => '',
  delete: (key: Storage) => {},
}

export const saveDataLocal = (key: Storage, value: any) => {
  try {
    storage.set(key, JSON.stringify(value))
  } catch {
    // saving error
  }
}

export const getDataLocal = (key: Storage, defaultData: any = '') => {
  try {
    const jsonValue = storage.getString(key) ?? ''

    return JSON.parse(jsonValue)
  } catch {
    // return null
  }
}

export const removeDataLocal = (key: Storage) => {
  try {
    storage.delete(key)

    return true
  } catch {
    return false
  }
}
