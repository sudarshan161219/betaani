import  { useReducer, createContext, useContext} from "react";
import reducer from "./reducer";


import {
    TOGGLE_SIDEBAR
} from "./action"

const initialState = {
    showSidebar: false,
  };


const Context = createContext({});

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR})
    }

    return (
        <Context.Provider
          value={{
            ...state,
            toggleSidebar,
          }}
        >
          {children}
        </Context.Provider>
      );
}

const useAppContext = () => {
    return useContext(Context);
  };
  
  export { ContextProvider, useAppContext, initialState };