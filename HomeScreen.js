import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.context.currentFriends.length } friends!</Text>

        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;

// ...