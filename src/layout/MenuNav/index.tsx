/**
 * 菜单栏
 */
import React, { useCallback, useEffect, useState } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import configMenu from "@config/menu";
const { SubMenu } = Menu;

interface Iprop {
  updateMenuTab?: any;
  tabList?: any;
}

interface MenuItemProps {
  id: number;
  name: string;
  icon?: any;
  route: string;
  children?: MenuItemProps[];
}

const MenuNav = (props: Iprop & any) => {
  const history = useHistory();
  const { location } = history;

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const collapsed = false;

  const handleOpenChange = useCallback((keys) => {
    setOpenKeys(keys);
  }, []);

  const renderMenu = (list: MenuItemProps[]) => {
    return list.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.name} key={item.route}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.name} key={item.route} icon={item?.icon}>
          <Link to={item.route}>{item.name}</Link>
        </Menu.Item>
      );
    });
  };

  /**
   * 匹配父路由
   */
  useEffect(() => {
    const arr = configMenu.filter((v: MenuItemProps) =>
      location.pathname.startsWith(v.route)
    );
    if (arr && arr.length) {
      setOpenKeys([arr[0].route]);
    }
  }, [configMenu, location.pathname]);

  /**
   * 页面路由
   */
  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  return (
    <div style={{ minWidth: 200, background: "#001529" }}>
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        selectedKeys={selectedKeys}
        inlineCollapsed={collapsed}
      >
        {renderMenu(configMenu)}
      </Menu>
    </div>
  );
};

export default MenuNav;
