import { mode as useModeZustand } from '@/zustand/mode'

const useMode = () => {
  const mode = useModeZustand((state) => state)

  return mode
}

export default useMode
