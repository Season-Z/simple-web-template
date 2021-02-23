import React from "react";
import { Layout, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import MyMenu from "@layout/MenuNav";
import MyHeader from "@layout/Header";
import style from "./main.less";

moment.locale("en");

interface IProps {
  children: any;
  location?: any;
}

const { Content } = Layout;

const Main = (props: IProps) => {
  const { location } = props;
  const isLoginPage = location?.pathname === "/login";

  return (
    <ConfigProvider locale={zhCN}>
      {isLoginPage ? (
        <div className="mid">{props.children}</div>
      ) : (
        <Layout style={{ minHeight: "100vh", display: "flex" }}>
          <MyHeader />
          <Layout style={{ display: "flex", flex: 1, flexDirection: "row" }}>
            <MyMenu />
            <Layout style={{ width: 0, flex: 1 }}>
              <Content className="site-layout-background layout-content">
                <div className={style.contentChild}>{props.children}</div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      )}
    </ConfigProvider>
  );
};

export default Main;
