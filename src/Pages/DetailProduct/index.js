import React, { Component } from 'react';
import { removeProductSuccessAction } from '../../Actions';
import * as actions from '../../Actions';
import { connect } from 'react-redux';
import axios from 'axios';
import { instance } from '../../Common/constants';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.loadProduct(this.props.match.params.productID);
    }

    render() {

        const product = this.props.product ? (
            <div>
                <p> id: {this.props.product.id}</p>
                <p> name: {this.props.product.name}</p>
                <p> quantity: {this.props.product.quantity}</p>
                <p> price: {this.props.product.price}</p>
            </div>

        ) : (
                <p>Loangding .....</p>
            )
        return (
            <div>
                <p>Sản phẩm:</p>
                {product}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.detailProductReducer
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadProduct: (productId) => {
            dispatch(actions.getProductAction(productId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);