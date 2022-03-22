const trayList = [{
    pageNo: 1,
    items: [{
        label: '日历',
        className: 'calendar',
        icon: ''
    },
    {
        label: '相机',
        className: 'camera',
        icon: 'camera.svg'
    },
    {
        label: '天气',
        className: 'weather',
        icon: 'weather.svg'
    },
    {
        label: '时钟',
        className: 'clock',
        icon: 'clock.svg'
    },
    {
        label: '照片',
        className: 'photos',
        icon: 'photo.svg'
    },
    {
        label: '地图',
        className: 'map',
        icon: 'map.svg'
    },
    {
        label: '备忘录',
        className: 'memorandum',
        icon: 'memorandum.svg'
    },
    {
        label: '提醒事项',
        className: 'reminder',
        icon: 'reminder.svg'
    },
    {
        label: 'App Store',
        className: 'app-store',
        icon: 'app-store-ios.svg'
    },
    {
        label: '图书',
        className: 'book',
        icon: 'book.svg'
    },
    {
        label: '钱包',
        className: 'wallet',
        icon: 'wallet.svg'
    },
    {
        label: '家庭',
        className: 'family',
        icon: 'family.svg'
    },
    {
        label: '设置',
        className: 'settings',
        icon: 'settings.svg'
    },
    {
        label: '网易云音乐',
        className: 'net-ease-cloud-music',
        icon: 'music.svg'
    },
    {
        label: 'iTunes U',
        className: 'iTunes-u',
        icon: 'iTunesStore.svg'
    },
    {
        label: 'myGQ',
        className: 'myGQ',
        icon: ''
    },
    {
        label: 'iMovie',
        className: 'iMovie',
        icon: 'iMovie.svg'
    },
    {
        label: 'Pages 文稿',
        className: 'pages',
        icon: 'pages.svg'
    },
    {
        label: 'Keynote 讲演',
        className: 'Keynote',
        icon: 'Keynote.svg'
    },
    {
        label: 'iTunes Store',
        className: 'iTunes-store',
        icon: 'iTunesStore.svg'
    },
    {
        label: '嘿芝麻社区',
        className: 'community',
        icon: ''
    },
    {
        label: 'FaceTime通话',
        className: 'FaceTime',
        icon: 'FaceTime.svg'
    },
    {
        label: 'Safari浏览器',
        className: 'Safari',
        icon: 'Safari.svg'
    }
    ]
},
{
    pageNo: 2,
    items: [{
        label: '百度地图',
        className: 'baidu-map',
        icon: '地图.svg'
    },
    {
        label: '邮件',
        className: 'email',
        icon: 'email.svg'
    },
    {
        label: '计算器',
        className: 'calculator',
        icon: 'calculator.svg'
    },
    {
        label: '手电筒',
        className: 'flashlight',
        icon: 'flashlight.svg'
    },
    {
        label: '健康',
        className: 'health',
        icon: 'health.svg'
    },
    {
        label: '音乐',
        className: 'music',
        icon: 'music.svg'
    }
    ]
},
]

const data = [{
    label: '信息',
    className: 'message',
    icon: 'message.svg',
    backgroundColor: 'green'
},
{
    label: '电话',
    className: 'phone',
    icon: 'phone.svg',
    backgroundColor: 'green'
},
{
    label: '微信',
    className: 'wechat',
    icon: 'weixin.svg',
    backgroundColor: 'green'
},
{
    label: '通讯录',
    className: 'address-book',
    icon: 'weixin.svg',
    backgroundColor: 'green'
},
]

const prefix = '../../'

const footerItemList = data.map(item => {
    delete item.label
    return item
})


export { trayList, footerItemList }