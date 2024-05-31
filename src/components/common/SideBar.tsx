import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import React, { CSSProperties } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import { NavLink } from 'react-router-dom';

{/* 型定義を一つにまとめられる */}
interface SideBarProps { 
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerToggle: () => void
}

interface menuItem {
    text: string,
    path: string,
    icon: React.ComponentType,
}

// これでもいい。定義できる型が多いらしい
// type SideBarProps = { 
//     drawerWidth: number,
//     mobileOpen: boolean,
//     handleDrawerToggle: () => void
// }

const SideBar = ({drawerWidth, mobileOpen, handleDrawerToggle}: SideBarProps) => {

    const MenuItems:menuItem[] = [
        {text: "Home", path: "/", icon: HomeIcon},
        {text: "Report", path: "/report", icon: BarChartIcon}
    ]

    const baseLinkStyle :CSSProperties = {
        textDecoration: "none",
        color: "inherit",
        display: "block"
    }

    const activeLinkStyle: CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
    }

    const drawer = (
        <div>
          <Toolbar />
          <Divider /> {/* 横線 */}
          <List> {/* サイドバーの項目リスト */}
            {MenuItems.map((item, index) => (
                <NavLink key={item.text} to={item.path} style={({isActive}) => {
                    console.log("", item.text, isActive)
                    return {
                        ...baseLinkStyle,
                        ...(isActive ? activeLinkStyle: {})
                    }
                }}>
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}
          </List>
        </div>
      );

  return (
    <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}

export default SideBar