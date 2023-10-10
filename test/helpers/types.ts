// eslint-disable-next-line import/no-unassigned-import
import { ChainablePromiseArray, ChainablePromiseElement } from "webdriverio";

export type WebElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebElements = ChainablePromiseArray<WebdriverIO.ElementArray>;
// Array of elements needs to be wrapped as function so that array state is not saved when it's first accessed
export type WebElementCallableArray = () => WebElements;