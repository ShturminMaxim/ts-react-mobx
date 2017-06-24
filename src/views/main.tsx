import * as React from 'react'
import {observer} from 'mobx-react'
import {AppState} from "../app-state";

@observer
export class Main extends React.Component<{appState: AppState}> {
    render() {
        return (<h1>Lol, time is: {this.props.appState.time}</h1>)
    }
}
