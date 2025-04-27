import Home from "./pages/Home";
import About from "./pages/About";
import FindStudio from "./pages/FindStudio";
import MyBooking from "./pages/MyBooking";
import NewStudio from "./pages/NewStudio";
import ErrorPage from "./pages/ErrorPage";
import App from "./App"

const routes = [
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
            
        },
           {
              path: "/home",
              element: <Home />,
              
          }, 
          {
              path: "/about",
              element: <About />
          },
          {
              path: "/findstudio",
              element: <FindStudio />
          },
          {
            path: "/mybooking",
            element: <MyBooking />
        },
        {
            path: "/newstudio",
            element: <NewStudio />
        }

      ]
  }
];

export default routes;