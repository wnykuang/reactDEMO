import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";

export default class Whiteboard extends React.Component {
    render() {
        //overriding the Component class's render
        //render is the interface
        return (//whatever return, just one element.
            <div className="container">
                <h1>White board!</h1>
                {/*<ModuleList/>*/}
                <div className="card-group">
                    <CourseCard title="CS5200"/>
                    <CourseCard title="CS5610"/>
                    <CourseCard title="CS5500"/>
                </div>
                <CourseEditor/>
            </div>//A pill in react
        )
    }
}