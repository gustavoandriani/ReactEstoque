import { useState } from "react"
import { Link } from "react-router-dom"
import { TableCell, TableRow, TextField } from "@mui/material"
import BasicTable from "../components/BasicTable"
import BasicTabs from "../components/BasicTabs"
import MuiButton from "../components/MuiButton"
import useListItens from "../hooks/useListItens"

export default function Itens() {
    const { items, addItem, removeItem } = useListItens()
    const [ name, setName ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ qntd, setQntd ] = useState(0)

    const formItem = (ev) => {
        ev.preventDefault()

        addItem({ name, qntd, desc })
        setName("")
        setDesc("")
        setQntd("")
    }

    return (

        <div style={{ color: "white"}}>
            <BasicTabs 
                tabOneContent={
                    <BasicTable
                        tableHead={3}
                        tableContent={
                            items.length > 0 ? (items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell align="right">{item.qntd}</TableCell>
                                    <TableCell align="right">
                                        <Link to={`${item.id}`}>
                                            <MuiButton
                                                textButton="VER"
                                                colorButton="warning"
                                            />
                                        </Link>
                                        <MuiButton
                                            textButton="EXCLUIR"
                                            colorButton="error"
                                            variant="outlined"
                                            onClick={() => removeItem(item.id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                            ) : <TableRow>
                                    <TableCell align="center">Nenhum item adicionado</TableCell>
                                </TableRow> 
                            
                        }
                    />
                }

               tabTwoContent={
                <form
                    onSubmit={formItem}
                    style={{ display: "flex", flexDirection: "column"}}
                >
                    <TextField
                        sx={{ margin: "1rem" }}
                        id="outlined-basic"
                        label="Nome do Item"
                        variant="outlined"
                        value={name}
                        required
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <TextField
                        sx={{ margin: "1rem" }}
                        id="outlined-basic"
                        label="Quantidade de itens"
                        variant="outlined"
                        value={qntd}
                        required
                        onChange={(ev) => setQntd(ev.target.value)}
                    />
                    <TextField
                        sx={{ margin: "1rem" }}
                        id="outlined-multiline-static"
                        label="Descrição do item"
                        multiline
                        rows={4}
                        value={desc}
                        onChange={(ev) => setDesc(ev.target.value)}
                    />
                    <MuiButton 
                        textButton="ADICIONAR"
                        colorButton="error"
                        type="submit"
                        variant="contained"
                    />
                </form>
                
               }
            />
        </div>
    )
}