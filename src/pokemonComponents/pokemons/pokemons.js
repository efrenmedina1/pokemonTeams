import React from 'react';
import { Table, Button } from 'reactstrap';


const WorkoutTable = (props) => {

    return (
        <div>
            <h3>Workout History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pokemon1</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.workouts.map((pokemon1, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{pokemon1.id}</th>
                                    <td>{pokemon1.pokemon1}</td>
                                    <td>
                                        <Button id={pokemon1.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={pokemon1.id} onClick={e => props.update(e, pokemon1)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default WorkoutTable;