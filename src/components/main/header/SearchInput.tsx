import { Input, ConfigProvider } from "antd"
import { SearchOutlined } from "@ant-design/icons"

export const SearchInput = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBg: "initial",
            },
          },
        }}
      >
        <Input
          className="w-80 bg-gradient-to-r from-#EAF0FA to-#F7EEF7"
          classNames={{
            input: "bg-gradient-to-r from-#EAF0FA to-#F7EEF7",
          }}
          prefix={<SearchOutlined />}
          size="large"
        ></Input>
      </ConfigProvider>
    </>
  )
}

export default SearchInput
