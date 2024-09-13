import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    Image,
    Pressable,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function App() {
    const [count, setCount] = useState(1);
    const price = 144800;
    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };
    const handleDecrease = () => {
        setCount((prev) => prev - 1);
    };
    return (
        <View
            style={{
                backgroundColor: "#c4c4c4",
                minHeight: "100vh",
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    backgroundColor: "white",
                    padding: 20,
                }}
            >
                <View>
                    <Image source={require("./images/book.png")} />
                </View>
                <View
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={styles.title}>
                        Nguyên hàm tích phân và ứng dụng
                    </Text>
                    <Text style={{ ...styles.title }}>
                        Cung cấp bởi Tiki Trading
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#EE0D0D",
                        }}
                    >
                        {price.toLocaleString("vi-VN")} đ
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#808080",
                            textDecorationLine: "line-through",
                        }}
                    >
                        999.000 đ
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                            }}
                        >
                            <Pressable
                                onPress={() => {
                                    handleDecrease();
                                }}
                                disabled={count == 1}
                            >
                                <Text
                                    style={[
                                        styles.buttonCount,
                                        count == 1 ? { opacity: 0.5 } : {},
                                    ]}
                                >
                                    -
                                </Text>
                            </Pressable>
                            <Text>{count}</Text>
                            <Pressable
                                onPress={() => {
                                    handleIncrease();
                                }}
                            >
                                <Text style={styles.buttonCount}>+</Text>
                            </Pressable>
                        </View>
                        <Pressable style={{ flex: 1 }}>
                            <Text
                                style={{
                                    textAlign: "right",
                                    ...styles.textBlue,
                                }}
                            >
                                Mua sau
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    backgroundColor: "white",
                    padding: 20,
                }}
            >
                <Text style={styles.title}>Mã giảm giá đã lưu</Text>
                <Text style={styles.textBlue}>Xem tại đây</Text>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: 20,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                        borderColor: "#808080",
                        borderWidth: 1,
                        borderStyle: "solid",
                        gap: 10,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#F2DD1B",
                            width: 30,
                            height: 15,
                        }}
                    ></View>
                    <Text style={{ ...styles.title, fontSize: 20 }}>
                        Mã giảm giá
                    </Text>
                </View>
                <Pressable>
                    <Text
                        style={{
                            padding: 10,
                            color: "white",
                            fontSize: 20,
                            fontWeight: 700,
                            backgroundColor: "#0A5EB7",
                            borderRadius: 4,
                        }}
                    >
                        Áp dụng
                    </Text>
                </Pressable>
            </View>

            <View
                style={{
                    backgroundColor: "white",
                    padding: 20,
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 20,
                }}
            >
                <Text style={styles.title}>
                    Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                </Text>
                <Text style={styles.textBlue}>Nhập tại đây?</Text>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 20,
                }}
            >
                <Text style={{ ...styles.title, fontSize: 20 }}>Tạm tính</Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#EE0D0D",
                    }}
                >
                    {(price * count).toLocaleString("vi-VN")} đ
                </Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View>
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 20,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            ...styles.title,
                            fontSize: 20,
                            color: "#c4c4c4",
                        }}
                    >
                        Thành tiền
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#EE0D0D",
                        }}
                    >
                        {(price * count).toLocaleString("vi-VN")} đ
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 20,
                        backgroundColor: "white",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: 700,
                            color: "#FFFFFF",
                            backgroundColor: "red",
                            paddingVertical: 20,
                        }}
                    >
                        TIẾN HÀNH ĐẶT HÀNG
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 30, backgroundColor: "white" }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        fontWeight: 700,
    },
    buttonCount: {
        color: "#011627",
        backgroundColor: "#C4C4C4",
        padding: "2",
        width: 20,
        height: 20,
        textAlign: "center",
    },
    textBlue: {
        fontSize: 12,
        fontWeight: 700,
        color: "#134FEC",
    },
});
