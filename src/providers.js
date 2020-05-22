import * as inversify from 'inversify';
import 'reflect-metadata';
import { useParams } from 'react-router-dom';
import WelcomeEn from './screens/welcome/WelcomeEn';
import WelcomeEs from './screens/welcome/WelcomeEs';

class greetingProvider {
    provide() {
        const { lang } = useParams();

        if (lang === 'en') {
            return WelcomeEn;
        }

        return WelcomeEs;
    }
}

inversify.decorate(inversify.injectable(), greetingProvider);

export default greetingProvider;
