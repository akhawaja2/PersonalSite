import React, { Component } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export const SidebarData = [
    {
        title: "About Me",
        icon: <InfoIcon/>, 
        link: "/about"
    },
    {
        title: "Work Experience",
        icon: <WorkIcon/>, 
        link: "/work"
    },
    {
        title: "Projects",
        icon: <WorkspacesIcon/>, 
        link: "/projects"
    },
    {
        title: "Contact Me",
        icon: <ContactSupportIcon/>, 
        link: "/contact"
    }

];