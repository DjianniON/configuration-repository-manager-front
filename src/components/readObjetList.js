import React, { useEffect, useState } from 'react';
import { Container, Grid, Table, Button, Icon, Header, DimmerDimmable, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ObjetsTable from './list/objetsTable';
import DeleteModal from './deleteModal';
import ContextMenu from './contextMenu';

export default function ReadObjetList() {
    let params = useParams();
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
        axios.get(`http://localhost:8080/api/v1/objet/${objet}`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setObjectName(response.data.nom);
                setObjectData(response.data.proprietes);
                axios.get(`http://localhost:8080/api/v1/objet/${objet}/objets`, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then((response) => {
                        setAPIData(response.data);
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
            <ContextMenu nom={ObjectName} />
            <Header as="h1">Liste des objets de {ObjectName}</Header>
            <DimmerDimmable as={Segment} basic loading={active} dimmed={active} blurring>
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
                                            <ObjetsTable
                                                key={objet.id}
                                                objet={objet}
                                                link="../.."
                                                deleteElement={openDeleteModal}
                                                type="objet"
                                                setType={setType}
                                            />
                                        )
                                    }
                                    )
                                    }
                                </Table.Body>
                            </Table>
                            : <Header>Aucun objet</Header>}
                        <Button as={Link} type='creerObjet' to={`../../${objet}/create`}>Nouvel Objet</Button>
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
                                                <ObjetsTable
                                                    key={parametre.id}
                                                    objet={parametre}
                                                    link="parametres"
                                                    deleteElement={openDeleteModal}
                                                    type="parametre"
                                                    setType={setType}
                                                />
                                            )
                                        }
                                        )
                                    }
                                </Table.Body>
                            </Table>
                            : <Header>Aucun paramètre</Header>}
                        <Button as={Link} to={`parametres/create`} type='creerPara'>Nouveau Paramètre</Button>
                    </Grid.Column>
                </Grid>
            </DimmerDimmable>
            <DeleteModal
                open={openModal}
                setOpen={setOpenModal}
                element={currentElement}
                deleteElement={type === 'objet' ? deleteObject : deleteParameter}
            />
        </Container>
    )
}
