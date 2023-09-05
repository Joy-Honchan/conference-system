import { lazy, Suspense, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useNavigate
} from 'react-router-dom'
import RouteConfig from 'configs/route'
import TemplatWithNavebar from 'components/template'

//ThemeProvider
import ThemeProvider from 'providers/ThemeProvider'
//NotistackProvider
import NotistackProvider from 'providers/NotistackProvider'
//Redux
import { Provider } from 'react-redux'
import store from 'store'

import NoteProvider from 'providers/NoteContext'

const Login = lazy(() => import('pages/Login'))

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <InnerRouter />
    },
    {
      path: 'login',
      element: <Login />
    }
  ])
  return (
    <ThemeProvider>
      <NotistackProvider>
        <NoteProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </NoteProvider>
      </NotistackProvider>
    </ThemeProvider>
  )
}

export default App

const InnerRouter = () => {
  const routes = useRoutes(RouteConfig)
  return (
    <TemplatWithNavebar>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </TemplatWithNavebar>
  )
}
