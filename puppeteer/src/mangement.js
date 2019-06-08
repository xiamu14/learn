const puppeteer = require('puppeteer');
(async () => {
  const browser =  await puppeteer.launch({headless: false});
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/add')

  await page.setViewport({ width: 1020, height: 766 })

  await page.waitForSelector('.ant-row #horizontal_login_name')
  await page.click('.ant-row #horizontal_login_name')

  await page.waitForSelector('.ant-form-item-control > .ant-form-item-children > #horizontal_login_date-picker > div > .ant-calendar-picker-input')
  await page.click('.ant-form-item-control > .ant-form-item-children > #horizontal_login_date-picker > div > .ant-calendar-picker-input')

  await page.waitForSelector('.ant-calendar > .ant-calendar-panel > .ant-calendar-date-panel > .ant-calendar-footer > .ant-calendar-footer-btn')
  await page.click('.ant-calendar > .ant-calendar-panel > .ant-calendar-date-panel > .ant-calendar-footer > .ant-calendar-footer-btn')

  await page.waitForSelector('.ant-calendar-panel > .ant-calendar-date-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-today-btn')
  await page.click('.ant-calendar-panel > .ant-calendar-date-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-today-btn')

  await page.waitForSelector('.ant-row #horizontal_login_idNum')
  await page.click('.ant-row #horizontal_login_idNum')

  await page.waitForSelector('.ant-row #horizontal_login_phone')
  await page.click('.ant-row #horizontal_login_phone')

  await page.waitForSelector('.ant-row #horizontal_login_education')
  await page.click('.ant-row #horizontal_login_education')

  await page.waitForSelector('.ant-col > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label')
  await page.click('.ant-col > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label')

  await page.waitForSelector('div > .ant-cascader-menus > div > .ant-cascader-menu > .ant-cascader-menu-item:nth-child(1)')
  await page.click('div > .ant-cascader-menus > div > .ant-cascader-menu > .ant-cascader-menu-item:nth-child(1)')

  await page.waitForSelector('div > .ant-cascader-menus > div > .ant-cascader-menu:nth-child(2) > .ant-cascader-menu-item')
  await page.click('div > .ant-cascader-menus > div > .ant-cascader-menu:nth-child(2) > .ant-cascader-menu-item')

  await page.waitForSelector('div > .ant-cascader-menus > div > .ant-cascader-menu:nth-child(3) > .ant-cascader-menu-item:nth-child(1)')
  await page.click('div > .ant-cascader-menus > div > .ant-cascader-menu:nth-child(3) > .ant-cascader-menu-item:nth-child(1)')

  await page.waitForSelector('.ant-row #horizontal_login_nation')
  await page.click('.ant-row #horizontal_login_nation')

  await page.waitForSelector('.ant-row #horizontal_login_marriage')
  await page.click('.ant-row #horizontal_login_marriage')

  await page.waitForSelector('.ant-form-item-children > #horizontal_login_experience > .serviceNum > .ant-input-wrapper > .ant-input')
  await page.click('.ant-form-item-children > #horizontal_login_experience > .serviceNum > .ant-input-wrapper > .ant-input')

  await page.waitForSelector('.ant-form-item-children > #horizontal_login_experience > .serviceTime > .ant-input-wrapper > .ant-input')
  await page.click('.ant-form-item-children > #horizontal_login_experience > .serviceTime > .ant-input-wrapper > .ant-input')

  await page.waitForSelector('.ant-row #horizontal_login_speciality')
  await page.click('.ant-row #horizontal_login_speciality')

  await page.waitForSelector('.ant-row #horizontal_login_evaluate')
  await page.click('.ant-row #horizontal_login_evaluate')

  await page.waitForSelector('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn')
  await page.click('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn')

  await browser.close()
})()
