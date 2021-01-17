import React, {createContext, useState} from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busquedas, buscarRecetas] = useState({
        nombre: '',
        categorias: ''
    });

    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;