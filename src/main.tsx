
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enable strict mode for development
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);