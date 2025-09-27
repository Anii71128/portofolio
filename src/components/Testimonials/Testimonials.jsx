import React from "react";
import { ProductsData } from "../../mockData/data";
import CircularGallery from './CircularGallery'

export default function App() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery 
  bend={1.2} 
  textColor="#ffffff" 
  borderRadius={0.05} 
  scrollEase={0.02}
  spacing={0.8} // kalau props ini tersedia
/>

</div>
  );
}