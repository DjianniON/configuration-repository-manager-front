import React, { useEffect, useState } from 'react';
import { Container, Grid, Table, Button, Icon, Header, DimmerDimmable, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ObjetsTable from './list/objetsTable';
import DeleteModal from './deleteModal';

export default function ReadObjetList() {
    let params = useParams();
    let navigation = useNavigate();
    let objet = parseInt(params.objectId, 10);
    const [ObjectName, setObjectName] = useState('');
    const [ObjectData, setObjectData] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [active, setActive] = useState(true);
    const [currentElement, setCurrentElement] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [type, setType] = useState('');

    useEffect(() => {
        getData();
    }, [objet])

    const getData = () => {
        setActive(true);
        axios.get(`http://localhost:8080/api/v1/objet/${objet}/objets`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
                axios.get(`http://localhost:8080/api/v1/objet/${objet}`, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then((response) => {
                        setObjectName(response.data.nom);
                        setObjectData(response.data.proprietes);
                        setActive(false);
                    })
            })
    }

    const deleteObject = (id) => {
        axios.delete(`http://localhost:8080/api/v1/objet/${id}`)
        .then(() => {
            getData();
            setOpenModal(false);
        })
    }

    const deleteParameter = (id) => {
        console.log("delete " + id);
        setOpenModal(false);
        /*axios.delete(`http://localhost:8080/api/v1/parameter/${id}`)
        .then(() => {
            getData();
        })*/
    }

    const openDeleteModal = (config) => {
        setCurrentElement(config);
        setOpenModal(true);
    }

    return (
        <Container>
            <Header as="h1">Liste des objets de {ObjectName}</Header>
            <Icon name='arrow left' onClick={() => navigation(-1)} />
            <DimmerDimmable as={Segment} basic loading={active} dimmed={active} blurring={active}>
                    <Grid columns="2" relaxed='very' celled>
                        <Grid.Column>
                            <Header>Enfants de {ObjectName}</Header>
                                {APIData.length ?
                                    <Table singleLine>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Objet</Table.HeaderCell>
                                                <Table.HeaderCell textAlign='center' width={1}>Voir</Table.HeaderCell>
                                                <Table.HeaderCell textAlign='center' width={1}>Editer</Table.HeaderCell>
                                                <Table.HeaderCell textAlign='center' width={1}>Supprimer</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {APIData.map((objet) => {
                                                return (
                                                    <ObjetsTable key={objet.id} objet={objet} link="../.." deleteElement={openDeleteModal}  type="objet" setType={setType} />
                                                )
                                            }
                                            )
                                            }
                                        </Table.Body>
                                    </Table>
                                    : <Header>Aucun objet</Header>}
                                <Link to={`/objects/${objet}/create`}><Button type='creerObjet'>Nouvel Objet</Button></Link>
                        </Grid.Column>
                        <Grid.Column>
                                <Header>Paramètres de {ObjectName}</Header>
                                {ObjectData.length ?
                                <Table singleLine>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Paramètre</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center' width={1}>Voir</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center' width={1}>Editer</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center' width={1}>Supprimer</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {
                                            ObjectData.map((parametre) => {
                                                return (
                                                    <ObjetsTable key={parametre.id} objet={parametre} link="parametres" deleteElement={openDeleteModal} type="parametre" setType={setType} />
                                                )
                                            }
                                            )
                                        }
                                    </Table.Body>
                                </Table>
                                : <Header>Aucun paramètre</Header>}
                                <Link to={`/objects/${objet}/create`}><Button type='creerPara'>Nouveau Paramètre</Button></Link>
                        </Grid.Column>
                    </Grid>
            </DimmerDimmable>
            <DeleteModal open={openModal} setOpen={setOpenModal} element={currentElement} deleteElement={type === 'objet' ? deleteObject : deleteParameter} />
        </Container>
    )
}
