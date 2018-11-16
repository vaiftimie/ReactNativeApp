import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'powderblue', flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Stats</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Productive</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Menu</Text>
                </View>
            </View>
        );
    }
}