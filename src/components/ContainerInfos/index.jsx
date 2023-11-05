import { useEffect, useState } from "react"
import "./styles.css"
import BoxInfos from "../BoxInfos"
import useListItens from "../../hooks/useListItens"

export default function ContainerInfos() {
    const { items } = useListItens()
    const [ totalItens, setTotalItens ] = useState(0)
    const [ itensAcabando, setItensAcabando ] = useState(0)
    const [ itensRecentes, setItensRecentes ] = useState(0)

    useEffect(() => {
        let dataHoje = Date.now()
        let total = 0
        items.forEach(item => {
            total += Number(item.qntd)
            return setTotalItens(total)
        })
        items.forEach(item => {
            if(Number(item.qntd) < 10) {
                setItensAcabando(itensAcabando => itensAcabando + 1)
            }
        })
        items.forEach(item => {
            if(Number(item.addData) - Number(dataHoje) <= 10) {
                setItensRecentes(itensRecentes => itensRecentes + 1)
                return
            }
        })
    }, [items])

    return (
        <>
            <div className="ContainerInfos">
                <BoxInfos infoTitulo={"Diversidade de itens"} infoQntd={items.length} />
                <BoxInfos infoTitulo={"Inventário total"} infoQntd={totalItens} />
                <BoxInfos infoTitulo={"Itens recentes"} infoQntd={itensRecentes} />
                <BoxInfos infoTitulo={"Itens acabando"} infoQntd={itensAcabando} />
            </div>
        </>
    )
}