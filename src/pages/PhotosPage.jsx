import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraContainer from "../containers/Photos/CameraContainer";
import GalleryContainer from "../containers/Photos/GalleryContainer";

const Tabs = createBottomTabNavigator();

export default function PhotosPage() {
    return (
        <Tabs.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
            <Tabs.Screen name="Galeria" component={GalleryContainer} />
            <Tabs.Screen name="Câmera" component={CameraContainer} />
        </Tabs.Navigator>
    )
}