import { Observable } from 'rxjs';
import { ITopStories } from './service-interface';

const apikey = '3b6e4cf6acee482fb77482cfd4416c0b'

export function getTopStories(): Observable<ITopStories> {
    return Observable.create( observer => {
        fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apikey}`)
        .then( response => response.json())
        .then( jsonResponse => observer.next(jsonResponse))
    }, err => {
        console.log('getTopStories API call error! Err: ' + err);
    })
}