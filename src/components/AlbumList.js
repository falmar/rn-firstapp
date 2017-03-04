import React, {Component} from 'react'
import {View} from 'react-native'
import axios from 'axios'

import {API_URL} from '../util'

import AlbumDetail from './AlbumDetail'

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
      return <AlbumDetail key={album.title} {...album} />
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
