import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class BlinkingText extends Component {
    constructor(props) {
        super(props);
        this.state = { show: true };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { show: !previousState.show };
            });
        }, 1000);
    }

    render() {
        let display = this.state.show ? this.props.text : ' ';
        return (
            <Text style={styles.red}>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue',
    },
    red: {
        color: 'red',
    },
});