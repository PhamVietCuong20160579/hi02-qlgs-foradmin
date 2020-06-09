import React, { Component, useState, useEffect }  from 'react';
import { Descriptions, Badge } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';

import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar'; 
import { Layout,Breadcrumb } from 'antd';
import './style.css';
import { Card, Carousel } from 'antd';

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout;

const WarningDetail = () =>{

const child = ["Vu Minh Phuong"
                , "Ha Vu Hang"
                , "Ha Viet Minh"
                , "Mai Hanh"
                ];

const render_child = [];
child.forEach( e => {
	render_child.push(<span className="detail">{e}</span>);
})

const dr = ["h1",
			"a2",
			"b2",
			"c4",
			"h3",
			"i1"];

const drone = [];
dr.forEach( e => {
  drone.push(<span className="detail">{e}</span>);
})


return (
	<div>
		<Layout>
			<PageHeader />
		</Layout>
		<Layout>
			<Sider>
				<Sidebar />
			</Sider>
		<Layout style={{ padding: '0 24px 24px' }}>
        <Content className="form-body" styl>
        	<Row>
        		<Col span={24}>
        			<h1 className="sec-title">Chi tiết đợt kiểm tra</h1>
        		</Col>
	        	<Col row={18}>
			        <Descriptions bordered title="Thông tin cơ bản" size='default' column={3}>
			        	<Descriptions.Item label="Tên đợt kiểm tra">An Dương Vương - Nghi Tàm B19271816</Descriptions.Item>
			        	<Descriptions.Item label="Phân loại">Bảo trì</Descriptions.Item>
			        	<Descriptions.Item label="Mức độ">Cao</Descriptions.Item>
			        	<Descriptions.Item label="Địa chỉ">Các cột điện dọc tuyến đường Nghi tàm, Âu Cơ</Descriptions.Item>
			        	<Descriptions.Item label="Thành phố">Hà Nội</Descriptions.Item>
			        	<Descriptions.Item label="Thời hạn">16/11/2016</Descriptions.Item>
			          	<Descriptions.Item label="Drone sử dụng" span={3}>
			          		{drone}
			          	</Descriptions.Item>
						<Descriptions.Item label="Người giám sát">Nhóm VP.infinite</Descriptions.Item>
						<Descriptions.Item label="Người Quản lý">Nhóm The Ugly</Descriptions.Item>
						<Descriptions.Item label="Nhóm thực hiện">Nhóm The Boys</Descriptions.Item>
						<Descriptions.Item label="Người liên quan" span={3}>
			        		{render_child}
			        	</Descriptions.Item>
						<Descriptions.Item label="Yêu cầu đặc biệt">
			        		Khu vực đông dân cư
			        	</Descriptions.Item>
						<Descriptions.Item label="Ghi chú" span={3}>
			        		
			        	</Descriptions.Item>
					</Descriptions>

					<Descriptions bordered title="Tài liệu" column={1}>
			        	<Descriptions.Item label="Tài liệu đăc tả">Bản đặc tả chi tiết 1</Descriptions.Item>
			        	<Descriptions.Item label="Tài liệu đăc tả">Bản đặc tả chi tiết 2</Descriptions.Item>
			        	<Descriptions.Item label="Tài liệu đăc tả">Bản đặc tả chi tiết 3</Descriptions.Item>
			        	<Descriptions.Item label="Tài liệu đăc tả">Bản đặc tả chi tiết 4</Descriptions.Item>
			        
					</Descriptions>
	        	</Col>
	        	<Col row={5} offset={1}>
	        	  <Card
					    hoverable
					    style={{ height: 300, width: '100%' }}
					    cover={<img alt="example" src="https://lh3.googleusercontent.com/proxy/JZ23FuzjWncYO5hw0aOUS2vPClZf_ZxTfqrwod_2gtcR47C2530XZChOAlsSpYkPGxC_GQjClsqhVfcP4wmRB3jiaP-PdH-VKm82SJm48JT5CzVTrOeW23dV4A" />}>
					    <Meta title="Hình ảnh minh họa" />
					</Card>
	        		
	        	</Col>
        	</Row>
        </Content>
        </Layout>
      </Layout>
    </div>
);
}


export default WarningDetail  ;