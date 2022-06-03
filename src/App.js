import React, { useState, Component } from 'react';
import './custom.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Posneglist from './PosNegList/posnegList';
// import Ofaclist from './OfacList/OfacList';
// import Routes from './routes';
// import history from './utils/History';
// import { loginStatus } from './utils/Auth.js';
// import DashboardMain from './dashboardMain';
// import Login from './Login/Login';
import Main from './Components/Main';
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   componentDidMount = () => {
//     let status = loginStatus();
//     this.setState({ isLoggedIn: status });
//   };

//   redirectAfterLogin = () => {
//     if (isLoggedIn) {
//       window.location = '/brand/posneg-list';
//       history.push({
//         pathname: `/brand/posneg-list`,
//       });
//     }
//     //  else {
//     //   window.location = '/login';
//     //   history.push({
//     //     pathname: `/login`,
//     //   });
//     // }
//   };
//   checkPath = () => {
//     if (localStorage.getItem('token') == true) {
//       window.location = '/brand/posneg-list';
//       history.push({
//         pathname: `/brand/posneg-list`,
//       });
//     }
//   };
//   render() {
//     const { isLoggedIn } = this.state;
//     return (
//       // <BrowserRouter>
//       //   <Switch>
//       //     <Route
//       //       path="/login"
//       //       exact
//       //       // render ={() => <Login/>}
//       //       // component={Login}
//       //       render={(props) => (
//       //         // isLoggedIn ? this.redirectAfterLogin() :
//       //         <Login />
//       //       )}
//       //     />

//       //     <Route
//       //       exact
//       //       strict
//       //       path="/brand/*"
//       //       render={() => <DashboardMain />}
//       //     />

//       //     <Redirect from="*" to="/login" />
//       //   </Switch>
//       // </BrowserRouter>
//       <Posneglist />
//       // <Routes
//       //   isLoggedIn={isLoggedIn}
//       //   redirectAfterLogin={this.redirectAfterLogin}
//       //   checkPath={this.checkPath}
//       // />
//     );
//   }
// }
// export default App;
