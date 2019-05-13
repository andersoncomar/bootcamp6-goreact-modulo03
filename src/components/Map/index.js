import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { Avatar } from './styles';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.321264,
      longitude: -51.2358029,
      zoom: 13,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;

    await showModal({ latitude, longitude });
  };

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { users } = this.props;

    return (
      <MapGL
        {...viewportState}
        onClick={this.handleClick}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => (
          <Marker
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            key={user.id}
          >
            <Avatar alt={`${user.name} Avatar`} src={user.avatar} />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
