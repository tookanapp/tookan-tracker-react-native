/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import MapTracking from 'react-native-tookan-tracker';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isTracking: false,
      jobId: '',
      userId: '',
    };
  }

  _startTracking = () => {
    this.setState({isTracking: true});
  };

  render() {
    if (!this.state.isTracking) {
      return (
        <View style={{justifyContent: 'center', flex: 1}}>
          <TextInput
            placeholder="Enter Job Id"
            returnKeyLabel={'next'}
            onChangeText={jobId => this.setState({jobId})}
            style={{
              padding: 5,
              height: 30,
              width: '100%',
              backgroundColor: '#aaa',
              marginVertical: 2,
            }}
          />
          <TextInput
            placeholder="Enter User Id"
            returnKeyLabel={'next'}
            onChangeText={userId => this.setState({userId})}
            style={{
              padding: 5,
              height: 30,
              width: '100%',
              backgroundColor: '#aaa',
              marginVertical: 2,
            }}
          />
          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#aa9',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
            onPress={() => {
              this._startTracking();
            }}>
            <Text>Start Tracking</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <MapTracking
        mapKey="your_google_api_key"
        jobId={this.state.jobId}
        userId={this.state.userId}
      />
    );
  }
}
