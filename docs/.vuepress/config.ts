import { defineUserConfig, defaultTheme} from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  plugins: [
//     searchPlugin({
//         // 配置项
//     }),
  ],
  lang: 'zh-CN',
  title: 'JAVA',
  base: '/',
  description: 'JAVA学习文档',
  theme: defaultTheme({
    logo: '/img/logo.png',
    navbar: [
        {
            text: '首页',
            link: '/'
        }
    ],
    sidebar: [
        {
            text: 'JAVA基础',
            children: [
                {
                    text: 'JVM',
                    link: '/zh/basic/jvm.md',
                },
                {
                    text: '高并发',
                    link: '/zh/basic/concurrent.md',
                },
                {
                    text: '设计模式',
                    link: '/zh/basic/designPatterns.md',
                },
                {
                    text: '算法基础',
                    link: '/zh/client/algorithm.md',
                },
            ],
        },
        {
            text: 'JAVA框架',
            children: [
                {
                    text: 'MyBatis',
                    link: '/zh/framework/mybatis.md',
                },
                {
                    text: 'Spring',
                    link: '/zh/framework/spring.md',
                },
                {
                    text: 'Spring-Cloud',
                    link: '/zh/framework/spring-cloud.md'
                },
                {
                    text: '班级问题',
                    link: '/zh/admin/class.md'
                }
            ],
        },{
            text: '中间件',
            children: [
                {
                    text: 'MQ',
                    link: '/zh/middleware/mq.md',
                }
            ],
        },
    ],
})
})
