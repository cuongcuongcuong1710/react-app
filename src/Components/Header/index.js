import React from 'react';
import './header.css';
//import Logo from '../../Resources/imgs/logo.png';
import { Container, Responsive, Visibility, Segment, Image, ListItem, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import MenuLayout from '../Menu';
//-------------
import PropTypes from 'prop-types';
import banner from '../../Resources/imgs/banner.jpeg';
//import { url } from 'inspector';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{
                //fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                // marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                //fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                //marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class Header extends React.Component {

    render() {
        const imgBanner = '../../Resources/imgs/banner.jpeg';
        return (

            //<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            // <Segment>
            // {/* <Visibility
            //     once={false}
            //     onBottomPassed={this.showFixedMenu}
            //     onBottomPassedReverse={this.hideFixedMenu}
            // > */}


            // <Segment
            //     inverted
            //     textAlign='center'
            //     style={{ minHeight: 300, padding: '1em 0em' }}
            //     vertical
            //     className='background'
            // >
            //     <MenuLayout />
            // </Segment>
            // <Container className='index-header' fluid src={bannerImage} >
            <Container className='index-header' fluid >

                <Responsive className='wrapper-content' getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} >
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment

                            textAlign='center'
                            vertical
                            style={{
                                minHeight: 950,
                                padding: '1em 0em',
                            }}
                        >
                            {/* <Image className='wrapper-banner' src={banner} style={{ 'zIndex': 1 }}  ></Image> */}
                            <MenuLayout />
                        </Segment>
                    </Visibility>
                </Responsive>

            </Container>





            //     {/* </Visibility> */}
            //     {/* {children} */}
            // {/* </Segment> */}

            // <div className="wrapper-header">
            //     <div className="header-left">
            //         {/* <img src={Logo} /> */}
            //     </div>
            //     <div className="header-right">
            //         <Avatar />
            //     </div>
            // </div>

        )
    }
}



export default Header;