/// <reference types="Cypress" />

import { watchFile } from "fs";

const menus = [{
  isGroup: 0, // 0 "是" 1 “否”
  title: "运营中心你管理",
  desc: "【增删改查】运营中心相关信息",
}]

context('编辑商户', () => {
  const href = 'http://localhost:3000'
  // sign in
  before(() =>{
    cy.login();
  })

  it('跳转系统管理/菜单管理页面', () => {
    cy.visit(`${href}/system/menuList`)
    menus.forEach(menu => {
      // NOTE 点击 “编辑菜单”
      cy.get('.rest_scroll>button').click();
      // NOTE 选择菜单类型
      if (menu.isGroup === 0) {
        cy.get('.ant-radio-input').first().click();
      }

      // NOTE 输入菜单名
      cy.get('#menu-title').type(menu.title).wait(500);
      // NOTE 输入菜单描述
      cy.get('#menu-desc').type(menu.desc).wait(500);
      // NOTE 提交请求
      cy.get('button[type="submit"]')
      .click()
    })

  })

})
