import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { StyledContainer } from './components/styles';

// screens
import Login from './screens/Login';

export default function App() {
  return (
    <StyledContainer>
      <Login />
      <StatusBar style="dark" />
    </StyledContainer>
  );
}
