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

    onAdoptPet = (event, petId) => {
      // event.target.isAdopted = true
      // if (isAdopted) {
        event.target.className = "ui disabled button"
        event.currentTarget.previousSibling.className = "ui primary button"
      // }
    }

    onChangeType = (selection) => {
      this.setState({
        filters:{
          type: selection
        }
      })
    }

    onFindPetsClick = () => {
      let url;
      if (this.state.filters.type === 'all') {
        url = "/api/pets"
      } else {
        url = "/api/pets"+ `?type=${this.state.filters.type}`
      }
    
      fetch(url)
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
              <Filters handleSelect={this.onChangeType} renderPets={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser selectedPets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
