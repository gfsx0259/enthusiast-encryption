import { JSEncrypt } from "jsencrypt";

const jsEncrypt = new JSEncrypt();
let publicKey: string = '';

const ERROR_PUBLIC_KEY_MISSED: string = 'Can not encrypt, please provide public key';
const ERROR_ENCRYPT_FAILED: string = 'Can not encrypt, please ask support';

export function getEncryptLibrary(): JSEncrypt {
    return jsEncrypt;
}

export function setPublicKey(key: string): void {
    publicKey = key;
}

export function encryptData(value: any): string {
    const jsEncrypt = getEncryptLibrary();

    if (!publicKey) {
        throw new Error(ERROR_PUBLIC_KEY_MISSED);
    }

    jsEncrypt.setPublicKey(publicKey);

    const encodedResult = jsEncrypt.encrypt(value);

    if (!encodedResult) {
        throw new Error(ERROR_ENCRYPT_FAILED);
    }

    return encodedResult;
}
