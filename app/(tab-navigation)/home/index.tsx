import ThemedText from '@/components/ui/ThemedText'
import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import ThemedInput from '@/components/ui/ThemedInput'
import ThemedScrollView from '@/components/ui/ThemedScrollView'
import { Link } from 'expo-router'

const HomeScreen = () => {
  return (
    <ThemedScrollView style={styles.container}>
      <View>
        <ThemedText>Home</ThemedText>
      </View>
      <ThemedInput placeholder='Input' />
      <Link href={'/login'}>
        <ThemedText type='link'>Product</ThemedText>
      </Link>

      <Link href={'/tc-store/production'}>
        <ThemedText type='link'>Product</ThemedText>
      </Link>
    </ThemedScrollView>
  )
}

export default HomeScreen
