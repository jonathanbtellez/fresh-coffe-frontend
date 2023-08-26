import {createContext} from 'react'

const CoffeContext = createContext()

const CoffeProvider = ({children}) => {

    const hola = "Hola, holas"
    return (
        <CoffeContext.Provider
            
            value={{
                hola
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}

export {CoffeProvider}

export default CoffeContext