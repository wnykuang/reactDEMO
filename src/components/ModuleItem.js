import React from 'react'

const ModuleItem = ({module, deleteModule}) => {
    return (
        <li className="list-group-item">
            {module.title}
            <button onClick={deleteModule}>Delete</button>
        </li>
    )
}
//
// function ModuleItem() {
//
// }

export default ModuleItem