import {Button, Input, message, Select, Space, Typography} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_MY_PLACE_DETAIL} from "../../setup/redux/type/PlaceType";

const {Search} = Input;
const {Text, Title} = Typography;

const LocationSelectionScreen = ({onNext, onPrev}) => {
    const dispatch = useDispatch();
    const {dataMyPlace} = useSelector((state) => state.place);
    const [userLocation, setUserLocation] = useState("");
    const [userKecamatan, setUserKecamatan] = useState("");
    const googleMapsPattern = /^https?:\/\/www\.google\.com\/maps\/.+$/;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onSearch = (value) => {
        console.log(value)
    };

    const onChange = (value) => {
        setUserLocation(value.target.value)
    }

    const handleKecamatanChange = (value) => {
        setUserKecamatan(value)
    }

    const onSubmit = () => {
        if (userLocation === "" && userKecamatan === "")
            return message.error("Lokasi tidak boleh kosong")
        if (userLocation !== "")
            if (!googleMapsPattern.test(userLocation))
                return message.error("Link harus berupa link google maps")
        dispatch({
            type: `${GET_MY_PLACE_DETAIL}`,
            payload: {...dataMyPlace, location: userLocation},
        })
        onNext()
    }

    return (
        <>
            <div style={{padding: "0px 293px"}}>
                <Space direction="vertical" size={80}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Masukkan Lokasi Kamu
                        </h1>
                        <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                            Lokasi digunakan untuk menentukan tempat terdekat,
                            masukkan lebih dari satu lokasi untuk mencari
                            tempat diantara lebih dari satu lokasi tersebut
                        </p>
                    </Space>
                    <Search
                        placeholder="Masukkan lokasi kamu disini"
                        onChange={onChange}
                        onSearch={onSearch}
                        value={userLocation}
                        size={"large"}
                        style={{
                            width: "100%",
                        }}
                    />
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Atau
                        </h1>
                        <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                            Pilih kecamatan tempat kafe atau restoran yang ingin kamu cari tempat rekomendasinya
                        </p>
                    </Space>
                    <Select
                        showSearch
                        size={"large"}
                        style={{
                            width: "100%",
                        }}
                        onChange={handleKecamatanChange}
                        placeholder="Kecamatan"
                        optionFilterProp="children"
                        options={[
                            {
                                label: 'Surabaya Pusat',
                                options: [
                                    { label: 'Tegalsari', value: 'tegalsari' },
                                    { label: 'Simokerto', value: 'simokerto' },
                                    { label: 'Genteng', value: 'genteng' },
                                    { label: 'Bubutan', value: 'bubutan' },
                                ],
                            },
                            {
                                label: 'Surabaya Timur',
                                options: [
                                    { label: 'Gubeng', value: 'gubeng' },
                                    { label: 'Gunung Anyar', value: 'gunung_anyar' },
                                    { label: 'Sukolilo', value: 'sukolilo' },
                                    { label: 'Tambaksari', value: 'tambaksari' },
                                    { label: 'Mulyorejo', value: 'mulyorejo' },
                                    { label: 'Rungkut', value: 'rungkut' },
                                    { label: 'Tenggilis Mejoyo', value: 'tenggilis_mejoyo' },
                                ],
                            },
                            {
                                label: 'Surabaya Barat',
                                options: [
                                    { label: 'Benowo', value: 'benowo' },
                                    { label: 'Pakal', value: 'pakal' },
                                    { label: 'Asemrowo', value: 'asemrowo' },
                                    { label: 'Sukomanunggal', value: 'sukomanunggal' },
                                    { label: 'Tandes', value: 'tandes' },
                                    { label: 'Sambikerep', value: 'sambikerep' },
                                    { label: 'Lakarsantri', value: 'lakarsantri' },
                                ],
                            },
                            {
                                label: 'Surabaya Utara',
                                options: [
                                    { label: 'Bulak', value: 'bulak' },
                                    { label: 'Kenjeran', value: 'kenjeran' },
                                    { label: 'Semampir', value: 'semampir' },
                                    { label: 'Pabean Cantian', value: 'Pabean_cantian' },
                                    { label: 'Krembangan', value: 'krembangan' },
                                ]
                            },
                            {
                                label: 'Surabaya Selatan',
                                options: [
                                    { label: 'Wonokromo', value: 'wonokromo' },
                                    { label: 'Wonocolo', value: 'wonocolo' },
                                    { label: 'Wiyung', value: 'wiyung' },
                                    { label: 'Karang Pilang', value: 'karang_pilang' },
                                    { label: 'Jambangan', value: 'jambangan' },
                                    { label: 'Dukuh Pakis', value: 'dukuh_pakis' },
                                    { label: 'Sawahan', value: 'sawahan' },

                                ],
                            },
                        ]}
                    />
                    <Button
                        onClick={() => onSubmit()}
                        style={{
                            marginTop: 8,
                            borderRadius: 8,
                            height: 42,
                            width: "100%",
                            backgroundColor: "#203ABD"
                        }}
                        htmlType="submit">
                        <Space>
                            <Title style={{margin: 0, color: "white", fontSize: 18}}
                                   level={5}>Selanjutnya</Title>
                        </Space>
                    </Button>
                </Space>
            </div>
        </>
    )
}

export default LocationSelectionScreen