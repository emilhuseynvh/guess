import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './router/route.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HelmetProvider>
      <RouterProvider router={route} />
    </HelmetProvider>
  </Provider>
)
