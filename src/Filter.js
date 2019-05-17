import React from 'react'
import {onlyUnique} from './helperFunctions.js'

const Filter = (props) => {
   
    let allBranches = props.employees.map(obj => obj.branch.name)
    let uniqueBranches = allBranches.filter(onlyUnique)

    let branch = uniqueBranches.map(
        obj =>
        <option>
            {obj}
        </option>
    )

    let allDepartments = props.employees.map(obj => obj.department.name)
    let uniqueDepartments = allDepartments.filter(onlyUnique)

    let department = uniqueDepartments.map(
        obj =>
        <option>
            {obj}
        </option>
    )

    return(
        <div>
            <label>Branch:</label>
            <select>
                <option>All</option>
                {branch}
            </select>
            <label>Department:</label>
            <select>
                <option>All</option>
                {department}
            </select>
        </div>
    )
}

export default Filter