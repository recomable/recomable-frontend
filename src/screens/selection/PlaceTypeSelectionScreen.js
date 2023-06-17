import {Button, Card, Col, message, Modal, Row, Space, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getRecommendation} from "../../setup/redux/action/RecommendationAction";
import {useEffect, useState} from "react";

const {Meta} = Card;
const PlaceTypeSelectionScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {dataMyPlace, dataPreference, isLoading} = useSelector((state) => state.place);
    const [modal2Open, setModal2Open] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleSubmit = (atmosphere) => {
        setModal2Open(true)
        // console.log(dataPreference)
        localStorage.setItem('dataPreference', JSON.stringify(dataPreference));
        dispatch(getRecommendation(dataPreference, dataMyPlace.latitude, dataMyPlace.longitude, atmosphere, navigate))
    }

    const type = [
        {
            type: "any",
            name: "Semua tipe",
            photo_link: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/09/03/2931371237.jpeg",
            description: "Rekomendasikan semua jenis kafe"
        },
        {
            type: "traditional",
            name: "Tradisional",
            photo_link: "https://10619-2.s.cdn12.com/rests/original/110_509534201.jpg",
            description: "Tempat nongkrong biasa yang pasti murah!"
        },
        {
            type: "modern",
            name: "Modern",
            photo_link: "https://cdn-cms.pgimgs.com/static/2019/05/Cafe-Industrial-Foto-Utama.jpg",
            description: "Kafe modern yang instagramable!"
        },
        {
            type: "retro",
            name: "Retro",
            photo_link: "https://phinemo.com/wp-content/uploads/2018/11/40290460_1916213431832346_9035983627104388578_n.jpg",
            description: "Membawa kamu ke era 90an"
        },
        {
            type: "industrial",
            name: "Industrial",
            photo_link: "https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img_medium/2810/7312/48415/photo-seating-area-restaurant-cafe-industrial-desain-arsitek-oleh-liska-yulianti.png",
            description: "Kafe dengan konsep industri yang unik"
        }
    ]

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                marginBottom: 76
            }}>
                <div>
                    <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                        Tipe Kafe
                    </h1>
                    <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                        Biar kami bisa rekomendasikan tempat yang sesuai dengan kebutuhan kamu
                    </p>
                </div>
            </div>
            <Row justify="center" gutter={16}>
                {type.map((item, index) => {
                    return (
                        <Col span={4} key={index}>
                            <Card
                                onClick={() => handleSubmit(item.type)}
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img style={{height: 150, objectFit: "cover"}} alt="example"
                                            src={item.photo_link}/>}
                            >
                                <Meta title={item.name} description={item.description}/>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Modal
                centered
                open={modal2Open}
                footer={null}
                closable={false}
            >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                    <Spin tip={<p style={{fontSize: 20}}>Bentar ya, lagi kami cari nih!</p>} size="large"/>
                </div>
            </Modal>
        </div>
    )
}

export default PlaceTypeSelectionScreen