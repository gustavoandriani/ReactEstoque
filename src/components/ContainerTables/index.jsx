import { Link } from "react-router-dom"
import "./styles.css"
import { TableCell, TableRow } from "@mui/material"
import BasicTable from "../BasicTable"
import MuiButton from "../MuiButton"
import PropTypes from "prop-types"

ContainerTables.propTypes = {
    listItensAcabando: PropTypes.array,
    listItensRecentes: PropTypes.array
}

export default function ContainerTables({ listItensAcabando, listItensRecentes }) {
    return (
        <div className="ContainerTables">
            <BasicTable
                tableHead={2}
                tableContent={
                    listItensRecentes.length > 0 ? (listItensRecentes.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">
                                <Link to={`itens/${item.id}`}>
                                    <MuiButton
                                        textButton="VER"
                                        colorButton="warning"
                                    />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                    ) : <TableRow>
                            <TableCell>NENHUM RETORNO</TableCell>
                        </TableRow>
                }
            />
            <BasicTable
                tableHead={3}
                tableContent={
                    listItensAcabando.length > 0 ? (listItensAcabando.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.qntd}</TableCell>
                            <TableCell align="right">
                                <Link align="right" to={`itens/${item.id}`}>
                                    <MuiButton
                                        textButton="VER"
                                        colorButton="warning"
                                    />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                    ) : <TableRow>
                            <TableCell>NENHUM RETORNO</TableCell>
                        </TableRow>
                    
                }
            />
        </div>
    )
}