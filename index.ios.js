/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Demo1 = require('./Demo1');
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
    // return (
    //   <ScrollView>  
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <ScrollView style={{flex : 1}}>
    //         <View style={{flex:1,height : 300, backgroundColor:'#cccccc'}}>
    //             <Text style={styles.instructions}>
    //               To get started, edit index.ios.js
    //             </Text>
    //         </View>
    //     </ScrollView>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+Control+Z for dev menu
    //     </Text>
    //   </View>
    //   </ScrollView>
    // );

    return (
      <NavigatorIOS
        style={{flex : 1}}
        initialRoute={{
          title: 'Property Finder',
          component: Demo1,
        }}/>
    );
  }
});


AppRegistry.registerComponent('Comunicate', () => Comunicate);
