import React, { Component, Fragment } from 'react';
import { Modal, Header, Icon, Button, Table } from 'semantic-ui-react';

import * as actions from '../../Actions';
import { connect } from 'react-redux';
import history from '../../history';
import { Link } from 'react-router-dom';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    show = () => {
        this.setState({
            open: !this.state.open
        })
    }

    onClose = () => {
        this.setState({
            open: !this.state.open
        })
    }

    onEdit = (item) => {
        this.props.onEditingProduct(item);
        this.props.onOpenEditModal();


        //this.props.onEditProduct();
    }

    onSubmitRemove = () => {
        this.props.removeProduct(this.props.product.id);
        this.setState({
            open: !this.state.open
        })
    }

    // onDetail = (id) => {
    //     history.push(`/products/${id}`);
    //     this.props.getProduct(id);
    // }

    // onDetail = ({ match }) => {
    //     history.push(`/products/${id}`);
    //     this.props.getProduct(id);
    // }

    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <Table.Row >
                    <Table.Cell>{this.props.index + 1}</Table.Cell>
                    <Table.Cell>{this.props.product.name}</Table.Cell>
                    <Table.Cell>{this.props.product.quantity}</Table.Cell>
                    <Table.Cell>{this.props.product.price}</Table.Cell>
                    <Table.Cell>{this.props.product.expired}</Table.Cell>
                    <Table.Cell>
                        <Button positive onClick={() => this.onEdit(this.props.product)} > <Icon name='edit' /> Edit</Button>
                        {/* const { productPageComponent } = this.props */}
                        <Button negative onClick={this.show} > <Icon name='remove' /> Remove</Button>
                        {/* <Button as={Link} to={`/products/${this.props.product.id}`} onClick={() => this.onDetail(this.props.product.id)}><Icon name='info' />Detail</Button> */}
                        <Button as={Link} to={`/products/${this.props.product.id}`} ><Icon name='info' />Detail</Button>
                        {/* <Button as={Link} to={'/signup'} > signup</Button> */}
                        {/* <Button onClick={() => this.onDetail()} ></Button> */}
                    </Table.Cell>
                </Table.Row>

                <Modal dimmer='blurring' open={open} onClose={this.onClose} closeIcon>
                    <Header icon='archive' content='Notice' />
                    <Modal.Content style={{ margin: 0 }}>
                        <Header>
                            Are you sure you want to delete your account
                    </Header>
                    </Modal.Content>
                    <Modal.Actions style={{ margin: 0 }}>
                        <Button color='red' onClick={this.onSubmitRemove} >
                            <Icon name='checkmark' /> Yes
                    </Button>
                    </Modal.Actions>
                </Modal>
            </Fragment >
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
        onEditProduct: (editProduct) => {
            dispatch(actions.editProductAction(editProduct));
        },
        onClose: () => {
            dispatch(actions.closeModal());
        },
        onOpenEditModal: () => {
            dispatch(actions.openEditModal());
        },
        removeProduct: (id) => {
            dispatch(actions.removeProductAction(id));
        },
        onEditingProduct: (product) => {
            dispatch(actions.selectedItemAction(product));
        },
        getProduct: (id) => {
            dispatch(actions.getProductAction(id));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ItemList);