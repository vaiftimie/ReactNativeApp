import React from 'react';
import { View } from 'react-native';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}