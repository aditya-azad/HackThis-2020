import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <View style={{ 
          borderBottomColor: '#6c63ff',
          borderBottomWidth: 1,
          width: 400,
          padding: 10
      }}/>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Classes',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 10,
    //backgroundColor: '#41B8E8',
  },
  text: {
    color: '#6c63ff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: "Ubuntu-Medium"
  },
});

export default Header;