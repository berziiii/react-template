import { createStyleSheet, GlobalThemeInterface } from '@groma/library';

export const getAppStyles = (theme: GlobalThemeInterface) => {
  return createStyleSheet(
    {
      mainContainer: {
        alignItems: 'center',
        backgroundColor: theme.colors.$primaryBackground,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxWidth: '100vw',
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100%',
      },
      title: {
        ...theme.text.$titleLarge,
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      navItem: {
        ...theme.variants.links.navLarge,
      },
    },
    { name: 'App' }
  );
};
