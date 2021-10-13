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
    const [id , setId ] = useState([]);

    const getAllCanciones = async () => {
        const data = await fetch('http://localhost:3001/allCanciones')
        const canciones = await data.json()
        setData(canciones);
    }

    useEffect(() => {
        getAllCanciones();
        
    }, [])


    const getResenaByCancion = async (id) => {

        const data = await fetch('http://localhost:3001/ResenaByIdCancion/' + id)
        const resenas = await data.json()

        setResena(resenas)

    }

    const setResenaClick = () => {
        



        setIsOpen(!isOpen)
    }

    
    const handleChange = (e) => {

        const valueSelect = e.target.value
        

        data.map( cancion => {
            if(cancion.nombre == valueSelect ){
                
                setId(cancion.idCancion)
            }
        })
        
        
        getResenaByCancion(parseInt(id));
            
       console.log(resena)
       
        
    }

   
   

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
                        <FormGroup className='selectEstilo'>
                        <Label for="exampleSelect">Seleccione una canción</Label>
                            <Input onChange={handleChange} type="select" name="select" id="exampleSelect">
                            {
                            data.map( card => (
                                <option id={card.idCancion} key={card.idCancion}>{card.nombre}</option>   
                            ))
                        }
                            </Input>
                    </FormGroup>
               

                   <Button className='resenasButton'   color="primary" onClick={setResenaClick} >Toggle</Button>
                   <Collapse isOpen={isOpen}>
                   <ListGroup>
                       {
                           resena.map( resen => (
                                <ListGroupItem className="justify-content-between">{resen.comentario}</ListGroupItem>
                           ))
                       }
                        
                        
                    </ListGroup>
                </Collapse>
                </div>
            </div>
           
        </>
    )
}

export default CardCanciones;
