// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import s from './Settings.module.css'


type Props = {
    count: number
    setCount: (count: number) => void
    setMaxCounterValue: (max: number) => void
    setStartCounterValue: (start: number) => void
};

export const Settings = ({count, setCount, setStartCounterValue, setMaxCounterValue}: Props) => {
    const [max, setMax] = React.useState<number>(0);
    const [start, setStart] = React.useState<number>(0);
    const [error, setError] = React.useState<string | null>('');

    function setValues() {
        if (max > start) {
            setMaxCounterValue(max)
            setStartCounterValue(start)
            setCount(start)
            setError(null)
        } else {
            setError("Максимальное значение меньше стартового")
        }
    }

    return (
        <div className={s.settings}>
            <label>
                max value
                <input type={"number"} value={max}
                       style={error ? {backgroundColor: 'red', color: "antiquewhite"} : {}}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setMax(Number(event.currentTarget.value))
                       }}/>
            </label>`
            <label>
                start value
                <input type={"number"} value={start}
                       style={error ? {backgroundColor: 'red', color: "antiquewhite"} : {}}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setStart(Number(event.currentTarget.value))
                       }}/>
            </label>

            <Button title={"set"} action={setValues}/>
        </div>
    );
};