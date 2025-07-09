// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import {useState} from "react";
import s from './Counter.module.css'
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";


type Counter = {};
const maxStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    transform: ' skew(-10deg, 20deg)',
    transition: 'all 3s ease in-out',
    color: 'red'
}
export const Counter = (props: Counter) => {
        const [count, setCount] = useState<number>(0)
        const [disabledIncrement, setDisabledIncrement] = useState<boolean>(false)
        const [disabledReset, setDisabledReset] = useState<boolean>(true)
        const increment = () => {

            if (count < 5) {
                setCount(count + 1)

            }
            if (count === 4) {
                setDisabledIncrement(true)
                setDisabledReset(false)
            }

        }

        function setCount0() {
            setCount(0)
            setDisabledIncrement(false)
            setDisabledReset(true)
        }

        return (
            <div className={s.counter}>
                <div style={count == 5 ? maxStyle : {}}>{count}</div>
                <FlexWrapper direction={"row"} >
                    <Button action={increment} title={'increment'} disabledProp={disabledIncrement}></Button>
                    <Button action={setCount0} title={'reset'} disabledProp={disabledReset}></Button>
                </FlexWrapper>

            </div>
        );
    }
;