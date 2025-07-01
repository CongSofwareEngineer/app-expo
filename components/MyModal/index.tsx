import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Modal, SafeAreaView, ScrollView, View } from 'react-native'

import useModal from '@/hooks/useModal'

const MyModal = () => {
  const { modal, closeModal } = useModal()

  return modal?.open ? (
    <Modal
      {...modal.config}
      style={{
        backgroundColor: '#000000b3',
      }}
      animationType='fade'
      transparent={true}
      visible={modal?.open}
      onRequestClose={() => {
        closeModal()
        modal?.onClose?.()
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
        className='bg-black/80'
      >
        <SafeAreaView
          className='flex p-5'
          style={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <View className='p-5'>
            <View className='bg-gray-800 rounded-lg  p-3'>
              <View className='flex flex-row justify-end absolute text-right w-full right-[5px] top-[5px]'>
                <Ionicons
                  name='close'
                  size={20}
                  color='white'
                  onPress={() => {
                    closeModal()
                    modal?.onClose?.()
                  }}
                />
              </View>
              {modal.content}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  ) : (
    <></>
  )
}

export default MyModal
