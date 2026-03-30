// InteractiveMetroMap.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Download, 
  MapPin, 
  Train,
  RotateCw,
  Layers,
  Eye,
  EyeOff,
  Grid,
  Navigation
} from 'lucide-react';
import map from '../assets/map.png'

const InteractiveMetroMap = () => {
  // Zoom and pan state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, scale: 1 });
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Refs
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const imageRef = useRef(null);

  // Touch/mobile state
  const [touchStart, setTouchStart] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ZOOM FUNCTIONS - FIXED
  const zoomIn = useCallback(() => {
    setScale(prev => {
      const newScale = Math.min(prev + 0.2, 3);
      return newScale;
    });
  }, []);

  const zoomOut = useCallback(() => {
    setScale(prev => {
      const newScale = Math.max(prev - 0.2, 0.5);
      return newScale;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // PAN FUNCTIONS - FIXED
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return; // Left click only
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
      scale: scale
    });
  }, [position, scale]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    setPosition({ x: newX, y: newY });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // WHEEL ZOOM - FIXED
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    const delta = -Math.sign(e.deltaY) * 0.1;
    const newScale = Math.min(3, Math.max(0.5, scale + delta));
    
    // Get mouse position relative to container
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate new position to zoom toward mouse
    const scaleChange = newScale / scale;
    const newX = mouseX - (mouseX - position.x) * scaleChange;
    const newY = mouseY - (mouseY - position.y) * scaleChange;
    
    setScale(newScale);
    setPosition({ x: newX, y: newY });
  }, [scale, position]);

  // TOUCH HANDLERS FOR MOBILE - FIXED
  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    
    if (e.touches.length === 2) {
      // Pinch zoom start
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchStart({
        distance,
        scale,
        x: position.x,
        y: position.y
      });
    } else if (e.touches.length === 1) {
      // Pan start
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
        scale: scale
      });
    }
  }, [scale, position]);

  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    
    if (e.touches.length === 2 && touchStart) {
      // Pinch zoom
      const currentDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      const scaleMultiplier = currentDistance / touchStart.distance;
      const newScale = Math.min(3, Math.max(0.5, touchStart.scale * scaleMultiplier));
      
      // Calculate midpoint for zoom center
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = midX - rect.left;
      const mouseY = midY - rect.top;
      
      const scaleChange = newScale / touchStart.scale;
      const newX = mouseX - (mouseX - touchStart.x) * scaleChange;
      const newY = mouseY - (mouseY - touchStart.y) * scaleChange;
      
      setScale(newScale);
      setPosition({ x: newX, y: newY });
      
    } else if (e.touches.length === 1 && isDragging) {
      // Pan
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  }, [isDragging, dragStart, touchStart]);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    setTouchStart(null);
    
    // Double tap detection for reset
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      resetZoom();
    }
    setLastTap(currentTime);
  }, [lastTap, resetZoom]);

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Download map
  const downloadMap = useCallback(() => {
    const link = document.createElement('a');
    link.href = map;
    link.download = 'Delhi-Metro-Network-Map.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section className="w-full md:h-screen h-[62vh] bg-gray-900 overflow-hidden relative">
      {/* Minimal Header */}
      {/* <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
              <Train className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-white text-lg font-bold drop-shadow-lg">Delhi Metro Map</h1>/
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="text-white/80 text-xs bg-black/30 px-2 py-1 rounded-full">
              {Math.round(scale * 100)}%
            </span>
          </div>
        </div>
      </div> */}

      {/* Main Map Container */}
    
        {/* Map with Transform */}
        <div
          ref={mapRef}
          className="absolute inset-0 flex items-center justify-center "
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging || touchStart ? 'none' : 'transform 0.1s ease-out',
            transformOrigin: '0 0',
            width: '100%',
            height: '100%'
          }}
        >
          {/* Main Map Image */}
          <img
            ref={imageRef}
            src={map}
            alt="Delhi Metro Network Map"
            draggable="false"
          />
          
          {/* Station Markers - Show at all zoom levels */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Rajiv Chowk */}
            <div 
              className="absolute"
              style={{ left: '40%', top: '30%' }}
            >
              <div className="relative group pointer-events-auto">
                <div className={`w-${scale > 1.5 ? '6' : '4'} h-${scale > 1.5 ? '6' : '4'} bg-yellow-500 rounded-full border-2 border-white shadow-xl cursor-pointer hover:scale-125 transition-transform`}></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-30">
                  Rajiv Chowk
                </div>
              </div>
            </div>

            {/* Kashmere Gate */}
            <div 
              className="absolute"
              style={{ left: '35%', top: '20%' }}
            >
              <div className="relative group pointer-events-auto">
                <div className={`w-${scale > 1.5 ? '6' : '4'} h-${scale > 1.5 ? '6' : '4'} bg-purple-500 rounded-full border-2 border-white shadow-xl cursor-pointer hover:scale-125 transition-transform`}></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  Kashmere Gate
                </div>
              </div>
            </div>

            {/* Central Secretariat */}
            <div 
              className="absolute"
              style={{ left: '45%', top: '40%' }}
            >
              <div className="relative group pointer-events-auto">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                  Central Sec
                </div>
              </div>
            </div>

            {/* Airport */}
            <div 
              className="absolute"
              style={{ left: '20%', top: '45%' }}
            >
              <div className="relative group pointer-events-auto">
                <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                  IGI Airport
                </div>
              </div>
            </div>

            {/* Noida */}
            <div 
              className="absolute"
              style={{ left: '70%', top: '60%' }}
            >
              <div className="relative group pointer-events-auto">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                  Noida
                </div>
              </div>
            </div>

            {/* Gurgaon */}
            <div 
              className="absolute"
              style={{ left: '15%', top: '60%' }}
            >
              <div className="relative group pointer-events-auto">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                  Gurgaon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ZOOM CONTROLS - ON THE MAP (FIXED) */}
        <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
          {/* Zoom In Button */}
          <button
            onClick={zoomIn}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex items-center justify-center hover:bg-white transition-all border border-white/20"
            title="Zoom In"
          >
            <ZoomIn className="h-6 w-6 text-gray-700" />
          </button>
          
          {/* Zoom Out Button */}
          <button
            onClick={zoomOut}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex items-center justify-center hover:bg-white transition-all border border-white/20"
            title="Zoom Out"
          >
            <ZoomOut className="h-6 w-6 text-gray-700" />
          </button>
          
          {/* Reset Zoom Button */}
          <button
            onClick={resetZoom}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex items-center justify-center hover:bg-white transition-all border border-white/20"
            title="Reset View"
          >
            <RotateCw className="h-5 w-5 text-gray-700" />
          </button>
          
          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex items-center justify-center hover:bg-white transition-all border border-white/20"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-5 w-5 text-gray-700" />
            ) : (
              <Maximize2 className="h-5 w-5 text-gray-700" />
            )}
          </button>
          
          {/* Download Button */}
          <button
            onClick={downloadMap}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex items-center justify-center hover:bg-white transition-all border border-white/20"
            title="Download Map"
          >
            <Download className="h-5 w-5 text-gray-700" />
          </button>
        </div>

      
        {/* Zoom Level Indicator */}
        <div className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {Math.round(scale * 100)}%
        </div>
      {/* </div> */}
    </section>
  );
};

export default InteractiveMetroMap;