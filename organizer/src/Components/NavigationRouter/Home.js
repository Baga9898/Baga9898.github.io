import WatchesBlock from "../WatchesBlock/WatchesBlock";
import ClickerBlock from "../ClickerBlock/ClickerBlock";
import ToDoBlock from "../ToDo/ToDoBlock";
import CounterBlock from "../Counter/CounterBlock";


export default function Home() {

    return (
        <div className="homeWrapper">
            <div>
                <ClickerBlock/>
                <CounterBlock/>
            </div>
            <div>
                <WatchesBlock/>
                <ToDoBlock/>
            </div>
        </div>
    );
}