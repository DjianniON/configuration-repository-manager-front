import React from 'react'
import { MessageHeader, Message, Container } from 'semantic-ui-react'
import ContextMenu from './contextMenu';

export default function ErrorNotFound() {
    return (
        <Container>
            <ContextMenu />
            <Message negative>
                <MessageHeader>Accès interdit</MessageHeader>
                <p>Veuillez retourner en arrière.</p>
            </Message>
        </Container>
    )
}
