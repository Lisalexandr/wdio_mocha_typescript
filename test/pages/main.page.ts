import { $ } from '@wdio/globals'
import Page from './page.js';
import { WebElement } from '../helpers/types.js';

class MainPage extends Page {
    public get searchInput (): WebElement {
        return $("#sp-search-textfield");
    }
    public async searchText (text: string) {
        await this.searchInput.click()
        await this.searchInput.setValue(text)
    }

}

export default new MainPage();
