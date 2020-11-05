import React, { Fragment, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
const Browser = (props) => {

    const dispatch = useDispatch();

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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['materials']} className="h-100">
                    <SubMenu key="materials" icon={<UserOutlined />} title="Materials">
                        <Menu.Item key="1">
                            <NavLink to="/doctor">
                                Fourth year (4th)
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/doctor/materials/third">
                                Third year (3th)
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/doctor/materials/second">
                                Second year (2th)
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/doctor/materials/first">
                                First year (1th)
                            </NavLink>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="instructor" icon={<LaptopOutlined />}>
                        <NavLink to="/doctor/instructors">
                            Instructors
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="settings" icon={<UserOutlined />}>
                        <NavLink to="/doctor/settings">
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




// <SubMenu key="make" icon={<LaptopOutlined />} title="Make Quiz">
//     <Menu.Item key="5">
//         <NavLink to="/doctor/quiz/fourth">
//             Fourth year (4th)
//                             </NavLink>
//     </Menu.Item>
//     <Menu.Item key="6">
//         <NavLink to="/doctor/quiz/third">
//             Third year (3th)
//                                     </NavLink>
//     </Menu.Item>
//     <Menu.Item key="7">
//         <NavLink to="/doctor/quiz/second">
//             Second year (2th)
//                                     </NavLink>
//     </Menu.Item>
//     <Menu.Item key="8">
//         <NavLink to="/doctor/quiz/first">
//             First year (1th)
//                                     </NavLink>
//     </Menu.Item>
// </SubMenu>
//     <SubMenu key="final" icon={<LaptopOutlined />} title="Result Quiz">
//         <Menu.Item key="9">
//             <NavLink to="/doctor/final/fourth">
//                 Fourth year (4th)
//                                     </NavLink>
//         </Menu.Item>
//         <Menu.Item key="10">
//             <NavLink to="/doctor/final/third">
//                 Third year (3th)
//                                     </NavLink>
//         </Menu.Item>
//         <Menu.Item key="11">
//             <NavLink to="/doctor/final/second">
//                 Second year (2th)
//                             </NavLink>
//         </Menu.Item>
//         <Menu.Item key="12">
//             <NavLink to="/doctor/final/first">
//                 First year (1th)
//                             </NavLink>
//         </Menu.Item>
//     </SubMenu>
