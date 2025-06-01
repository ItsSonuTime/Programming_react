import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
  domain="dev-336hyuv8pnbkvida.us.auth0.com"
  clientId="7oFJv3prjkXosTue6BFRtbLilScaqfQm"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <HashRouter>
      <App />
    </HashRouter>
    </Auth0Provider>,


)

