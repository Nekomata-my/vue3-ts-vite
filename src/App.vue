<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    // import zhCN from 'ant-design-vue/es/locale/zh_CN';
    // import dayjs from 'dayjs';
    // import 'dayjs/locale/zh-cn';
    // dayjs.locale('zh-cn');
</script>

<template>
    <a-config-provider :locale="zhCN">
        <router-view />
    </a-config-provider>
</template>

<style lang="less"></style>
