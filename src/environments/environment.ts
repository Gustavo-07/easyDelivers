// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCP_OArXPev_zxF5NYG4-HOq814MDKUWIY",
    authDomain: "easy-deliverys.firebaseapp.com",
    databaseURL: "https://easy-deliverys.firebaseio.com",
    projectId: "easy-deliverys",
    storageBucket: "easy-deliverys.appspot.com",
    messagingSenderId: "575079302441",
    appId: "1:575079302441:web:441f4b5941a11121b8e338",
    measurementId: "G-P7R4LSMHB8"
  },
  mapbox: {
    accessToken: 'pk.eyJ1Ijoicm95YmVyMzY5IiwiYSI6ImNrYXJmZ3h5MjBsaXMyeHBscGc1ZDU0eHgifQ.I0GmdThtjt8gh3c7pOB3JQ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
