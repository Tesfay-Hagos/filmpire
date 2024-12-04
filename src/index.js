import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
