// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import {useState} from "react";
import s from './Counter.module.css'


type Counter = {

};
const maxStyle= {
    fontWeight: 'bold',
    cursor: 'pointer',
    transform: ' skew(-10deg, 20deg)',
    transition: 'all 3s ease in-out',
    color: 'red'
}
export const Counter = (props: Props) => {
    const [count, setCount]=useState<number>(0)
    return (
        <div className={s.counter}>
            <div style={count==5?maxStyle:{}} >{count}</div>
            <Button action={setCount} title={'increment'} count={count}></Button>
        </div>
    );
};