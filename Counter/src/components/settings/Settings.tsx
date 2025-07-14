// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import s from './Settings.module.css'
import {useEffect} from "react";


type Props = {
    count: number
    setCount: (count: number) => void
    setMaxCounterValue: (max: number) => void
    setStartCounterValue: (start: number) => void
    setDisabledIncrement: (v: boolean)=> void
    setDisabledReset: (v: boolean)=> void
};

export const Settings = ({setDisabledIncrement,setDisabledReset, setCount, setStartCounterValue, setMaxCounterValue}: Props) => {
    const [max, setMax] = React.useState<number>(0);
    const [start, setStart] = React.useState<number>(0);
    const [error, setError] = React.useState<string | null>('');

    useEffect(()=>{
        if(start>max-1) {
            setStart(max-1)
            if (max===0) setStart(0)
        }
    },[start,max])

    function setValues() {
        if (max > start) {
            setMaxCounterValue(max)
            setStartCounterValue(start)
            setCount(start)
            setDisabledReset(true)
            setDisabledIncrement(false)
            setError(null)
        } else {
            setError("Максимальное значение меньше стартового")
        }
    }

    return (
        <div className={s.settings}>
            <label>
                max value:&nbsp;&nbsp;&nbsp;
                <input type={"number"} value={max}
                       min={"0"}
                       style={error ? {backgroundColor: 'red', color: "antiquewhite"} : {}}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setMax(Number(event.currentTarget.value))
                       }}/>
            </label>
            <label>
                start value:&nbsp;&nbsp;&nbsp;
                <input type={"number"} value={start}
                       min={"0"}
                       style={error ? {backgroundColor: 'red', color: "antiquewhite"} : {}}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setStart(Number(event.currentTarget.value))
                       }}/>
            </label>

            <Button title={"set"} action={setValues}/>
        </div>
    );
};