import React, { useEffect, useState } from 'react';
import { Container, Grid, Table, Button, Icon, Header } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ObjetsTable from './list/objetsTable';

export default function ReadObjetList() {
    let params = useParams();
    let navigation = useNavigate();
    let objet = parseInt(params.objectId, 10);
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
                        setObjectName(response.data.nom);
                        setObjectData(response.data.proprietes);
                    })
            })
    }, [objet])

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
            <Header as="h1">Liste des objets de {ObjectName}</Header>
            <Icon name='arrow left' onClick={() => navigation(-1)} />
            <Container>
                    <Grid columns="2" relaxed='very' celled>
                        <Grid.Column>
                            <Header>Enfants de {ObjectName}</Header>
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
                                                    <ObjetsTable key={objet.id} objet={objet} link="../.." delete={deleteObject} />
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
                                            <Table.HeaderCell>Voir</Table.HeaderCell>
                                            <Table.HeaderCell>Editer</Table.HeaderCell>
                                            <Table.HeaderCell>Supprimer</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {
                                            ObjectData.map((parametre) => {
                                                return (
                                                    <ObjetsTable key={parametre.id} objet={parametre} link="parametres" delete={deleteParameter} />
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
            </Container>
        </Container>
    )
}
