import React from 'react'

export const Step = ({activeStep}) => {
    return <ul className="d-flex justify-content-between registerstepsul">
        <li className={`registerstepone ${activeStep >= 0 ? "active" : ""}`}>
            <span>Contact Info</span>
        </li>
        <li className={`registersteptwo ${activeStep >= 1 ? "active" : ""}`}>
            <span>Verification</span>
        </li>
        <li className={`registerstepthree ${activeStep >= 3 ? "active" : ""}`}>
            <span>Password</span>
        </li>
    </ul>
}
