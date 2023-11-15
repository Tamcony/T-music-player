interface Creator {
  backgroundImgIdStr: string | null // 背景图 ID 字符串或空值
  remarkName: any // 备注名，该字段在数据中为 null
  accountStatus: number // 账号状态，数字表示
  vipType: number // VIP 类型，数字表示
  province: number // 省份信息，数字表示
  avatarUrl: string // 头像 URL 地址
  authStatus: number // 认证状态，数字表示
  userType: number // 用户类型，数字表示
  nickname: string // 用户昵称
  gender: number // 性别，数字表示
  birthday: number // 生日信息，数字表示
  city: number // 城市信息，数字表示
  backgroundUrl: string // 背景图片 URL 地址
  mutual: boolean // 是否互相关注，布尔值
  detailDescription: string // 详细描述信息
  defaultAvatar: boolean // 是否默认头像，布尔值
  expertTags: any // 专家标签，该字段在数据中为 null
  djStatus: number // DJ 状态，数字表示
  avatarImgIdStr: string // 头像图片 ID 字符串
  avatarImgId: number // 头像图片 ID
  backgroundImgId: number // 背景图片 ID
  followed: boolean // 是否已关注，布尔值
  description: string // 描述信息
  userId: number // 用户 ID
  signature: string // 用户签名信息
  authority: number // 权威信息，数字表示
}

export interface RecommendItem {
  id: number // 推荐项 ID
  type: number // 类型，数字表示
  name: string // 名称
  copywriter: string // 复制文案
  picUrl: string // 图片 URL 地址
  playcount: number // 播放次数
  createTime: number // 创建时间戳
  creator: Creator // 创建者信息，使用 Creator 接口
  trackCount: number // 歌曲数量
  userId: number // 用户 ID
  alg: string // 算法信息
}

export interface ReconmmendAlbumData {
  code: number // 状态码
  featureFirst: boolean // 是否有首要特征，布尔值
  haveRcmdSongs: boolean // 是否有推荐歌曲，布尔值
  recommend: RecommendItem[] // 推荐项列表，包含 RecommendItem 类型的数组
}
