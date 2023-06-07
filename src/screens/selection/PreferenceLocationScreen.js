import {Card, Col, Row, Space} from "antd";
import {PlaceIcon, SearchIcon} from "../../assets";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GET_MY_PLACE_DETAIL} from "../../setup/redux/type/PlaceType";

const PreferenceLocationScreen = ({onNext, onPrev}) => {
    const dispatch = useDispatch();
    const {dataMyPlace} = useSelector((state) => state.place);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const selectMyLocation = () => {
        const values = {
            location: "myLocation"
        }
        dispatch({
            type: `${GET_MY_PLACE_DETAIL}`,
            payload: {...dataMyPlace, location: "myLocation"},
        })
        onNext();
    }

    const selectKecamatan = () => {
        const values = {
            location: "kecamatan"
        }
        dispatch({
            type: `${GET_MY_PLACE_DETAIL}`,
            payload: {...dataMyPlace, location: "kecamatan"},
        })
        onNext();
    }

    return(
        <>
            <div style={{padding: "0px 293px"}}>
                <Space direction="vertical" size={80}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Lokasi
                        </h1>
                        <p style={{
                            margin: 0,
                            textAlign: "center",
                            fontSize: 20,
                            color: "#616161",
                            fontWeight: 300
                        }}>Pilih jenis bagaimana kami menentukan letak lokasi rekomendasi
                        </p>
                    </Space>

                    <Row gutter={100}>
                        <Col span={12}>
                            <Card
                                onClick={() => selectMyLocation()}
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
                                        }}>Lokasi Kamu</h1>
                                    </Space>
                                    <p style={{fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>Kami akan merekomendasikan lokasi yang dekat dengan lokasimu</p>
                                    <Space style={{cursor: "pointer"}}>
                                        <h1 style={{
                                            margin: 0,
                                            fontSize: 16,
                                            color: "#203ABD",
                                            fontWeight: 600
                                        }}>Lanjutkan </h1>
                                        <ArrowLongRightIcon width="24" style={{color: "#203ABD"}}/>
                                    </Space>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                // onClick={() => selectKecamatan()}
                                style={{
                                    cursor: "not-allowed",
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
                                        }}>Kecamatan</h1>
                                    </Space>
                                    <p style={{fontSize: 16, color: "white", fontWeight: 300}}>Kami akan merekomendasikan lokasi yang berada di kecamatan pilihanmu</p>
                                    <Space style={{cursor: "pointer"}}>
                                        <h1 style={{
                                            margin: 0,
                                            fontSize: 16,
                                            color: "white",
                                            fontWeight: 600
                                        }}>Coming Soon! </h1>
                                        <ArrowLongRightIcon width="24" style={{color: "white"}}/>
                                    </Space>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </Space>
            </div>
        </>
    )
}

export default PreferenceLocationScreen;