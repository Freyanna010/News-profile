import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './styles/index.scss';
import { router } from './providers/router';

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
