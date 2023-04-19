import {Button, Steps, theme, message} from "antd";
import {useEffect, useState} from "react";
import PlaceSelectionScreen from "./PlaceSelectionScreen";
import LocationSelectionScreen from "./LocationSelectionScreen";
import PreferenceSelectionScreen from "./PreferenceSelectionScreen";

const SelectionScreen = () => {
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
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
            title: 'Masukkan Lokasi',
            content: <LocationSelectionScreen onNext={next} onPrev={prev}/>,
        },
        {
            title: 'Preferensi Tempat',
            content: <PreferenceSelectionScreen onNext={next} onPrev={prev}/>,
        },
    ];

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <>
            <div style={{padding: "66px 0"}}>
                <Steps style={{padding: "0 266px", paddingBottom: 66}}
                       current={current} items={items} onChange={onChange}
                />
                {steps[current].content}
            </div>
        </>
    )
}

export default SelectionScreen