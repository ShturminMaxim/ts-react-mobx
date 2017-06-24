import * as ReactDom from 'react-dom'
import * as React from 'react'

import {Main} from "./views/main";
import {appState} from "./app-state";
const appNode = document.getElementById('app')
ReactDom.render(<Main appState={appState}/>, appNode)
