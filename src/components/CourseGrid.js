import React from 'react'
import CourseCard from './CourseCard'

const CourseGrid = ({courses}) =>
    <div>
        <h1>Course Grid</h1>
        <div className="card-group">
            {
                courses.map((course) =>
                    <CourseCard title={course.title}/>)

            }
        </div>
    </div>

export default CourseGrid