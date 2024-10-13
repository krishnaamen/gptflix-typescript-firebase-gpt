
import './App.css'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'

function App() {


  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />

        <Body />
      </Provider>
    </>
  )
}

export default App

// eslint-disable-next-line react-refresh/only-export-components
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  }
]);