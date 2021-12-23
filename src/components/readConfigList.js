import React, { useEffect, useState } from 'react';
import { Table, Icon, Container, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReadList from './list/readList';


export default function ReadConfigList() {
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
            <Header as="h1">Liste des configurations</Header>
            <ReadList configurations={APIData} type="Configuration" links="configurations/" delete={deleteConfiguration} export={exportConfiguration} />
            <Link to="configurations/create"><Button color='green'>Nouvelle configuration</Button></Link>
        </Container>
    )
}