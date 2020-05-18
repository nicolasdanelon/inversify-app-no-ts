import React from 'react';
import Navigation from './Components/Navigation';
import InjectionProvider from './InjectionProvider';
import container from './Containers';
import './App.css';

const App = () => (
    <InjectionProvider container={container}>
        <Navigation />
    </InjectionProvider>
);

export default App;
