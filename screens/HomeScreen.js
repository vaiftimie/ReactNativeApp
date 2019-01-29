import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ScrollView, Button } from 'react-native';
import Task from '../components/Task/Task';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.scroll = null;
    this.state = {
      tasks: []
    };

    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.state = {
      tasks: [...this.state.tasks, task]
    }
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
    const { navigation } = this.props;

    const taskId = navigation.getParam('taskId', null);
    const taskName = navigation.getParam('taskName', null);

    if (taskId != null && taskName != null) {
      if (this.state.tasks.filter(task => task.id === taskId).length == 0)
        this.addTask({
          id: taskId,
          description: taskName
        });

      navigation.setParams({
        taskId: null,
        taskName: null
      });
    }

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 7, backgroundColor: 'skyblue', flexDirection: 'column' }}>
          <ScrollView ref={(scroll) => { this.scroll = scroll; }}>
            <Button
              onPress={() => this.props.navigation.navigate('NewTask')}
              title="Add a new task"
            />
            {this.state.tasks.map((task, index) => <Task key={task.id} task={this.state.tasks[index]} removeHandler={this.removeTask} />)}
          </ScrollView>
        </View>

        <Footer />
      </View>
    );
  }
}