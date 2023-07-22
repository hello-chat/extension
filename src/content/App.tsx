import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import AppContainer from './features/AppContainer';
import router from './routes';

const App = () => {
  return (
    <AppContainer>
      <RouterProvider router={createMemoryRouter(router)} />
    </AppContainer>
  );
};

export default App;
