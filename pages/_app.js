import '@styles/globals.css';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';

function Application({ Component, pageProps }) {
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);

  
  return <Component {...pageProps} />
}


export default Application
