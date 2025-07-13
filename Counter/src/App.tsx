import {useState} from 'react'
import './App.css'
import {Counter} from "./components/counter/Counter.tsx";
import {Settings} from "./components/settings/Settings.tsx";
import {FlexWrapper} from "./components/flexWrapper/FlexWrapper.tsx";

function App() {
    const [count, setCount] = useState(0)
    const [maxCounterValue, setMaxCounterValue] = useState<number|undefined>(undefined)
    const [startCounterValue, setStartCounterValue] = useState<number|undefined>(undefined)

    return (
        <>
            <FlexWrapper direction='row' gap={"25px"} border={"none"}>
                <Settings count={count} setCount={setCount} setMaxCounterValue={setMaxCounterValue} setStartCounterValue={setStartCounterValue}></Settings>
                <Counter count={count} setCount={setCount} maxValue={maxCounterValue} startValue={startCounterValue}></Counter>

            </FlexWrapper>
            </>
    )
}

export default App
