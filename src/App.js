import React, { useState , useEffect } from 'react';

import guy from './assets/guy.png';
import Isometric_cube3 from './assets/Isometric_cube3.png';
import wallpaper from './assets/wallpaper.jpg';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Virtualshop from './components/Virtualshop';

function Demo() {
  const [x, setX] = useState(31);
  const [y, setY] = useState(55);
  const [showWindow, setShowWindow] = useState(false);



  const handleKeyDown = (event) => {
        switch(event.key)
        {
          case 'ArrowLeft' : 
          setX((prevX) => prevX - 10 );
           break ; 
           case 'ArrowRight' : 
          setX((prevX) => prevX + 10);
          break ; 
          case 'ArrowUp' : 
          setY((prevY) => prevY - 10);
          break ; 
          case 'ArrowDown' : 
          setY((prevY) => prevY + 10);
          break ; 
    
       default :
      break; 
    }

    let playerRect = document.getElementById('player').getBoundingClientRect();
    let redAreaRect = document.getElementById('red-area').getBoundingClientRect();

    // // Player restrictions
    // if (playerRect.x < 30 || playerRect.x > 355) {
    //   setX(31);
    //   setY(55);
    // }

    // Interaction detection
    if (
      playerRect.x < redAreaRect.x + redAreaRect.width &&
      playerRect.x + playerRect.width > redAreaRect.x &&
      playerRect.y < redAreaRect.y + redAreaRect.height &&
      playerRect.y + playerRect.height > redAreaRect.y
    ) {
      setShowWindow(true);
    } else {
      setShowWindow(false);
    }
  }  ; 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  return (
   <>
   <Navbar />
      <h1>Welcome to 3D virtual Website </h1>
     <div className='text-center container-fluid'  style={{position:'relative'}}>
      <div id="player" style={{ position: 'relative', top: y, left: x }}>
        <img src={guy} alt="Player" />
      </div>
      <div id="red-area" style={{ position: 'relative', top: 140, left: 200 }}>
        <img src={Isometric_cube3} alt="Booth" />
      </div>
      {/* <div style={{position:'relative'}}> */}
        <img id="background" src={wallpaper} alt="Isometric venue"  style={{ height:'50%', width: '50%'}}/>
 

      </div>


      {showWindow && <Virtualshop /> }
      <br />
      <br />
      <br />
      <br />
      <br />
      </>
  );
}

export default Demo;