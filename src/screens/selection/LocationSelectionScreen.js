import {Button, Input, Space, Typography} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_MY_PLACE_DETAIL} from "../../setup/redux/type/PlaceType";
const { Search } = Input;
const {Text, Title} = Typography;

const LocationSelectionScreen = ({onNext, onPrev}) => {
    const dispatch = useDispatch();
    const {dataMyPlace} = useSelector((state) => state.place);

    const [userLocation, setUserLocation] = useState("");

    const onSearch = (value) => {
        console.log(value)
    };

    const onChange = (value) => {
        setUserLocation(value.target.value)
    }

    const onSubmit = () => {
        dispatch({
            type: `${GET_MY_PLACE_DETAIL}`,
            payload: {...dataMyPlace, location: userLocation},
        })
        console.log(dataMyPlace)
        onNext()
    }

    return(
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