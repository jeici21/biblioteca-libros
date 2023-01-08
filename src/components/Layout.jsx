import Navbar from "./Navbar";

export default function Layout({ children }) {
    const containerStyle = {
        width: "90%",
        margin: "0px auto"
    }

    return (
        <div>
            <Navbar />
            <div style={containerStyle}>{children}</div>
        </div>
    );
}