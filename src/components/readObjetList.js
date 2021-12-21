import React, { useEffect, useState } from 'react';
import { Divider, Container, Grid, Segment, Table, Button, Icon, Breadcrumb, Header } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function ReadObjetList() {
    let params = useParams();
    let navigation = useNavigate();
    let objet = parseInt(params.objectId, 10);
    const [sections, setSections] = useState([]);
    const [ObjectName, setObjectName] = useState('');
    const [ObjectData, setObjectData] = useState([]);
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
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
                        setSections([...sections, { key: `${objet}`, content: response.data.nom, link: false }]);
                        setObjectName(response.data.nom);
                        setObjectData(response.data.proprietes);
                    })
            })
    }, [objet])
    //TODO: faire un truc moins moche

    const deleteObject = (id) => {
        console.log("delete " + id);
        /*axios.delete(`localhost:8080/api/v1/objet/${id}`)
        .then(() => {
            getData();
        })*/
    }

    const deleteParameter = (id) => {
        console.log("delete " + id);
        /*axios.delete(`localhost:8080/api/v1/parameter/${id}`)
        .then(() => {
            getData();
        })*/
    }

    return (
        <Container>
            <Header className='title-header' as="h1">Liste des objets de {ObjectName}</Header>
            <Icon name='arrow left' onClick={() => navigation(-1)} />
            <Segment>
                <Breadcrumb icon='right angle' sections={sections} />
                <Grid columns="2" relaxed='very'>
                    <Grid.Column>
                        <Container>
                            {APIData.length ?
                                <Table singleLine>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Objet</Table.HeaderCell>
                                            <Table.HeaderCell>Voir</Table.HeaderCell>
                                            <Table.HeaderCell>Editer</Table.HeaderCell>
                                            <Table.HeaderCell>Supprimer</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {APIData.map((objet) => {
                                            return (
                                                <Table.Row key={objet.id}>
                                                    <Table.Cell>{objet.nom}</Table.Cell>
                                                    <Table.Cell>
                                                        <Link
                                                            to={`../${objet.id}`}
                                                            key={objet.id}
                                                        >
                                                            <Icon link name='eye' />
                                                        </Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link
                                                            to={`/objects/${objet.id}/edit`}
                                                            key={objet.id}
                                                        >
                                                            <Icon link name='edit' />
                                                        </Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <span onClick={() => deleteObject(objet.id)}>
                                                            <Icon link name='close' />
                                                        </span>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        }
                                        )
                                        }
                                    </Table.Body>
                                </Table>
                                : <Header>Aucun objet</Header>}
                            <Link to={`/objects/${objet}/create`}><Button type='creerObjet'>Nouvel Objet</Button> </Link>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container>
                            <Header>Paramètres de {ObjectName}</Header>
                            <Table singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Paramètre</Table.HeaderCell>
                                        <Table.HeaderCell>Voir</Table.HeaderCell>
                                        <Table.HeaderCell>Editer</Table.HeaderCell>
                                        <Table.HeaderCell>Supprimer</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {
                                        ObjectData.map((parametre) => {
                                            return (
                                                <Table.Row key={parametre.id}>
                                                    <Table.Cell>{parametre.nom}</Table.Cell>
                                                    <Table.Cell>
                                                        <Link
                                                            to={`${parametre.id}`}
                                                            key={parametre.id}
                                                        >
                                                            <Icon link name='eye' />
                                                        </Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link
                                                            to={`/parameters/${parametre.id}/edit`}
                                                            key={parametre.id}
                                                        >
                                                            <Icon link name='edit' />
                                                        </Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <span onClick={() => deleteParameter(parametre.id)}>
                                                            <Icon link name='close' />
                                                        </span>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        }
                                        )
                                    }
                                </Table.Body>
                            </Table>
                            <Button type='creerPara'>Nouveau Paramètre</Button>
                        </Container>
                    </Grid.Column>
                </Grid>

                <Divider vertical>-</Divider>
            </Segment>
        </Container>
    )
}
