import React from 'react'
import Accordion from './Accordion'

function Accordiondata() {

    const products =[
        {
            icon:"https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=201&ixlib=rb-1.2.1&q=80&w=201",
            title:"chochlate chips cookies",
            body:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
        },
        {
            icon:"https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=201&ixlib=rb-1.2.1&q=80&w=201",
            title:"chochlate chips cookies",
            body:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
        },
        {
            icon:"https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=201&ixlib=rb-1.2.1&q=80&w=201",
            title:"chochlate chips cookies",
            body:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
        },
        {
            icon:"https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=201&ixlib=rb-1.2.1&q=80&w=201",
            title:"chochlate chips cookies",
            body:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
        },
        {
            icon:"https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=201&ixlib=rb-1.2.1&q=80&w=201",
            title:"chochlate chips cookies",
            body:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
        },
        {
            icon:"https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=201&ixlib=rb-1.2.1&q=80&w=201",
            title:"chochlate chips cookies",
            body:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
        },

    ]
    return (
        <>
                 {
                     products.map((value)=>{
                         return (
                             <Accordion {...value}/>
                         )
                     })
                 }
        </>
    )
}

export default Accordiondata
