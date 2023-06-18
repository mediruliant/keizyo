import React from "react";
import NavItems from "./NavItems";

function Header(){

    const [tog, setTog] = React.useState(false)
    
    const slideTog = () => { 
        setTog(!tog)
    }

    React.useEffect(()=>{
        const body = document.querySelector('.body');
        if( tog === true ){
            body.classList.add('overflow-hidden')
        }else{
            body.classList.remove('overflow-hidden')
        }
    })
    
    return(
        <header className="w-screen h-16 flex items-center justify-between absolute top-0 z-[100]">
            <div className="logo mx-5">
                <a href="/" className="text-2xl font-bold text-orange-600">Keizyo</a>
            </div>

            <div className={`
              nav-toggle
              w-10
              h-10
              bg-white
              rounded-xl
              shadow-xl
              py-3
              px-2
              flex
              flex-col
              justify-between
              items-center
              fixed
              top-3
              right-5
              z-[111]
              cursor-pointer
              group
              ${ tog ? 'justify-center' : '' }
              `} onClick={
                    () => {
                        slideTog();
                    }
                }>
                <div className={`w-full h-1 bg-slate-500 rounded-full duration-200 group-hover:bg-slate-900 ${ tog ? 'absolute top-[17.5px] w-3/5 rotate-45' : '' }`}></div>
                <div className={`w-full h-1 bg-slate-500 rounded-full duration-200 group-hover:bg-slate-900 ${ tog ? 'absolute top-[17.5px] w-3/5 -rotate-45' : '' }`}></div>
              </div>

            <nav className={`
              nav-items 
              fixed
              top-0
              -right-full
              z-[110]
              w-full
              sm:w-2/3
              h-screen
              bg-orange-100
              flex
              items-center
              justify-center
              duration-300
              ${ tog ? 'right-0' : '' }
              `}>
                <ul className="
                  flex 
                  flex-col
                  text-4xl
                  w-4/5
                  ">
                    <NavItems href='/' menu='Home' inDelay={0.2} />
                    <NavItems href='/about' menu='About' inDelay={0.3} />
                    <NavItems href='/projects' menu='Projects' inDelay={0.4} />
                    <NavItems href='/contact' menu='Contact' inDelay={0.45} />
                </ul>
            </nav>
        </header>
    )
}

export default Header;