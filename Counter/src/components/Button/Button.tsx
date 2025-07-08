// @flow
import * as React from 'react';
import {useState} from "react";

type Button = {
    title: string,
    action: (n: number) => void
    count: number
};
export const Button = ({title, action, count}: Button) => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const clickHandler = () => {
        if (count < 5) {
         action(++count)
        }
        count<5
            ?setDisabled(false)
            :setDisabled(true)
    }
    return (
        <button disabled={disabled} onClick={() => {
            clickHandler()
        }}>
            {title}
        </button>
    );
};