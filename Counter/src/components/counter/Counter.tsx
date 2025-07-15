// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import s from './Counter.module.css'
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import {useEffect} from "react";


type Counter = {
    count: number
    setCount: (count: number) => void
    maxValue?: number
    startValue?: number
    setDisabledIncrement: (v: boolean) => void
    setDisabledReset: (v: boolean) => void
    disabledIncrement: boolean
    disabledReset: boolean
    setMaxCounterValue: (v:number)=>void


};
const maxStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    transform: ' scale(1, 1.1)',
    "--border-thickness": " 4px",
    transition: "0.2s ease-in-out",
    color: 'red',
    fontSize: '140%'
}
export const Counter = ({
                            count,
                            setCount,
                            maxValue = 5,
                            startValue = 0,
                            setDisabledIncrement,
                            disabledReset,
                            setDisabledReset,
                            disabledIncrement,
                            setMaxCounterValue,
                        }: Counter) => {

        useEffect(() => {

            let start = localStorage.getItem("startCount")
            let max = localStorage.getItem("maxCount")
            if (start && max) {
                startValue = JSON.parse(start)
                maxValue = JSON.parse(max)
                setMaxCounterValue(maxValue)
                setCount(startValue)
                debugger
            }
        }, [])

        const increment = () => {
            console.log(startValue, maxValue)
            if (count < maxValue) {
                setCount(count + 1)

            }
            if (count === maxValue - 1) {
                setDisabledIncrement(true)
                setDisabledReset(false)
            }

        }

        function setCount0() {
            setCount(startValue)
            setDisabledIncrement(false)
            setDisabledReset(true)
        }

        return (
            <div className={s.counter}>
                <div className={s.number} style={count == maxValue ? maxStyle : {}}>{count}</div>
                <FlexWrapper direction={"row"} gap={'20px'}>
                    <Button action={increment} title={'increment'} disabledProp={disabledIncrement}></Button>
                    <Button action={setCount0} title={'reset'} disabledProp={disabledReset}></Button>
                </FlexWrapper>

            </div>
        );
    }
;