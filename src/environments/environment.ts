// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBu-Yio2Gh27M1htlSW4O52ECQzljnyWr8",
    authDomain: "nba-be879.firebaseapp.com",
    databaseURL: "https://nba-be879.firebaseio.com",
    projectId: "nba-be879",
    storageBucket: "nba-be879.appspot.com",
    messagingSenderId: "711128714813"
  }
};