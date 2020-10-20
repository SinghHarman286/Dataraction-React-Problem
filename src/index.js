import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Auth0Provider} from '@auth0/auth0-react';

const domain = "dev-andyexbh.us.auth0.com"
const clientId = "SDyOX7Pee0ucOdn4eOoyW09PfJVD6iOZ"
console.log(domain)
console.log(clientId)

ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);