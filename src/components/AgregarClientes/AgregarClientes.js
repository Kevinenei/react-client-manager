import React, { Component } from 'react';
import axios from 'axios'
import qs from 'qs';

class AgregarClientes extends Component {
	constructor(props) {
		super(props);
		this.nombreclienteChange = this.nombreclienteChange.bind(this)
		this.informacionclienteChange = this.informacionclienteChange.bind(this)
		this.apellidoclienteChange = this.apellidoclienteChange.bind(this)
		this.dniclienteChange = this.dniclienteChange.bind(this)
		this.telclienteChange = this.telclienteChange.bind(this)
	}
  state = {
		metodo:'post',
		mensaje:'',
		idcliente:'',
		dni:'',
    pagetitle: 'Agregar Cliente',
    nombrecliente: '',
		apellido:'',
		fecha:'',
		tel:'',
		informacioncliente: '',
		estado:'',
		msgerror:''
  }

componentDidMount () {
		if(this.props.location.state){
		var date = new Date(this.props.location.state.fechacliente); ;
    this.setState({
			metodo:'update',
			idcliente:this.props.location.state.idclientes,
			pagetitle:"Modificar cliente DNI°" + this.props.location.state.dnicliente + ' ',
			nombrecliente: this.props.location.state.nombrecliente,
			apellido: this.props.location.state.apellido,
			dni: this.props.location.state.dnicliente,
			informacioncliente: this.props.location.state.informacioncliente,
			tel: this.props.location.state.telcliente,
			fecha:date.getFullYear()
		});
  }
}

nombreclienteChange(e){
	if (!isNaN(e.target.value)) {
		e.target.className = "form-control error-input"
		this.setState({msgerror:'No puede ser un valor numerico',estado:false})
	}else if(e.target.value.length <= 1){
		e.target.className = "form-control error-input"
		this.setState({msgerror:'Tienes que ingresar un Nombre',estado:false})
	}else{
		e.target.className = "form-control input-green"
		this.setState({estado:true , msgerror:''})
	}
this.setState({nombrecliente: e.target.value});
}
apellidoclienteChange(e){
	if (!isNaN(e.target.value)) {
		e.target.className = "form-control error-input"
		this.setState({msgerror:'No puede ser un valor numerico',estado:false})
	}else if(e.target.value.length <= 1){
		e.target.className = "form-control error-input"
		this.setState({msgerror:'Tienes que ingresar un Apellido',estado:false})
	}else{
		e.target.className = "form-control input-green"
		this.setState({estado:true , msgerror:''})
	}
this.setState({apellido: e.target.value});
}

dniclienteChange(e){
	if (isNaN(e.target.value)) {
		e.target.className = "form-control error-input"
		this.setState({msgerror:'DNI Caracter invalido',estado:false})
	}else if(e.target.value.length >= 10 ){
		e.target.className = "form-control error-input"
		this.setState({msgerror:'DNI invalido',estado:false})
	}else{
		e.target.className = "form-control input-green"
		this.setState({estado:true , msgerror:''})
	}
this.setState({dni: e.target.value});
}
telclienteChange(e){
	if (isNaN(e.target.value)) {
		e.target.className = "form-control error-input"
		this.setState({msgerror:'Tiene que ser un valor numerico',estado:false})
	}else if(e.target.value.length >= 25){
		e.target.className = "form-control error-input"
		this.setState({msgerror:'Superaste el limite de numeros',estado:false})
	}else{
		e.target.className = "form-control input-green"
		this.setState({estado:true, msgerror:'' })
	}
this.setState({tel: e.target.value});
}

informacionclienteChange(e){
	if (e.target.value.length > 60) {
		e.target.className = "form-control error-input"
		this.setState({msgerror:'Superaste el limite de caracteres',estado:false})
	}else{
		e.target.className = "form-control input-green"
		this.setState({estado:true, msgerror:'' })
	}
this.setState({informacioncliente: e.target.value});
}



onSubmit = (e) => {
  e.preventDefault();
	if (this.state.estado === true) {
	var metodo,url,msg
	if(this.state.metodo === 'post'){
			metodo = axios.post;
			url = 'http://localhost:3000/news'
			msg = "Se creo el cliente correctamente"
	}else{
			metodo = axios.post;
			url = 'http://localhost:3000/news/update/' + this.state.idcliente
			msg = 'Se modifico correctamente'
	}

	metodo(url,
	qs.stringify({
		'name': this.state.nombrecliente,
		'apellido':this.state.apellido,
		'dni':this.state.dni,
		'email':this.state.informacioncliente,
		'tel':this.state.tel
		}),
	{
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	}
	)
	.then((result) => {
		console.log(result.data)
			if(result.data.errno){
				if(result.data.errno === 1062){
				this.setState({ mensaje: "Dni duplicado"})
			}else{
					this.setState({ mensaje: "Lo sentimos ocurrio un error"})
			}
			}else{
				this.setState({ mensaje: msg  })
			}

	})
	.catch(error => {
    	this.setState({ mensaje: "Lo sentimos ocurrio un error"})
   });
 }else{
	this.setState({ mensaje: "Debe agregar o modificar algun dato"})
 }
}
   render() {
        return(
					<div className="row">
          <div className="col-md-7 card">
            <form className="card-body" onSubmit={this.onSubmit}>
              <h3 className="card-title">{this.state.pagetitle}</h3>
              <div className="form-group">
								<label>Nombre</label>
                <input placeholder="Nombre" name="name" type="text" className="form-control" value={this.state.nombrecliente} onChange={this.nombreclienteChange}></input>
						  </div>
              <div className="form-group">
								<label>Apellido</label>
                <input placeholder="Apellido"  name="apellido" type="text" className="form-control" value={this.state.apellido} onChange={this.apellidoclienteChange}></input>
              </div>
							<div className="form-group">
								<label>Dni</label>
								<input placeholder="DNI"  name="dni" type="text" className="form-control" value={this.state.dni} onChange={this.dniclienteChange}></input>
							</div>
							<div className="form-group">
								<label>Telefono</label>
								<input placeholder="telefono"  name="tel" type="text" className="form-control" value={this.state.tel} onChange={this.telclienteChange}></input>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input placeholder="email"  name="email" type="text" className="form-control" value={this.state.informacioncliente} onChange={this.informacionclienteChange}></input>
							</div>
              <input type="submit" className="btn btn-primary" value="Guardar"></input>
            </form>
						<h3 className="mensaje-submit">{this.state.mensaje}</h3>
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

export default AgregarClientes;
