import React, { useEffect, useState } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReadList from './list/readList';


export default function ReadRefList() {
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

    const deleteRef = (id) => {
        console.log("delete " + id);
        /*axios.delete(`localhost:8080/api/v1/referentiels/${id}`)
        .then(() => {
            getData();
        })*/
    }

    const exportRef = (id) => {
        console.log("Export " + id);
    }

    return (
        <Container>
            <Header as="h1">Liste des référentiels</Header>
            <ReadList referentiels={APIData} type="Référentiel" links="" delete={deleteRef} export={exportRef} />
            <Link to="/create"><Button color='green'>Nouveau référentiel</Button></Link>
        </Container>
    )
}