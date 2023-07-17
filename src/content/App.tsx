import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import router from './routes';

type AppProps = {
  onClose: () => void;
};

const App = ({ onClose }: AppProps) => {
  return (
    <>
      <button onClick={onClose}>X</button>
      <RouterProvider router={createMemoryRouter(router)} />
    </>
  );
};

export default App;
