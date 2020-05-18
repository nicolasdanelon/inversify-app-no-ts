import React from 'react';
import Screen from '../../Components/Screen';
// import { useInjection } from '../../InjectionProvider';
import WelcomeEn from '../welcome/WelcomeEn';

const Login = ({ children }) => {
    // const Greeting = useInjection('greetingProvider').provide();
    const Greeting = WelcomeEn();

    return (
        <Screen>
            <h1>Dashboard!</h1>
            <Greeting />
        </Screen>
    );
};

export default Login;
