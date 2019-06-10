import React from 'react';
import { Switch, BrowserRouter, Router, Redirect, Route } from 'react-router-dom';
import { NormalRoute as Routee, PrivateRoute } from './Components/Route';
import { Login as LoginLayout, Home as HomeLayout } from './Components/Layout';
import history from './history';

import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Components/Footer';
import Notfound from './Pages/Notfound';
import DetailProduct from './Pages/DetailProduct';

const token = localStorage.getItem('accessToken');

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest}
//         render={(props) => (
//             token !== null
//                 ? <Component {...props} />
//                 : <Redirect to='/login' />
//         )} />
// )

// function PrivateRoute({component: Component, ...rest}) {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           token !== null ? (
//             <Component {...props} />
//           ) : (<Redirect
//               to={{
//                 pathname: '/login',
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       >
//       </Route>
//     );
//   }

const Child = ({ match }) => {
    return (
        <div>
            <h3>ID: {match} </h3>
        </div>
    )

}


const router = (
    <Router history={history}>
        <Switch>
            <Routee path="/" exact component={Home} layout={HomeLayout} />
            <Routee path="/login" exact component={Login} layout={LoginLayout} />
            <Routee path="/products" exact component={Products} layout={HomeLayout} />
            <Routee path="/signup" exact component={Signup} layout={LoginLayout} />
            {/* <Route path="/private" exact component={Footer} layout={LoginLayout} /> */}
            {/* <PrivateRoute path="/private" exact component={Footer} layout={LoginLayout} /> */}
            <PrivateRoute path="/private" component={Footer} />
            {/* <Route path='/:id' component={Child} /> */}
            {/* <Routee path='*' component={Notfound} /> */}
            {/* <Route 
                path='/products/:productID' 
                render={({match}) => {

                }}
             /> */}
             {/* <Route path='/products/:productID' render={() => <DetailProduct {...this.props} /> } /> */}
             <Route path='/products/:productID' component={DetailProduct} />
        </Switch>
    </Router>
    
);

export default router;
