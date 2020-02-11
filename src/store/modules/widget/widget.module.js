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

    setSource(state, { path, value }) {
      if (!path) return;

      return _.set(state.source, path, value);
    },

    initSource(state, { path, defaultValue }) {
      if (!path) return;

      const result = _.get(state.source, path);

      if ((defaultValue !== null && defaultValue !== undefined)  &&
          (result === null || result === undefined)) {

        return _.set(state.source, path, defaultValue);
      }

    }
  },

  getters: {
    mapping: (state) => {
      return state.mapping
    },

    getMappingByPath: (state) => (path) => {
      if(path === 'root' || path === '') return state.mapping
      if (!path) return undefined;

      return _.get(state.mapping, path);
    },

    getSource: (state) => (path) => {
      if (!path) return state.source;
      return _.get(state.source, path);
    },

    getBaseWidgetName: () => (sourceType) => {
      if (sourceType === 'object') return 'BaseObjectWidget'

      if (sourceType === 'array') return 'BaseArrayWidget'

      return 'BaseLeafWidget'
    },

  }
}
