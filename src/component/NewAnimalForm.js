import React, { useState } from 'react';

export const NewAnimalForm = (props) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');

    const handleSpeciesInput = (e) => {
        setSpecies(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && species) {
            props.addNewAnimal({ name, species });
            setName('');
            setSpecies('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new animal</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='species'
                    onChange={handleSpeciesInput}
                    value={species}
                />
                <button type='submit'>Add Animal</button>
            </form>
        </div>
    );
};
