import { Container } from 'inversify';
import greetingProvider from './providers';

export const container = new Container();
container.bind('greetingProvider').to(greetingProvider);

export default container;
