import React, { Component } from 'react';
import './popup.css';

class Popup extends Component {

    constructor(props) {

        super(props);
        this.state = {
            id: '',
            name: '',
            quantity: '',
            price: '',
            expired: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        console.log('componentWillMount --popup');
        let item = this.props.itemSelected;
        if (item !== null) {
            this.setState({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                expired: item.expired
            })
        }
    }
    componentDidMount() {
        console.log('componentDidMount --popup');

    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps --popup');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate --popup');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate --popup');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate --popup');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount --popup');
    }

    //-----------------------------------------------------

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {

        const newObj = {
            id: this.state.id,
            name: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price,
            expired: this.state.expired
        }
        this.props.handleSubmit(newObj)
    }

    handleInput = (e) => {
    }

    render() {
        console.log("Render -- Popup");
        // let item = this.props.itemSelected;
        // let iname = this.state.name;
        // let iquantity = this.state.quantity;
        // let iprice = this.state.price;
        // let iexpired = this.state.price;
        // if(item !== null){
        //     iname = item.name;
        //     iquantity = item.quantity;
        //     iprice = item.price;
        //     iexpired = item.expired;
        // }
        return (
            <div className="wrapper-popup">
                <div className="popup-inner tittle">
                    <div>
                        <label >Name</label><br />
                        <input value={this.state.name} onChange={this.handleChange} type="text" placeholder="enter name" name="name" />
                    </div>
                    <div>
                        <label >Quantity</label><br />
                        <input value={this.state.quantity} onChange={this.handleChange} type="text" placeholder="enter quantity" name="quantity" />
                    </div>
                    <div>
                        <label >Price</label><br />
                        <input value={this.state.price} onChange={this.handleChange} type="text" placeholder="enter quantity" name="price" />
                    </div>
                    <div>
                        <label >Expired</label><br />
                        <input value={this.state.expired} onChange={this.handleChange} type="text" placeholder="enter quantity" name="expired" />
                    </div>
                    <div>
                        <button className="btn" onClick={this.handleSubmit}>Submit</button>
                        <button className="btn" onClick={this.props.closePopup}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;