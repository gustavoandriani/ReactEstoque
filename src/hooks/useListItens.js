import { useState } from "react";
import { useParams } from "react-router-dom";

export default function useListItens() {
    const { itemId } = useParams()

    const [ items, setItems ] = useState(() => {
        const listItens = localStorage.getItem("estoque-lib")
        if(!listItens) return []
        return JSON.parse(listItens)
    })

    const addItem = ({ name, qntd, desc }) => {
        const id = Math.floor(Math.random() * 1000000)
        let addData = Date.now()
        let editData = Date.now()
        const item = { id, name, qntd, desc, addData, editData }
        setItems(state => {
            const newState = [...state, item]
            localStorage.setItem("estoque-lib", JSON.stringify(newState))
            return newState
        })
    }

    const removeItem = (id) => {
        setItems(state => {
            const newState = state.filter(item => item.id !== id)
            localStorage.setItem("estoque-lib", JSON.stringify(newState))
            return newState
            })
    }

    const editItem = ({ name, qntd, desc }) => {
        const item = items.find(i => i.id === +itemId)
        
        removeItem(item.id)

        const editedItem = Object.assign(item)
        editedItem.editData = Date.now()
        
        if(name != editedItem.name) {
            editedItem.name = name
        }
        
        if(qntd != editedItem.qntd) {
            editedItem.qntd = qntd
        }
        
        if(desc != editedItem.desc) {
            editedItem.desc = desc
        }

        setItems(state => {
            const newState = [...state, editedItem]
            localStorage.setItem("estoque-lib", JSON.stringify(newState))
            return newState
        })
    }

    return { items, addItem, removeItem, editItem }
}