# PersonalApp
React native playground for myself.

You need to have a Google Vision API Key and a firebase account in order for this app to run.

## About The App

Currently, the app consists of a few features: 

1. To-do list (unfinished)
2. Google Vision Camera 
3. 3D Playground

The to-do list is not usable yet. It uses a simple array, so whenever you close the app, things that you've listed will disappear. I have yet to connect my application to firebase's database.

The Google Vision Camera can be used to take a photo, and the Google Vision API will detect what objects are in the camera.

The 3D Playground uses ThreeJS, but it is still very simple.

## Using The App

The App still depends on Expo to run. I haven't made the build version of it yet.

If you want to test the app out, here is the Expo link.
https://expo.io/@fabian_zhafran/thisismypersonalmixedapp

If you want to try tweaking the app, you can clone this repo. To open the app, you'll need to download Expo in your phone and the Expo CLI for your laptop.
First, go to your directory file, and then run the command "npm start".
Then, a metro bundler will show up from your browser, and after it says "tunnel ready", change the connection to Tunnel.
Open expo from your phone, and then scan the QR Code on your metro bundler. Then you wait until the app is loaded on your phone.




