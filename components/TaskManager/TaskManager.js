import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import Task from '../Task/Task';

export default class TaskManager extends Component {
    constructor(props) {
        super(props);

        this.scroll = null;
        this.state = {
            tasks: []
        };

        this.removeTask = this.removeTask.bind(this);
    }

    addTask(task) {
        this.setState(previousState => (
            { tasks: [...previousState.tasks, task] }
        ));
        setTimeout(() => {
            this.scroll.scrollToEnd();
        }, 50);
    }

    removeTask(id) {
        this.setState(previousState => (
            { tasks: previousState.tasks.filter(task => task.id !== id) }
        ));
    }

    render() {
        return (
            <ScrollView ref={(scroll) => { this.scroll = scroll; }}>
                <Button
                    onPress={() => this.props.navigation.navigate('NewTask')}

                    // {
                    //     this.addTask({
                    //         id: this.state.tasks.length, //this needs to be changed
                    //         description: "Task details " + this.state.tasks.length
                    //     });
                    // }
                    title="Add a new task"
                />
                {this.state.tasks.map((task, index) => <Task key={index} task={this.state.tasks[index]} removeHandler={this.removeTask} />)}
                {/* index as key is not ok - it is unique only in a very particular case */}
            </ScrollView>
        );
    }
}