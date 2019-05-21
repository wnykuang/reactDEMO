import React from 'react'

export default class ModuleList extends React.Component {
    render() {
        return (
            <div>
                <h3>
                    Module List
                </h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Module 1
                    </li>
                    <li className="list-group-item">
                        Module 2
                    </li>
                    <li className="list-group-item">
                        Module 3
                    </li>
                    <li className="list-group-item">
                        Module 4
                    </li>
                    <li className="list-group-item">
                        Module 5
                    </li>
                </ul>
            </div>
        )
    }
}