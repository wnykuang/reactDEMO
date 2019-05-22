import React from 'react'
import ModuleItem from "./ModuleItem";

export default class ModuleList extends React.Component {
    constructor(){
        super();
        this.state = {
            modules:
                [
                {id : 123, title : "Organic Chem"},
                {id : 234, title : "Econ 101"},
                {id : 456, title : "Quantum Phys"}
            ]//different module for same course.
        }; //has to be called state.
    }
    render() {
        return (
            <div>
                <h3>
                    Module List
                </h3>
                {
                    this.state.modules.map(
                        // function (module) {
                        //     return (
                        //         <ModuleItem key={module.id} title={module.title}/>
                        //     )
                        module => <ModuleItem key={module.id} title={module.title}/>

                    )
                }
                {/*<ul className="list-group">*/}
                {/*    <ModuleItem title="HTML"/>*/}
                {/*    <ModuleItem title="JavaScript"/>*/}
                {/*    <ModuleItem title="React"/>*/}
                {/*    <ModuleItem title="BootStrap"/>*/}
                {/*</ul>*/}
            </div>
        )
    }
}