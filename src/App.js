import './App.css';

import { BrowserView, MobileView, isBrowser, isTablet, isMobile } from 'react-device-detect';

import Header from './template_parts/header/Header';
import MenuMovil from './template_parts/menu/movil/MenuMovil';
function App() {



  return (
    <div>
      <Header />


      <MobileView>
        <MenuMovil />
      </MobileView>
    </div>
  );
}

export default App;
