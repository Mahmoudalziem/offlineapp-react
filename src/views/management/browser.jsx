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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['students']} className="h-100">
                    <SubMenu key="students" icon={<UserOutlined />} title="Students">
                        <Menu.Item key="1">
                            <NavLink to="/manage">
                                Fourth year (4th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/manage/students/third">
                                Third year (3th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/manage/students/second">
                                Second year (2th)
                                    </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/manage/students/first">
                                First year (1th)
                                    </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="doctors" icon={<LaptopOutlined />}>
                            <NavLink to="/manage/doctors">
                                Doctors
                            </NavLink>
                    </Menu.Item>
                    <Menu.Item key="instructor" icon={<LaptopOutlined />}>
                        <NavLink to="/manage/instructors">
                            Instructors
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="subject" icon={<NotificationOutlined />}>
                        <NavLink to="/manage/subjects">
                            Subjects
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="affairs" icon={<LaptopOutlined />}>
                        <NavLink to="/manage/affairs">
                            Affairs
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="settings" icon={<UserOutlined />}>
                        <NavLink to="/manage/settings">
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