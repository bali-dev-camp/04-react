import { Outlet, createBrowserRouter } from 'react-router-dom';

import LayoutMain from './layouts/main';
import PageHome from './pages/home';

import PageShoeList from './pages/shoe/list';
import PageShoeDetail from './pages/shoe/detail';
import PageShoeCreate from './pages/shoe/create';
import PageShoeEdit from './pages/shoe/edit';

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
          { index: true, element: <PageShoeList /> },
          { path: '/shoe/:id/detail', element: <PageShoeDetail /> },
          { path: '/shoe/create', element: <PageShoeCreate /> },
          { path: '/shoe/:id/edit', element: <PageShoeEdit /> },
        ],
      },
      {
        path: '/category',
        element: <Outlet />,
        children: [
          { index: true, element: <PageCategoryList /> },
          { path: '/category/create', element: <PageCategoryCreate /> },
          { path: '/category/:id/edit', element: <PageCategoryEdit /> },
        ],
      },
    ],
  },
]);

export default router;
