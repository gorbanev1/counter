// @flow
import * as React from 'react';
import {useState} from "react";

type Button = {
    title: string,
    action?: () => void

    disabledProp?: boolean
};
export const Button = ({title, action,  disabledProp}: Button) => {

    const clickHandler = () => {
    action()
    }
    return (
        <button disabled={disabledProp?disabledProp:false} onClick={()=>action()}>
            {title}
        </button>
    );
};