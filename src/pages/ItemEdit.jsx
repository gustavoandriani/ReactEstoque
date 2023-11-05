import { Link, useParams } from "react-router-dom"
import useListItens from "../hooks/useListItens"
import { useState } from "react"
import { TextField } from "@mui/material"
import MuiButton from "../components/MuiButton"

export default function ItemEdit() {
    const { items, editItem } = useListItens()
    const { itemId } = useParams()

    const item = items.find(i => i.id === +itemId)

    const [ name, setName ] = useState(item.name)
    const [ desc, setDesc ] = useState(item.desc)
    const [ qntd, setQntd ] = useState(item.qntd)

    

    const editForm = (ev) => {
        ev.preventDefault()

        editItem({ name, qntd, desc })

        setName(item.name)
        setDesc(item.desc)
        setQntd(item.qntd)
    }

    return (
        <>
            <h2>EDIÇÃO DE ITEM AQUI | {item.name}</h2>
            <form
                onSubmit={editForm}
                style={{ display: "flex", flexDirection: "column"}}
            >
                <TextField
                    sx={{ margin: "1rem" }}
                    id="outlined-basic"
                    label="Novo nome do Item"
                    variant="outlined"
                    placeholder={item.name}
                    value={name}
                    required
                    onChange={(ev) => name !== undefined ? (setName(ev.target.value)) : null}
                />
                
                <TextField
                    sx={{ margin: "1rem" }}
                    id="outlined-basic"
                    label="Nova quantidade de itens"
                    variant="outlined"
                    value={qntd}
                    required
                    onChange={(ev) => setQntd(ev.target.value)}
                />

                <TextField
                    sx={{ margin: "1rem" }}
                    id="outlined-multiline-static"
                    label="Nova descrição do item"
                    multiline
                    rows={4}
                    value={desc}
                    required
                    onChange={(ev) => setDesc(ev.target.value)}
                />

                
                <MuiButton 
                    textButton="CONCLUÍDO"
                    colorButton="error"
                    type="submit"
                    variant="outlined"
                    onClick={Link}
                />
            </form>
        </>
    )
}