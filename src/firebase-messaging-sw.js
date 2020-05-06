importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "87831460251",
    projectId: "redeflix-fd80d",
    apiKey: "AIzaSyDolcP7sZmHTteAePSrDVECoE9wYBEgHhs",
    appId: "1:87831460251:web:301e8e42ebbea3c9d2093e"
});
const messaging = firebase.messaging();