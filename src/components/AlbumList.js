import React, {Component} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

import {API_URL} from '../util'

class AlbumList extends Component {
  constructor (props) {
    super(props)

    this.state = {albums: [], fetching: false}
  }

  componentDidUpdate () {

  }

  componentWillMount () {
    this.setState({fetching: true})

    axios.get(`${API_URL}/music_albums`)
    .then(response => {
      this.setState({
        albums: response.data,
        fetching: false
      })
    })
    .catch(err => {
      this.setState({fetching: false})

      console.error(err)
    })
  }

  // events

  // rendering
  buildAlbums () {
    return this.state.albums.map(album => {
      return <Text key={album.title}>{album.title}</Text>
    })
  }

  render () {
    return (
      <View>
        {this.buildAlbums()}
      </View>
    )
  }
}

export default AlbumList
