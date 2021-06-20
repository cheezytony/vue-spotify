import { ComponentPublicInstance } from 'vue';

declare module 'vue-router' {
  export interface Router {
    app: ComponentPublicInstance
  }
}
