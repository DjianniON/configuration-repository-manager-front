import React, { useEffect, useState } from 'react';
import { Table, Icon, Container, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ReadList() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/referentiels`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const getData = () => {
        axios.get(`http://localhost:8080/api/v1/referentiels`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const deleteConfiguration = (id) => {
        console.log("delete " + id);
        /*axios.delete(`localhost:8080/api/v1/referentiels/${id}`)
        .then(() => {
            getData();
        })*/
    }

    const exportConfiguration = (id) => {
        console.log("Export " + id);
    }

    return (
        <Container>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom du référentiel</Table.HeaderCell>
                        <Table.HeaderCell>Voir</Table.HeaderCell>
                        <Table.HeaderCell>Editer</Table.HeaderCell>
                        <Table.HeaderCell>Exporter</Table.HeaderCell>
                        <Table.HeaderCell>Supprimer</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((referentiel) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{referentiel.nom}</Table.Cell>
                                <Table.Cell>
                                    <Link
                                        to={`${referentiel.id}`}
                                        key={referentiel.id}
                                    >
                                        <Icon link name='eye' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link
                                        to={`${referentiel.id}/edit`}
                                        key={referentiel.id}
                                    >
                                        <Icon link name='edit' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <span onClick={() => exportConfiguration(referentiel.id)}>
                                        <Icon link name='download' />
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span onClick={() => deleteConfiguration(referentiel.id)}>
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
            <Link to="/create"><Button color='green'>Nouveau référentiel</Button></Link>
        </Container>
    )
}