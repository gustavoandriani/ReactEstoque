import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h4>ReactEstoque</h4>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}
            >
                <Link
                    style={{ margin: "0 1rem" }}
                    to="/">Início</Link>
                <Link to="itens/">Itens</Link>
            </nav>
        </header>
    )
}