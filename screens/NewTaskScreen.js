import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';


export default class NewTaskScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskId: 0,
      taskName: ''
    }
  }

  generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  render() {
    return (
      //al of this needs to be centered
      <View style={{ flex: 1, backgroundColor: 'skyblue', flexDirection: 'column' }}>

        <Input
          placeholder='Task name'
          onChangeText={(text) => { this.setState({ taskName: text }) }} //test if it works without setState
          containerStyle={{
            alignSelf: 'center'
          }}
          inputContainerStyle={{
            alignSelf: 'center'
          }}
        />

        <Button
          title='SUBMIT'
          buttonStyle={{
            width: 100,
            height: 50,
            alignSelf: 'center',
            marginTop: 30
          }}
          onPress={() => this.props.navigation.navigate("Home", {
            taskId: this.generateUUID(),
            taskName: this.state.taskName
          })}
        />

      </View>
    );
  }
}