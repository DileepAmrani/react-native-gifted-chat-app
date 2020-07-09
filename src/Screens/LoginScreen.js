import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  continue = (event) => {
    this.props.navigation.navigate('Chat', this.state.name);
  };
  render() {
    return (
      <View style={style._container}>
        <Text style={style._circle} />
        <View style={{marginTop: 64}}>
          <Image
            source={require('./../Assets/logo.png')}
            style={{width: 100, height: 100, alignSelf: 'center'}}
          />
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={style._header}>UserName</Text>
          <TextInput
            style={style._input}
            placeholder="Enter Name"
            onChangeText={(name) => {
              this.setState({name});
            }}
            value={this.state.name}
          />

          <View style={{alignItems: "flex-end", marginTop: 40}}>
                <TouchableOpacity style={style._continue} onPress={this.continue}>
                  <Text style={{ color: '#fff'}}>Submit</Text>
                </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  _circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  _header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 50,
  },
  _input: {
    marginTop: 25,
    height: 50,
    borderColor: '#bab7c3',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 16,
    color: '#514e5a',
    fontWeight: '900',
  },
  _continue:{
      width: 100,
      height: 50,
      borderRadius: 70 / 2,
      backgroundColor: '#299680',
      alignItems: "center",
      justifyContent: 'center',
     
  }
});
