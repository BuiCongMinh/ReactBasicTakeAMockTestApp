import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.scss'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaFacebook, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { DiReact } from 'react-icons/di'
import { MdDashboard } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';


const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    const navigate = useNavigate()

    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',

                            cursor: 'pointer'
                        }}
                        onClick={() => navigate('/')}
                    >
                        <DiReact fontSize='30px' color='00bfff' />
                        <span

                        >
                            Web MinhVN
                        </span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                            suffix={<span className="badge red">New</span>}
                        >
                            dashboard
                            <Link to='' />
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}> Futures </MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            title="Features"
                            icon={<FaGem />}
                        >
                            <MenuItem> Quản Lý User <Link to='manage-user' /> </MenuItem>
                            <MenuItem> Quản Lý Bài Quiz<Link to='manage-quizzes' /> </MenuItem>
                            <MenuItem> Quản Lý Câu Hỏi</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://www.facebook.com/minh.buicong.18659"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                <FaFacebook style={{ margin: '3px' }} ></FaFacebook>

                                &#169; WebMinhVn
                            </span>
                        </a>
                    </div>
                </SidebarFooter>

            </ProSidebar>
        </>
    )
}

export default SideBar