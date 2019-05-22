import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";

export default class CourseEditor extends React.Component {

    constructor(props) {
        super()
        this.state = {
            courseId : props.match.params.courseId
        }
    }



    render() {
        return (
            <div>
                <h2>Course Editor {this.state.courseId}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList/>
                    </div>
                    <div className="col-8 right">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        )
    }
}