import { JSEncrypt } from "jsencrypt";

const jsEncrypt = new JSEncrypt();

const ERROR_ENCRYPT_FAILED: string = 'Can not encrypt, please ask support';

export function getEncryptLibrary(): JSEncrypt {
    return jsEncrypt;
}

export function encryptData(value: any): string {
    const jsEncrypt = getEncryptLibrary();

    const encodedResult = jsEncrypt.encrypt(value);

    if (!encodedResult) {
        throw new Error(ERROR_ENCRYPT_FAILED);
    }

    return encodedResult;
}
