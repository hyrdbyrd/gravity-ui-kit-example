import { ThemeProvider, Switch } from '@gravity-ui/uikit';

import './theme.scss';
import './App.css';


function App() {
  return (
    <ThemeProvider>
      <Switch />
    </ThemeProvider>
  )
}

export default App;
