import { expect } from '@wdio/globals'
import MainPage from '../pages/main.page.js'
import { testValue } from '../helpers/static.js'

describe('Search test example', () => {
    before(async () => {
        await MainPage.open()
    })
    it('should fill the Search input with text', async () => {
        await MainPage.searchText(testValue)
        await expect(MainPage.searchInput).toHaveValue(testValue)
    })
})