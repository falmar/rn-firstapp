import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({artist, title}) => {
  const {headerImageViewStyle, headerTextContainerStyle} = styles

  return (
    <Card>
      <CardSection>
        <View style={headerImageViewStyle}>
          <Text>{artist}</Text>
        </View>
        <View style={headerTextContainerStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerImageViewStyle: {
    height: 60

  },
  headerTextContainerStyle: {
    marginLeft: 10,

    flexDirection: 'column',
    justifyContent: 'space-around'
  }
})

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AlbumDetail
