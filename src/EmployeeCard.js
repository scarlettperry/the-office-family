import React from 'react'

const EmployeeCard = (props) => {
    return(
        <div>
            <div>
                {props.employee.name}<br/>
                {props.employee.title}<br/>
                {props.employee.department.name}<br/>
                {props.employee.branch.name}<br/>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default EmployeeCard