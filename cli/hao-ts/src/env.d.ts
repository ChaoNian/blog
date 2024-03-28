/// <reference types="vite/client" />
declare module '*.vue' { // ts 声明文件， 使得ts可以兼容.vue文件
    import type {DefineComponent} from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}