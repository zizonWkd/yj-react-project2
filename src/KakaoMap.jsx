import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap(){
    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = { 
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 2 // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667)
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, []);

    
    
    return <Box as="div" id="map" w={'full'} h={'300px'}></Box>
}