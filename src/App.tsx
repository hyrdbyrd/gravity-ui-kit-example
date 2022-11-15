import {
    ThemeProvider,
    Switch,
    Breadcrumbs,
    Button,
    LastDisplayedItemsCount,
    FirstDisplayedItemsCount,
} from '@gravity-ui/uikit';

import './theme.scss';

function App() {
    return (
        <ThemeProvider>
            <Switch title="Swch" />
            <Breadcrumbs
                lastDisplayedItemsCount={LastDisplayedItemsCount.One}
                firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
                items={['b', 'read', 'crumb', 's'].map((text) => ({ text, action: () => {} }))}
            />
            <Button>Btn</Button>
        </ThemeProvider>
    );
}

export default App;
