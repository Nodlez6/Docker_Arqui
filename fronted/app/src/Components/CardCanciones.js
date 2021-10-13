import React, {useState , useEffect} from 'react'
import CardOnly from './CardOnly';
import './Card.css';
import {
    FormGroup, Label, Input, Button, Collapse, Card, CardBody, ListGroup, ListGroupItem, 
    Badge, 
  } from 'reactstrap';


const CardCanciones = () => {

    const [isOpen, setIsOpen] = useState(false);


    const [data , setData ] = useState([]);
    const [resena , setResena ] = useState([]);
    

    const getAllCanciones = async () => {
        const data = await fetch('http://localhost:3001/allCanciones')
        const canciones = await data.json()
        setData(canciones);
    }

    const getAllResenas = async () => {
        const data = await fetch('http://localhost:3001/allResenas')
        const resenas = await data.json()
        setResena(resenas);
    }

    useEffect(() => {
        getAllCanciones();
        getAllResenas();
        
    }, [])


   
    
    
    
        
    
   

    return (
        <>
            <h2 className='titulo' >Reseñas sobre canciones</h2>
        <div className='row'>
                {
                     data.map( card => (
                        
                        <CardOnly key={card.idCancion} sourceImagen={card.imagen} name={card.nombre} artista={card.artista} fecha={card.fecha} id={card.idCancion}  />
                       
                    ))
                }
        </div>
            <div className='row  justify-content-start'>
                <div className='col'>
                   <ListGroup>
                       {
                           resena.map( resen => (
                                <ListGroupItem  className="justify-content-between">{resen.comentario}</ListGroupItem>
                           ))
                       }
                    </ListGroup>
             
                </div>
            </div>
           
        </>
    )
}

export default CardCanciones;
