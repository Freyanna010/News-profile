import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import App from './app/App.tsx';
import { store } from './app/providers/store/storeConfig.ts';

createRoot(document.getElementById('root')!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
