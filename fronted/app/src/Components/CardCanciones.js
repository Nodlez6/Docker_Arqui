import React, {useState , useEffect} from 'react'
import CardOnly from './CardOnly';
import './Card.css';
import {
    FormGroup, Label, Input, Button, Collapse, Card, CardBody, ListGroup, ListGroupItem, 
    Badge, 
  } from 'reactstrap';


const CardCanciones = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    

    const [data , setData ] = useState([]);


    const getAllCanciones = async () => {
        const data = await fetch('http://localhost:3001/allCanciones')
        const canciones = await data.json()
        setData(canciones);
      
    }

    useEffect(() => {
        getAllCanciones();
        
    }, [])

   console.log(data)
   

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
                            <Input type="select" name="select" id="exampleSelect">
                            {
                            data.map( card => (
                                <option key={card.idCancion}>{card.nombre}</option>   
                            ))
                        }
                            </Input>
                    </FormGroup>
               

                   <Button className='resenasButton'  color="primary" onClick={toggle} >Toggle</Button>
                   <Collapse isOpen={isOpen}>
                   <ListGroup>
                        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                    </ListGroup>
                </Collapse>
                </div>
            </div>
           
        </>
    )
}

export default CardCanciones;
