import { SpotifyItem } from "@/types/spotify";
import { App } from "vue";

const itemType = (item: SpotifyItem, displayType: 'Grid' | 'List') => ucFirst(item.type) + displayType;
const ucFirst = (string: string) => string.replace(/^\w/, (firstChar: string) => firstChar.toUpperCase());

export default {
  install(app: App): void {
    app.config.globalProperties.$filters = {
      itemType,
      ucFirst,
    };
  },
}
