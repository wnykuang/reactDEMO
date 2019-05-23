import React from 'react'
import ModuleItem from "./ModuleItem";

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            module: {
                id: -1,
                title: 'please type in here'
            },
            modules: this.props.modules
                // [
                //     {id: 123, title: "Organic Chem"},
                //     {id: 234, title: "Econ 101"},
                //     {id: 456, title: "Quantum Phys"}
                // ]//different module for same course.
        }; //has to be called state.
    }

    createModule = () => {
        this.state.module.id = (new Date()).getTime()
        this.setState({
             modules: [this.state.module , ...this.state.modules]
        })
    };

    titleChanged = (event) => {
       // console.log(event.target.value);
       this.setState({
          module :{
              title: event.target.value,
              id: (new Date()).getTime()
                  }
       })
    }

    deleteModule = (id) => {
        console.log('delete' + id);
        this.setState(
            {
                modules: this.state.modules.filter(modules => modules.id !== id)
                //fileter is return the true values for the statement.
            }
        )
    }

    render() {
        return (
            <div>
                <h3>
                    Module List
                </h3>
                <ul
                    className="list-group">
                    <li
                        className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            value={this.state.module.title}
                            className="form-control"/>
                        <button
                            onClick={this.createModule}
                            className="btn btn-primary btn-block">
                            Add Module
                        </button>
                    </li>
                    {
                        this.state.modules.map(
                            // function (module) {
                            //     return (
                            //         <ModuleItem key={module.id} title={module.title}/>
                            //     )
                            module => <ModuleItem
                                deleteModule={ () => this.deleteModule(module.id)}
                                key={module.id}
                                module={module}/>
                        )
                    }
                </ul>
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