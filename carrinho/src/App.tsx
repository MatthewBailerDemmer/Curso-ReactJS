import { createBrowserRouter } from 'react-router-dom'
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { ProductDetail } from './pages/Detail';

import { Layout } from './componentes/layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      }
    ]
  }
])

export { router }