import { createBrowserRouter } from 'react-router-dom';

import LayoutMain from './layouts/main';
import Home from './pages/home';
import ShoeList from './pages/shoe/list';
import ShoeDetail from './pages/shoe/detail';
import ShoeCreate from './pages/shoe/create';
import ShoeEdit from './pages/shoe/edit';
import CategoryList from './pages/category/list';
import CategoryCreate from './pages/category/create';
import CategoryEdit from './pages/category/edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shoe', element: <ShoeList /> },
      { path: '/shoe/:id/detail', element: <ShoeDetail /> },
      { path: '/shoe/create', element: <ShoeCreate /> },
      { path: '/shoe/:id/edit', element: <ShoeEdit /> },
      { path: '/category', element: <CategoryList /> },
      { path: '/category/create', element: <CategoryCreate /> },
      { path: '/category/:id/edit', element: <CategoryEdit /> },
    ],
  },
]);

export default router;
