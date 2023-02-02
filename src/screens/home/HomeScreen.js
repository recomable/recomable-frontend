import {Button, Card, Col, Rate, Row, Space, Typography} from "antd";
import {BannerTotal, JoinBackground, Jumbotron, PlaceDefault, PlaceIcon, ReviewIcon, SearchIcon} from "../../assets";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";

const {Text, Title} = Typography;

const HomeScreen = () => {
    return (
        <>
            <Space direction="vertical" size={85}>
                <div style={{height: "100%", padding: "50px 50px 0 50px"}}>
                    <Row justify="space-around" align="middle">
                        <Col span={14}>
                            <Space direction="vertical" size={72}>
                                <Space direction="vertical" size={32}>
                                    <h1 style={{margin: 0, fontSize: 50, fontWeight: 700, color: "#203ABD"}}>Cari tempat
                                        nongkrong nyaman dalam sekian detik</h1>
                                    <p style={{margin: 0, fontSize: 22, fontWeight: 400, color: "#616161"}}>Cari kafe
                                        atau restoran yang membandingkan preferensimu dengan lebih dari ribuan ulasan
                                        dari ratusan tempat
                                        di Kota Surabaya</p>
                                </Space>
                                <Row gutter={24}>
                                    <Col span={6}>
                                        <Button
                                            style={{
                                                marginTop: 8,
                                                borderRadius: 14,
                                                height: 56,
                                                width: "100%",
                                                backgroundColor: "#203ABD"
                                            }}
                                            htmlType="submit">
                                            <Space>
                                                <Title style={{margin: 0, color: "white", fontSize: 18}}
                                                       level={5}>Mulai</Title>
                                            </Space>
                                        </Button>
                                    </Col>
                                    <Col span={8}>
                                        <Button
                                            style={{
                                                marginTop: 8,
                                                borderRadius: 14,
                                                height: 56,
                                                width: "100%",
                                                border: "2px solid #FA8026"
                                            }}
                                            htmlType="submit">
                                            <Space>
                                                <Title style={{margin: 0, color: "#FA8026", fontSize: 18}} level={5}>Lihat
                                                    Daftar Tempat</Title>
                                            </Space>
                                        </Button>
                                    </Col>
                                </Row>
                            </Space>
                        </Col>
                        <Col span={10}>
                            <img src={Jumbotron} style={{width: "100%", height: 550, objectFit: "cover"}} alt=""/>
                        </Col>
                    </Row>
                </div>

                <img src={BannerTotal} style={{width: "100%", minHeight: 160, objectFit: "cover"}} alt=""/>

                <Space direction="vertical" size={24} style={{width: "100%"}}>
                    <h1 style={{
                        margin: 0,
                        textAlign: "center",
                        fontSize: 28,
                        color: "#FA8026",
                        fontWeight: 500
                    }}>Layanan
                        Kami</h1>
                    <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#616161", fontWeight: 600}}>Cari
                        tempat nongkrong <br/> gaperlu waktu lama</h1>
                    <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
                        <Row gutter={76}>
                            <Col span={8}>
                                <Card
                                    style={{
                                        border: "1px solid #B5BDE9",
                                        borderRadius: 14,
                                        width: "100%",
                                    }}
                                >
                                    <Space direction="vertical" size={12}>
                                        <Space size={24}>
                                            <img src={PlaceIcon} alt=""/>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 24,
                                                color: "#616161",
                                                fontWeight: 600
                                            }}>Tempat</h1>
                                        </Space>
                                        <p style={{fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>Tersedia ratusan
                                            tempat di Kota Surabaya</p>
                                        <Space>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 16,
                                                color: "#203ABD",
                                                fontWeight: 600
                                            }}>Lihat Lebih </h1>
                                            <ArrowLongRightIcon width="24" style={{color: "#203ABD"}}/>
                                        </Space>

                                    </Space>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    style={{
                                        border: "1px solid #B5BDE9",
                                        borderRadius: 14,
                                        backgroundColor: "#203ABD",
                                        width: "100%",
                                    }}
                                >
                                    <Space direction="vertical" size={12}>
                                        <Space size={24}>
                                            <img src={SearchIcon} alt=""/>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 24,
                                                color: "white",
                                                fontWeight: 600
                                            }}>Pencarian</h1>
                                        </Space>
                                        <p style={{fontSize: 16, color: "white", fontWeight: 300}}>Pencarian kafe sesuai preferensi kalian masing-masing</p>
                                        <Space>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 16,
                                                color: "white",
                                                fontWeight: 600
                                            }}>Lihat Lebih </h1>
                                            <ArrowLongRightIcon width="24" style={{color: "white"}}/>
                                        </Space>

                                    </Space>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    style={{
                                        border: "1px solid #B5BDE9",
                                        borderRadius: 14,
                                        width: "100%",
                                    }}
                                >
                                    <Space direction="vertical" size={12}>
                                        <Space size={24}>
                                            <img src={ReviewIcon} alt=""/>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 24,
                                                color: "#616161",
                                                fontWeight: 600
                                            }}>Ulasan</h1>
                                        </Space>
                                        <p style={{fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>Preferensimu yang dicocokkan dengan ribuan ulasan</p>
                                        <Space>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 16,
                                                color: "#203ABD",
                                                fontWeight: 600
                                            }}>Lihat Lebih </h1>
                                            <ArrowLongRightIcon width="24" style={{color: "#203ABD"}}/>
                                        </Space>

                                    </Space>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Space>

                <Space direction="vertical" size={48} style={{width: "100%"}}>
                    <div>
                        <h1 style={{
                            margin: 0,
                            textAlign: "center",
                            fontSize: 32,
                            color: "#203ABD",
                            fontWeight: 600
                        }}>Kafe &
                            Restoran</h1>
                        <p style={{fontSize: 20, textAlign: "center", color: "#616161", fontWeight: 300}}>Rekomendasi
                            kafe
                            atau restoran terbaik untuk anda</p>
                    </div>
                    <div style={{paddingLeft: "5%", paddingRight: "5%"}}>
                        <Row gutter={91}>
                            <Col span={8}>
                                <Card
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 14,
                                        border: "1px solid #E0E0E0",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Space direction="vertical" size={24}>
                                        <Space direction="vertical" size={8}>
                                            <img src={PlaceDefault}
                                                 style={{
                                                     height: 240,
                                                     width: "100%",
                                                     objectFit: "cover",
                                                     borderRadius: 8
                                                 }}
                                                 alt=""/>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 24,
                                                color: "#203ABD",
                                                fontWeight: 600
                                            }}>Indragiri Indonesian Resto</h1>
                                            <Rate style={{color: "#FA8026"}} disabled defaultValue={2}/>
                                        </Space>
                                        <p style={{margin: 0, fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>lLorem
                                            ipsum dolor sit
                                            amet, consectetur adipiscing elit. Quisque a felis cursus, elementum dolor
                                            et,
                                            dapibus nulla. </p>
                                        <h1 style={{margin: 0, fontSize: 18, color: "#FA8026", fontWeight: 500}}>Jl.
                                            Indragiri No.10</h1>
                                    </Space>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 14,
                                        border: "1px solid #E0E0E0",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Space direction="vertical" size={24}>
                                        <Space direction="vertical" size={8}>
                                            <img src={PlaceDefault}
                                                 style={{
                                                     height: 240,
                                                     width: "100%",
                                                     objectFit: "cover",
                                                     borderRadius: 8
                                                 }}
                                                 alt=""/>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 24,
                                                color: "#203ABD",
                                                fontWeight: 600
                                            }}>Kuadran Cafe</h1>
                                            <Rate style={{color: "#FA8026"}} disabled defaultValue={4}/>
                                        </Space>
                                        <p style={{margin: 0, fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>lLorem
                                            ipsum dolor sit
                                            amet, consectetur adipiscing elit. Quisque a felis cursus, elementum dolor
                                            et,
                                            dapibus nulla. </p>
                                        <h1 style={{margin: 0, fontSize: 18, color: "#FA8026", fontWeight: 500}}>Jl.
                                            Ahmad Yani No.263</h1>
                                    </Space>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 14,
                                        border: "1px solid #E0E0E0",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Space direction="vertical" size={24}>
                                        <Space direction="vertical" size={8}>
                                            <img src={PlaceDefault}
                                                 style={{
                                                     height: 240,
                                                     width: "100%",
                                                     objectFit: "cover",
                                                     borderRadius: 8
                                                 }}
                                                 alt=""/>
                                            <h1 style={{
                                                margin: 0,
                                                fontSize: 24,
                                                color: "#203ABD",
                                                fontWeight: 600
                                            }}>Janji Jiwa</h1>
                                            <Rate style={{color: "#FA8026"}} disabled defaultValue={5}/>
                                        </Space>
                                        <p style={{margin: 0, fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>lLorem
                                            ipsum dolor sit
                                            amet, consectetur adipiscing elit. Quisque a felis cursus, elementum dolor
                                            et,
                                            dapibus nulla. </p>
                                        <h1 style={{margin: 0, fontSize: 18, color: "#FA8026", fontWeight: 500}}>Jl.
                                            Keputih Tegal No.26</h1>
                                    </Space>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Space>

                {/*<img src={JoinBackground} alt=""/>*/}
                <div style={{backgroundImage: `url(${JoinBackground})`, height: 280, backgroundSize: "cover", padding: 31}}>
                    <h1 style={{
                        margin: 0,
                        textAlign: "center",
                        fontSize: 32,
                        color: "white",
                        fontWeight: 600
                    }}>Ayo Coba Sekarang</h1>
                    <p style={{fontSize: 20, textAlign: "center", color: "white", fontWeight: 300}}>Banyak kafe dan
                        restoran menarik yang <br/> sedang menunggu kalian klik dibawah ini</p>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Button
                            style={{
                                marginTop: 8,
                                borderRadius: 14,
                                height: 66,
                                width: 210,
                                backgroundColor: "white",
                            }}
                            htmlType="submit">
                            <Space>
                                <Title style={{margin: 0, color: "#203ABD", fontSize: 20}}
                                       level={5}>Cari Sekarang</Title>
                            </Space>
                        </Button>
                    </div>
                </div>

                <div></div>
            </Space>
        </>
    )
}

export default HomeScreen;