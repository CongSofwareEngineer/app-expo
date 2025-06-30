import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { Link } from 'expo-router'
import React from 'react'

const ThayHongToan = () => {
  return (
    <ThemedScrollView>
      <ThemedText>ThayHongToan</ThemedText>
      <Link href={'/thayhongtoan/list-register'}>
        <ThemedText type='link'>list-register</ThemedText>
      </Link>
    </ThemedScrollView>
  )
}

export default ThayHongToan
