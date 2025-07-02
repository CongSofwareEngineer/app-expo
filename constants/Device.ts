import { Dimensions, PixelRatio } from 'react-native'

const guidelineBaseWidth = 375

export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height

export const width = (num: number) => PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100))
export const height = (num: number) => PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100))
export const scale = (size: number) => PixelRatio.roundToNearestPixel((MYWIDTH / guidelineBaseWidth) * size)
// export const verticalScale = (size) => PixelRatio.roundToNearestPixel(MYHEIGHT / guidelineBaseHeight * size)
// export const heightScale = num => PixelRatio.roundToNearestPixel(MYHEIGHT * (num * MYSCALE / 100))
