import esbuildPluginTsc from 'esbuild-plugin-tsc';

export function createBuildSettings(options) {
    return {
        entryPoints: ['src/index.ts'],
        outfile: 'dist/bundle.js',
        bundle: true,
        legalComments: 'none',
        platform: 'browser',
        format: 'iife',
        globalName: '_encrypt',
        footer: {
            js: "var encryptData = _encrypt.encryptData; var getEncryptLibrary = _encrypt.getEncryptLibrary;"
        },
        plugins: [
            esbuildPluginTsc(),
        ],
        ...options
    };
}