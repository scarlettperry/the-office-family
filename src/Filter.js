import React from 'react'

const Filter = (props) => {

    //TODO: remove duplicates
    
    let branch = props.employees.map(
        obj => 
        <option>
            {obj.branch.name}
        </option>
    )

    let department = props.employees.map(
        obj =>
        <option>
            {obj.department.name}
        </option>
    )

    return(
        <div>
            <label>Branch:</label>
            <select>
                {branch}
            </select>
            <label>Department:</label>
            <select>
                {department}
            </select>
        </div>
    )
}

export default Filter