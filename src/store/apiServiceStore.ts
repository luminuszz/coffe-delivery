import { atom, AtomEffect, atomFamily, selectorFamily } from "recoil";

import { ApiPersistAdapter } from "../services/ApiPersistAdapter";

const apiPersistor = new ApiPersistAdapter();

const setterStoreConnectEffect: AtomEffect<any> = ({ onSet }) =>
  onSet((newValue) => apiPersistor.setApSlice(newValue.endpointId, newValue));

export const loadingState = atom<boolean>({
  default: false,
  key: "loadingStateAtom",
});

type ApiSlice<Data = any> = {
  error: string | null;
  loading: boolean;
  data: Data;
  endpointId: string;
};

export const apiSliceState = atomFamily<ApiSlice, string>({
  key: "apiSliceStateAtomFamily",
  default: (endpointId) => ({
    error: null,
    data: null,
    loading: false,
    endpointId,
  }),

  effects: [setterStoreConnectEffect],
});

export const currentLoadingApiSlice = selectorFamily<boolean, string>({
  key: "currentLoadingApiSliceSelectorFamily",
  get:
    (api: string) =>
    ({ get }) =>
      get(apiSliceState(api))?.loading || false,
});

export const currentErrorApiSlice = selectorFamily<string | null, string>({
  key: "currentErrorApiSliceSelectorFamily",
  get:
    (api) =>
    ({ get }) =>
      get(apiSliceState(api))?.error || null,
});

export const currentDataApiSlice = selectorFamily<any, string>({
  key: "currentDataApiSliceSelectorFamily",
  get:
    (api) =>
    ({ get }) =>
      get(apiSliceState(api))?.data || null,
});
