import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";
import Book from "../components/Book";

export default function Index() {
    const store = useAppContext();
    const booksContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
    };

    return (
        <Layout>
            <h1>Biblioteca de Libros</h1>
            <div style={booksContainer}>
                {store.items.map((item) => (
                    <Book key={item.id} item={item} />))}
            </div>
        </Layout>//mostrando todos los libros
    );
}