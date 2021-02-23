/**
 * 页面使用示例
 *
 * [查看更多组件示例](http://test-frontend-library.ypsx-internal.com/)
 */
import React, { useState } from "react";
import { FormBuilder, CommonTable } from "yp-frontend-library";
import formfields from "./formfields";
import { Props } from "./interface";
import columns from "./columns";
import "./index.less";

const defaultProps = {};

const Demo: React.FC<Props> = (userProps) => {
  const props = { ...defaultProps, ...userProps };

  const [searchParams, setSearchParams] = useState<
    undefined | { [x: string]: any }
  >();

  const searchTable = (data: { [x: string]: any }) => {
    console.log(data);
    setSearchParams(data);
  };

  console.log(props);
  return (
    <div className="Demo columnFlex">
      <div className="wrapFormStyle">
        <FormBuilder elements={formfields} onSearch={searchTable} />
      </div>
      <div className="flexFill wrapContent">
        <CommonTable
          columns={columns}
          searchParams={searchParams}
          queryDataUrl="purchase.transfer.queryTransferOrderList"
        />
      </div>
    </div>
  );
};

export default Demo;
