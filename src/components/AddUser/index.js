import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as ModalActions } from '../../store/ducks/modal';

import {
  Form, ContainerButtons, ButtonAdd, ButtonCancel,
} from './styles';
import './modal.css';

Modal.setAppElement(document.getElementById('root'));

class AddUser extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
      cordinates: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      ]),
    }).isRequired,
  };

  state = {
    userInput: '',
  };

  handeInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleAddUser = (e) => {
    e.preventDefault();

    const { loading } = this.props;

    if (loading) return;

    const { userInput } = this.state;

    if (!userInput) return;
    const {
      addUserRequest,
      modal: { cordinates },
    } = this.props;

    addUserRequest(userInput, cordinates);

    this.setState({ userInput: '' });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;

    hideModal();

    this.setState({ userInput: '' });
  };

  render() {
    const { modal, loading } = this.props;
    const { userInput } = this.state;

    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={this.handleHideModal}
        contentLabel="Add User"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar novo usuário</h2>
        <Form onSubmit={this.handleAddUser} className="form">
          <input
            placeholder="Usuário do GitHub"
            value={userInput}
            onChange={this.handeInputChange}
          />
          <ContainerButtons>
            <ButtonAdd type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Adicionar'}
            </ButtonAdd>
            <ButtonCancel type="button" onClick={this.handleHideModal}>
              Cancelar
            </ButtonCancel>
          </ContainerButtons>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
