import React, {PropTypes} from 'react'
import {View, Text} from 'react-native'

const AlbumDetail = ({artist, title}) => {
  return (
    <View>
      <Text>{artist} - {title}</Text>
    </View>
  )
}

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AlbumDetail
