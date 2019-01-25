import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'powderblue', flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: 'turquoise', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Stats</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Awesome App</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Settings</Text>
                </View>
            </View>
        );
    }
}