import React from 'react'
// import './App.css'
import data from '../data.js'


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      waters: []
    }
  }
  componentDidMount () {
    this.setState({waters: data})
  }
  render () {
    return (
      <div className="menu">
        <h3>Menu</h3>
        <hr/>
        {this.state.waters.map(water=> {
          return(
            <div key={water.id}>
              <dl>
                <dt>{water.brand}</dt>
                <dd>{water.price}</dd>
              </dl>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Menu
