import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '@/routes'

export const RouterProvider = () => (
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        {PUBLIC_ROUTES.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}

        {PRIVATE_ROUTES.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
)
