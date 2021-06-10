import React, { useState } from 'react'

function Accordion() {

    const [isopen,setIsopen] = useState(false)

    const handleClick=()=>{
        setIsopen(!isopen)
    }

    return (
        <>
            <div className='accordion'>
                     <div className='accordion-header' onClick={handleClick}>
                           <h2>chochlate chips cookies</h2>
                     </div>
                   {
                       isopen && (
                       <div className='accordion-body'>
                          A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.
                      </div>
                       )
                   }
                     
            </div>
        </>
    )
}

export default Accordion
