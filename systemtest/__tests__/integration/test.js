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
  

describe('acceptance tests', () => {
  beforeAll(async () => {
    await browser.get('http://localhost:3000')
  });

  test('should count 0', async () => {
    await browser.findElement(by.id('increment-button'))
    const counter = await browser.findElement(by.id("counter")).getText()
    expect(counter).toBe("0")
  })

  test('should count 1', async () => {
    const button = await browser.findElement(by.id('increment-button'))
    button.click()
    const counter = await browser.findElement(by.id("counter")).getText()
    expect(counter).toBe("1")
  })

  test('should count 0 j', async () => {
    const button = await browser.findElement(by.id('decrement-button'))
    button.click()
    const counter = await browser.findElement(by.id("counter")).getText()
    expect(counter).toBe("0")
  })

  test('should not below 0', async () => {
    const button = await browser.findElement(by.id('decrement-button'))
    button.click()
    const counter = await browser.findElement(by.id("counter")).getText()
    expect(counter).toBe("-1")
    const error = await browser.findElement(by.id("error")).getText()
    expect(error).toBe("should not count below 0")
  })


})