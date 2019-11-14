/**
 * @jest-environment jest-environment-webdriver
 */

const url = 'https://www.actionherojs.com'

describe('www.actionherojs.com#index', () => {
  test('it renders', async () => {
    await browser.get(url)
    const title = await browser.findElement(by.tagName('h2')).getText()
    expect(title).toContain('reusable, scalable, and quick')
  })

  test('loads the latest version number from GitHub', async () => {
    const foundAndLoadedCheck = async () => {
      await until.elementLocated(by.id('latestRelease'))
      const value = await browser.findElement(by.id('latestRelease')).getText()
      return value !== '~'
    }

    await browser.wait(foundAndLoadedCheck, 3000)
    const latestRelease = await browser.findElement(by.id('latestRelease')).getText()
    expect(latestRelease).toEqual('v20.0.0')
  })

  describe('save a screenshot from the browser', () => {
    test('save a picture', async () => {
      // files saved in ./reports/screenshots by default
      await browser.get(url)
      await browser.takeScreenshot()
    })
  })
})