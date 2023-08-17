import { createBrowserRouter } from 'react-router-dom';

import LayoutMain from './layouts/main';
import Home from './pages/home';

import ShoeList, {
  loader as shoesLoader,
  action as shoeDeleteAction,
} from './pages/shoe/list';
import ShoeDetail, { loader as shoesDetailLoader } from './pages/shoe/detail';
import ShoeCreate, { action as shoeCreateAction } from './pages/shoe/create';
import ShoeEdit, {
  loader as shoeEditLoader,
  action as shoeEditAction,
} from './pages/shoe/edit';

import CategoryList from './pages/category/list';
import CategoryCreate from './pages/category/create';
import CategoryEdit from './pages/category/edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shoe',
        element: <ShoeList />,
        loader: shoesLoader,
      },
      {
        path: '/shoe/:id/detail',
        element: <ShoeDetail />,
        loader: shoesDetailLoader,
      },
      {
        path: '/shoe/create',
        element: <ShoeCreate />,
        action: shoeCreateAction,
      },
      {
        path: '/shoe/:id/edit',
        element: <ShoeEdit />,
        loader: shoeEditLoader,
        action: shoeEditAction,
      },
      {
        path: '/shoe/:id/delete',
        action: shoeDeleteAction,
      },
      { path: '/category', element: <CategoryList /> },
      { path: '/category/create', element: <CategoryCreate /> },
      { path: '/category/:id/edit', element: <CategoryEdit /> },
    ],
  },
]);

export default router;
