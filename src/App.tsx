import { useRootStore } from "@store/RootStore";
import { observer } from "mobx-react-lite";

import AppModule from "./App.module.scss";

export const App = observer(() => {
    const rootStore = useRootStore();

    return <div className={AppModule.wrapper}>
        <div
            className={AppModule.counter}
            onClick={rootStore.increment}
        >
            Ты кликнул: { rootStore.counterPow }
        </div>
    </div>;
});
