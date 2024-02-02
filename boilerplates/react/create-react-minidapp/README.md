# Pre-requisites
- node.js https://nodejs.org/en/download/
- Code Editor, we recommend Visual Studio code https://code.visualstudio.com/ 
- a running Minima node

# Getting Started with Create Minima App

This boilerplate has been created with `Create React App`. You can use this boilerplate to build Minima MiniDapps. To create your application, edit the files in the `/src` folder.

## How to build and install my app

To build your app, please run the following command in the `create-minima-app` directory: `npm i` and then run `npm run build`. Once the app has been built, you can run `npm run zip` to create an MiniDapp .mds.zip file in the `/minidapp` folder.

### Installing on a Desktop node

Login to your MiniDapp Hub by going to `https://localhost:9003` (default MDS port) and log in. You must log in using a password that you can retrieve by running `mds` in the Minima Terminal. Once you are logged in, scroll to the bottom and click `Choose file`, locate your zip file and click the `install` button and your app should be installed. Click `Back to MDS Hub` and you should now see your app in the list. Click on your app to open it.

### Installing on Android

Either connect to your Android node using the Desktop connect feature and continue to install the MiniDapp as above, or transfer your app to your phone's storage and open the Minima app. Click on the `+` button on the bottom right of the screen. Locate and select the zip file on your phone and you should be taken back to the app list. You should now see your app in the list. Tap on your app to open it.

## Do I have to reinstall after every change?

No, we have a solution that allows you to get around the issue to take advantage of `Create React App`'s automatic reloading on file changes.

- Ensure you have installed the app using the instructions above on desktop
- Duplicate the `.env.example` file and rename it to `.env` (this is your project root)
- Configure the environment values, you can leave everything default unless you are running Minima on a custom port. If connecting to a phone node, change the IP address to that as shown in the Health section of the app.
- Open your app on Desktop
- Your url will look something like: `https://localhost:9003/{APP_ID}/index.html?uid=YOUR_UID`
- Copy the value at the end where YOUR_UID is in the URL e.g. `0xD497A626EF65C24417D4F7AE0CC48289BCB1062FB9763D47A20326984E099299`
- Replace `REACT_APP_DEBUG_UID` in the env file with the uid you copied
- Run `npm run start`
- Edit `/src/App.jsx` and the browser window will automatically reload and should be connected to Minima