import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Busqueda() {

const [produ, setProdu] = useState([]);
const [tablaProductos, setTablaProductos] = useState([]);
const [busqueda, setBusqueda] =useState("")



const peticionGet= async()=>{
    await axios.get("https://guappjolota.herokuapp.com/Productos")
    .then(response=>{
        setProdu(response.data);
        setTablaProductos(response.data)
    }).catch(error=>{
        console.log(error);
    })
}

const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
   var resultadoBusqueda=tablaProductos.filter((elemento)=>{
       if(elemento.product.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
       || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
       ){
           return elemento;
       }
   });
   setProdu(resultadoBusqueda);
}

useEffect(()=>{
    peticionGet();
}, [])



return (
    <div className='busca'>
    <input 
    className='form-control inputBuscar' 
    value={busqueda} 
    placeholder='Buscar Productos'
    onChange={handleChange} 
    />
    <button className='btn btn-success'>
        <FontAwesomeIcon icon={faSearch}/>
    </button>

    </div>
)


}

export default Busqueda;