import * as React from 'react';
import Dialog from './Dialog';
import Portal from 'rc-util/lib/PortalWrapper';
import IDialogPropTypes from './IDialogPropTypes';
import { IDialogChildProps } from './Dialog';


export default (props: IDialogPropTypes) => {
    const { visible, getContainer, forceRender } = props;
    // 渲染在当前 dom 里；
    if (getContainer === false) {
      return (
        <Dialog
          {...props}
          getOpenCount={() => 2} // 不对 body 做任何操作。。
        />
      );
    }
  
    return (
      <Portal
        visible={visible}
        forceRender={forceRender}
        getContainer={getContainer}
      >
        {(childProps: IDialogChildProps) => (
          <Dialog
            {...props}
            {...childProps}
          />
        )}
      </Portal>
    );
};
