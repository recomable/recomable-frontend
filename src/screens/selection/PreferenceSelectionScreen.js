import {
    Alert,
    AutoComplete,
    Button,
    Card,
    Col,
    Form,
    Input,
    message,
    Modal,
    Row,
    Select,
    Space,
    Typography
} from "antd";
import CardPlace from "../../components/CardPlace";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllPlace} from "../../setup/redux/action/PlaceAction";
import {DeleteIcon} from "../../assets";
import {
    POST_PREFERENCE,
    SAVE_PREFERENCE,
    SAVE_RECOMMENDATION
} from "../../setup/redux/type/PlaceType";

const {Title} = Typography;
const {Search} = Input;

const PreferenceSelectionScreen = ({onNext, onPrev}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const {dataPlace, dataPreference, dataSaveRecommendation, isLoading} = useSelector((state) => state.place);
    const [searchOptions, setSearchOptions] = useState([]);
    const [modalPreference, setModalPreference] = useState(false);
    const [modalRecommendation, setModalRecommendation] = useState(false);
    const [storedPreferenceData, setStoredPreferenceData] = useState(null);
    const [recommendationRating, setRecommendationRating] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAllPlace())
        const storedDataPreference = localStorage.getItem('dataPreference');
        if (storedDataPreference) {
            setStoredPreferenceData(JSON.parse(storedDataPreference));
            setModalPreference(true);
        }
    }, [])

    const data = dataPlace

    const handleSearch = (value) => {
        const filteredOptions = data
            .filter((item) => item.place_name.toLowerCase().includes(value.toLowerCase()))
            .map((item) => ({value: item.place_name}));
        setSearchOptions(filteredOptions);
    };

    const handleSelect = (value, option) => {
        const place_name = option.label;
        const rating = form.getFieldValue("rating");
    };

    const handleSubmit = () => {
        dataPreference.length > 0 ? onNext() : message.error("Masukkan minimal 1 kafe yang pernah kamu kunjungi!")
    }

    const onFinish = (values) => {
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

    const handleSaveData = () => {
        // Retrieve the data from localStorage
        const storedDataPreference = localStorage.getItem('dataPreference');

        // Dispatch the action to save the data in Redux
        dispatch({
            type: `${SAVE_PREFERENCE}`,
            payload: JSON.parse(storedDataPreference),
        });

        // Hide the modal
        setModalPreference(false);
        const storedDataRecommendation = localStorage.getItem('dataRecommendation');
        if (storedDataRecommendation) {
            dispatch({
                type: `${SAVE_RECOMMENDATION}`,
                payload: JSON.parse(storedDataRecommendation),
            });
            setModalRecommendation(true);
        }
    };

    const handleEraseData = () => {
        // Remove the data from localStorage
        localStorage.removeItem('dataPreference');

        // Hide the modal
        setModalPreference(false);
        const storedDataRecommendation = localStorage.getItem('dataRecommendation');
        if (storedDataRecommendation) {
            dispatch({
                type: `${SAVE_RECOMMENDATION}`,
                payload: JSON.parse(storedDataRecommendation),
            });
            setModalRecommendation(true);
        }
    };

    const handleSaveData2 = () => {
        dispatch({
            type: `${POST_PREFERENCE}`,
            payload: [...dataPreference, {
                place_name: dataSaveRecommendation[0].place_name,
                rating: recommendationRating
            }],
        })
        setModalRecommendation(false);
        localStorage.removeItem('dataRecommendation');
    };

    const handleEraseData2 = () => {
        setModalRecommendation(false);
        localStorage.removeItem('dataRecommendation');
    };

    const isFormEmpty = () => {
        const fieldsValue = form.getFieldsValue();
        return Object.values(fieldsValue).every((value) => !value);
    };


    return (
        <>
            <div style={{padding: "0px 293px"}}>
                <Space direction="vertical" size={80}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Riwayat Kafe
                        </h1>
                        <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                            Masukkan kafe yang pernah kamu kunjungi, kami akan rekomendasikan kafe yang mirip dengan
                            kafe yang kamu rating tinggi dan hindari kafe yang mirip dengan kafe yang kamu rating
                            rendah.
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
                                <AutoComplete
                                    size="large"
                                    style={{width: "100%"}}
                                    placeholder="Nama Kafe"
                                    options={searchOptions}
                                    onSearch={handleSearch}
                                    onSelect={handleSelect}
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
                                    {isFormEmpty() ? (
                                        <Button
                                            style={{
                                                marginTop: 8,
                                                borderRadius: 14,
                                                height: 42,
                                                width: 200,
                                                backgroundColor: "#E5E5E5",
                                                fontWeight: 700,
                                            }}
                                            disabled
                                        >
                                            + Tambahkan
                                        </Button>
                                    ) : (
                                        <Button
                                            style={{
                                                marginTop: 8,
                                                borderRadius: 14,
                                                height: 42,
                                                width: 200,
                                                backgroundColor: "#203ABD",
                                                fontWeight: 700,
                                                color: "#FFFFFF",
                                            }}
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            + Tambahkan
                                        </Button>
                                    )}
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>
                    <Row gutter={[28, 28]}>
                        {dataPreference.map((item, index) => {
                            return (
                                <Col span={8} key={item.id}>
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
                                                     onClick={() => {
                                                         deletePreference(item.place_name)
                                                     }}
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
                    }} loading={isLoading} type="primary" onClick={() => handleSubmit()}>Lanjutkan
                    </Button>
                </Space>
            </div>
            <Modal
                title="Kamu dulu pernah ngisi data ini, mau lanjutin atau hapus?"
                centered
                open={modalPreference}
                onCancel={handleEraseData}
                onOk={handleSaveData}
                okText="Simpan"
                cancelText="Hapus (mulai dari awal)"
                closable={false}
                maskClosable={false}
            >
                <Row gutter={[16, 16]}>
                    {
                        storedPreferenceData?.map((item, index) => {
                            return (
                                <Col span={24} key={item.id}>
                                    <Card
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 14,
                                            border: "1px solid #D2D8F2"
                                        }}
                                        bodyStyle={{padding: "18px 24px"}}
                                    >
                                        <Row justify="center" align="middle">
                                            <Col span={24}>
                                                <Title style={{margin: 0}} level={5}>{item.place_name}</Title>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Modal>
            <Modal
                title="Kami dulu pernah rekomendasiin ini!"
                centered
                open={modalRecommendation}
                onCancel={handleEraseData2}
                onOk={handleSaveData2}
                okText="Simpan"
                cancelText="Hapus"
                closable={false}
                maskClosable={false}
            >
                <Alert
                    style={{marginBottom: 16}}
                    message="Sebelum lanjut"
                    description="Berikan rating tempat ini kalau sudah pernah kamu kunjungi"
                    type="info"
                />
                <Row>
                    <Col span={24}>
                        <CardPlace title={dataSaveRecommendation[0]?.place_name}
                                   image={dataSaveRecommendation[0]?.photo_url}
                                   tag={dataSaveRecommendation[0]?.place_type}
                                   address={dataSaveRecommendation[0]?.place_address}/>
                    </Col>
                </Row>
                <Select
                    showSearch
                    size={"large"}
                    style={{
                        marginTop: 16,
                        width: "100%",
                    }}
                    onChange={(value) => setRecommendationRating(value)}
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
            </Modal>
        </>
    )
}

export default PreferenceSelectionScreen