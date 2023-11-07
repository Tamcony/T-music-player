export const phoneCheck = (phone: string) => {
  if (phone.length < 11 || !/^1[3456789]\d{9}$/.test(phone)) {
    return {
      msg: "手机号格式错误",
      success: false,
    }
  }
  return {
    msg: "",
    success: true,
  }
}
