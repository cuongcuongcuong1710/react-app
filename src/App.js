import { Component }from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
    render() {
        return routes;
            // <Fragment>
            //     <Header />
            //     <div className="wrapper-body">
            //         <Manager />
            //     </div>
            //     <Footer />
            // </Fragment>

            // <Router>
            //     <Header />
            //     <ul>
            //         <li><Link to="/">Home</Link></li>
            //         <li><Link to="/products">Products manager</Link></li>
            //     </ul>
            //     <div className="wrapper-body">
            //         <Switch>
            //             <Route exact path="/" component={Home} />
            //             <Route path="/products" component={Manager} />
            //         </Switch>

            //     </div>
            //     <Footer />
            // </Router>

    }
}

export default App;


//class component or statefull component
// class App extends Component {
//   render() {
//     const name = 'nguyen thanh cong'
//     const Title = <h1 className="title">hello {name}</h1>;
//     return (
//       <Fragment>
//         {Title}
//         {Title}
//      </Fragment>
//     );
//   }
// }

//functional component or stateless component
// function App() {
//     return (
//         <Fragment>
//             <Header />
//             <div className="wrapper-body">
//                 <Manager />
//             </div>
//             <Footer />
//         </Fragment>
//     )
// }


