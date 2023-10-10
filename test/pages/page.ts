import { browser } from '@wdio/globals'

export default class Page {
    public open () {
        return browser.url(`https://www.spaceship.com/`)
    }
}
