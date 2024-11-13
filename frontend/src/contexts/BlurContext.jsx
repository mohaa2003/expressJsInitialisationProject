import { createContext, useState } from "react"

export const blurContext = createContext(null);

const BlurContext = ({children}) => {
    const [openedmobileNav,setOpenedmobileNav] = useState(false);
    const openmobileNav = ()=>{
        setOpenedmobileNav(!openedmobileNav)
      }
  return (
    <blurContext.Provider value={{openedmobileNav,setOpenedmobileNav}}>
        <div onScroll={openmobileNav}>
            {children}
        </div>
        {openedmobileNav && <div className="fixed z-10 h-[100vh] w-[100vw] top-0 left-0" onClick={openmobileNav}></div>}
    </blurContext.Provider>
  )
}

export default BlurContext