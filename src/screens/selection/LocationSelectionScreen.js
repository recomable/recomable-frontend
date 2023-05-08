import {Button, Col, Input, message, Row, Select, Space, Tooltip, Typography} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_MY_PLACE_DETAIL} from "../../setup/redux/type/PlaceType";

const {Search} = Input;
const {Text, Title} = Typography;

const LocationSelectionScreen = ({onNext, onPrev}) => {
    const dispatch = useDispatch();
    const {dataMyPlace} = useSelector((state) => state.place);
    const [numSearches, setNumSearches] = useState(1);
    const [locations, setLocations] = useState([{id: 1, value: ''}]);
    const [userKecamatan, setUserKecamatan] = useState("");
    // const [userLocation, setUserLocation] = useState("");
    const googleMapsPattern = /^https?:\/\/www\.google\.com\/maps\/.+$/;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleAddLocation = () => {
        const newNumSearches = numSearches + 1;
        setNumSearches(newNumSearches);

        const newLocations = [...locations, {id: newNumSearches, value: ''}];
        setLocations(newLocations);
    };

    const handleDeleteLocation = (id) => {
        setLocations((prevLocations) =>
            prevLocations.filter((location) => location.id !== id)
        );
    };

    const onSearch = (value, id) => {
        console.log(`Search ${id}: ${value}`);
    };

    const onChange = (e, id) => {
        const index = locations.findIndex(loc => loc.id === id);
        const updatedLocations = [...locations];
        updatedLocations[index].value = e.target.value;
        setLocations(updatedLocations);
    };

    // const onChange = (value) => {
    //     setUserLocation(value.target.value)
    // }

    const handleKecamatanChange = (value) => {
        setUserKecamatan(value)
    }

    const onSubmit = () => {
        // if (locations.some(location => location.value === "")) {
        //     return message.error("Lokasi tidak boleh kosong");
        // }
        //
        // const isGoogleMapsLink = (location) =>
        //     googleMapsPattern.test(location.value);
        //
        // if (locations.every(isGoogleMapsLink)) {
        //     dispatch({
        //         type: `${GET_MY_PLACE_DETAIL}`,
        //         payload: {...dataMyPlace, locations},
        //     });
        //     onNext();
        // } else {
        //     return message.error("Link harus berupa link google maps");
        // }

        if(dataMyPlace.location === "kecamatan") {
            // Check if userKecamatan is not empty
            if (userKecamatan === "") {
                return message.error("Lokasi tidak boleh kosong");
            }
            const payload = {
                ...dataMyPlace,
                locations: userKecamatan,
            };
            dispatch({type: `${GET_MY_PLACE_DETAIL}`, payload});
        } else {
            // Check if all locations are valid Google Maps links
            const isValid = locations.every((loc) => googleMapsPattern.test(loc.value));
            if (!isValid) {
                return message.error("Link harus berupa link google maps");
            }

            // Dispatch action to update dataMyPlace with all locations
            const payload = {
                ...dataMyPlace,
                locations: locations.map((loc) => loc.value),
            };
            dispatch({type: `${GET_MY_PLACE_DETAIL}`, payload});
        }

        onNext();
    }

    return (
        <>
            <div style={{padding: "0px 293px"}}>
                <Space direction="vertical" size={80}>
                    {
                        dataMyPlace.location === "kecamatan" ?
                            <>
                                <Space direction="vertical" size={8} style={{width: "100%"}}>
                                    <h1 style={{
                                        margin: 0,
                                        textAlign: "center",
                                        fontSize: 32,
                                        color: "#203ABD",
                                        fontWeight: 600
                                    }}>
                                        Masukkan Kecamatan
                                    </h1>
                                    <p style={{
                                        margin: 0,
                                        textAlign: "center",
                                        fontSize: 20,
                                        color: "#616161",
                                        fontWeight: 300
                                    }}>
                                        Pilih kecamatan tempat kafe atau restoran yang ingin kamu cari tempat
                                        rekomendasinya
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
                                                {label: 'Tegalsari', value: 'tegalsari'},
                                                {label: 'Simokerto', value: 'simokerto'},
                                                {label: 'Genteng', value: 'genteng'},
                                                {label: 'Bubutan', value: 'bubutan'},
                                            ],
                                        },
                                        {
                                            label: 'Surabaya Timur',
                                            options: [
                                                {label: 'Gubeng', value: 'gubeng'},
                                                {label: 'Gunung Anyar', value: 'gunung_anyar'},
                                                {label: 'Sukolilo', value: 'sukolilo'},
                                                {label: 'Tambaksari', value: 'tambaksari'},
                                                {label: 'Mulyorejo', value: 'mulyorejo'},
                                                {label: 'Rungkut', value: 'rungkut'},
                                                {label: 'Tenggilis Mejoyo', value: 'tenggilis_mejoyo'},
                                            ],
                                        },
                                        {
                                            label: 'Surabaya Barat',
                                            options: [
                                                {label: 'Benowo', value: 'benowo'},
                                                {label: 'Pakal', value: 'pakal'},
                                                {label: 'Asemrowo', value: 'asemrowo'},
                                                {label: 'Sukomanunggal', value: 'sukomanunggal'},
                                                {label: 'Tandes', value: 'tandes'},
                                                {label: 'Sambikerep', value: 'sambikerep'},
                                                {label: 'Lakarsantri', value: 'lakarsantri'},
                                            ],
                                        },
                                        {
                                            label: 'Surabaya Utara',
                                            options: [
                                                {label: 'Bulak', value: 'bulak'},
                                                {label: 'Kenjeran', value: 'kenjeran'},
                                                {label: 'Semampir', value: 'semampir'},
                                                {label: 'Pabean Cantian', value: 'Pabean_cantian'},
                                                {label: 'Krembangan', value: 'krembangan'},
                                            ]
                                        },
                                        {
                                            label: 'Surabaya Selatan',
                                            options: [
                                                {label: 'Wonokromo', value: 'wonokromo'},
                                                {label: 'Wonocolo', value: 'wonocolo'},
                                                {label: 'Wiyung', value: 'wiyung'},
                                                {label: 'Karang Pilang', value: 'karang_pilang'},
                                                {label: 'Jambangan', value: 'jambangan'},
                                                {label: 'Dukuh Pakis', value: 'dukuh_pakis'},
                                                {label: 'Sawahan', value: 'sawahan'},

                                            ],
                                        },
                                    ]}
                                />
                            </>
                            :
                            <>
                                <Space direction="vertical" size={8} style={{width: "100%"}}>
                                    <h1 style={{
                                        margin: 0,
                                        textAlign: "center",
                                        fontSize: 32,
                                        color: "#203ABD",
                                        fontWeight: 600
                                    }}>
                                        Masukkan Lokasi Kamu
                                    </h1>
                                    <p style={{
                                        margin: 0,
                                        textAlign: "center",
                                        fontSize: 20,
                                        color: "#616161",
                                        fontWeight: 300
                                    }}>
                                        Lokasi digunakan untuk menentukan tempat terdekat,
                                        masukkan lebih dari satu lokasi untuk mencari
                                        tempat diantara lebih dari satu lokasi tersebut
                                    </p>
                                </Space>
                                <Space direction="vertical" size={8} style={{width: "100%"}}>
                                    {locations.map((location) => (
                                        <div key={location.id} style={{ display: "flex", marginBottom: 8 }}>
                                            <Search
                                                value={location.value}
                                                onChange={(e) =>
                                                    setLocations((prevLocations) =>
                                                        prevLocations.map((loc) =>
                                                            loc.id === location.id ? { ...loc, value: e.target.value } : loc
                                                        )
                                                    )
                                                }
                                                placeholder="Masukkan lokasi kamu disini"
                                                size="large"
                                                style={{ width: "100%" }}
                                            />
                                            <Button
                                                onClick={() => handleDeleteLocation(location.id)}
                                                style={{ marginLeft: 8 }}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    ))}
                                    <Tooltip title="Tambah alamat lain untuk mendapatkan titik tengah">
                                        <Button
                                            onClick={handleAddLocation}
                                            style={{
                                                borderRadius: 8,
                                                height: 42,
                                                width: "20%",
                                                backgroundColor: "#203ABD"
                                            }}>
                                            <Space>
                                                <Title style={{margin: 0, color: "white", fontSize: 18}}
                                                       level={5}>Tambah +</Title>
                                            </Space>
                                        </Button>
                                    </Tooltip>
                                </Space>
                            </>

                    }
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