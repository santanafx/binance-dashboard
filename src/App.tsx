import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { store } from './store/store'

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  }])

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
