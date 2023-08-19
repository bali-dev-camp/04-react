import { Outlet, createBrowserRouter } from 'react-router-dom';

import LayoutMain from './layouts/main';
import PageHome from './pages/home';

import PageShoeList, {
  loader as shoesLoader,
  action as shoeDeleteAction,
} from './pages/shoe/list';

import PageShoeDetail, {
  loader as shoeDetailLoader,
} from './pages/shoe/detail';

import PageShoeCreate, {
  action as shoeCreateAction,
} from './pages/shoe/create';

import PageShoeEdit, {
  loader as shoeEditLoader,
  action as shoeEditAction,
} from './pages/shoe/edit';

import PageCategoryList from './pages/category/list';
import PageCategoryCreate from './pages/category/create';
import PageCategoryEdit from './pages/category/edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: '/shoe',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageShoeList />,
            loader: shoesLoader,
          },
          {
            path: '/shoe/:id/detail',
            element: <PageShoeDetail />,
            loader: shoeDetailLoader,
          },

          {
            path: '/shoe/create',
            element: <PageShoeCreate />,
            action: shoeCreateAction,
          },
          {
            path: '/shoe/:id/edit',
            element: <PageShoeEdit />,
            loader: shoeEditLoader,
            action: shoeEditAction,
          },
          {
            path: '/shoe/:id/delete',
            action: shoeDeleteAction,
          },
        ],
      },
      {
        path: '/category',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageCategoryList />,
          },
          {
            path: '/category/create',
            element: <PageCategoryCreate />,
          },
          {
            path: '/category/:id/edit',
            element: <PageCategoryEdit />,
          },
        ],
      },
    ],
  },
]);

export default router;
