import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import PaidIcon from '@mui/icons-material/Paid';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/"

    },
    {
        title: "MailBox",
        icon: <EmailIcon/>,
        link: "/mail"

    },
    {
        title: "Dahboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"

    },
    {
        title: "FAQ",
        icon: <QuizIcon/>,
        link: "/faq"

    },
    {
        title: "Tarifs",
        icon: <PaidIcon/>,
        link: "/tarif"

    },
]
