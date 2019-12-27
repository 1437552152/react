import { message } from 'antd';
export default {
  namespace: 'noteInfo',
  state: {
    areaTree: [],
    newMenuList: [],
  },

  effects: {
    *getNoteInfo({ payload, callback }, { call }) {
       debugger;
    }
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    getNewList(state, action) {
      return {
        ...state,
        newMenuList: action.payload.imc,
      };
    },
  },
};
