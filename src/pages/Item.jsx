import { Link, useParams } from "react-router-dom"
import useListItens from "../hooks/useListItens"
import MuiButton from "../components/MuiButton"

export default function Item() {
    const { items } = useListItens()
    const { itemId } = useParams()

    const item = items.find(i => i.id === +itemId)

    if (!item) {
        return (
            <h2>Oops... Item não encontrado!</h2>
        )
    }
    return(
        <section>
            <Link to="/itens">
                <MuiButton 
                    textButton="Voltar"
                    colorButton="error"
                    variant="outlined"
                />
            </Link>
            <Link to="edit">
                <MuiButton 
                    textButton="Editar"
                    colorButton="warning"
                    variant="outlined"
                />
            </Link>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <MuiButton 
                textButton={`Quantidade: ${item.qntd}`}
                colorButton={ item.qntd > 10 ? ("success") : ("error")}
            />
        </section>
    )
}