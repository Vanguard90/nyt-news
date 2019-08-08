import { ITopStories } from './service-interface';

const apikey = '3b6e4cf6acee482fb77482cfd4416c0b'; 
// For the people looking at this repository: This is public key you can get in 10m from NYT,
// So no need to hide it in environmental variables etc. It's not necessarily a private key.

export async function getTopStories(): Promise<ITopStories> {

    let result: Promise<ITopStories>;
    await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apikey}`)
        .then( response => {
            if (response.ok) {
                result = response.json();
            }
           }).catch((err) => {
            console.error('gettopStories fetch error: ', err);
           });
        return result; // Note that perhaps try/catch is a better option here!!!
}