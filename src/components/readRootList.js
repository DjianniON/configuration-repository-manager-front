import React, { useEffect, useState } from 'react';
import { Table, Icon, Container, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function ReadRootList() {
    let params = useParams();
    let configuration = parseInt(params.id, 10);
    const [APIData, setAPIData] = useState([]);
    const [ConfigName, setConfigName] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/configuration/${configuration}/objets`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
                axios.get(`http://localhost:8080/api/v1/configuration/${configuration}`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => {
            setConfigName(response.data.nom);
            })
        })
    }, [])

    const deleteObject = (id) => {
        console.log("delete " + id);
        /*axios.delete(`localhost:8080/api/v1/configurations/${id}`)
        .then(() => {
            getData();
        })*/
    }

    const exportObject = (id) => {
        console.log("Export " + id);
    }

    return (
        <Container>
            <Header>{ConfigName}</Header>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom de l'objet</Table.HeaderCell>
                        <Table.HeaderCell>Voir</Table.HeaderCell>
                        <Table.HeaderCell>Editer</Table.HeaderCell>
                        <Table.HeaderCell>Exporter</Table.HeaderCell>
                        <Table.HeaderCell>Supprimer</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((objet) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{objet.nom}</Table.Cell>
                                <Table.Cell>
                                    <Link
                                        to={`${objet.id}`}
                                        key={objet.id}
                                    >
                                        <Icon link name='eye' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link
                                        to={`${objet.id}/edit`}
                                        key={objet.id}
                                    >
                                        <Icon link name='edit' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <span onClick={() => exportObject(objet.id)}>
                                        <Icon link name='download' />
                                    </span>
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
            <Link to="/create"><Button color='green'>Nouvel objet</Button></Link>
        </Container>
    )
}