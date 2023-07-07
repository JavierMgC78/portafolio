import { useEffect, useState } from "react";

import Btn from "./Btn";
import Opciones from "./Opciones";

const MenuMovil = ()=>{

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  //Click en btn
  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
   
    
    if(isMenuOpen){
      setNavHeight("20rem"); // Cambiar la altura de Nav
    
    }else{
      setNavHeight("0"); // Cambiar la altura de Nav
    }    
    
    
  };

  useEffect(() => {
    console.log('click');
  }, []);





  return(
    <>
      <Opciones 
        navHeight={navHeight}
      />

      <Btn 
        onClick={handleButtonClick}
      />
    </>
  );
}
export default MenuMovil;