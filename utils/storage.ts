import { Storage } from '@/constants/Storage'
// import { MMKV } from 'react-native-mmkv'

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
    const jsonValue = storage.getString(key)
    return jsonValue != null ? JSON.parse(jsonValue) : defaultData
  } catch {
    // saving error
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
