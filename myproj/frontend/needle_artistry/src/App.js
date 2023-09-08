import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from './pages/Home';
import AlterationsPage from './pages/Alterations';
import CollectionPage from './pages/Collection';
import ContactPage from './pages/Contact';
import FabricsPage from './pages/Fabrics';
import CollectionDetailsPage from './pages/CollectionDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'ourcollection',
        element: <CollectionPage />,
       
      },
      {
        path: 'fabrics',
        element: <FabricsPage />,
        
      },
      {
        path: 'alterations',
        element: <AlterationsPage />,

      },
      {
        path: 'contact',
        element: <ContactPage />,

      },
      {
        path: ':type',
        element: <CollectionDetailsPage />,

      },


    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
