// providers
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyles from './components/styles/global';
import ContactUs from './screens/ContactUs';
import Faq from './screens/Faq';
import Features from './screens/Features';
import Home from './screens/Home';
import Login from './screens/Login';
import rootReducer from './store/rootReducer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  breakpoints: {
    mobile: '768px',
  },
};

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Login />} />
            <Route path="features" element={<Features />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
