import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
export default class Login extends React.Component{
constructor() {
  super()
  this.state = {
  username: '',
  password: '',
  isLogined: false
 }
}
handleInputChange = (event) => {
this.setState({
    [event.target.name]: event.target.value
  })
}
submitClick=() =>
{
if((this.state.username=="bhanupratap") &&   (this.state.password=="bhanup123pass"))
{
   this.setState({isLogined:true});
}
}
render() {
return (
<div>
 <input type="text" name="username" hint="username" onChange=    {this.handleInputChange} />
<input type="password" name="password" hint="password" onChange={this.handleInputChange} />
<button  name="submit" onClick={this.submitClick}> Submit</button></div>);
}
}





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Amplify } from 'aws-amplify';
// import config from './config';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );


// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: config.cognito.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_CLIENT_ID
//   },
//   Storage: {
//     region: config.s3.REGION,
//     bucket: config.s3.BUCKET,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID
//   },
//   API: {
//     endpoints: [
//       {
//         name: "notes",
//         endpoint: config.apiGateway.URL,
//         region: config.apiGateway.REGION
//       },
//     ]
//   }
// });


// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();