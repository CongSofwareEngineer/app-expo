import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import { View } from 'react-native'

import { Colors } from '@/constants/Colors'
import useLanguage from '@/hooks/useLanguage'
import useModal from '@/hooks/useModal'

import ThemedText from '../ui/ThemedText'
import ThemedTouchable from '../ui/ThemedTouchable'

import styles from './styles'

type Props = {
  title: string
  des?: string
  onSubmit?: () => any
  onCancel?: () => any
  hideClose?: boolean
}
const ModalWarning = ({ hideClose = false, onSubmit = () => {}, onCancel, title, des }: Props) => {
  const [loading, setLoading] = useState(false)

  const { translate } = useLanguage()
  const { closeModal } = useModal()

  const handleSubmit = async () => {
    setLoading(true)
    await onSubmit()

    setTimeout(() => {
      setLoading(false)
      closeModal()
    }, 100)
  }

  return (
    <View style={styles.container}>
      <ThemedText type='subtitle'>{title}</ThemedText>
      <Ionicons style={{ marginTop: 5, marginBottom: 6 }} name='warning' size={100} color={Colors.yellow} />

      {des && <ThemedText>{des}</ThemedText>}

      <View style={styles.containerBtn}>
        {!hideClose && (
          <ThemedTouchable
            disabled={loading}
            onPress={() => {
              if (onCancel) {
                onCancel()
              }
              closeModal()
            }}
            style={{ flex: 1 }}
            typeBtn='warning'
          >
            <ThemedText>{translate('common.close')}</ThemedText>
          </ThemedTouchable>
        )}

        <ThemedTouchable onPress={handleSubmit} loading={loading} style={{ flex: 1 }}>
          <ThemedText>OK</ThemedText>
        </ThemedTouchable>
      </View>
    </View>
  )
}

export default ModalWarning
