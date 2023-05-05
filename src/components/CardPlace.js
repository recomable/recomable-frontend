import {Card, Rate, Space} from "antd";
import {PlaceDefault} from "../assets";
import {useState} from "react";

const CardPlace = (props) => {
    const [imgSrc, setImgSrc] = useState(props.image);

    const handleImgError = () => {
        // If the image fails to load, update the source to the default image
        setImgSrc(PlaceDefault);
    };
    return (
        <>
            <Card
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 14,
                    border: "1px solid #E0E0E0",
                    cursor: "pointer",
                }}
            >
                <Space direction="vertical" size={24}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <img src={imgSrc}
                             style={{
                                 height: 240,
                                 width: "100%",
                                 objectFit: "cover",
                                 borderRadius: 8
                             }}
                             alt=""
                             onError={handleImgError}
                        />
                        <div className="tag">
                            {props.tag === "cafe" ? "Kafe" : "Restoran"}
                        </div>
                        <h1 style={{
                            margin: 0,
                            fontSize: 24,
                            color: "#203ABD",
                            fontWeight: 600
                        }}>{props.title}</h1>
                        <Rate style={{color: "#FA8026"}} disabled defaultValue={props.rate}/>
                    </Space>
                    <p style={{margin: 0, fontSize: 16, color: "#9E9E9E", fontWeight: 300}}>{props.description}</p>
                    <h1 style={{margin: 0, fontSize: 18, color: "#FA8026", fontWeight: 500}}>{props.address}</h1>
                </Space>
            </Card>
        </>
    )
}

CardPlace.defaultProps = {
    image: PlaceDefault,
    title: "Kafe",
    tag: "kafe",
    rate: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    address: "Jl. Lorem Ipsum Dolor Sit Amet"
}

export default CardPlace