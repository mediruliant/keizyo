import React from 'react'

const TesToggle = (props) => {
    return (
    <div className={`py-2 px-4 bg-red-600 text-white duration-300 
    ${ props.gotel ? 'translate-x-full bg-blue-600' : '' } `}>setToggle</div>
  )
}

export default TesToggle;