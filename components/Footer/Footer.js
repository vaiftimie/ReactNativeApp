import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'steelblue', flexDirection: 'row' }}>
                <View style={{ flex: 6, backgroundColor: 'green', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>6 days in the past</Text>
                </View>

                <View style={{ flex: 2, backgroundColor: 'blue', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Today</Text>
                </View>
            </View>
        );
    }
}