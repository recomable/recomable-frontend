import {Col, Row, Space} from "antd";
import {useEffect} from "react";
import CardPlace from "../../components/CardPlace";
import {useDispatch, useSelector} from "react-redux";
import {getRecommendationDetail} from "../../setup/redux/action/RecommendationAction";

const ResultScreen = () => {
    const dispatch = useDispatch();
    const {dataRecommendation, dataPlaceDetail} = useSelector((state) => state.recommendation);

    useEffect(() => {
        // console.log(dataRecommendation, "ini di result screen")
        localStorage.setItem('dataRecommendation', JSON.stringify(dataRecommendation));
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div style={{padding: "53px 293px"}}>
                <Space direction="vertical" size={80} style={{width: "100%"}}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Ada nih kafe yang kami rekomendasikan!
                        </h1>
                        <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                            Kamu udah coba kunjungi ini belum?
                        </p>
                    </Space>
                </Space>
            </div>
            <div style={{paddingBottom: 53}}>
                <Row>
                    <Col offset={8} span={8}>
                        <CardPlace title={dataRecommendation[0].place_name} image={dataRecommendation[0].photo_url}
                                   tag={dataRecommendation[0].place_type} address={dataRecommendation[0].place_address}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ResultScreen