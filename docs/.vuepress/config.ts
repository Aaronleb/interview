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
                    text: '安装包',
                    link: '/zh/client/install.md',
                },
                {
                    text: '电子教室',
                    link: '/zh/client/classroom.md',
                },
                {
                    text: '课程中心',
                    link: '/zh/client/course.md',
                },
                {
                    text: 'TTS客户端',
                    link: '/zh/client/tts.md',
                },
            ],
        },
        {
            text: 'JAVA框架',
            children: [
                {
                    text: '缴费&退费',
                    link: '/zh/admin/pay.md',
                },
                {
                    text: '补课问题',
                    link: '/zh/admin/makeup.md',
                },
                {
                    text: '课程问题',
                    link: '/zh/admin/course.md'
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
                    link: '/zh/wechat/pay.md',
                }
            ],
        },
    ],
})
})
