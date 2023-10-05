import React, { Component } from "react";

class FormInput extends Component {
  state = {
    nom: "",
    age: "",
    ville: "",
    items: [],
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.nom);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      nom: "",
      age: "",
      ville: "",
      items: [
        ...this.state.items,
        { nom: this.state.nom, age: this.state.age, ville: this.state.ville }
      ]
    });
  };

  renderCard = () => {
    return this.state.items.map((item, index) => {
      return (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h2>{item.nom}</h2>
            <hr />
            <h4>tu as {item.age} ans.</h4>
            <h4>tu vis a {item.ville}.</h4>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">Ajouter une personne</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  name="nom"
                  className="form-control form-control-lg"
                  onChange={this.onChange}
                  value={this.state.nom}
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  name="age"
                  className="form-control form-control-lg"
                  onChange={this.onChange}
                  value={this.state.age}
                />
              </div>

              <div className="form-group">
                <label htmlFor="ville">Ville</label>
                <input
                  type="text"
                  name="ville"
                  className="form-control form-control-lg"
                  onChange={this.onChange}
                  value={this.state.ville}
                />
              </div>

              <button className="btn btn-primary btn-block mt-3">
                Creez votre fiche
              </button>
            </form>
          </div>
        </div>
        {this.renderCard()}
      </div>
    );
  }
}

export default FormInput;
