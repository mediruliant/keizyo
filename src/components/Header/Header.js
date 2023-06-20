import React, { useEffect } from "react";
import NavItems from "./NavItems";

function Header(props){

    const [tog, setTog] = React.useState(false)
    const [togScroll, setTogScroll] = React.useState(false)

    useEffect(()=>{

        const togchild1 = document.querySelector('.togchild-1')
        const togchild2 = document.querySelector('.togchild-2')
        if( tog === true ){
            togchild1.classList.add('w-6')
            togchild2.classList.add('w-6')
        } else {
        }

        const handleScroll = () => {
            if( window.scrollY > 100 ){
                setTogScroll(true)
            } else {
                setTogScroll(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });
    
    const slideTog = () => { 
        setTog(!tog)
    }

    React.useEffect(()=>{
        const body = document.querySelector('.body');
        if( tog === true ){
            body.classList.add('overflow-hidden')
        }else{
            setTimeout(() => {
                body.classList.remove('overflow-hidden')
            }, 600);
        }
    })
    
    return(
        <header className={`w-screen h-16 flex items-center justify-between absolute ${props.ClassTop} z-[100]`}>
            <div className="logo mx-5">
                <a href="/" className="text-2xl font-bold text-orange-600">Medmed:)</a>
            </div>

            <div className="mx-10 hidden sm:block">
                <ul className="flex justify-center text-center items-center">
                    <NavItems href='/' menu='Home' textAlign='text-center w-24' inDelay={0.2} />
                    <NavItems href='/about' menu='About' textAlign='text-center w-24' inDelay={0.3} />
                    <NavItems href='/projects' menu='Projects' textAlign='text-center w-24' inDelay={0.4} />
                    <NavItems href='/contact' menu='Contact' textAlign='text-center w-24' inDelay={0.45} />
                </ul>
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
              duration-200
              ${ togScroll === true ? '' : 'sm:scale-0' }
              ${ tog ? 'justify-center' : '' }
              `} onClick={
                    () => {
                        slideTog();
                    }
                }>
                <div className={`togchild-1 w-full h-1 bg-slate-500 rounded-full duration-200 group-hover:bg-slate-900 ${ tog ? 'absolute top-[17.5px] rotate-45' : '' }`}></div>
                <div className={`togchild-2 w-full h-1 bg-slate-500 rounded-full duration-200 group-hover:bg-slate-900 ${ tog ? 'absolute top-[17.5px] -rotate-45' : '' }`}></div>
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
              ease-linear
              ${ tog ? 'right-0' : 'delay-300 ease-in' }
              `} onClick={slideTog}>

                <ul className="
                  flex 
                  flex-col
                  text-4xl
                  w-4/5
                  ">
                    <li className=" relative overflow-hidden">
                        <div className={` relative -bottom-24
                        duration-300 delay-[200ms]
                        ${ tog ? '-translate-y-24' : 'delay-1000' }
                        `}>
                            <NavItems href='/' menu='Home' textAlign='text-end' />
                        </div>
                    </li>
                    <li className=" relative overflow-hidden">
                        <div className={` relative -bottom-24
                        duration-300 delay-[250ms]
                        ${ tog ? '-translate-y-24' : 'delay-1000' }
                        `}>
                            <NavItems href='/about' menu='About' textAlign='text-end' />
                        </div>
                    </li>
                    <li className=" relative overflow-hidden">
                        <div className={` relative -bottom-24
                        duration-300 delay-[300ms]
                        ${ tog ? '-translate-y-24' : 'delay-1000' }
                        `}>
                            <NavItems href='/projects' menu='Projects' textAlign='text-end' />
                        </div>
                    </li>
                    
                    <li className=" relative overflow-hidden">
                        <div className={` relative -bottom-24
                        duration-300 delay-[350ms]
                        ${ tog ? '-translate-y-24' : 'delay-1000' }
                        `}>
                            <NavItems href='/contact' menu='Contact' textAlign='text-end' />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    ClassTop: 'top-0'
}

export default Header;