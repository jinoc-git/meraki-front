import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import Router from './shared/Router';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        bodyClassName={() => 'toast-message'}
        position="top-center"
        autoClose={850}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Slide}
        limit={1}
      />
    </>
  );
}

export default App;
