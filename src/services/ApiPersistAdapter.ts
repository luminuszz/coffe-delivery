type ApiSlice<Data = any> = {
  error: string | null;
  data: Data;
  loading: boolean;
};

const storageKey = "API_SERVICE_STORE";

export class ApiPersistAdapter {
  apiHistory: Map<string, ApiSlice>;

  constructor() {
    const apiHistory = JSON.parse(localStorage.getItem(storageKey) || "{}");

    this.apiHistory = new Map(Object.values(apiHistory));
  }

  getApiSlice(api: string) {
    return this.apiHistory.has(api) ? this.apiHistory.get(api) : null;
  }

  setApSlice(api: string, slice: ApiSlice) {
    this.apiHistory.set(api, slice);

    const storageSnapshot: Record<string, ApiSlice> = {};

    this.apiHistory.forEach((value, key) => {
      storageSnapshot[key] = value;
    });

    localStorage.setItem(storageKey, JSON.stringify(storageSnapshot));
  }
}
