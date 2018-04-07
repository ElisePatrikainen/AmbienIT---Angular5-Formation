// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase: {
    apiKey: "AIzaSyCX-tE-ndyp7kGI6ewBiSfQ9uwrZ26Q_aE",
    authDomain: "awesome-ng-app.firebaseapp.com",
    databaseURL: "https://awesome-ng-app.firebaseio.com",
    projectId: "awesome-ng-app",
    storageBucket: "awesome-ng-app.appspot.com",
    messagingSenderId: "381154028194"
  }
};
