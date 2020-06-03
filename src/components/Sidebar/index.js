import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    HomeOutlined,
    AlertOutlined,
    AuditOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            Trang chủ
                  </Menu.Item>
                        <SubMenu key="sub1" icon={<AlertOutlined />} title="Cảnh báo">
                            <Menu.Item key="3" activeClassName="showAlert">
                                <Link to={`/alert`}>
                                    Hiển thị cảnh báo
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={`/dashboard`}>
                                    Thống kê cảnh báo
                                    </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2" icon={<AuditOutlined />}>
                            Đợt kiểm tra
                  </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}

export default Sidebar