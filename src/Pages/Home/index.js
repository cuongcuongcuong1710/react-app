import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions';
import { Button, Segment, Header, Divider } from 'semantic-ui-react';
class Home extends Component {


    render() {

        console.log(`state khi render -----`, this.props.products);
        //ythis.props.getListProducts();
        return (

            <Segment vertical>
                <Segment style={{ padding: '8em 0em' }} vertical textAlign='center'>
                    <Header as='h3' style={{ fontSize: '3em' }}>
                        About
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Blueport I/O is a SaaS provider based in Sydney, Australia, specializes in marketing
                        automation cloud computing technologies built on Salesforce Heroku for Salesforce Marketing Cloud.
                    </p>


                    <Header as='h3' style={{ fontSize: '3em' }}>
                        Mission
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Blueport I/O is guided by a common mission to make marketing automation frictionless
                        for Marketers and help solving one challenging use case at a time,
                        so that Marketers can focus on what really matters.
                        <br />
                        <br />
                        Blueport I/O is that catalyst that connects with Salesforce Marketing Cloud©
                        to unleash the platform power by turning the raw API resources into the 'rocket fuel'
                        to supercharge your marketing automation stack, boost productivity and maximise your platform investment.
                    </p>

                    <Header as='h3' style={{ fontSize: '3em' }}>
                        Experience
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        The team at Blueport I/O is highly experienced and Salesforce certified with over a hundred successful
                        Salesforce Marketing Cloud© implementations, led the Technology Practice at SFMC and worked directly on the client side.
                        We deeply understand your automation challenges and needs to customise and provide you with the right software automation solution.
                        <br />
                        <br />
                        Every client is different and there is no one-size-fits-all solution. As such,
                        we have partnered with Salesforce Heroku to unleash an array of powerful, secure,
                        modular and innovative products (the SFMC© Lego© bricks) to help solve those challenging use cases
                        and optimize your marketing campaigns across all channels with minimal efforts and dependency on your internal IT resources.
                    </p>

                    <Header as='h3' style={{ fontSize: '3em' }}>
                        Integrity
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        At Blueport I/O, we pride ourselves on our integrity, transparency and professional approach.
                        We are a group of highly motivated marketing technologist and consultants who think outside the box,
                        easy to do business with and can help you achieve your goals.

                        Contact us to discuss how we can help you to solve your marketing automation challenges with our products.
                    </p>
                    <Button as='a' size='huge' primary style={{ padding: '1em 5em' }}>
                        Connect
                    </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <p>Case </p>
                    </Divider>

                </Segment>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducers // cái state này lấy trong reducer -> tạo reducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => {
            dispatch(actions.getProductsAction());
        },
        addProduct: (newProduct) => {
            dispatch(actions.addProductAction(newProduct));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);