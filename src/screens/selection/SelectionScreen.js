import {Button, Steps, theme, message} from "antd";
import {useEffect, useState} from "react";
import PlaceSelectionScreen from "./PlaceSelectionScreen";
import LocationSelectionScreen from "./LocationSelectionScreen";
import PreferenceSelectionScreen from "./PreferenceSelectionScreen";
import {useSelector} from "react-redux";
import PreferenceLocationScreen from "./PreferenceLocationScreen";
import PlaceTypeSelectionScreen from "./PlaceTypeSelectionScreen";

const SelectionScreen = () => {
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);
    const {dataMyPlace} = useSelector((state) => state.place);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const onChange = (value) => {
        // console.log('onChange:', value);
        // if(dataMyPlace.category !== null){
        //     setCurrent(value);
        // }
        // message.error("Pilih tempat terlebih dahulu!")
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Pilih Tempat',
            content: <PlaceSelectionScreen onNext={next} onPrev={prev}/>,
        },
        {
            title: 'Pilih Lokasi',
            content: <PreferenceLocationScreen onNext={next} onPrev={prev}/>,
        },
        {
            title: 'Masukkan Lokasi',
            content: <LocationSelectionScreen onNext={next} onPrev={prev}/>,
        },
        {
            title: 'Preferensi Tempat',
            content: <PreferenceSelectionScreen onNext={next} onPrev={prev}/>,
        },
        {
            title: 'Jenis Kafe',
            content: <PlaceTypeSelectionScreen onNext={next} onPrev={prev}/>,
        },
    ];

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <>
            <div style={{padding: "66px 0"}}>
                <Steps style={{padding: "0 200px", paddingBottom: 66}}
                       current={current} items={items}
                       // aktifkan onclick step
                       // onChange={onChange}
                />
                {steps[current].content}
            </div>
        </>
    )
}

export default SelectionScreen