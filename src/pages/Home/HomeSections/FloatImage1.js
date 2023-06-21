import React from 'react'
import imgE6 from '../../../utilities/img/E6.jpg'

const FloatImage1 = () => {

    React.useEffect(() => {
        const handleScroll = () => {
          const parallaxDiv = document.getElementById('img-float-1');
          const offsetY = window.pageYOffset;
          parallaxDiv.style.transform = `translateY(-${offsetY/10}px)`;
          if(offsetY > 200){
            parallaxDiv.style.height = 10 + offsetY/2 + 'px'
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div id='img-float-1' className='img-float-1 absolute w-40 right-6 md:w-[400px] aspect-[3/4] flex items-center md:right-20 -bottom-32 md:bottom-10 grayscale h-[10px] overflow-hidden'>
        <img className='w-full h-[600px] object-contain' src={imgE6} alt={imgE6} ></img>
    </div>
  )
}

export default FloatImage1