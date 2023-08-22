import MainNavigation from "./components/MainNavigation";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ErrorPage from "./pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

/*--Alternative way of using Router in react---- */

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: <ProductsPage /> },
// ]);

function App() {
  return (
    <main>
      {/* /*--For above Alternative way we have to render in below way---- */}
      {/* <RouterProvider router={router} /> */}

      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
