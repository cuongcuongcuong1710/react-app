import React, { Component } from 'react';
import { Button, Modal, Header, Input, Segment, Transition } from 'semantic-ui-react';
import './ModalAddProduct.css';

import { connect } from 'react-redux';
import * as actions from '../../Actions';

class ModalAddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            quantity: '',
            price: '',
            expired: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.itemEditing.id !== prevState.id) {
            return {...prevState,
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                quantity: nextProps.itemEditing.quantity,
                price: nextProps.itemEditing.price,
                expired: nextProps.itemEditing.expired
            }
        }
        return null
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.itemEditing.id !== '') {
            console.log(' this.state khi thực hiện Edit: ', this.state);
            this.props.onEditProduct(this.state);
            this.onClear();
            this.onCloseModal();
        } else {
            this.props.onAddProduct(this.state);
            this.onClear();
            this.onCloseModal();
        }
        
    }

    onClear() {
        this.setState({
            id: '',
            name: '',
            quantity: '',
            price: '',
            expired: ''
        })
        
    }

    onCloseModal() {
        this.onClear();
        //this.props.onUnSelectProduct();
        this.props.onClearProduct({
            id: '',
            name: '',
            quantity: '',
            price: '',
            expired: ''
        });
        this.props.onClose();

    }

    render() {
        console.log('this.state =====', this.state);
        console.log('---this.props.itemEditing:', this.props.itemEditing.product);
        if (this.props.displayModal === false) return '';
        console.log('render------- modalAddProduct');

        return (

            <div>
                <Transition animation='default' duration='500'  >
                    <Modal dimmer='blurring' open={true} style={{ width: 'auto' }} >
                        <Segment>
                            <Modal.Header as='h2' style={{ textAlign: 'center' }} >
                                {!this.state.id ? 'Create New Product' : 'Edit Product'}
                            </Modal.Header>
                            <Modal.Content >
                                <Header >Name</Header>
                                <Input focus onChange={this.handleChange} placeholder='Name...' value={this.state.name} name='name' style={{ margin: '0em 0em' }} />
                                <Header>Quantity</Header>
                                <Input focus onChange={this.handleChange} placeholder='Quantity...' value={this.state.quantity} name='quantity' style={{ margin: '0em 0em' }} />
                                <Header>Price</Header>
                                <Input focus onChange={this.handleChange} placeholder='Price...' value={this.state.price} name='price' style={{ margin: '0em 0em' }} />
                                <Header>Expired</Header>
                                <Input focus onChange={this.handleChange} placeholder='Expired...' value={this.state.expired} name='expired' style={{ margin: '0em 0em' }} />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button onClick={this.onCloseModal} negative>
                                    Close
                            </Button>
                                <Button
                                    onClick={this.handleSubmit}
                                    positive
                                    labelPosition='right'
                                    icon='checkmark'
                                    content={!this.state.id ? 'Create' : 'Update'}
                                />
                            </Modal.Actions>
                        </Segment>

                    </Modal>
                </Transition>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        displayModal: state.toggleModal,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (newProduct) => {
            dispatch(actions.addProductAction(newProduct));
        },
        onClose: () => {
            dispatch(actions.closeModal());
        },
        onEditProduct: (updateProdutct) => {
            dispatch(actions.editProductAction(updateProdutct));
        },
        onClearProduct: (nullProduct) => {
            dispatch(actions.selectedItemAction(nullProduct));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddProduct);