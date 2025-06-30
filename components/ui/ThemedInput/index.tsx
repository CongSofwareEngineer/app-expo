import { useThemeColor } from '@/hooks/useThemeColor'
import { cn } from '@/utils/tailwind'
import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

type ThemedInputProps = {
  lightColor?: string
  darkColor?: string
} & TextInputProps
const ThemedInput = ({ style, lightColor, darkColor, ...props }: ThemedInputProps) => {
  const color = useThemeColor('text', { light: lightColor, dark: darkColor })
  return <TextInput style={[{ color, fontSize: 16, borderWidth: 1, borderColor: '#ccc' }, style]} {...props} className={cn('px-2 py-2 rounded-lg')} />
}

export default ThemedInput
