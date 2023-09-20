declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any> & {
        install(app: App): void
    }
    export default component
}