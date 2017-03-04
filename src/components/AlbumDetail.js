import React, {PropTypes} from 'react'
import {View, Text, StyleSheet, Image, Linking} from 'react-native'

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({artist, title, thumbnail_image, image, url}) => {
  const {textContainerStyle, titleStyle} = headerStyles
  const {thumbnailContainerStyle, thumbnailStyle} = headerStyles

  const {imageStyle} = bodyStyles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: thumbnail_image}} />
        </View>

        <View style={textContainerStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button text='Buy Now' onPress={() => {
          Linking.openURL(url)
        }} />
      </CardSection>
    </Card>
  )
}

const headerStyles = StyleSheet.create({
  thumbnailContainerStyle: {
    marginRight: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const bodyStyles = StyleSheet.create({
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
})

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail_image: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string
}

export default AlbumDetail
