import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const SpinIcon=()=> {
    const antIcon = <LoadingOutlined style={{ fontSize: 28 }} spin />;

    return(
      <spin>
          <Spin indicator={antIcon} />
      </spin>
  )
}
export default SpinIcon