import Vue from 'vue'
import Router from 'vue-router'

const Layout = r => require.ensure([], () => r(require('../views/layout')), 'application');
/**登录**/
const GetCode = r => require.ensure([], () => r(require('../views/Login/getCode')), 'application');
const VcodeLogin = r => require.ensure([], () => r(require('../views/Login/vcodeLogin')), 'application');
const PasswordLogin = r => require.ensure([], () => r(require('../views/Login/passwordLogin')), 'application');

/**微信分享登录跳转中间页**/
const WxLoginMiddlePage = r => require.ensure([], () => r(require('../views/Login/wxLoginMiddlePage')), 'application');

/**借款中心**/
const BorrowCenter = r => require.ensure([], () => r(require('../views/Centers/borrowCenter')), 'application');
/**认证中心**/
const CertifyCenter = r => require.ensure([], () => r(require('../views/Centers/certifyCenter')), 'application');
/**我的银行卡**/
const BankCard = r => require.ensure([], () => r(require('../views/Centers/bankCard')), 'application');

/**H5容器**/
const H5 = r => require.ensure([], () => r(require('../views/H5Container')), 'application');

/**H5页面**/
/**帮助中心**/
const HelpCenter = r => require.ensure([], () => r(require('../views/H5Pages/helpCenter')), 'H5');
/**关于我们**/
const AboutUs = r => require.ensure([], () => r(require('../views/H5Pages/aboutUs')), 'H5');
/**借款攻略**/
const BorrowRaiders = r => require.ensure([], () => r(require('../views/H5Pages/borrowRaiders')), 'H5');
/**支持银行**/
const SupportedBank = r => require.ensure([], () => r(require('../views/H5Pages/supportedBank')), 'H5');
/**产品下载页**/
const ProductDownload = r => require.ensure([], () => r(require('../views/H5Pages/productDownload')), 'H5');

/**运营位**/

/**Abandoned**/
const Ad_20171229_InviteFriends = r => require.ensure([], () => r(require('../views/Advertises/(abandoned)ad_20171229_InviteFriends')), 'H5');
const Ad_20171229_NewbiesWelfare = r => require.ensure([], () => r(require('../views/Advertises/(abandoned)ad_20171229_NewbiesWelfare')), 'H5');
const Ad_20180105_NewbiesWelfare = r => require.ensure([], () => r(require('../views/Advertises/(abandoned)ad_20180105_NewbiesWelfare')), 'H5');

/**Serving**/
const Ad_20180105_ALetter = r => require.ensure([], () => r(require('../views/Advertises/ad_20180105_ALetter')), 'H5');
const Ad_20180206_HolidayAnnouncement = r => require.ensure([], () => r(require('../views/Advertises/ad_20180206_HolidayAnnouncement')), 'H5');
const Ad_20180410_quota = r => require.ensure([], () => r(require('../views/Advertises/ad_20180410_quota')), 'H5');

/**用户协议**/
/**用户注册登录协议**/
const UsersRegisterLogin = r => require.ensure([], () => r(require('../views/Protocol/UsersRegisterLogin')), 'H5');
/**用户授权协议**/
const UsersAuthorization = r => require.ensure([], () => r(require('../views/Protocol/UsersAuthorization')), 'H5');
/**数据采集服务协议**/
const DataCollectionService = r => require.ensure([], () => r(require('../views/Protocol/DataCollectionService')), 'H5');
/**委托代扣款授权书**/
const EntrustedDebitAuthorization = r => require.ensure([], () => r(require('../views/Protocol/entrustedDebitAuthorization')), 'H5');
/**借款协议**/
const LoanAgreement = r => require.ensure([], () => r(require('../views/Protocol/LoanAgreement')), 'H5');
/**信息技术支持服务合同**/
const InformationTechnologySupportService = r => require.ensure([], () => r(require('../views/Protocol/InformationTechnologySupportService')), 'H5');
/**征信及信息披露授权书**/
const CreditInformationDisclosure = r => require.ensure([], () => r(require('../views/Protocol/CreditInformationDisclosure')), 'H5');
/**贷后服务协议**/
const AfterLoanService = r => require.ensure([], () => r(require('../views/Protocol/AfterLoanService')), 'H5');


/**中德汇都用户注册登录协议**/
const ZhongDeHuiDuUsersRegisterLogin = r => require.ensure([], () => r(require('../views/ZhongDeHuiDu/(ZhongDeHuiDu)UsersRegisterLogin')), 'H5');
/**中德汇都用户授权协议**/
const ZhongDeHuiDuUsersAuthorization = r => require.ensure([], () => r(require('../views/ZhongDeHuiDu/(ZhongDeHuiDu)UsersAuthorization')), 'H5');
/**中德汇都数据采集服务协议**/
const ZhongDeHuiDuDataCollectionService = r => require.ensure([], () => r(require('../views/ZhongDeHuiDu/(ZhongDeHuiDu)DataCollectionService')), 'H5');
/**中德汇都关于我们**/
const ZhongDeHuiDuAboutUs = r => require.ensure([], () => r(require('../views/ZhongDeHuiDu/(ZhongDeHuiDu)aboutUs')), 'H5');


/**盂县汇民用户注册登录协议**/
const YuXianHuiMinUsersRegisterLogin = r => require.ensure([], () => r(require('../views/YuXianHuiMin/(YuXianHuiMin)UsersRegisterLogin')), 'H5');
/**盂县汇民用户授权协议**/
const YuXianHuiMinUsersAuthorization = r => require.ensure([], () => r(require('../views/YuXianHuiMin/(YuXianHuiMin)UsersAuthorization')), 'H5');
/**盂县汇民数据采集服务协议**/
const YuXianHuiMinDataCollectionService = r => require.ensure([], () => r(require('../views/YuXianHuiMin/(YuXianHuiMin)DataCollectionService')), 'H5');
/**盂县汇民借款协议**/
const YuXianHuiMinLoanAgreement = r => require.ensure([], () => r(require('../views/YuXianHuiMin/(YuXianHuiMin)LoanAgreement')), 'H5');
/**盂县汇民关于我们**/
const YuXianHuiMinAboutUs = r => require.ensure([], () => r(require('../views/YuXianHuiMin/(YuXianHuiMin)aboutUs')), 'H5');

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      meta: {
        keep: true
      }
    },
    /**登录**/
    {
      path: '/getCode',
      name: 'getCode',
      component: GetCode,
      meta: {
        keep: false
      }
    },
    {
      path: '/vcodeLogin',
      name: 'vcodeLogin',
      component: VcodeLogin,
      meta: {
        keep: false
      }
    },
    {
      path: '/passwordLogin',
      name: 'passwordLogin',
      component: PasswordLogin,
      meta: {
        keep: false
      }
    },
    /**微信分享登录跳转中间页**/
    {
      path: '/wxLoginMiddlePage',
      name: 'wxLoginMiddlePage',
      component: WxLoginMiddlePage,
      meta: {
        keep: false
      }
    },
    /**借款中心**/
    {
      path: '/borrowCenter',
      name: 'borrowCenter',
      component: BorrowCenter,
      meta: {
        keep: false
      }
    },
    /**认证中心**/
    {
      path: '/certifyCenter',
      name: 'certifyCenter',
      component: CertifyCenter,
      meta: {
        keep: false
      }
    },
    /**我的银行卡**/
    {
      path: '/bankCard',
      name: 'bankCard',
      component: BankCard,
      meta: {
        keep: false
      }
    },




    /**在webapp中展示H5页面的容器**/
    {
      path: '/H5/:name',
      name: 'H5',
      component: H5,
      meta: {
        keep: false
      }
    },

    /**帮助中心**/
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: HelpCenter,
      meta: {
        keep: false
      }
    },
    /**关于我们**/
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs,
      meta: {
        keep: false
      }
    },
    /**借款攻略**/
    {
      path: '/borrowRaiders',
      name: 'borrowRaiders',
      component: BorrowRaiders,
      meta: {
        keep: false
      }
    },
    /**支持银行**/
    {
      path: '/supportedBank',
      name: 'supportedBank',
      component: SupportedBank,
      meta: {
        keep: false
      }
    },
    /**产品下载页**/
    {
      path: '/productDownload',
      name: 'productDownload',
      component: ProductDownload,
      meta: {
        keep: false
      }
    },


    /**运营位**/
    /**Abandoned**/
    {
      path: '/ad_20171229_InviteFriends',
      name: 'ad_20171229_InviteFriends',
      component: Ad_20171229_InviteFriends,
      meta: {
        keep: false
      }
    },
    {
      path: '/ad_20171229_NewbiesWelfare',
      name: 'ad_20171229_NewbiesWelfare',
      component: Ad_20171229_NewbiesWelfare,
      meta: {
        keep: false
      }
    },
    {
      path: '/ad_20180105_NewbiesWelfare',
      name: 'ad_20180105_NewbiesWelfare',
      component: Ad_20180105_NewbiesWelfare,
      meta: {
        keep: false
      }
    },
    /**Serving**/
    {
      path: '/ad_20180105_ALetter',
      name: 'ad_20180105_ALetter',
      component: Ad_20180105_ALetter,
      meta: {
        keep: false
      }
    },
    {
      path: '/ad_20180206_HolidayAnnouncement',
      name: 'ad_20180206_HolidayAnnouncement',
      component: Ad_20180206_HolidayAnnouncement,
      meta: {
        keep: false
      }
    },
    {
      path: '/ad_20180410_quota',
      name: 'ad_20180410_quota',
      component: Ad_20180410_quota,
      meta: {
        keep: false
      }
    },
    /**用户协议**/
    {
      path: '/usersRegisterLogin',
      name: 'usersRegisterLogin',
      component: UsersRegisterLogin,
      meta: {
        keep: false
      }
    },
    {
      path: '/usersAuthorization',
      name: 'usersAuthorization',
      component: UsersAuthorization,
      meta: {
        keep: false
      }
    },
    {
      path: '/dataCollectionService',
      name: 'dataCollectionService',
      component: DataCollectionService,
      meta: {
        keep: false
      }
    },
    {
      path: '/entrustedDebitAuthorization',
      name: 'entrustedDebitAuthorization',
      component: EntrustedDebitAuthorization,
      meta: {
        keep: false
      }
    },
    {
      path: '/loanAgreement',
      name: 'loanAgreement',
      component: LoanAgreement,
      meta: {
        keep: false
      }
    },
    {
      path: '/informationTechnologySupportService',
      name: 'informationTechnologySupportService',
      component: InformationTechnologySupportService,
      meta: {
        keep: false
      }
    },
    {
      path: '/creditInformationDisclosure',
      name: 'creditInformationDisclosure',
      component: CreditInformationDisclosure,
      meta: {
        keep: false
      }
    },
    {
      path: '/afterLoanService',
      name: 'afterLoanService',
      component: AfterLoanService,
      meta: {
        keep: false
      }
    },


    /**中德汇都**/
    {
      path: '/ZhongDeHuiDu/usersRegisterLogin',
      name: 'ZhongDeHuiDuUsersRegisterLogin',
      component: ZhongDeHuiDuUsersRegisterLogin,
      meta: {
        keep: false
      }
    },
    {
      path: '/ZhongDeHuiDu/usersAuthorization',
      name: 'ZhongDeHuiDuUsersAuthorization',
      component: ZhongDeHuiDuUsersAuthorization,
      meta: {
        keep: false
      }
    },
    {
      path: '/ZhongDeHuiDu/dataCollectionService',
      name: 'ZhongDeHuiDuDataCollectionService',
      component: ZhongDeHuiDuDataCollectionService,
      meta: {
        keep: false
      }
    },
    {
      path: '/ZhongDeHuiDu/aboutUs',
      name: 'ZhongDeHuiDuAboutUs',
      component: ZhongDeHuiDuAboutUs,
      meta: {
        keep: false
      }
    },

    /**盂县汇民**/
    {
      path: '/YuXianHuiMin/usersRegisterLogin',
      name: 'YuXianHuiMinUsersRegisterLogin',
      component: YuXianHuiMinUsersRegisterLogin,
      meta: {
        keep: false
      }
    },
    {
      path: '/YuXianHuiMin/usersAuthorization',
      name: 'YuXianHuiMinUsersAuthorization',
      component: YuXianHuiMinUsersAuthorization,
      meta: {
        keep: false
      }
    },
    {
      path: '/YuXianHuiMin/dataCollectionService',
      name: 'YuXianHuiMinDataCollectionService',
      component: YuXianHuiMinDataCollectionService,
      meta: {
        keep: false
      }
    },
    {
      path: '/YuXianHuiMin/loanAgreement',
      name: 'YuXianHuiMinLoanAgreement',
      component: YuXianHuiMinLoanAgreement,
      meta: {
        keep: false
      }
    },
    {
      path: '/YuXianHuiMin/aboutUs',
      name: 'YuXianHuiMinAboutUs',
      component: YuXianHuiMinAboutUs,
      meta: {
        keep: false
      }
    },
  ]
})
