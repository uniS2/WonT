import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLocalStore = create(
  devtools((set) => ({
    selectName: null, // 선택된 LocalItem 이름를 저장하는 변수
    selectIndex: null, // 선택된 LocalItem 인덱스를 저장하는 변수
    setSelectIndex: (index) =>
      set(
        () => ({ selectIndex: index }),
        false,
        'local/id'
      ),
    setSelectName: (name) =>
      set(
        () => ({ selectName: name }),
        false,
        'local/name'
      ),
  })));