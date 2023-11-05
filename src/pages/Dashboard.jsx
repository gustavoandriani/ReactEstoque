import { useEffect, useState } from "react";
import ContainerInfos from "../components/ContainerInfos";
import ContainerTables from "../components/ContainerTables";
import BasicTable from "../components/BasicTable";
import useListItens from "../hooks/useListItens";

export default function Dashboard() {
    const { items } = useListItens()
    const [ itensAcabando, setItensAcabando ] = useState([])
    const [ itensRecentes, setItensRecentes ] = useState([])
     
    useEffect(() => {
        items.forEach(item => {
            if(Number(item.qntd) < 10 ) {
                const itemAcabando = {
                    id: item.id,
                    name: item.name,
                    qntd: item.qntd
                }
                setItensAcabando((state) => [...state, itemAcabando])
            }
        });

        items.forEach(item => {
            let dataHoje = Date.now()
            if(item.addData - dataHoje <= 10) {
                const itemRecente = {
                    id: item.id,
                    name: item.name
                }
                setItensRecentes((state) => [...state, itemRecente])
            }
        });
    }, [items])
    return (
        <main>
            <h2>Dashboard</h2>
            <ContainerInfos
                
            />
            <ContainerTables
                listItensAcabando={itensAcabando}
                listItensRecentes={itensRecentes}
            />

            <BasicTable />
        </main>
    )
}