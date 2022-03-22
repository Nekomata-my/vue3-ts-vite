import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { resolve } from 'path';

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), viteCommonjs()],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#2F54EB',
                    'warning-color': '#FF4D4F',
                },
                javascriptEnabled: true,
            },
        },
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: pathResolve('src') + '/',
            },
        ],
        dedupe: ['vue'],
    },
    server: {
        port: 8000, // 设置服务启动端口号
        host: true, // 允许跨域
        proxy: {
            '/api': {
                target: 'http://192.168.10.206:9002',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        target: 'es2015',
        outDir: 'dist',
        brotliSize: false,
        chunkSizeWarningLimit: 2000,
    },
});
