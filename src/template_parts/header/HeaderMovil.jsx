import { styled } from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDDEE0;

    h1{
        font-family: 'Kalam', cursive;
        font-weight: 700;
    }

`;


const HeaderMovil = () => {
    return (
        <HeaderStyle>
            <h1>Javier MgC</h1>
        </HeaderStyle>
    );
}

export default HeaderMovil;