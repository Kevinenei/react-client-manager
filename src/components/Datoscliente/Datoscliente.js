import React, { Component } from 'react';
import axios from 'axios'

class Datoscliente extends Component {
	constructor(props) {
		super(props);
	}
  state = {
		idcliente:'',
		dni:'',
    nombrecliente: '',
		apellido:'',
		fecha:'',
		tel:'',
		email: '',
    pagos:[]
  }

componentDidMount () {
		if(this.props.location.state){
    var dnicliente = this.props.location.state.dnicliente
    axios.get("http://localhost:3000/news/"+ dnicliente).then(response => {
      this.setState({
        idcliente: response.data[0].id_news,
        dni: response.data[0].dni,
        nombrecliente: response.data[0].name,
        apellido: response.data[0].apellido,
        email:response.data[0].email,
        tel: response.data[0].tel
      });
      let date = new Date(response.data[0].data_created);
      this.setState({fecha:date.toLocaleDateString("es-AR")})
    });

    axios.get("http://localhost:3000/pagos/"+ dnicliente).then(response => {
      this.setState({
        pagos: response.data
      });
    });


    }
}

   render() {
        return(
					<div className="row">
          <div className="col-md-7">
            <ul className="view-data-cliente">
            <li><span>Nombre:</span> {this.state.nombrecliente}</li>
            <li><span>Apellido:</span>  {this.state.apellido}</li>
            <li><span>Email:</span>  {this.state.email}</li>
            <li><span>DNI:</span>  {this.state.dni}</li>
            <li><span>Telefono:</span>  {this.state.tel}</li>
            </ul>
            <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID DE PAGO</th>
                <th>MONTO</th>
                <th>FECHA DE PAGO</th>
              </tr>
              </thead>
              <tbody>
            {
              this.state.pagos.map(function(item, i){
                return <tr key={i}>
                <td>{item.Id}</td>
                <td>${item.pago}</td>
                <td>{new Date(item.date).toLocaleDateString("es-AR")}</td>
                </tr>
              })
              }
              </tbody>
            </table>
          </div>
					<div className="col-md-5">
						<div className="credit-card-wrap">
						<div className="mk-icon-world-map"></div>
						<div className="credit-card-inner">
							<header className="header">
								<div className="credit-logo">
								<img src="https://www.sportclub.com.ar/themes/default/pics/logo.png" alt="logo" width="200px"/>
								</div>
							</header>
							<div className="mk-icon-sim"></div>
							<div className="credit-font credit-card-number">{this.state.dni} </div>
							<div className="footer">
								<div className="clearfix">
									<div className="pull-left">
										<div className="credit-card-date"><span className="title">Fecha alta</span><span className="credit-font">{this.state.fecha}</span></div>
										<div className="credit-font credit-author">{this.state.nombrecliente + ' ' + this.state.apellido}</div>
									</div>
									<div className="pull-right"></div>
								</div>
							</div>
						</div>
					</div>
						<span className="error-title">{this.state.msgerror}</span>
					</div>
			</div>


        );

  }
}


export default Datoscliente;
