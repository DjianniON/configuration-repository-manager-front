import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Read() {
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
            </Table>
        </div>
    )
}
