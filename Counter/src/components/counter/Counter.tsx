// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import {useState} from "react";
import s from './Counter.module.css'
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";


type Counter = {
    count: number
    setCount: (count: number) => void
    maxValue?: number
    startValue?: number
};
const maxStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    transform: ' skew(-10deg, 20deg)',
    transition: 'all 3s ease in-out',
    color: 'red',
    fontSize: '140%'
}
export const Counter = ({count, setCount, maxValue=5, startValue=0}: Counter) => {
        const [disabledIncrement, setDisabledIncrement] = useState<boolean>(false)
        const [disabledReset, setDisabledReset] = useState<boolean>(true)

        const increment = () => {
            console.log(startValue,maxValue)
            if (count < maxValue) {
                setCount(count + 1)

            }
            if (count === maxValue-1) {
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
                <FlexWrapper direction={"row"} >
                    <Button action={increment} title={'increment'} disabledProp={disabledIncrement}></Button>
                    <Button action={setCount0} title={'reset'} disabledProp={disabledReset}></Button>
                </FlexWrapper>

            </div>
        );
    }
;