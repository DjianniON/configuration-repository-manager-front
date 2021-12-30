import React from 'react'
import { Icon, Menu, Button, MessageHeader, Message, Container } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom';

export default function ErrorNotFound() {
    let navigation = useNavigate();
    return (
        <Container>
        <Menu secondary pointing>
            <Menu.Item as={Button} onClick={() => navigation(-1)} name='back'>
                <Icon name='left arrow' />
                Précédent
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as={Link} to="/" name='home'>
                    <Icon name='home' />
                    Accueil
                </Menu.Item>
            </Menu.Menu>
            
            
        </Menu>

        <Message negative>
            <MessageHeader>Accès interdit</MessageHeader>
            <p>Veuillez retourner en arrière.</p>
        </Message>
            
        </Container>
    )
}
