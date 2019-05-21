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
                <CourseEditor/>
                <div className="card-group">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>//A pill in react
        )
    }
}