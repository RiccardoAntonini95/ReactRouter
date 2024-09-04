import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, //genera la pagina di errore come fallback
    children: [ //i children routes sono contenuti dal wrapper RootLayout
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/products/:productId", //route dinamica
        element: <ProductDetailPage />
      }
    ]
  },

])
function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;
