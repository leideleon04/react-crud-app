import React, { useState } from 'react';
import { NewAnimalForm } from './NewAnimalForm';

export const Rescue = (props) => {
    const { rescue: initialRescue = {}, updateRescue } = props; // Provide a default value for rescue

    const [rescue, setRescue] = useState(initialRescue);

    const deleteAnimal = (animalId) => {
        const updatedRescue = {
            ...rescue,
            animals: rescue.animals ? rescue.animals.filter((x) => x._id !== animalId) : []
        };
        setRescue(updatedRescue); // Use setRescue to update the rescue state
    };

    const addNewAnimal = (animal) => {
        const newAnimal = { ...animal, _id: Date.now() }; // Add a unique ID
        setRescue((prevRescue) => ({
            ...prevRescue,
            animals: [...(prevRescue.animals || []), newAnimal],
        }));
    };

    return (
        <div>
            <h1>{rescue.name}</h1>
            <ul>
                {(rescue.animals || []).map((animal, index) => (
                    <li key={animal._id}>
                        <label>{`${animal.name} Species: ${animal.species}`}</label>
                        <button onClick={() => deleteAnimal(animal._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <NewAnimalForm addNewAnimal={addNewAnimal} />
        </div>
    );
};
