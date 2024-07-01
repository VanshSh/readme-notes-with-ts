import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import NewNote from './components/NoteForm'
import ErrorElement from './routes/ErrorElement'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorElement />}>
      <Route
        path='/'
        element={
          <div>
            <h1>Home</h1>
            <Outlet />
          </div>
        }
      />
      <Route path='/new' element={<NewNote />} />
      <Route path='/:id'>
        <Route index element={<h1>Helo SHOW</h1>} />
        <Route path='edit' element={<h1>Helo EDIT</h1>} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
