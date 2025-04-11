import { JSEncrypt } from "jsencrypt";

let publicKey: string = '';

const ERROR_PUBLIC_KEY_MISSED: string = 'Can not encrypt, please provide public key';
const ERROR_ENCRYPT_FAILED: string = 'Can not encrypt, please ask support';

export function setPublicKey(key: string): void {
    publicKey = key;
}

export default function(value: any): string {
    const jsEncrypt = new JSEncrypt();

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
