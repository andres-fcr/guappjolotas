import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getData from '../helpers/getData';

const Detail = () => {

    const [data, setData] = useState([]);

    const getDatos = async () => {
        const datos = await getData()
        setData(datos)
    }

    useEffect(() => {
        getDatos();
    }, []);


    const params = useParams()
    const { id } = params
    console.log(id);
  
    
    const buscado = data.find((obj) => obj.id === Number(id));
    console.log(buscado);
    const { product, imagen, precio, clase } = buscado

    return (<div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src={imagen} alt="product" />
    </div>);
};

export default Detail;
