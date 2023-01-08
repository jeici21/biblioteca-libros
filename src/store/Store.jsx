import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    getItem: (id) => { },
    updateItem: (item) => { }
});//recibiendo funciones y arreglos con el mismo nombre

export default function Store({ children }) {
    const [items, setItems] = useState([]);

    const createItem = (item) => {
        const temp = [...items];
        temp.push(item);
        setItems(temp);
    }//guardando el nuevo ítem

    const getItem = (id) => {
        const item = items.find((item) => item.id === id);
        return item;
    }//buscando ítem

    const updateItem = (item) => {
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [...items];
        temp[index] = { ...item };
    }//actualizando ítem

    return (
        <AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}//exportando las funciones y arreglos de AppContext