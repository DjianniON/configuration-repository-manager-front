import React, { useEffect, useState } from 'react';
import { Table, Icon, Container, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function ReadList() {
    let params = useParams();
    let referentiel = parseInt(params.id, 10);
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/referentiel/${referentiel}/configurations`, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const deleteConfiguration = (id) => {
        console.log("delete " + id);
        /*axios.delete(`localhost:8080/api/v1/configurations/${id}`)
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
                        <Table.HeaderCell>Nom de la configuration</Table.HeaderCell>
                        <Table.HeaderCell>Voir</Table.HeaderCell>
                        <Table.HeaderCell>Editer</Table.HeaderCell>
                        <Table.HeaderCell>Exporter</Table.HeaderCell>
                        <Table.HeaderCell>Supprimer</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((configuration) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{configuration.nom}</Table.Cell>
                                <Table.Cell>
                                    <Link
                                        to={`configurations/${configuration.id}`}
                                        key={configuration.id}
                                    >
                                        <Icon link name='eye' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link
                                        to={`configurations/${configuration.id}/edit`}
                                        key={configuration.id}
                                    >
                                        <Icon link name='edit' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <span onClick={() => exportConfiguration(configuration.id)}>
                                        <Icon link name='download' />
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span onClick={() => deleteConfiguration(configuration.id)}>
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
            <Link to="configurations/create"><Button color='green'>Nouvelle configuration</Button></Link>
        </Container>
    )
}