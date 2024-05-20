import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor='#9f9f9f' highlightColor='#585858'>
        <RouterProvider router={router} />
      </SkeletonTheme>
    </Provider>
  );
}

export default App;
