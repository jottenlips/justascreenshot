# Just A Screenshot

```
  _______
 |__/-\[]|
 |  (_)  |
 |_______|
    /|\
www.asciiart.eu
```

This is a microservice that takes screenshots of any webpage and responds with the resulting image.

## Deploy

Setup your AWS Credentials, or configure for your preferred cloud provider.

`yarn install -g serverless`

`yarn`

`serverless deploy`

## Use

`curl https://yourdomain.com/?url=https://sneak.berlin/20201112/your-computer-isnt-yours/`

## Advanced

Pass any option found in [capture-website](https://www.npmjs.com/package/capture-website)

A few examples:

```
width
default: 1280


height
default: 800

quality
default: 1

scaleFactor
default: 2

emulateDevice
```

`curl https://yourdomain.com/?emulateDevice=iPhone%20X&url=https://sneak.berlin/20201112/your-computer-isnt-yours/`
