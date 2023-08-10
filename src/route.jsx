import { createBrowserRouter } from "react-router-dom";

import LayoutMain from "./layouts/main";
import Home from "./pages/home";
import ShoeList from "./pages/shoe/list";
import ShoeDetail from "./pages/shoe/detail";
import ShoeCreate from "./pages/shoe/create";
import ShoeEdit from "./pages/shoe/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shoe", element: <ShoeList /> },
      { path: "/shoe/:id/detail", element: <ShoeDetail /> },
      { path: "/shoe/create", element: <ShoeCreate /> },
      { path: "/shoe/:id/edit", element: <ShoeEdit /> },
    ],
  },
]);

export default router;
