/*
 * @Description: hapi 插件配置信息
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-03-23 15:22:49
 * @LastEditTime: 2019-03-23 17:11:59
 */

export default {
    swagger: {
        options: {
            jsonEditor: true,
            info: {
                title: 'API Documentation',
                version: 'v1.0.0',
                contact: {
                    name: 'John doe',
                    email: 'johndoe@johndoe.com',
                },
            },
            grouping: 'tags',
            sortEndpoints: 'ordered',
        },
    },
    status: {
        options: {
            path: '/status',
            title: 'API Monitor',
            routeConfig: {
                auth: false,
            },
        },
    },
};
