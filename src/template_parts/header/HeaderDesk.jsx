import { styled } from "styled-components";

const HeaderPcStyle = styled.header`
    width: 100%;
    height: 100px;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Titulo = styled.div`
    width: 30%;

    h1{
        font-family: 'Kalam', cursive;
        font-weight: 700;
        text-align: center;
    }
`;

const Menu = styled.nav`
    width: 70%;
    justify-self: right;

    ul{
        display: flex;
        justify-content: space-around;
    }

    ul li{
        list-style: none;
    }

    ul li a{
        color: #515151;
        font-weight: bold;
        text-decoration: none;
    }

`;



const HeaderDesk = () => {
    return (
        <HeaderPcStyle>
            <Titulo>
                <h1>Javier MgC</h1>
            </Titulo>
            
            <Menu>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Perfil</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </Menu>
            
        </HeaderPcStyle>
    );
}

export default HeaderDesk;