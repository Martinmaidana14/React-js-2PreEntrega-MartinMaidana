
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { useParams } from "react-router-dom";

import data from "../data/products.json";
import { ItemDetail } from './ItemDetail.jsx';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            const filter = data.find((p) => p.id === Number(id)); 
            setProduct(filter);
        });
    },[id]);

    //Retorno temprano
    if(!product) return <div>"loading"</div>;

    return (

        <Container className='mt-4'>
            <ItemDetail {...product}/>
        </Container>
    );
};

