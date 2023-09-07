import { produce } from 'immer';

export const immer = (config) => (set, get, api) =>
  config((func) => set(produce(func)), get, api);
