import React, { FC } from 'react';
import '../assets/Sample.css'
import { ConfigProvider } from 'antd';

interface ISample {
  addonBefore:React.ReactElement,
  content: React.ReactElement,
}

const Sample:FC<ISample> = ({addonBefore, content}) => {
  const handleAddonBeforeDblClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 24,
        },
      }}
    >
      <div className='Sample'>
        <div className='Sample__AddonBefore' onDoubleClick={handleAddonBeforeDblClick}>
          {addonBefore}
        </div>
        <div className='Sample__Content'>
          {content}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Sample;