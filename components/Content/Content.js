import React, { Component } from 'react';
import { View, Button } from 'react-native';
import TaskManager from '../TaskManager/TaskManager';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 7, backgroundColor: 'skyblue', flexDirection: 'column', }}>
                <TaskManager/>
            </View>
        );
    }
}