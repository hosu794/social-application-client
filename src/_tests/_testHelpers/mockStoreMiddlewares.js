import thunk from "redux-thunk";

import configureMockStore from "redux-mock-store";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

export let storeMiddlewares = mockStore({});
