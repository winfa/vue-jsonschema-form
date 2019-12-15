import * as preferenceApi from '../../../api'
import _ from 'lodash'

export default {
  namespaced: true,
  state: {
    source: {},
    mapping: {},
    schema: {},
    systemData: {},
  },

  actions: {
    async initStore({ commit }) {
      const mapping = await preferenceApi.getMapping();
      const schema = await preferenceApi.getSchema();
      const systemData = await preferenceApi.getSystemData();

      commit('setPreferences', { mapping, schema, systemData });
    },
  },

  mutations: {
    setPreferences(state, { mapping, schema, systemData }) {
      state.mapping = mapping;
      state.schema = schema;
      state.systemData = systemData;
    },
  },

  getters: {
    getMappingByPath: (state) => (path) => {
      if(path === 'root' || path === '') return state.mapping
      if (!path) return undefined;

      return _.get(state.mapping, path);
    },

    getBaseWidgetName: () => (sourceType) => {
      if (sourceType === 'object') return 'BaseObjectWidget'

      if (sourceType === 'array') return 'BaseArrayWidget'

      return 'BaseLeafWidget'
    },

  }
}
