import { defineStore } from "pinia";

const useLayOutSettingStore = defineStore("SettingStore", {
  state: () => {
    return {
      fold: false,
    };
  },
  actions: {
    setFold(value: boolean) {
      this.fold = value;
    },
    toggleFold() {
      this.setFold(!this.fold);
    },
  },
});

export default useLayOutSettingStore;
