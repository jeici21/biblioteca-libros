import { Link } from "react-router-dom";

export default function Book({ item }) {
    const bookContainerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "300px"
    };
    const bookInfoStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "var(--body-color)",
        textDecoration: "none"
    };

    return (
        <div style={bookContainerStyle}>
            <Link to={`/view/${item.id}`} style={bookInfoStyle}>
                <img src={item.cover} alt={item.title} width="200" />
                <div>{item.title}</div>
            </Link>
        </div>
    );
}