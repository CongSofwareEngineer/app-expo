import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { cn } from '@/utils/tailwind'

type Props = {
  loading?: boolean
  typeBtn?: 'default' | 'primary' | 'danger' | 'warning'
} & TouchableOpacityProps

const ThemedTouchable = ({ loading, typeBtn = 'default', style, ...props }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      {...props}
      activeOpacity={0.8}
      disabled={loading || props?.disabled}
      className={cn(
        typeBtn === 'default' && 'bg-green-500 ',
        typeBtn === 'primary' && 'bg-yellow-500 ',
        typeBtn === 'danger' && 'bg-red-500 ',
        typeBtn === 'warning' && 'bg-orange-400 ',
        (loading || props?.disabled) && 'opacity-50'
      )}
    >
      {
        <View style={styles.containerChildren} className='flex w-full  flex-row'>
          {loading && <AntDesign name='loading2' size={20} className='animate-spin' />}
          <Text className={cn('text-base font-medium text-center text-black', loading && 'opacity-50')}>{props.children}</Text>
        </View>
      }
    </TouchableOpacity>
  )
}

export default ThemedTouchable

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 8,
  },
  containerChildren: {
    flexGrow: 1,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#000',
  },
})
