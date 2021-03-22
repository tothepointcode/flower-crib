import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
} from './../components/styles';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Welcome = () => {
  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email, photoUrl } = storedCredentials;

  const AvatarImg = photoUrl
    ? {
        uri: photoUrl,
      }
    : require('./../assets/img/expo-bg1.png');

  const clearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />

        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>{name || 'Olga Simpson'}</SubTitle>
          <SubTitle welcome={true}>{email || 'olgasimp@gmail.com'}</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="cover" source={AvatarImg} />

            <Line />
            <StyledButton onPress={clearLogin}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
