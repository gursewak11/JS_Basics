// // Local storage
// // Fetch api
// // Methods like allerts 

// // Window methods / object /properties
// console.log(window);

// // Alert
// // window.alert('Hello World');
// alert('Hello World');

// // Prompt
// const input = prompt();
// alert(input);

// // Conferm
// if(confirm('Are you sure')){
//   console.log('Yes');
// }else{
//   console.log('No');
// }

let val;

// Outter Height and Width
val = window.outerHeight;
val = window.outerWidth;

// Inner Height and Width
val = window.innerHeight;
val = window.innerWidth;

// Scrole Points
val = window.scrollY;
val = window.scrollX;

// Locatio Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redurect
// window.location.href = 'https://www.google.com/';  

// Reload
// window.location.reload();

// History Object
// window.history.go(-3);    // Take to previous history
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.geolocation;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
