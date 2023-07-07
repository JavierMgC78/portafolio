import { styled } from "styled-components";

const Nav = styled.nav`
  width: 150px;
  height: ${props => props.height};
  overflow: hidden;
  background-color: #DDDEE0;

  position: fixed;
  bottom: 110px;
  right: 0;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: height 0.3s;

  ul{
    list-style: none;
  }

  a{
    font-size: 2.5rem;
    line-height: 5rem;
    text-decoration: none;
  }

`;


const Opciones = (props)=>{
  //Desctructurar props
  const { navHeight } = props;

  return (
    <Nav height={navHeight}>
      <ul>
        <li><a href="#">Contácto</a></li>
        <li><a href="#">Portafolio</a></li>
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Inicio</a></li>
      </ul>
    </Nav>
  );


}
export default Opciones;