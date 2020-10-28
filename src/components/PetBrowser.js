import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {
    return(
    <div className="ui cards">
      {this.props.selectedPets.map(pet => {
        return <Pet petData={pet} />
      })} 
      </div>
    )
  }
}

export default PetBrowser
