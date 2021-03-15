import React, { useState } from 'react';

// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  SubTitle,
  Colors,
} from './../components/styles';
import { TextInput, View, Text } from 'react-native';

//colors
const { darkLight, brand, green, primary, tertiary } = Colors;

// icon
import { Octicons, Fontisto } from '@expo/vector-icons';

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <InnerContainer>
      <PageTitle>Flower Crib</PageTitle>
      <SubTitle>Account Signup</SubTitle>

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledFormArea>
            <MyTextInput
              label="Full Name"
              placeholder="Richard Barnes"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              icon="person"
            />
            <MyTextInput
              label="Email Address"
              placeholder="andyj@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              icon="mail"
            />
            <MyTextInput
              label="Date of Birth"
              placeholder="andyj@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              icon="calendar"
            />
            <MyTextInput
              label="Password"
              placeholder="* * * * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              icon="lock"
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MyTextInput
              label="Confirm Password"
              placeholder="* * * * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={hidePassword}
              icon="lock"
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MsgBox>...</MsgBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Signup</ButtonText>
            </StyledButton>
            <Line />
            <ExtraView>
              <ExtraText>Already have an account? </ExtraText>
              <TextLink>
                <TextLinkContent>Login</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>
        )}
      </Formik>
    </InnerContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Octicons name={hidePassword ? 'eye-closed' : 'eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
