import { App } from './app';
import "reflect-metadata";
import { useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';

useContainer(Container);

async function main(){
    //Express server initializartion
    const app = new App();
    await app.listen();
}

main();