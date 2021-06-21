import {Orkestra,Utils,TextData} from 'orkestraLib'
import {MediaElement} from './media-component.js'
const user_table = document.querySelector('orkestra-ui').querySelector('user-table');
const app_table = document.querySelector('app-table');

var app = new Orkestra({url:"https://cloud.flexcontrol.net/",channel:'traction1',profile:'admin',master:Utils.getUrlVar('master') === 'true'});
app.userObservable.subscribe(z=>{
    
});

app.readyObservable.subscribe(x => {

});
app.appObservable.subscribe(x => {
 
});
