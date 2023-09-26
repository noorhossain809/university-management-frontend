"use client";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, theme } from "antd";

const { Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const Contents = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ minHeight: "100vh", margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: colorBgContainer }}>
        {children}
      </div>
    </Content>
  );
};

export default Contents;
