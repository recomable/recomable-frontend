import {Progress, Space} from "antd";

const RecommendationLoadingScreen = () => {
    return(
        <>
            <div style={{padding: "66px 293px"}}>
                <Space direction="vertical" size={80}>
                    <Space direction="vertical" size={8} style={{width: "100%"}}>
                        <h1 style={{margin: 0, textAlign: "center", fontSize: 32, color: "#203ABD", fontWeight: 600}}>
                            Pencarian
                        </h1>
                        <p style={{margin: 0, textAlign: "center", fontSize: 20, color: "#616161", fontWeight: 300}}>
                            Tunggu sebentar, kami akan segera carikan tempat yang cocok untuk kamu
                        </p>
                    </Space>
                </Space>
            </div>
            <Progress
                style={{padding: "30px 175px"}}
                size={[300, 20]}
                percent={60}
                status="active"
                strokeColor={{
                    from: '#FA8026',
                    to: '#FAE526',
                }}
            />
        </>
    )
}

export default RecommendationLoadingScreen

