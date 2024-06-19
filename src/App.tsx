import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={
          <div>
            <h1>Hello VNAHkjkS</h1>
            <Outlet />
          </div>
        }
      />
      <Route path='/new' element={<h1>Hello NEW PAGE</h1>} />
      <Route path='/:id'>
        <Route index element={<h1>Helo SHOW</h1>} />
        <Route path='edit' element={<h1>Helo EDIT</h1>} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
