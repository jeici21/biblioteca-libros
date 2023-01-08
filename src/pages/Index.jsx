import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

export default function Index() {
    const store = useAppContext();

    return (
        <div>
            <Link to="/create">Create</Link>
            {store.items.map((item) => (<div>{item.title}</div>))}
        </div>//mostrando todos los libros
    );
}