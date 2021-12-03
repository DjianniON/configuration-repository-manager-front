import React from 'react';
import { Button, Table } from 'semantic-ui-react'
export default function Read() {
    const setData = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Configuration</Table.HeaderCell>
                        <Table.HeaderCell>Test</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Yes</Table.Cell>
                        <Table.Cell>Oui</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.Cell> 
                    <Button onClick={() => setData()}>Update</Button>
                </Table.Cell>
            </Table>
        </div>
    )
}
