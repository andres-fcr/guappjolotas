import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = ({ info }) => {

    const params = useParams()
    const {id} = params
    console.log(id);

    console.log(info);
    return (<div>
        <img src="" alt="" />
        <img src="" alt="" />
        {/* {
            info.map(i => (

                <img src={i.imagen} alt="" />
            ))
        } */}
    </div>);
};

export default Detail;
