const columns: any[] = [
  {
    title: "调拨单号",
    dataIndex: "transferOrderNo",
    key: "transferOrderNo",
    width: 170,
  },
  {
    title: "状态",
    dataIndex: "billStateName",
    key: "billStateName",
    width: 100,
    align: "right",
  },
  {
    title: "调拨类型",
    dataIndex: "transferTypeName",
    key: "transferTypeName",
    width: 80,
  },
  {
    title: "品类",
    dataIndex: "firstCategoryName",
    key: "firstCategoryName",
    width: 120,
    ellipsis: true,
    render: (t: string, r: any) => {
      const { secondCategoryName } = r;
      return secondCategoryName ? `${t}/${secondCategoryName}` : t;
    },
  },
  {
    title: "调出地编码",
    dataIndex: "deliveryDcCode",
    key: "deliveryDcCode",
    width: 90,
  },
  {
    title: "调出地名称",
    dataIndex: "deliveryDcName",
    key: "deliveryDcName",
    width: 200,
  },
  {
    title: "调入地编码",
    dataIndex: "receiveDcCode",
    key: "receiveDcCode",
    width: 90,
  },
  {
    title: "调入地名称",
    dataIndex: "receiveDcName",
    key: "receiveDcName",
    width: 200,
  },
  {
    title: "创建人",
    dataIndex: "createUserName",
    key: "createUserName",
    width: 120,
  },
  {
    title: "创建时间",
    dataIndex: "gmtCreate",
    key: "gmtCreate",
    width: 170,
  },
  {
    title: "调出数量",
    dataIndex: "deliveryGoodsQty",
    key: "deliveryGoodsQty",
    width: 90,
  },
  {
    title: "调入数量",
    dataIndex: "receiveGoodsQty",
    key: "receiveGoodsQty",
    width: 90,
  },
  {
    title: "关联单号",
    dataIndex: "requireOrderNo",
    key: "requireOrderNo",
    width: 170,
  },
  {
    title: "是否红冲单",
    dataIndex: "isReverseOrder",
    key: "isReverseOrder",
    width: 90,
    render: (t: number) => {
      return t ? "是" : "否";
    },
  },
  {
    title: "备注",
    dataIndex: "remark",
    key: "remark",
    width: 120,
    ellipsis: true,
  },
];

export default columns;
