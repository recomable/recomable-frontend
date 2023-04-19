import {Breadcrumb, Col, Layout, Menu, Row, Space, theme} from 'antd';
import {FacebookIcon, InstagramIcon, Logo, LogoVertical, TwitterIcon} from "../../assets";
import {useNavigate} from "react-router-dom";

const {Header, Content, Footer} = Layout;

const DekstopLayout = (props) => {
    const navigate = useNavigate()

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        height: 103,
                        backgroundColor: 'white',
                        borderBottom: '1px solid #B5BDE9',
                    }}
                >
                    <div style={{display: 'flex', alignItems: 'center', height: "100%"}} onClick={() => navigate("/")}>
                        <img src={Logo} alt=""/>
                    </div>
                </Header>
                <Content
                    className="site-layout"
                >
                    <div
                        style={{
                            minHeight: 380,
                            background: "white",
                        }}
                    >
                        {props.content}
                    </div>
                </Content>
                <Footer style={{padding: 0}}>
                    <div style={{border: "1px solid #B5BDE9", height: "100%", backgroundColor: "white"}}>
                        <div style={{padding: "48px 100px"}}>
                            <Row gutter={80} justify="space-around" align="middle">
                                <Col span={10}>
                                    <img src={LogoVertical} alt=""/>
                                    <p style={{fontSize: 18, color: "#616161", fontWeight: 300}}>recomable adalah platform
                                        untuk kalian yang ingin mencari kafe atau restoran yang sesuai dengan preferensi
                                        tempat yang telah kalian kunjungi sebelumnya</p>
                                </Col>
                                <Col span={4}>
                                    <Space direction="vertical" size={22}>
                                        <h1 style={{margin: 0, fontSize: 24, color: "#203ABD", fontWeight: 600}}>Navigasi</h1>
                                        <Space direction="vertical" size={15}>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Home</p>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Kafe</p>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Restoran</p>
                                        </Space>
                                    </Space>
                                </Col>
                                <Col span={5}>
                                    <Space direction="vertical" size={22}>
                                        <h1 style={{margin: 0, fontSize: 24, color: "#203ABD", fontWeight: 600}}>Tentang Kita</h1>
                                        <Space direction="vertical" size={15}>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Pers</p>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Blog</p>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Other</p>
                                        </Space>
                                    </Space>
                                </Col>
                                <Col span={5}>
                                    <Space direction="vertical" size={22}>
                                        <h1 style={{margin: 0, fontSize: 24, color: "#203ABD", fontWeight: 600}}>Pusat Bantuan</h1>
                                        <Space direction="vertical" size={15}>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>FaQ</p>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Hubungi Kami</p>
                                            <p style={{margin: 0, fontSize: 18, color: "#616161", fontWeight: 300}}>Kebijakan Privasi</p>
                                        </Space>
                                    </Space>
                                </Col>
                            </Row>
                        </div>
                        <div style={{height: 84, backgroundColor: "#203ABD", padding: "24px 48px"}}>
                            <Row justify="space-around" align="middle" style={{height: "100%"}}>
                                <Col span={12} align="left">
                                    <h1 style={{margin: 0, fontSize: 18, color: "white", fontWeight: 600}}>© 2022 Hak Cipta Terpelihara recomable</h1>
                                </Col>
                                <Col span={12} align="right">
                                    <Space size={24}>
                                        <img src={FacebookIcon} alt=""/>
                                        <img src={InstagramIcon} alt=""/>
                                        <img src={TwitterIcon} alt=""/>
                                    </Space>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </>
    )
}

export default DekstopLayout;