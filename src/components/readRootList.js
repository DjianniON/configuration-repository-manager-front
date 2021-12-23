import React, { useEffect, useState } from 'react';
import { Segment, List, Container, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ObjetsList from './list/objetsList';


export default function ReadRootList() {
    let params = useParams();
    let configuration = parseInt(params.configId, 10);
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

    return (
        <Container>
            <Header as="h1">Liste des objets de {ConfigName}</Header>
                <Segment textAlign="left" padded='very'>
                    <List size="large" verticalAlign='middle'>
                        {APIData.map((objet) => {
                            return (
                                <ObjetsList key={objet.id} objet={objet} delete={deleteObject} />
                            )
                        }
                        )
                        }
                    </List>
                </Segment>
            <Link to={`/objects/${configuration}/create`}><Button color='green'>Nouvel objet</Button></Link>
        </Container>
    )
}