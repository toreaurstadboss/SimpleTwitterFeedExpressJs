### Simple sample with Express.js for Twitter integration

This simple repository shows how a Twitter integration can be created using Node.js and Express.js.

Add in your API keys+secrets for access token and consumer key from Twitter inside config.js file.

To launch the application just enter:
npm start

The application will then listen to port: 3000

To work with the solution type:
nodemon

When changing the Js code, Express will reload using nodemon.

To debug the solution in VsCode, run :
npm run debug

The solution using the following launch.json to debug properly in VsCode.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}\\server.js"
    }
  ]
}
```

Then just launch the following into your favorite browser to get latest 10 tweets.

https://localhost:3000/tweets/tore_Aurstad

Note : the parameter after the slash is the Twitter username.

Supports Twitter Api v 1.1.
