import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { Link } from 'expo-router'
import React from 'react'

const TCStore = () => {
  return (
    <ThemedScrollView>
      <ThemedText>TCStore</ThemedText>
      <ThemedText>TCStore</ThemedText>
      <Link href={'/tc-store/production'}>
        <ThemedText type='link'>Product</ThemedText>
      </Link>
    </ThemedScrollView>
  )
}

export default TCStore
