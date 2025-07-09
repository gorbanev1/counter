// @flow
import * as React from 'react';
import s from './FlexWrapper.module.css'

type Wrapper = {
    direction?: string
    children:  React.ReactNode
};
export const FlexWrapper = ({direction, children}: Wrapper) => {
    return (
        <div className={direction==="row"?s.flexRow+' '+s.flex:"flex"}>
            {children}
        </div>
    );
};