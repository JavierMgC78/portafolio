import { styled } from "styled-components";
import { BrowserView, MobileView, isBrowser, isTablet, isMobile } from 'react-device-detect';

import HeaderMovil from "./HeaderMovil";
import HeaderDesk from "./HeaderDesk";


const HeaderStyle = styled.header`
  width: 100%;
  background-color: #DDDEE0;

`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Content>

        <MobileView>
            <HeaderMovil />
        </MobileView>
        
        <BrowserView>
            <HeaderDesk />
        </BrowserView>

      </Content>
    </HeaderStyle>
  );
}

export default Header;