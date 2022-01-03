import React, { useEffect, useState } from 'react';
import { Grid, Segment, Header, Container, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ContextMenu from './contextMenu';
import DeleteModal from './deleteModal';


export default function ReadPropriete() {
    let params = useParams();
    let navigation = useNavigate();
    let propId = parseInt(params.paramId, 10);
    const [propriete, setPropriete] = useState([]);
    const [currentElement, setCurrentElement] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/propriete/${propId}`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setPropriete(response.data);
            })
    }, [])

    const deletePropriete = (id) => {
        axios.delete(`http://localhost:8080/api/v1/propriete/${propId}`)
            .then(() => {
                setOpenModal(false);
                navigation(-1);
            })
    }

    const openDeleteModal = (propriete) => {
        setCurrentElement(propriete);
        setOpenModal(true);
    }

    return (
        <Container>
            <ContextMenu />
            <Header as="h1">Contenu de la propriété</Header>
            <Grid verticalAlign='middle' textAlign='center'>
                <Grid.Column style={{ maxWidth: '50%' }}>
                    <Segment padded="very">
                        <Header as="h4">Nom :</Header>
                        <p>{propriete.nom}</p>
                        <Header as="h4">Type :</Header>
                        <p>{propriete.type}</p>
                        <Header as="h4">Valeur :</Header>
                        <p>{propriete.valeur}</p>
                    </Segment>
                    <Button as={Link} to={`edit`}>Modifier la propriété</Button>
                    <Button color='red' onClick={() => openDeleteModal(propriete)}>Supprimer la propriété</Button>
                </Grid.Column>
            </Grid>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentElement} deleteElement={deletePropriete} />
        </Container>
    )
}