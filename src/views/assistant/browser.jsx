import React, { Fragment, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
const Browser = (props) => {

    const [state, setState] = useState({ collapsed: false })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    }

    return (
        <Fragment>
            <Sider collapsible collapsed={state.collapsed} onCollapse={toggle} style={{
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}>
                <div className="logo" title="zagazig university">
                    <span>Zagazig</span>
                    <span className="ml-1">University</span>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sections']} className="h-100">
                    <SubMenu key="sections" icon={<LaptopOutlined />} title="Sections">
                        <Menu.Item key="1">
                            <NavLink to="/lecture">
                                Fourth year (4th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/lecture/sections/third">
                                Third year (3th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/lecture/sections/second">
                                Second year (2th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/lecture/sections/first">
                                First year (1th)
                                    </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="tasks" icon={<LaptopOutlined />} title="Tasks">
                        <Menu.Item key="5">
                            <NavLink to="/lecture/tasks/fourth">
                                Fourth year (4th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <NavLink to="/lecture/tasks/third">
                                Third year (3th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <NavLink to="/lecture/tasks/second">
                                Second year (2th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to="/lecture/tasks/first">
                                First year (1th)
                                    </NavLink>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="settings" icon={<UserOutlined />}>
                        <NavLink to="/lecture/settings">
                            Settings
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="logout" icon={<NotificationOutlined />} onClick={props.logoutFunction}>Logout</Menu.Item>
                </Menu>
            </Sider>
        </Fragment>
    )
}

export default withRouter(Browser);