import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function View() {
    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();
    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);//mostrando todos los items
    if (!item) {
        return <Layout>Item not found</Layout>;
    }

    return (
        <Layout>
            <h2>{item?.title}</h2>
            <div>{item?.cover ? <img src={item?.cover} width="400" alt="cover" /> : ""}</div>
            <h2>{item?.author}</h2>
            <h2>{item?.intro}</h2>
            <h2>{item?.completed ? "Leído" : "Por terminar"}</h2>
            <h2>{item?.review}</h2>
        </Layout>
    );
}