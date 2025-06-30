/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors'
import useMode from './useMode'

export function useThemeColor(colorName: keyof typeof Colors.light & keyof typeof Colors.dark, props?: { light?: string; dark?: string }) {
  const theme = useMode()

  if (props?.[theme]) {
    return props?.[theme]
  } else {
    return Colors[theme][colorName]
  }
}
