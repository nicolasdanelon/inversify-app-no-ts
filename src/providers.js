import React from 'react';
import 'reflect-metadata';
import * as inversify from 'inversify';
import { useParams } from 'react-router-dom';
import WelcomeEn from './screens/welcome/WelcomeEn';
import WelcomeEs from './screens/welcome/WelcomeEs';

class greetingProvider {
    constructor() {
        console.log('greetingProvider constructor');
    }

    provide() {
        const { lang } = useParams();
        console.log('greetingProvider provide method');

        if (lang === 'en') {
            return <WelcomeEn />;
        }

        return <WelcomeEs />;
    }
}

inversify.decorate(inversify.injectable(), greetingProvider);

export default greetingProvider;
