import { styled } from "styled-components";

const Boton = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: grey;

  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Btn = (props)=>{

  //Destructurar props
  const { onClick } = props;
  
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <Boton
        onClick={handleClick}
      >Menú
      </Boton>
    </>
  );
}
export default Btn;
;