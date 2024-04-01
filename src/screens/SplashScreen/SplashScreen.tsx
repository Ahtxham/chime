/*
this file will contains only the UI structure of the screen
logic will go to useHook file
styles will go to styles file. 
*/
import React from 'react';
import {Wrapper, WelcomeModalText} from './styles'; // all the styles will be in this file. .
import useSplash from './useSplash'; // all the login will be in this file. .

const SplashScreen = () => {
  useSplash(); // all the login will be there.

  return (
    <Wrapper>
      <WelcomeModalText>CHIME</WelcomeModalText>
    </Wrapper>
  );
};

export default SplashScreen;
