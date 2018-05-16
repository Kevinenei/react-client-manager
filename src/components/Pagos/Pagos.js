import React, { Component } from 'react';
import axios from 'axios'

class Pagos extends Component{
  state = {
    pagos:[],
    cantidaddepagos:0,
    total:0
  }
  componentDidMount() {
    axios.get("http://localhost:3000/pagos").then(response => {
        this.setState({ pagos: response.data});
        let valoractual = 10
        this.state.pagos.map((x,index) =>
          valoractual += x.pago
        )
        this.setState({total:valoractual, cantidaddepagos:response.data.length});
    });
  }

  render(){
    return(
      <div className="view-pay-div">
      <p>Cantidad de Pagos hasta la fecha: {this.state.cantidaddepagos}</p>
      <p>Dinero TOTAL hasta la fecha $: <span className="dolartext">{this.state.total}</span></p>
		 </div>
    )
	}
}


export default Pagos;
