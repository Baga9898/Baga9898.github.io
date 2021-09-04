import "./CounterBlock.css";
import "../../index.css";

import store from "./store";
import { Provider } from 'react-redux'

import Counter from "./Counter";

export default function CounterBlock() {
    return(
        <div className="wrapper counterBlockWrapper">
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    );
}