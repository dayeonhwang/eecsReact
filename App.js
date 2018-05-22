import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS, AppRegistry, SectionList, Button, Image, FlatList, Alert } from 'react-native';
import { List, ListItem,SearchBar } from 'react-native-elements';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import EmojiSelector from 'react-native-emoji-selector';
import Accordion from 'react-native-collapsible/Accordion';

class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={styles.logo}> EECS React </Text>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return(
      <FlatList
      data = {[
        {title: 'EECS 111', subtitle: 'Fundamentals of Computer Programming 1', key: '1'},
        {title: 'EECS 211', subtitle: 'Fundamentals of Computer Programming 2', key: '2'},
        {title: 'EECS 212', subtitle: 'Discrete Math', key: '3'},
        {title: 'EECS 213', subtitle: 'Intro to Computer Systems', key: '4'},
        {title: 'EECS 214', subtitle: 'Data Structures and Data Management', key: '5'},
        {title: 'EECS 325', subtitle: 'Artificial Intelligence Programming', key: '6'},
        {title: 'EECS 330', subtitle: 'Human Computer Interaction', key: '7'},
        {title: 'EECS 343', subtitle: 'Operating Systems', key: '8'},
        {title: 'EECS 348', subtitle: 'Intro to Artificial Intelligence', key: '9'},
        {title: 'EECS 349', subtitle: 'Machine Learning', key: '10'},
      ]}
      renderItem={({item}) =>
        <ListItem
          style={styles.container}
          title={item.title}
          subtitle={item.subtitle}
          titleNumberOfLines={0}
          subtitleNumberOfLines={0}
          onPress={() => {
            var id = item.key;
            var title = item.title;
            var subtitle = item.subtitle;
            this.props.navigation.navigate('Details', {
              titleParam: title, subtitle
            });
          }}
        />}
      />
    )
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('titleParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const titleParam = navigation.getParam('titleParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>titleParam</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#82a7f2',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    flex: 1,
  },
  searchInput: {
    flex: 1,
  }
});
