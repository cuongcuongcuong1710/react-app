import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './manager.css';
import { accessToken } from '../../Common/constants';
import { Button, Input, Table, Pagination } from 'semantic-ui-react';

import ItemList from '../../Components/ItemList';
import SearchBar from '../../Components/SearchBar';


import { connect } from 'react-redux';
import * as actions from '../../Actions';

import ModalAddProduct from '../../Components/ModalAddProduct';

const token = localStorage.getItem('accessToken');
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'authorization': token }
});

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showPopup: false,
            // strSearch: '',
            itemSelected: null
        }

        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        // this.handleSearch = this.handleSearch.bind(this)
        // this.handleClear = this.handleClear.bind(this)
    }

    componentDidMount = () => {
        console.log('componentDidMount');
        this.props.getAllProducts();
    }

    //-------------------------------------------------------------------------

    handleAdd() {
        this.props.toggleModal();
        this.props.onClearProduct();

    }

    handleEdit(item) {
        this.setState({
            itemSelected: item
        })
        this.props.toggleModal();
    }




    handleSubmit = async (item) => {
        console.log(item);
        if (item.id !== '') { //edit
            console.log('edit:', item)
            await instance.put(`/products/${item.id}`, {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                expired: item.expired
            })
                .then(() => {
                    return instance.get('/products/all')
                })
                .then(products => {
                    const { data } = products;
                    this.setState({
                        data,
                        showPopup: !this.state.showPopup
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        } else { //add
            console.log('add item');
            await instance.post('/products/create', {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                expired: item.expired
            })
                .then(() => {
                    return instance.get('/products/all')
                })
                .then(products => {
                    const { data } = products;
                    this.setState({
                        data,
                        showPopup: !this.state.showPopup
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    onCloseModal() {
        this.props.onClose();
    }



    render() {

        const items = this.props.products;
        const strSearch = this.props.strSearch.toLowerCase();
        console.log('strSearch', strSearch);
        let list = items.filter(products => products.name.toLowerCase().indexOf(strSearch) !== -1);
        let dataTable = list.map((product, i) => (
            // <ItemList key={i} index={i} {...product} productPageComponent={this} />
            <ItemList key={i} index={i} productPageComponent={this} product={product} />
            // <ItemList key={i} />
        ))


        // const token = localStorage.getItem('accessToken');
        // if (location.pathname === '/products') {
        //     if (token === null) {
        //         return (<Redirect to={'/login'} />);
        //     } else {
        //         return (<Redirect to={'/products'} />);
        //     }
        // }

        // const RestrictedRoute = ({ component: Component, authUser, ...rest }) =>
        //     <Route
        //         {...rest}
        //         render={props =>
        //             authUser
        //                 ? <Component {...props} />
        //                 : <Redirect
        //                     to={{
        //                         pathname: '/signin',
        //                         state: { from: props.location }
        //                     }}
        //                 />}
        //     />;


        return (
            <Fragment>
                <SearchBar />
                <Button primary onClick={this.handleAdd}>Add New Product</Button>
                <ModalAddProduct />

                {/* {this.props.displayModal ?
                        <ModalAddProduct onClose={this.togglePopup} componentProduct={this} itemSelected={this.state.itemSelected} />
                        : null
                    } */}

                {/* <div> */}

                {/* <input value={this.state.strSearch} onChange={this.handleChange} type="search" id="search" placeholder="Search..." name="search" /> */}
                {/* <Input value={this.state.strSearch} onChange={this.handleChange} placeholder="Search..."/>
                    <Button onClick={() => this.handleSearch(this.state.strSearch)}>Search</Button>
                    <Button onClick={() => this.handleSearch('')}>Clear</Button> */}

                {/* <Input focus action='search' placeholder='Search...' {...inputProp} /> */}
                {/* </div> */}

                <Table compact color='blue'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>STT</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Expired</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {dataTable}
                    </Table.Body>
                </Table>
                <Pagination
                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={10}
                />
            </Fragment >

        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducers,
        displayModal: state.toggleModal,
        strSearch: state.searchReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => {
            dispatch(actions.getProductsAction());
        },
        addProduct: () => {
            dispatch(actions.addProductAction());
        },
        toggleModal: () => {
            dispatch(actions.toggleModal());
        },
        onClose: () => {
            dispatch(actions.closeModal());
        },
        onClearProduct: () => {
            dispatch(actions.editProductAction());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);