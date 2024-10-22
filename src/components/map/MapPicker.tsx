import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from 'react';
import GoogleMapReact from 'google-map-react';

import { useState } from "react";
import { Marker } from "leaflet";
export default function MapPicker({mapMarker,setMapMarker}) {

  const [center, setCenter] = useState({ lat: 24.7229989, lng: 46.6195428 });
    const [zoom, setZoom] = useState(15);

    const handleApiLoaded = (map, maps) => {
      const marker = new maps.Marker({
          position: { lat: mapMarker.lat, lng: mapMarker.lng },
          map,
          draggable: false
      });
      marker.addListener('drag', (e) => {
        // setMapMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      });
  };
  const handleMapChange = ({ center, zoom }) => {
    setCenter(center);
    setMapMarker(center);  // Update mapMarker to new center after panning
    console.log(center)
  };
  

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">موقع الفعالية</Button>
      </DialogTrigger>
      <DialogContent className="w-[50%] h-[80%] " dir="rtl">
        <DialogHeader>
        <DialogTitle></DialogTitle>
        </DialogHeader>
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCdp2zLpPVrgZG3cGNHfqAosU53LhiQq5k' }} // Replace 'YOUR_API_KEY' with your actual Google Maps API key
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onChange={handleMapChange}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
              <div
                className="text-3xl"
                lat={mapMarker.lat}
                lng={mapMarker.lng}
                
              >📍</div>
            </GoogleMapReact>
        </div>
            <Input placeholder="او الصق الرابط"  className="font-Cairo" dir="rtl"/>
        <DialogFooter dir="rtl">
          <Button type="submit" className="font-Cairo">حفظ الموقع</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}