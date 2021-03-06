/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');


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
        this.props.updateChange(text);
    },


  render() {

    return (
      <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF'}}>
        <TextInput onChangeText={(text) => this.handleUpdateChange(text)} style={{ width : 200, height: 40, borderColor: 'gray', borderWidth: 1}} />
      </View>
    );
  }
});




var ShowText = React.createClass({


    render() {

        return (
          <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF'}}>
            <Text>{this.props.text}</Text>
          </View>
        );
    }
});

module.exports = React.createClass({

  getInitialState(){
    return {
      text : '我是文字'
    }
  },

  handleChange(textValue){
    this.setState({
      text: textValue
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Input updateChange={this.handleChange} />
        <ShowText text={this.state.text} />
      </View>
    );
  }
});
