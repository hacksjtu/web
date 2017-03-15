/*
* @Author: GigaFlower
* @Date:   2017-03-15 07:44:09
* @Last Modified by:   GigaFlower
* @Last Modified time: 2017-03-15 10:31:25
*/

'use strict'

export default {
  cn: {
    // Banner
    mobileTitle: '2017<br>上海交通大学<br>黑客马拉松',

    // Navbar
    views: ['关于我们', '申请入口', '活动日程', '常见问题', '赞助单位'],

    // About us
    aboutus: `黑客马拉松 Hackathon)作为一项学生科技创新实践的活动，已经逐年扩张到世界各地学校当中。 
    此项活动将通过借助各家企业开源的API Application Programming Interface)和SDK (SoftwareDevelopment Kit)，
    以此为学生们提供在短时间内开发软件和硬件的竞赛平台，
    最终来促进学生们充分地利用所学的科技开发技能去完成设计插件或搭建各类应用项目的雏形。<br>
    在比赛过程中，每个学生将学习如何与团队协作并形成优势互补去完善项目的设计和落地成型。
    另外， 学生们在项目开发中可利用高科技公司提供的API SDK及硬件设备，
    与公司技术开发代表进行深度沟通并协作完成插件以及产品再造。<br>
    学生也可借此机会对接企业技术开发者和招聘团队，为以后技术开发及落地或者就业寻找合适的机会。
    学生们也可连接受邀的创投公司，将开发的项目雏形通过登台公众演示以及赛后的技术完善来获得潜在的初创投资支持，
    以此来完成产品或服务的商业转化。
    最终，学生们不但通过此项比赛收获各类奖品，而更为重要的是，
    学生开发者们将能够更好地实现创新创造，并在实践中找到自己心仪的合作伙伴。`,

    // Sign up
    signUp: '申请入口',
    signUpPrompt: '欢迎各类学科学生的报名申请<br>请您填写下方申请入口中的正式申请表',

    // Timeline
    // [
    //  [
    //    // the first time line
    //    {
    //     type: event-lg|event-sm|span-working|span-rest
    //     time: a string denoting time
    //     message:  a describing string
    //    },{
    //     ...
    //    }...
    //  ],[
    //     ...
    //  ]
    // ]
    schedule: [
      'event-lg|9/24（周六）',
      'span-working',
      'event-sm|10:00|比赛开始',
      'event-sm|11:00|无所事事'
    ]
  },
  en: {
    mobileTitle: '2017<br>HACK<br>SJTU',
    views: ['About Us', 'Sign Up', 'Schedule', 'FAQ', 'Sponsors'],

    aboutus: `js is the best language`,
    signUp: 'ゲームスダート',
    signUpPrompt: 'vim is the best ide',

    schedule: [
      'event-lg|9/24（Saturday）',
      'span-working',
      'event-sm|10:00|Start',
      'event-sm|11:00|Do nothing'
    ]
  }
}

// window.sjtu_locale = 0
// window.__ = function (key) {
//   return text[key][window.sjtu_locale]
// }
