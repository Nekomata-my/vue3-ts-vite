import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';


import { AuthenticationClient } from 'authing-js-sdk'

const authing = new AuthenticationClient({
    appId: '61b882e425db2b52691ec30e'
  })
  
authing.registerByEmail('2wrewsdfjweofjowejfoiwejfoweijfiowrwf@qq.com', '123')

async function bootstrap() {
    const app = createApp(App);
    app.use(Antd);
    // 挂在pipn
    setupStore(app);
    // 挂在路由
    setupRouter(app);
    // 路由准备就绪后挂载APP实例
    await router.isReady();

    app.mount('#app');
}

bootstrap();
