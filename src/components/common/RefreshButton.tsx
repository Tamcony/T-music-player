import { ReloadOutlined } from "@ant-design/icons"
import { Button } from "antd"

export const RefreshButton = (props: { loading: boolean; onRefresh: () => void }) => {
  const { loading, onRefresh } = props
  return (
    <>
      <div className="h-full flex items-center">
        <Button
          type="text"
          disabled={loading}
          className="flex items-center justify-center px-2 py-2"
        >
          <ReloadOutlined onClick={onRefresh} />
        </Button>
      </div>
    </>
  )
}

export default RefreshButton
