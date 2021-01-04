import { FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <h4>Suck at Coding with Me</h4>
                <h3>
                    <FiberManualRecordIcon />
                </h3>
            </div>
        </div>
    )
}

export default Sidebar
