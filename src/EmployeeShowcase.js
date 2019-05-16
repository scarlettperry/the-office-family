import React from 'react'
import EmployeeCard from './EmployeeCard.js'

const EmployeeShowcase = (props) => {
    let employee = props.employees.map(
        obj => 
        <EmployeeCard 
            key={obj.id}
            employee={obj}
        />
    )
    return(
        <div>
            {employee}
        </div>
        
    )
}

export default EmployeeShowcase