import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeSelect() {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      color="inherit"
    >
      {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}