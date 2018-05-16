import React, { Component } from 'react';


class SearchBox extends Component {
  render() {
    return (
      <form className="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
         <input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
      </form>
    );
  }
}

export default SearchBox;
