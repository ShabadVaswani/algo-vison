import './App.css'
import HomeFull from './components/HomeFull/HomeFull';
import Pathfinding from './components/Pathfinding/Pathfinding';
import Dashboard from './components/Dashboard/Dashboard';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard></Dashboard>,
  },
  {
    path: "pathfinder",
    element: <Pathfinding></Pathfinding>
  },
  // {
  //   path: "hanoi",
  //   element: <Hanoi></Hanoi>
  // },
]);


 

function App() {
 

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
