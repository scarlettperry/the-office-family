import React, {Component} from 'react'
import Filter from './Filter.js'
import EmployeeShowcase from './EmployeeShowcase.js'
// import EditEmployee from './EditEmployee.js'

import './App.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      employees: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/employees")
      .then(resp => resp.json())
      .then(employees => this.setState({employees}))
  }


  render(){
    return(
      <div>
        <Filter
          employees={this.state.employees}
        />
        <EmployeeShowcase 
          employees={this.state.employees}
        />
        {/* <EditEmployee /> */}
      </div>
    )
  }
}

export default App
