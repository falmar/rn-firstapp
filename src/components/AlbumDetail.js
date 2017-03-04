import React, {PropTypes} from 'react'
import {Text} from 'react-native'

import Card from './Card'

const AlbumDetail = ({artist, title}) => {
  return (
    <Card>
      <Text>{artist} - {title}</Text>
    </Card>
  )
}

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AlbumDetail
