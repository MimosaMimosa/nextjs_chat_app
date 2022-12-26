import '../styles/globals.css';
import '../styles/animation/typing/typing.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { SessionProvider } from "next-auth/react"
const theme = createTheme({
    palette: {
        error: {
            main: red[500],
        }
    }
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </SessionProvider>
    );
}