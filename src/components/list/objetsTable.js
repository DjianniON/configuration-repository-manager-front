import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ObjetsTable(props) {
    let element = props.objet;
    return (
        <Table.Row>
            <Table.Cell>{element.nom}</Table.Cell>
            <Table.Cell>
                <Link to={`${props.link}/${element.id}`}>
                    <Icon link name='eye' />
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Link to={`${props.link}/${element.id}/edit`}>
                    <Icon link name='edit' />
                </Link>
            </Table.Cell>
            <Table.Cell>
                <span onClick={() => props.delete(element.id)}>
                    <Icon link name='close' />
                </span>
            </Table.Cell>
        </Table.Row>
    )
}