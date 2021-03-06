const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx472ffecb0e19b39d',

    // 微信小程序 App Secret
    appSecret: '988dedac872abaecdde80babf66d996d',

    // 腾讯云 Bucket 配置密钥
    qcloudAppId: '1252802748',
    qcloudSecretId: 'AKID8A6LPIKd3HJ8lEzYgcPDrKdjiaJplr6C',
    qcloudSecretKey: '4IMFwW0IhyLXXLzQn01qSzKUUIz2ub9b',
    
    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx472ffecb0e19b39d',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 区域
         * 华北：cn-north
         * 华东：cn-east
         * 华南：cn-south
         * 西南：cn-southwest
         * 新加坡：sg
         * @see https://www.qcloud.com/document/product/436/6224
         */
        region: 'cn-east',
        // Bucket 名称
        fileBucket: 'wx2017',
        // 文件夹
        uploadFolder: '/'
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'RondoZJH9XiYouXiaoMo'
}

module.exports = CONF
