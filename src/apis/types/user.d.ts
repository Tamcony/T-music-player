// 账户信息接口
interface Account {
  id: number // 账户ID
  userName: string // 用户名
  type: number // 账户类型
  status: number // 账户状态
  whitelistAuthority: number // 白名单权限
  createTime: number // 创建时间
  salt: string // 加密盐值
  tokenVersion: number // Token版本
  ban: number // 封禁状态
  baoyueVersion: number // 付费音乐包版本
  donateVersion: number // 捐赠版本
  vipType: number // VIP类型
  viptypeVersion: number // VIP版本
  uninitialized: boolean // 是否初始化
  anonimousUser: boolean // 是否匿名用户
}

// 用户个人资料接口
interface Profile {
  backgroundUrl: string // 背景图片URL
  followed: boolean // 是否被关注
  defaultAvatar: boolean // 是否使用默认头像
  avatarImgIdStr: string // 头像ID字符串
  backgroundImgIdStr: string // 背景图片ID字符串
  mutual: boolean // 是否互相关注
  remarkName: string | null // 备注名
  vipType: number // VIP类型
  authStatus: number // 认证状态
  djStatus: number // DJ状态
  detailDescription: string // 详细描述
  experts: any // 专家信息，你可能需要为 'experts' 属性定义一个特定类型
  expertTags: any[] | null // 专家标签，你可能需要为 'expertTags' 属性定义一个特定类型
  accountStatus: number // 账户状态
  nickname: string // 昵称
  birthday: number // 生日
  gender: number // 性别
  province: number // 省份
  city: number // 城市
  avatarImgId: number // 头像ID
  backgroundImgId: number // 背景图片ID
  avatarUrl: string // 头像URL
  userType: number // 用户类型
  description: string // 个人描述
  userId: number // 用户ID
  signature: string // 签名
  authority: number // 权限
  followeds: number // 关注数
  follows: number // 粉丝数
  eventCount: number // 事件数
  avatarDetail: any | null // 头像详细信息，你可能需要为 'avatarDetail' 属性定义一个特定类型
  playlistCount: number // 播放列表数量
  playlistBeSubscribedCount: number // 被订阅的播放列表数量
}

// 绑定信息接口
interface Binding {
  expiresIn: number // 过期时间
  bindingTime: number // 绑定时间
  refreshTime: number // 刷新时间
  tokenJsonStr: string // Token JSON字符串
  url: string // URL
  expired: boolean // 是否过期
  userId: number // 用户ID
  id: number // 绑定ID
  type: number // 绑定类型
}

// 用户信息接口
export interface User {
  loginType: number // 登录类型
  code: number // 状态码
  account: Account // 账户信息
  token: string // Token
  profile: Profile // 个人资料
  bindings: Binding[] // 绑定信息
  cookie: string // Cookie
}

// 用户积分信息接口
interface UserPoint {
  userId: number // 用户ID
  balance: number // 余额
  updateTime: number // 更新时间
  version: number // 版本号
  status: number // 状态
  blockBalance: number // 冻结余额
}

// 隐私设置接口
interface PrivacyItemUnlimit {
  area: boolean // 地区
  college: boolean // 学校
  gender: boolean // 性别
  age: boolean // 年龄
  villageAge: boolean // 村龄
}

// 用户个人资料接口
interface UserProfile {
  privacyItemUnlimit: PrivacyItemUnlimit // 隐私设置
  avatarDetail: any | null // 头像详细信息，你可能需要为 'avatarDetail' 属性定义一个特定类型
  avatarImgIdStr: string // 头像ID字符串
  avatarUrl: string // 头像URL
  backgroundImgId: number // 背景图片ID
  backgroundUrl: string // 背景图片URL
  gender: number // 性别
  createTime: number // 创建时间
  userType: number // 用户类型
  accountStatus: number // 账户状态
  province: number // 省份
  djStatus: number // DJ状态
  city: number // 城市
  birthday: number // 生日
  avatarImgId: number // 头像ID
  nickname: string // 昵称
  defaultAvatar: boolean // 是否使用默认头像
  followed: boolean // 是否关注
  authStatus: number // 认证状态
  detailDescription: string // 详细描述
  experts: any // 专家信息，你可能需要为 'experts' 属性定义一个特定类型
  expertTags: any[] | null // 专家标签，你可能需要为 'expertTags' 属性定义一个特定类型
  backgroundImgIdStr: string // 背景图片ID字符串
  vipType: number // VIP类型
  mutual: boolean // 是否互相关注
  remarkName: string | null // 备注名
  description: string // 描述
  userId: number // 用户ID
  signature: string // 签名
  authority: number // 权限
  followeds: number // 关注数
  follows: number // 粉丝数
  blacklist: boolean // 是否在黑名单中
  eventCount: number // 事件数
  allSubscribedCount: number // 所有订阅数
  playlistBeSubscribedCount: number // 被订阅的播放列表数量
  followTime: number | null // 关注时间
  followMe: boolean // 是否关注了我
  artistIdentity: any[] // 艺术家身份，你可能需要为 'artistIdentity' 属性定义一个特定类型
  cCount: number // C计数
  inBlacklist: boolean // 是否在黑名单中
  sDJPCount: number // DJP计数
  playlistCount: number // 播放列表数量
  sCount: number // S计数
  newFollows: number // 新关注数
}

// 用户绑定信息接口
interface Binding {
  expiresIn: number // 过期时间
  refreshTime: number // 刷新时间
  bindingTime: number // 绑定时间
  tokenJsonStr: any | null // Token JSON字符串，你可能需要为 'tokenJsonStr' 属性定义一个特定类型
  url: string // URL
  expired: boolean // 是否过期
  userId: number // 用户ID
  id: number // 绑定ID
  type: number // 绑定类型
}

// 用户村民信息接口
interface ProfileVillageInfo {
  title: string // 标题
  imageUrl: string | null // 图片URL
  targetUrl: string // 目标URL
}

// 用户信息接口
export interface UserDetail {
  level: number // 用户等级
  listenSongs: number // 听歌数量
  userPoint: UserPoint // 用户积分信息
  mobileSign: boolean // 移动端签到状态
  pcSign: boolean // PC签到状态
  profile: UserProfile // 用户个人资料
  peopleCanSeeMyPlayRecord: boolean // 是否允许他人查看我的播放记录
  bindings: Binding[] // 用户绑定信息
  adValid: boolean // 广告是否有效
  code: number // 状态码
  newUser: boolean // 是否是新用户
  recallUser: boolean // 是否是回归用户
  createTime: number // 创建时间
  createDays: number // 已创建天数
  profileVillageInfo: ProfileVillageInfo // 用户村民信息
}
