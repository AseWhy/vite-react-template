import { createContext, useContext } from "react";
import { Instance, types } from "mobx-state-tree";

export interface IRootStore extends Instance<typeof RootStore> {
    
}

export const RootStore = types
    .model("RootStore", {
        counter: types.optional(types.integer, 0)
    })
    .views(self => ({
        get counterPow() {
            return Math.pow(self.counter, 2);
        }
    }))
    .actions(self => ({
        increment() {
            self.counter++;
        }
    }));

const RootStoreContext = createContext<null | IRootStore>(null);

export const Provider = RootStoreContext.Provider;

export function useRootStore() {
    const store = useContext(RootStoreContext);
    
    if (store === null) {
        throw new Error("Store cannot be null, please add a context provider");
    }

    return store;
}
