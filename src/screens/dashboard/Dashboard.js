import React from 'react';
import Screen from '../../Components/Screen';
import { useInjection } from '../../InjectionProvider';
import { Link } from 'react-router-dom';

const Login = ({ children }) => {
    const Greeting = useInjection('greetingProvider').provide();

    return (
        <Screen>
            <h1>Dashboard!</h1>
            <Greeting />
            <Link to="/" style={{ color: '#fff' }}>
                Logout
            </Link>
        </Screen>
    );
};

export default Login;
