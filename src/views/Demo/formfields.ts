import { EleProps } from "yp-frontend-library/dist/src/components/Form/FormBuilder";

const formfields: EleProps[] = [
  {
    label: "调拨单号",
    name: "transferOrderNo",
    type: "INPUT",
  },
  {
    label: "创建人",
    name: "createUserName",
    type: "INPUT",
  },
  {
    label: "直通采购单号",
    name: "purchaseOrder",
    type: "INPUT",
    wrapperCol: {
      span: 15,
    },
    labelCol: {
      span: 9,
    },
  },
  {
    label: "关联单号",
    name: "requireOrderNo",
    type: "INPUT",
  },
  {
    label: "是否红冲单",
    name: "isReverseOrder",
    type: "SELECT",
    dataList: [
      {
        value: 1,
        label: "是",
      },
      {
        value: 2,
        label: "否",
      },
    ],
  },
  {
    label: "日期",
    name: "date",
    type: "RANGE_PICKER_SHORT",
  },
];

export default formfields;
