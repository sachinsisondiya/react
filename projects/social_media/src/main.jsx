import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Createpost from "./components/Createpost.jsx";
import  PostList  from "./components/PostList.jsx"
import { postLoader } from "./components/PostList.jsx";

const router = createBrowserRouter([
  { 
    path: "/", element: <App/>, 
    children:
    [
      {path: "/", element: <PostList /> , loader: postLoader
        },
      { path: "/create-post", element: <Createpost /> }
    ],
  },
  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
