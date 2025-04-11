# Enthusiast Encryption

![Logo](./logo.png)

### What is it?

It is package that will help you with encrypting any data with predefined project public key

### How to build?

```js
npm run build
```

### How to use?

```html
<script src="./bundle.js"></script>
<script type="text/javascript">
setPublicKey('-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt/eBgrQ3+7PFyMsfcce3\n' +
        'jFDqE3A7y1JeZUZ5qhBmzMB4BuXUqrZinL1Gwez5plSZmO56HqxLIi1cGudHSOKm\n' +
        'k+wY4RlN8ZPPIFseziBtu2PU+84g0PMSyMYNQCwKrzw9j58+Q6LFEOWdJ34hySVS\n' +
        'FhkZ1GTz19fEktmnhGqx1de+/1XrdkjpOPZfZad20VMc4vQ0ZFa3v4j/tcm0s6YH\n' +
        'YYtSelh6+Ojf7TPcFVzQLa44my3qD2N97AwZKs1zFtjtu/R01a60UEGdvRMyAEE1\n' +
        'afSk+xYZDUp8cNelRgiwLU0ycCuFopzuxrfEZBaESv7fUyskA22Mz39Xs1LX8sbu\n' +
        '0QIDAQAB\n' +
        '-----END PUBLIC KEY-----\n');

encryptData("123");
</script>
```