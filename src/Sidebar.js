import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Suck at Coding with Me</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Harrison
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title='comment'/>
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />

        </div>
    )
}

export default Sidebar
