/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Demo3 = require('./Demo3');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  ScrollView,
  Text,
  View,
} = React;



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

var Comunicate = React.createClass({
  render: function() {
   

    return (
      <NavigatorIOS
        style={{flex : 1}}
        initialRoute={{
          title: '组件间通信 Event',
          component: Demo3,
        }}/>
    );
  }
});


AppRegistry.registerComponent('Comunicate', () => Comunicate);
