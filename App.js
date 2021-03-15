import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { StyledContainer } from './components/styles';

// screens
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
  return (
    <StyledContainer>
      <Signup />
      <StatusBar style="dark" />
    </StyledContainer>
  );
}
