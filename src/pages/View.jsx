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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);//mostrando todos los items

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "var(--body-color)",
            width: "800px",
            margin: "0 auto"
        }
    };

    if (!item) {
        return <Layout>Item not found</Layout>;
    }

    return (
        <Layout>
            <h1>Información sobre el libro</h1>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover ? <img src={item?.cover} width="400" alt="cover" /> : ""}</div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? "Leído" : "Por terminar"}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    );
}