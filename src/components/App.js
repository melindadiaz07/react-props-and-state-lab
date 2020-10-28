import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

   state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    handleSelect = (selection) => {
      this.setState({
        filters:{
          type: selection
        }
      })
    }

    renderPets = () => {
      fetch("/api/pets"+ `?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(selectedPets => {
        this.setState({ pets: selectedPets.map(pet => pet)})
      })
    }
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleSelect={this.handleSelect} renderPets={this.renderPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser selectedPets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
