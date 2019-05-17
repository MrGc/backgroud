export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // sys
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/sys/user' },
      // exception
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
        ],
      },
      //后台管理
      {
        path: '/sys',
        name: 'sys',
        icon: 'setting',
        routes: [
          {
            path: '/sys/updatePassword',
            name: 'updatePassword',
            hideInMenu: true,
            component: './Sys/UpdatePassword/UpdatePassword',
          },
          {
            path: '/sys/user',
            name: 'user',
            icon: 'user',
            authority: ['sys:user:list'],
            component: './Sys/User/User',
          },
          {
            path: '/sys/dept',
            name: 'dept',
            icon: 'team',
            authority: ['sys:dept:list'],
            component: './Sys/Dept/Dept',
          },
          {
            path: '/sys/role',
            name: 'role',
            icon: 'solution',
            authority: ['sys:role:list'],
            component: './Sys/Role/Role',
          },
          {
            path: '/sys/right',
            name: 'right',
            icon: 'copyright',
            authority: ['sys:right:list'],
            component: './Sys/Right/Right',
          },
        ],
      },
      //充值查询
      {
        path: '/charge',
        name: 'charge',
        icon: 'file-done',
        routes: [
          {
            path: '/charge/chargeData',
            name: 'chargeData',
            icon: 'appstore',
            authority:['charge:chargeData:list'],
            component: './Charge/ChargeData/ChargeData',
          },
        ],
      },

      //账单管理
      {
        path: '/bill',
        name: 'bill',
        icon: 'file-done',
        routes: [
          {
            path: '/bill/basData',
            name: 'basData',
            icon: 'appstore',
            authority: ['bill:basData:list'],
            component: './Bill/BasData/BasData',
          },
          {
            path: '/bill/debt',
            name: 'debt',
            icon: 'table',
            authority: ['bill:debt:list'],
            component: './Bill/Debt/Debt',
          },
          {
            path: '/bill/debtRefund',
            name: 'debtRefund',
            icon: 'profile',
            authority: ['bill:debtRefund:list'],
            component: './Bill/DebtRefund/DebtRefund',
          },
          {
            path: '/bill/expenseDetails',
            name: 'expenseDetails',
            icon: 'wallet',
            authority: ['bill:expenseDetails:list'],
            component: './Bill/ExpenseDetails/ExpenseDetails',
          },
        ],
      },
    ],
  },
];
