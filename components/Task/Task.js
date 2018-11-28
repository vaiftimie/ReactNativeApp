import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class Task extends Component {
    constructor(props) {
        super(props);
    }

    removeItem() {
        super.removeTask(this.state.id);
    }

    render() {
        return (
            <View style={{ backgroundColor: 'olive', height: 50, margin: 15, flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: 'lime', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>V</Text>
                </View>

                <View style={{ flex: 6, backgroundColor: 'olive', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>{this.props.task.description}</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
                    <Button
                        style={{ textAlign: 'center', textAlignVertical: 'center' }}
                        onPress={() => { this.props.removeHandler(this.props.task.id) }}
                        title="X"
                    />
                </View>
            </View>
        );
    }
}