import esbuildPluginTsc from 'esbuild-plugin-tsc';

export function createBuildSettings(options) {
    return {
        entryPoints: ['src/index.ts'],
        outfile: 'dist/bundle.js',
        bundle: true,
        platform: 'browser',
        format: 'iife',
        globalName: '_encrypt',
        footer: {
            js: "window.encryptData = _encrypt.default; window.setPublicKey = _encrypt.setPublicKey;"
        },
        plugins: [
            esbuildPluginTsc(),
        ],
        ...options
    };
}