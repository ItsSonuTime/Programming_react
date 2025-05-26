
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
  domain="dev-xsw8fh2xkmgb86p3.us.auth0.com"
  clientId="y3RKEVK9oDW8FfE3bsDhRycmmwHZXI9q"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>,


)

