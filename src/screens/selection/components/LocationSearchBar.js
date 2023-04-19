import {useEffect, useState} from "react";
import { Input, AutoComplete } from 'antd';

const LocationSearchBar = () => {
    const [options, setOptions] = useState([]);

    const handleSearch = async value => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=AIzaSyDa7mpX8s6IXuVeM7C3p-XTSFlsVhp80G0`,{
            mode: 'no-cors',
        }).then(response => response.json());
        const data = await response.json();
        const { predictions } = data;

        console.log(value)

        const newOptions = predictions.map(option => ({
            value: option.description,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>{option.description}</span>
                </div>
            ),
        }));

        setOptions(newOptions);
    };

    return (
        <AutoComplete
            options={options}
            style={{ width: 300 }}
            onSelect={value => console.log('onSelect', value)}
            onSearch={handleSearch}
        >
            <Input.Search size="large" placeholder="Search for a place" />
        </AutoComplete>
    );
}

export default LocationSearchBar