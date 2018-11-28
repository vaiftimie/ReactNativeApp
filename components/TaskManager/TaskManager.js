import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import Task from '../Task/Task';

export default class TaskManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.removeTask = this.removeTask.bind(this);
    }

    addTask(task) {
        this.setState(previousState => (
            { tasks: [...previousState.tasks, task] }
        ));
    }

    removeTask(id) {
        this.setState(previousState => (
            { tasks: previousState.tasks.filter(task => task.id !== id) }
        ));
    }

    render() {
        return (
            <View>
                <Button
                    onPress={() => {
                        this.addTask({
                            id: this.state.tasks.length,
                            description: "Task details " + this.state.tasks.length
                        });
                    }}
                    title="Add a new task"
                />
                {this.state.tasks.map((task, index) => <Task key={index} task={this.state.tasks[index]} removeHandler={this.removeTask} />)}
                {/* index as key is not ok - it is unique only in a very particular case */}
            </View>
        );
    }
}