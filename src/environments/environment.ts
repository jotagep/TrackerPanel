// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCoY5LaKZmZXvlIQAf-9eWXjOMwmD5h6pA',
    authDomain: 'trackerapp-fcd5e.firebaseapp.com',
    databaseURL: 'https://trackerapp-fcd5e.firebaseio.com',
    projectId: 'trackerapp-fcd5e',
    storageBucket: 'trackerapp-fcd5e.appspot.com',
    messagingSenderId: '703973898989'
  }
};
