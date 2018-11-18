import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Task from '../Task/Task';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: 0
        };
    }

    incrementTasks() {
        this.setState(previousState => (
            { tasks: previousState.tasks + 1 }
        ))
    }

    decrementTasks() {
        if (this.state.tasks > 1)
            this.setState(previousState => (
                { tasks: previousState.tasks - 1 }
            ))
    }

    render() {
        let tasksRender = [];

        for (let i = 0; i < this.state.tasks; i++) {
            tasksRender.push(<Task key={i}>
            </Task>);
        }

        return (
            <View style={{ flex: 7, backgroundColor: 'skyblue', flexDirection: 'column', }}>
                <Button
                    onPress={() => {
                        this.incrementTasks();
                    }}
                    title="Add a new task"
                />
                {tasksRender}
            </View>
        );
    }
}