import React from 'react'
import { Link } from 'expo-router'
import ThemedText from '@/components/ui/ThemedText'
import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedView from '@/components/ui/ThemedView'
import { height } from '@/constants/Device'
import ThemedInput from '@/components/ui/ThemedInput'
import useLanguage from '@/hooks/useLanguage'
import { KeyboardAvoidingView, KeyboardAvoidingViewBase, Platform, TouchableOpacity, View } from 'react-native'

export default function LoginScreen() {
  const { translate } = useLanguage()
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className='flex-1 '>
      <ThemedScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <ThemedView
          className=' gap-5 '
          style={
            {
              // backgroundColor: 'white',
              // height: height(100),
            }
          }
        >
          <ThemedText className='text-center' type='subtitle'>
            Login Screen
          </ThemedText>
          <ThemedText>{translate('userName')}:</ThemedText>
          <ThemedInput placeholder='userName' />

          <ThemedText>{translate('password')}:</ThemedText>
          <ThemedInput placeholder='password' />

          <ThemedText>{translate('userName')}:</ThemedText>
          <ThemedInput placeholder='userName' />

          <ThemedText>{translate('userName')}:</ThemedText>
          <ThemedInput placeholder='userName' />

          <ThemedText>{translate('userName')}:</ThemedText>
          <ThemedInput placeholder='userName' />

          <ThemedText>{translate('userName')}:</ThemedText>
          <ThemedInput placeholder='userName' />

          <TouchableOpacity>
            <ThemedText>{translate('common.login')}</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedScrollView>
    </KeyboardAvoidingView>
  )
}
