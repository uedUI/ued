import * as components from "./index";
declare module "@vue/runtime-core" {
  // 组件全局提示效果
  export interface GlobalComponents {
    UedButton: typeof components.Button;
  }
}
export {};