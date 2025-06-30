import { Mode } from '@/constants/app'
import { Storage } from '@/constants/Storage'
import { getDataLocal } from '@/utils/storage'
import { mode as useModeZustand } from '@/zustand/mode'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'

const useMode = () => {
  const { mode, setMode, hydrate } = useModeZustand((state) => state)
  const themeDevice = useColorScheme()

  useEffect(() => {
    const getData = async () => {
      const mode = await getDataLocal(Storage.Mode)
      if (mode) {
        setMode(mode)
      } else {
        if (themeDevice) {
          setMode(themeDevice as Mode)
        }
      }
    }
    hydrate && getData()
  }, [themeDevice, hydrate])

  return mode
}

export default useMode
