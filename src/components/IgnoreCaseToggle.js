import React from 'react';

export const IgnoreCaseToggle = ({checked,onChange}) => {
    return (
        <>
            <label htmlFor="ignore-case">Ignore case?</label>
            <input type="checkbox" id="ignore-case" checked={checked} onChange={(e)=>onChange(!checked)} />
        </>
    )
}
