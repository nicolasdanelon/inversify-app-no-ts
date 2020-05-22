import React from 'react';
import Screen from '../../Components/Screen';
import { useInjection } from '../../InjectionProvider';

const Login = ({ children }) => {
    const Greeting = useInjection('greetingProvider').provide();

    return (
        <Screen>
            <h1>Dashboard!</h1>
            <Greeting />
        </Screen>
    );
};

export default Login;
