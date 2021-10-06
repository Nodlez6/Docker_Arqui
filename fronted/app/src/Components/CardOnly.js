import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button 
  } from 'reactstrap';

  import '../App.css';



const CardOnly = ({ sourceImagen, name , artista, fecha , id}) => {

  
   

    return (
        <>
              <div className='col-md-4 paddingCard ' >
                <Card className=' border zoom'>
                    <CardImg top width="100%" src={sourceImagen} alt="Card image cap" />
                                
                    <CardBody>
                    <CardTitle tag="h4">{name}</CardTitle>
                    <CardSubtitle tag="h5" className="mb-2 text-muted">{artista}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{fecha}</CardSubtitle>
                                
                
                    </CardBody>
                </Card>

                
            </div>
           
        </>
    )
}

export default CardOnly
