/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

var {
  StyleSheet,
  Text,
  View,
  TextInput
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


var Input = React.createClass({

    handleUpdateChange(text) {
        RCTDeviceEventEmitter.emit('change',text);
    },


  render() {

    return (
      <View style={{justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF'}}>
        <TextInput onChangeText={(text) => this.handleUpdateChange(text)} style={{ width : 200, height: 40, borderColor: 'gray', borderWidth: 1}} />
      </View>
    );
  }
});




var ShowText = React.createClass({

    getInitialState(){
      return {
        text : ''
      }
    },

    componentDidMount(){
      var me = this;
      RCTDeviceEventEmitter.addListener('change',function(text){
         me.setState({
          text : text
         })
      })
    },


    render() {
        return (
          <View style={{justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF'}}>
            <Text>{this.state.text}</Text>
          </View>
        );
    }
});

module.exports = React.createClass({


  render() {
    return (
      <View style={styles.container}>
        <Input />
        <ShowText />
      </View>
    );
  }
});
