import {Button, Card, Col, Form, Input, message, Row, Select, Space, Typography} from "antd";
import CardPlace from "../../components/CardPlace";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPlace} from "../../setup/redux/action/PlaceAction";
import {getRecommendation} from "../../setup/redux/action/RecommendationAction";
import {DeleteIcon} from "../../assets";
import {GET_MY_PLACE_DETAIL, POST_PREFERENCE} from "../../setup/redux/type/PlaceType";

const {Title} = Typography;
const {Search} = Input;

const PreferenceSelectionScreen = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {dataPlace, dataMyPlace, dataPreference} = useSelector((state) => state.place);

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAllPlace())
    }, [])

    const data = dataPlace

    const dataPreferenceDummy = [
        {
            id: 1,
            name: "Kafe Kita",
            rating: 1,
        },
        {
            id: 2,
            name: "Kafe Kemarin Sore",
            rating: 3,
        },
        {
            id: 3,
            name: "Kita Pasti Kembali",
            rating: 5,
        },
    ]

    const handleSubmit = () => {
        message.success('Data berhasil disimpan')
        console.log(dataPreference)
        dispatch(getRecommendation(dataPreference, navigate))
        // navigate('/dalam-proses')
    }

    const onFinish = (values) => {
        // console.log(values);
        dispatch({
            type: `${POST_PREFERENCE}`,
            payload: [...dataPreference, values],
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    const deletePreference = (place_name) => {
        const newData = dataPreference.filter((item) => item.place_name !== place_name)
        dispatch({
            type: `${POST_PREFERENCE}`,
            payload: newData,
        })
    }

    return (
        <>
            <div style={{padding: "0px 293px"}}>
                <Space direction="vertical" size={80}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Preferensi
                        </h1>
                        <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                            Masukkan kafe yang pernah kamu kunjungi untuk membantu kami memilih rekomendasi kafe yang
                            mirip dengan preferensimu
                        </p>
                    </Space>
                </Space>
            </div>
            <div style={{padding: "76px 48px"}}>
                <Space direction="vertical" style={{width: "100%"}} size={49}>
                    <Card
                        bordered={false}
                        style={{
                            boxShadow: "0px 8px 32px rgba(32, 58, 189, 0.16)",
                            border: "1px solid #D2D8F2",
                            width: "100%",
                            borderRadius: 14,
                        }}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Nama Tempat"
                                name="place_name"
                            >
                                <Select
                                    showSearch
                                    size={"large"}
                                    style={{
                                        width: "100%",
                                    }}
                                    placeholder="Nama Kafe"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={
                                        data.map((item, index) => {
                                            return {
                                                value: item.place_name_x,
                                                label: item.place_name_x,
                                            }
                                        })
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                label="Rating"
                                name="rating"
                            >
                                <Select
                                    showSearch
                                    size={"large"}
                                    style={{
                                        width: "100%",
                                    }}
                                    placeholder="Rating"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 1,
                                            label: '1',
                                        },
                                        {
                                            value: 2,
                                            label: '2',
                                        },
                                        {
                                            value: 3,
                                            label: '3',
                                        },
                                        {
                                            value: 4,
                                            label: '4',
                                        },
                                        {
                                            value: 5,
                                            label: '5',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item>
                                <div style={{width: "100%", justifyContent: "right", display: "flex"}}>
                                    <Button style={{
                                        marginTop: 8,
                                        borderRadius: 14,
                                        height: 42,
                                        width: 200,
                                        backgroundColor: "#203ABD",
                                        fontWeight: 700,
                                    }} type="primary" htmlType="submit">+ Tambahskan</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>
                    <Row gutter={[28, 28]}>
                        {dataPreference.map((item, index) => {
                            return (
                                <Col span={8}>
                                    <Card
                                        style={{
                                            width: "100%",
                                            height: 84,
                                            borderRadius: 14,
                                            border: "1px solid #D2D8F2"
                                        }}
                                        bodyStyle={{padding: "18px 24px"}}
                                    >
                                        <Row justify="center" align="middle">
                                            <Col span={20}>
                                                <Title style={{margin: 0}} level={5}>{item.place_name}</Title>
                                            </Col>
                                            <Col span={4} align="right">
                                                <img src={DeleteIcon}
                                                     onClick={() => {deletePreference(item.place_name)}}
                                                     style={{
                                                         width: 48,
                                                         height: 48,
                                                         objectFit: "cover",
                                                         cursor: "pointer"
                                                     }}
                                                     alt=""/>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    <Button style={{
                        borderRadius: 14,
                        height: 42,
                        width: "100%",
                        backgroundColor: "#203ABD",
                        fontWeight: 700,
                    }} type="primary" onClick={() => handleSubmit()}>Lanjutkan
                    </Button>
                </Space>
            </div>
        </>
    )
}

export default PreferenceSelectionScreen