import { Route, Switch } from 'react-router-dom'
import { history, store } from 'redux/store'
import { ConnectedRouter } from 'connected-react-router'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { Landing } from 'pages/Landing'
import {
  AppThemeContext,
  configureAppTheme,
} from '@foronered/web/lib/theme/theme'

export const MOBILE_BREAKPOINT_N = 900
export const MOBILE_BREAKPOINT = `${MOBILE_BREAKPOINT_N}px`
export const MOBILE_STYLE = `@media (max-width: ${MOBILE_BREAKPOINT})`
export const DESKTOP_STYLE = `@media (min-width: ${MOBILE_BREAKPOINT})`

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    scroll-behavior: smooth;
  }

  #root {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding:0;
    background-color: #fcc2ca;
  }

  h1 {
    font-size: 48px;
    color: white;
    text-align: center;
  }

  button {
    font-size: 32px;
    background-color: #ca60c8;
    border-radius: 10px;

  }

  h1, p, button {
    font-family: 'MonteCarlo';
    padding: 0;
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`

const appTheme = configureAppTheme({
  button: {
    chromeless: {},
    secondary: {},
    common: {
      backgroundColor: 'red',
      color: 'white',
    },
  },
})

// export const useIsMobile = (): boolean => {
//   const dataView = React.useContext(IsMobile)
//   return dataView
// }

// const IsMobile = React.createContext<boolean>(false)
// IsMobile.displayName = 'IsMobile'

export const App = () => {
  // const [isMobile, setIsMobile] = React.useState<boolean>()

  // React.useEffect(() => {
  //   setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N)
  //   window.addEventListener('resize', (event) => {
  //     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N)
  //   })

  //   return () => {
  //     window.removeEventListener('resize', (event) => {
  //       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N)
  //     })
  //   }
  // }, [])
  return (
    <Provider store={store as any}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <AppThemeContext.Provider value={appTheme}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </AppThemeContext.Provider>
      </ConnectedRouter>
    </Provider>
  )
}
