const user_table = document.querySelector('user-table');
const app_table = document.querySelector('app-table');

var app = new OrkestraAPI.Orkestra({url:"https://cloud.flexcontrol.net/",channel:'traction1',profile:'admin',master:true});
app.userObservable.subscribe(z=>{


});

app.readyObservable.subscribe(x => {


});
app.appObservable.subscribe(x => {

});
