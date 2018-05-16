import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Button from '../Button'
import Pagos from '../Pagos'

class Clientes extends Component {
  state = {
    clientes: []
  }

componentDidMount () {
  axios.get("http://localhost:3000/news").then(response => {
    this.setState({ clientes: response.data });
  });
  }
	handleClick(id,funcion) {

  }
   render() {
     var array =  this.state.clientes
        return(
          <div className="row">
            <div className="col-md-12  text-center">
              <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>DNI</th>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>EMAIL</th>
                  <th>TEL</th>
                </tr>
                </thead>
                <tbody>
                {
                  array.map(function(item, i){
                     return <tr key={i}>
                     <td>{array[i].dni}</td>
                     <td>{array[i].name}</td>
                     <td>{array[i].apellido}</td>
                     <td>{array[i].email}</td>
                     <td>{array[i].tel}</td>
                     <td><Link to={{
                         pathname: '/cliente/'+ array[i].dni,
                         state: {
                           dnicliente: array[i].dni,
                          }
                       }}
                        className="nav-link"  >Ver Perfil</Link></td>
                     <td><Button funcion="borrarclientes" dni={array[i].dni} id={array[i].id_news}>Borrar</Button></td>
                    <td><Link to={{
                        pathname: '/clientes/',
                        state: {
                          idclientes: array[i].id_news,
                          dnicliente: array[i].dni,
                          nombrecliente: array[i].name,
                          apellido: array[i].apellido,
                          informacioncliente: array[i].email,
                          telcliente: array[i].tel,
                          fechacliente: array[i].data_created
                         }
                      }}
                       className="nav-link"  >Editar</Link></td>
                     </tr>
                })
                }
                </tbody>

              </table>
            </div>
            <Pagos></Pagos>
            </div>
        );

  }
}

export default Clientes;
