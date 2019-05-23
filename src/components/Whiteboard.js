import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import courses from './courses.json'


export default class Whiteboard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        //overriding the Component class's render
        //render is the interface
        return (//whatever return, just one element.
            <Router>
                <div className="container">
                    <h1>White board!</h1>
                    {/*<ModuleList/>*/}

                    <Link to="/course-list">List</Link>
                    <Link to="/course-grid">Grid</Link>
                    <Link to="/course-editor">Editor</Link>

                    <Route
                        path="/course-list"
                        render={() => <CourseList courses={courses}/>}/>

                    <Route path="/course-grid"
                           render={() => <CourseGrid courses={courses}/>}/>

                    <Route
                        path="/course-editor/:courseId"
                        render={props => <CourseEditor courses={courses}/>}/>

                    {/*<div className="card-group">*/}
                    {/*    <CourseCard title="CS5200"/>*/}
                    {/*    <CourseCard title="CS5610"/>*/}
                    {/*    <CourseCard title="CS5500"/>*/}
                    {/*</div>*/}
                </div>
                {/*//A pill in react*/}
            </Router>
        )
    }
}