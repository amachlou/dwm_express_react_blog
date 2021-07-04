import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { Typography } from 'antd';
import { Space } from 'antd';

const { Title } = Typography;


const { SubMenu } = Menu;

const Navbar =()=> {


  
    return (
      <Menu mode="horizontal">

          <Space align="center">
        <Menu.Item>
        <Title level={2}>
        <Link to="/">
            BLOG
          </Link>
        </Title>
        </Menu.Item>
          </Space>

          <Menu.Item>
          <Link to="/">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/articles">
            Articles
          </Link>
        </Menu.Item>


        <Menu.Item>
          <Link to="/about">
            About
          </Link>
        </Menu.Item>

      </Menu>
    );
  
}

export default Navbar;
