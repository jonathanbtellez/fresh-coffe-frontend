import {useContext} from 'react';
import CoffeContext from '../context/CoffeProvider';


const useCoffe = () => {
    return useContext(CoffeContext)
}

export default useCoffe