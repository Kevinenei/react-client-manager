import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const handleClick = (id,funcion,dni) => {
	if(funcion === "borrarclientes"){
	 if (window.confirm('Estas seguro de borrar este Cliente DNI N° ' + dni)){
		axios.delete('http://localhost:3000/news/' + id).then((res) => {
			window.location.reload()
	});
	}
}
}
const Button = ({id,children,funcion,dni,icon,type,active}) => {
    return <a  onClick={(e) => handleClick(id,funcion,dni)} className={"btn btn-" + type + ' ' + active} aria-label="Profile">
  		<i className={"mdi" + icon} aria-hidden="true"></i> {children}
  	</a>
}


Button.propTypes = {
  	children: PropTypes.string,
  	icon: PropTypes.string
  };

 Button.defaultProps = {
 type: "primary",
 icon: null,
 active: "false",
 children: "Texto default"
}

export default Button;
