import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
          <View style={styles.container}>
            <TextInput
              style={styles.search}
              onSubmitEditing={this._handleTextChange}
              placeholder={'Search for your meal'}
              />
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignSelf: 'stretch',
    },
    search: {
        margin: 15,
        paddingLeft:  15,
        paddingRight:  15,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
    }
});

export default  SearchBar ;


