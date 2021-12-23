import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ObjetsTable(props) {
    let element = props.objet;
    const triggerModal = (element) => {
        props.setType(props.type);
        props.deleteElement(element);
    }

    return (
        <Table.Row>
            <Table.Cell>{element.nom}</Table.Cell>
            <Table.Cell textAlign='center'>
                <Link to={`${props.link}/${element.id}`}>
                    <Icon link name='eye' />
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Link to={`${props.link}/${element.id}/edit`}>
                    <Icon link name='edit' />
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <span onClick={() => triggerModal(element)}>
                    <Icon link name='close' />
                </span>
            </Table.Cell>
        </Table.Row>
    )
}