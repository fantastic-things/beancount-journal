import {
  INavLinkGroup,
  INavStyles,
  initializeIcons,
  Nav,
  ThemeProvider,
} from '@fluentui/react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function HomeLayout() {
  const navigate = useNavigate();
  initializeIcons();

  const navStyles: Partial<INavStyles> = { root: { width: 180 } };
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: '/',
          icon: 'Home',
        },
        {
          name: 'Storage',
          url: '/storage',
          icon: 'OfflineStorage',
        },
        {
          name: 'Journal',
          url: '/journal',
          icon: 'Edit',
        },
        {
          name: 'About',
          url: '/about',
          icon: 'Info',
        },
      ],
    },
  ];

  return (
    <div>
      <ThemeProvider style={{ display: 'flex' }}>
        <Nav
          styles={navStyles}
          groups={navLinkGroups}
          onLinkClick={(event, element) => {
            event?.preventDefault();
            navigate(element?.url as string);
          }}
        />
        <div style={{ paddingLeft: '40px' }}>
          <Outlet />
        </div>
      </ThemeProvider>
    </div>
  );
}
