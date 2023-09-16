import { Outlet, createBrowserRouter } from "react-router-dom";

import LayoutMain from "./layouts/main";
import PageHome from "./pages/home";

import PageShoeList, {
  loader as loaderShoeList,
  action as actionShoeList,
} from "./pages/shoe/list";

import PageShoeDetail, {
  loader as loaderShoeDetail,
} from "./pages/shoe/detail";
import PageShoeCreate, {
  loader as loaderShoeCreate,
  action as actionShoeCreate,
} from "./pages/shoe/create";
import PageShoeEdit, {
  loader as loaderShoeEdit,
  action as actionShoeEdit,
} from "./pages/shoe/edit";

import PageCategoryList, {
  action as actionCategoryList,
  loader as loaderCategorList,
} from "./pages/category/list";

import PageCategoryCreate, {
  action as actionCategoryCreate,
} from "./pages/category/create";

import PageCategoryEdit, {
  loader as loaderCategoryEdit,
  action as actionCategoryEdit,
} from "./pages/category/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: "/shoe",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageShoeList />,
            loader: loaderShoeList,
            action: actionShoeList,
          },
          {
            path: ":id/detail",
            element: <PageShoeDetail />,
            loader: loaderShoeDetail,
          },
          {
            path: "create",
            element: <PageShoeCreate />,
            loader: loaderShoeCreate,
            action: actionShoeCreate,
          },
          {
            path: ":id/edit",
            element: <PageShoeEdit />,
            loader: loaderShoeEdit,
            action: actionShoeEdit,
          },
        ],
      },
      {
        path: "/category",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageCategoryList />,
            action: actionCategoryList,
            loader: loaderCategorList,
          },
          {
            path: "create",
            element: <PageCategoryCreate />,
            action: actionCategoryCreate,
          },
          {
            path: ":id/edit",
            element: <PageCategoryEdit />,
            loader: loaderCategoryEdit,
            action: actionCategoryEdit,
          },
        ],
      },
    ],
  },
]);

export default router;
