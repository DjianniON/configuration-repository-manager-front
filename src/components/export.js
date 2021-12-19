import React from 'react'
import { Container, Button, Select } from 'semantic-ui-react'

const formatOption = [
  { key: 'JSON', value: 'JSON', text: 'JSON' },
]


function SelectExample() {
    return (
        <Select placeholder='Choisissez votre format' options={formatOption} />
    );
}
export default SelectExample;