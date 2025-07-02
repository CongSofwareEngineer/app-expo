import { useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView, View } from 'react-native'

import ModalWarning from '@/components/ModalWarning'
import ThemedCheckbox from '@/components/ui/ThemedCheckbox'
import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { Mode } from '@/constants/app'
import { Colors } from '@/constants/Colors'
import useLanguage from '@/hooks/useLanguage'
import useModal from '@/hooks/useModal'
import useMode from '@/hooks/useMode'
import { useUser } from '@/hooks/useUser'

const SettingScreen = () => {
  const { translate } = useLanguage()
  const { mode, setMode } = useMode()
  const { setUser } = useUser()
  const { openModal } = useModal()
  const router = useRouter()

  const handleLogout = async () => {
    const callback = async () => {
      setUser(null)
      router.replace('/login')
    }

    openModal({
      content: <ModalWarning onSubmit={callback} title={translate('warning.logout')} />,
    })
  }

  return (
    <ThemedScrollView>
      <SafeAreaView className='gap-10'>
        <View className='gap-2'>
          <ThemedText>{`${translate('setting.darkMode')} :`}</ThemedText>
          <View className='flex flex-row gap-10 w-full'>
            <ThemedCheckbox onChange={(e) => setMode(Mode.dark)} checked={mode === Mode.dark}>
              <ThemedText>{translate('setting.dark')}</ThemedText>
            </ThemedCheckbox>
            <ThemedCheckbox onChange={(e) => setMode(Mode.light)} checked={mode === Mode.light}>
              <ThemedText>{translate('setting.light')}</ThemedText>
            </ThemedCheckbox>
          </View>
        </View>
        <View className='gap-2'>
          <ThemedText>{`${translate('setting.language')} :`}</ThemedText>
          <View className='flex flex-row gap-10 w-full'>
            <ThemedCheckbox>
              <ThemedText>Vietnamese</ThemedText>
            </ThemedCheckbox>
            <ThemedCheckbox>
              <ThemedText>English</ThemedText>
            </ThemedCheckbox>
          </View>
        </View>

        <ThemedText
          style={{
            color: Colors.red,
          }}
          onPress={() => {
            console.log('logout')
            handleLogout()
          }}
        >
          {translate('common.logout')}
        </ThemedText>
      </SafeAreaView>
    </ThemedScrollView>
  )
}

export default SettingScreen
