import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/users';

import {
  Container, ContainerUser, Avatar, ButtonRemove, GoContainer,
} from './styles';

const SuspendedBar = ({ users, removeUser }) => (
  <Container>
    {!users.data.length && <p>Nenhum usuário</p>}

    <ul>
      {users.data.map(user => (
        <li key={user.id}>
          <div>
            <Avatar src={user.avatar} alt={user.name} />
            <ContainerUser>
              <h2>{user.name}</h2>
              <h3>{user.login}</h3>
            </ContainerUser>
            <ButtonRemove type="button" onClick={() => removeUser(user)}>
              <i className="fa fa-fw fa-times-circle remove" />
            </ButtonRemove>
            <GoContainer
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </GoContainer>
          </div>
        </li>
      ))}
    </ul>
  </Container>
);

SuspendedBar.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }),
    ),
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuspendedBar);
