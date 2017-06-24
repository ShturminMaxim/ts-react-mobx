import {observable} from 'mobx'

export class AppState {
    @observable time: number = Date.now()
}

export const appState = new AppState()

setInterval(() => {
    appState.time = Date.now()
}, 99)
