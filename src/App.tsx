import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={
        <div>
          <h1>Hello VNAHkjkS</h1>
          <Outlet />
        </div>
      }
    >
      <Route path='show' element={<h1>Hello SHOW</h1>} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
