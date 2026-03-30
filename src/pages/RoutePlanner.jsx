import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Search, 
  Train, 
  Clock, 
  IndianRupee, 
  MapPin, 
  Navigation, 
  ArrowUpDown, 
  Users,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  Smartphone,
  Download,
  Share,
  Star,
  AlertCircle,
  Maximize2,
  Minimize2,
  Home,
  Building,
  School,
  Hospital,
  ShoppingBag,
  Plane,
  Coffee,
  ArrowRight,
  ArrowLeft,
  TrainFront,
  Compass,
  Zap,
  TrendingUp,
  ArrowDown,
  ArrowUp,
  HelpCircle
} from 'lucide-react';
import { 
  setFromStation, 
  setToStation, 
  fetchStations, 
  clearRoute 
} from '../store/reducers/metroSlice';
import { searchStations, findRoute } from '../store/reducers/routeReducer';
import InteractiveMetroMap from './InteractiveMetroMap';

const RoutePlanner = () => {
  const dispatch = useDispatch();
  const { stations, fromStation, toStation } = useSelector(state => state.metro);
  // console.log("hindi",stations);
  
  const { searchStationsData, routeData, loadingRoute: reduxLoadingRoute, error: reduxError } = useSelector(
    (state) => state.stations
  );

  const [filteredStations, setFilteredStations] = useState([]);
  // console.log("filteredStations",filteredStations);

  const loadingRoute = reduxLoadingRoute;
  const routeToDisplay = routeData;
  
  const timelineRef = useRef(null);
  const resultsRef = useRef(null);
  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);
  
  const [searchTerm, setSearchTerm] = useState({ from: '', to: '' });

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('map');




  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  useEffect(() => {
    setFilteredStations(stations);
  }, [stations]);

  useEffect(() => {
    setFilteredStations(searchStationsData);
  }, [searchStationsData]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target)) {
        setShowFromDropdown(false);
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target)) {
        setShowToDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchStations = (type, value) => {
    setSearchTerm(prev => ({ ...prev, [type]: value }));
    if (value.length === 0) {
      setFilteredStations(stations);
      return;
    }
    dispatch(searchStations(value));
  };



  
  // handleFindRoute function में थोड़ा सा change:
const handleFindRoute = async () => {
  if (!fromStation || !toStation) {
    setError('Please select both from and to stations');
    return;
  }
  if (fromStation === toStation) {
    setError('From and to stations cannot be the same');
    return;
  }
  setError('');
  dispatch(clearRoute());
  setActiveTab('route');
  
  try {
    // Send station names instead of objects
    const result = await dispatch(findRoute({ 
      fromStation: typeof fromStation === 'object' ? fromStation.name : fromStation, 
      toStation: typeof toStation === 'object' ? toStation.name : toStation 
    }));
    
    if (findRoute.rejected.match(result)) {
      setError(result.payload?.message || 'Failed to find route');
    } else {
      // Scroll to results after a short delay to allow rendering
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  } catch (error) {
    setError('Failed to fetch route. Please try again.');
  }
};
  
  const handleStationSelect = (type, station) => {
    if (type === 'from') {
      dispatch(setFromStation(station.name));
      setSearchTerm(prev => ({ ...prev, from: station.name }));
      setShowFromDropdown(false);
    } else {
      dispatch(setToStation(station.name));
      setSearchTerm(prev => ({ ...prev, to: station.name }));
      setShowToDropdown(false);
    }
  };


  const handlePopularDestination = (station) => {
    if (!fromStation) {
      dispatch(setFromStation(station));
      setSearchTerm(prev => ({ ...prev, from: station }));
    } else if (!toStation) {
      dispatch(setToStation(station));
      setSearchTerm(prev => ({ ...prev, to: station }));
    }
  };

  const getLineColor = (line) => {
    const colors = {
      'Red Line': '#FF0000',
      'Yellow Line': '#FFD700',
      'Blue Line': '#3b76c0',
      'Green Line': '#008000',
      'Violet Line': '#EE82EE',
      'Magenta Line': '#FF00FF',
      'Pink Line': '#FFC0CB',
      'Orange Line': '#FFA500',
      'Grey Line': '#808080',
      'Aqua Line': '#00FFFF',
    };
    return colors[line] || '#808080';
  };

 
  const getLineEmoji = (line) => {
    const emojis = {
      'Red Line': '🔴',
      'Yellow Line': '🟡',
      'Blue Line': '🔵',
      'Green Line': '🟢',
      'Violet Line': '🟣',
      'Magenta Line': '🟪',
      'Pink Line': '🌸',
      'Orange Line': '🟠',
      'Grey Line': '⚪',
      'Aqua Line': '💧',
    };
    return emojis[line] || '🚇';
  };

  // Enhanced Mobile Timeline Component with Connected Bullets
  const MobileTimeline = ({ route }) => {
    if (!route?.metroSteps) return null;

    return (
      <div ref={timelineRef} className="relative py-3">
        {route.metroSteps.map((step, stepIndex) => (
          <div key={stepIndex} className="relative mb-4 last:mb-0">
            {/* Step Card */}
            <div className=" bg-white rounded-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {/* Step Header */}
              <div className="p-5" style={{ 
                background: `linear-gradient(135deg, ${getLineColor(step.line)}10, ${getLineColor(step.line)}05)`,
                
              }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {/* <h4 className="text-lg font-bold text-gray-800">{step.line}</h4> */}
                    <div className="flex items-center">
                    <div className="px-3 py-1.5 rounded-full text-white font-bold text-xs shadow-lg flex items-center space-x-1.5"
                        style={{ backgroundColor: getLineColor(step.line) }}>
                      <span>{getLineEmoji(step.line)}</span>
                      <span>{step.line}</span>
                    </div>
                  </div>
                    <p className="text-sm text-gray-600 mt-1 flex items-center">
                      <Clock className="h-3 w-3 mr-1.5" />
                      {step.duration} • {step.num_stops} stations • {step.distance}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 rounded-full text-xs font-semibold"
                           style={{ 
                             backgroundColor: getLineColor(step.line),
                             color: 'white'
                           }}>
                        Line {stepIndex + 1}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Platform Information */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-2">
                     
                      <div>
                        <p className="text-xs text-gray-500">Board at</p>
                        <p className="font-bold text-gray-800 text-sm">
                          {step.departure_platform || 'Platform 1'}
                        </p>
                      </div>
                    </div>
                    <div className="mt">
                      <p className="text-xs text-gray-600 truncate">{step.departure_stop}</p>
                     
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-2">
                     
                      <div>
                        <p className="text-xs text-gray-500">Alight at</p>
                        <p className="font-bold text-gray-800 text-sm">
                          {step.arrival_platform || 'Platform 1'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-gray-600 truncate">{step.arrival_stop}</p>
                    
                    </div>
                  </div>
                </div>
              </div>

              {/* All Stations List with Connected Bullets */}
              <div className="p-5">
                <div className="relative">
                  {/* Connecting line for stations */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5"
                       style={{ backgroundColor: getLineColor(step.line) }}>
                  </div>
                  
                  <div className="space-y-6">
                    {step.stops?.map((stop, idx) => (
                      <div key={idx} className="relative">
                        {/* Station bullet with connecting line */}
                        <div className="absolute left-4 -translate-x-1/2">
                          <div className="relative">
                            {/* Bullet point */}
                            <div className={`w-4 h-4 rounded-full border-3 border-white shadow-lg z-10 relative ${
                              stop === step.departure_stop ? 'bg-green-500 ring-4 ring-green-500/20' :
                              stop === step.arrival_stop ? 'bg-red-500 ring-4 ring-red-500/20' :
                              `bg-[${getLineColor(step.line)}] ring-2 ring-[${getLineColor(step.line)}]/30`
                            }`} 
                            style={{ 
                              backgroundColor: stop === step.departure_stop ? '#10B981' : 
                                            stop === step.arrival_stop ? '#EF4444' : 
                                            getLineColor(step.line)
                            }}>
                            </div>
                            
                            {/* Station number */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold px-1.5 py-0.5 rounded-md text-white"
                                 style={{ backgroundColor: getLineColor(step.line) }}>
                              {idx + 1}
                            </div>
                          </div>
                        </div>
                        
                        {/* Station info */}
                        <div className="ml-10 pl-2">
                          <div className="bg-gray-100 hover:bg-gray-100 rounded-xl p-2 transition-colors duration-200">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p className={`font-medium text-md ${
                                  stop === step.departure_stop ? 'text-green-700' :
                                  stop === step.arrival_stop ? 'text-red-700' :
                                  'text-gray-800'
                                }`}>
                                  {stop}
                                </p>
                                <div className="flex items-center mt-1 space-x-2">
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
                                    Station {idx + 1}
                                  </span>
                                  {stop === step.departure_stop && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 flex items-center">
                                      <ArrowUp className="h-2.5 w-2.5 mr-1" />
                                      Board Here
                                    </span>
                                  )}
                                  {stop === step.arrival_stop && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex items-center">
                                      <ArrowDown className="h-2.5 w-2.5 mr-1" />
                                      Alight Here
                                    </span>
                                  )}
                                </div>
                              </div>
                              {idx < step.stops.length - 1 && (
                                <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

             
            
              </div>

              {/* Step Footer */}
              <div className="border-t border-gray-100 p-4 bg-gradient-to-r from-gray-50 to-gray-100/50">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <Clock className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Departure</p>
                        <p className="font-bold text-gray-800">{step.departure_time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                        <Clock className="h-3 w-3 text-red-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Arrival</p>
                        <p className="font-bold text-gray-800">{step.arrival_time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Interchange Connector */}
            {stepIndex < route.metroSteps.length - 1 && (
              <div className="ml-6 mt-2 mb-2">
                <div className="relative">
                  {/* Connecting line between steps */}
                  <div className="absolute left-0 right-0 h-0.5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r opacity-50"
                       style={{
                         background: `linear-gradient(to right, ${getLineColor(step.line)}70, ${getLineColor(route.metroSteps[stepIndex + 1].line)}70)`
                       }}>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full shadow-lg flex items-center space-x-3">
                        <RefreshCw className="h-5 w-5 text-white animate-spin-slow" />
                        <div>
                          <p className="text-sm font-bold text-white">Change to next line</p>
                          <p className="text-xs text-white/80">Follow station signage</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Enhanced Route Summary Component
  const RouteSummary = ({ route }) => {
    if (!route) return null;

    const primaryColor = route.metroSteps?.length > 0 
      ? getLineColor(route.metroSteps[0].line)
      : '#4F46E5';

    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white w-[] shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold">Route Summary</h3>
            <p className="text-gray-300 mt-1 text-sm">Your complete journey details</p>
          </div>
       
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <div className="flex items-center mb-3">
              {/* <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-blue-300" />
              </div> */}
              <div>
                <p className="text-sm text-gray-300">Total Time</p>
                <p className="text-xl font-bold mt-1">{route.total_duration}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <div className="flex items-center mb-3">
              {/* <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mr-3">
                <IndianRupee className="h-5 w-5 text-green-300" />
              </div> */}
              <div>
                <p className="text-sm text-gray-300">Estimated Fare</p>
                <p className="text-xl font-bold mt-1">{route.estimated_fare}</p>
                
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <div className="flex items-center mb-3">
              {/* <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                  <Navigation className="h-5 w-5 text-purple-300" />
                </div> */}
              <div>
                <p className="text-sm text-gray-300">Distance</p>
                <p className="text-xl font-bold mt-1">{route.total_distance}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <div className="flex items-center mb-3">
              {/* <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mr-3">
                <RefreshCw className="h-5 w-5 text-yellow-300" />
              </div> */}
              <div>
                <p className="text-sm text-gray-300">Interchanges</p>
                <p className="text-xl font-bold mt-1">{route.interchange_count}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { value: route.total_stations, label: 'Stations', icon: <MapPin className="h-4 w-4" /> },
            { value: route.metroSteps?.length, label: 'Lines', icon: <Train className="h-4 w-4" /> },
            { value: route.estimated_fare?.replace('₹', '') || 0, label: 'Fare', icon: <IndianRupee className="h-4 w-4" /> },
            { value: parseInt(route.estimated_fare?.replace('₹', '') || 0) * 2, label: 'Return', icon: <RefreshCw className="h-4 w-4" /> }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 p-3 rounded-xl">
              <div className="flex items-center justify-center mb-1">
                {stat.icon}
              </div>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Enhanced Metro Map Component
  const MetroMapView = ({ route }) => {
    if (!route?.metroSteps) return null;

    return (
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl mb-5 overflow-hidden border border-gray-200">
        <div className="p-3 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Metro Route Map</h4>
            </div>
          
          </div>
        </div>
        
        <div className="p-3 md:p-6">
        <div className="space-y-4 md:space-y-8">
          {route.metroSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: getLineColor(step.line) }}>
              </div>
              
              {/* Line Header - Mobile Optimized */}
              <div className="flex items-start mb-4 md:mb-6 ml-0 md:ml-0">
                <div className="hidden md:block w-10 h-2 rounded-full mr-3"
                    style={{ backgroundColor: getLineColor(step.line) }}>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="md:hidden w-8 h-2 rounded-full mr-2"
                        style={{ backgroundColor: getLineColor(step.line) }}>
                    </div>
                    <h3 className="font-bold text-sm md:text-base" 
                        style={{ color: getLineColor(step.line) }}>
                      {step.line}
                    </h3>
                    <span className="ml-2 text-xs text-gray-500">
                      ({step.num_stops} stations)
                    </span>
                  </div>
                  
                  {/* Platform Info Row */}
                  <div className="flex flex-wrap gap-2 mb-2 ml-10">
                    <div className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      <TrainFront className="h-3 w-3 mr-1" />
                      Start: {step.departure_platform || 'P1'}
                    </div>
                    <div className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      <TrainFront className="h-3 w-3 mr-1" />
                      End: {step.arrival_platform || 'P1'}
                    </div>
                    <div className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {step.distance} • {step.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stations List - Mobile Optimized */}
              <div className="space-y-3 md:space-y-4 ml-8 md:ml-4">
                {step.stops?.map((stop, idx) => (
                  <div key={idx} className="relative">
                    {/* Station Indicator */}
                    <div className="absolute -left-9 md:-left-5 top-1/2 transform -translate-y-1/2">
                      <div className={`w-6 h-6 md:w-5 md:h-5 rounded-full border-2 md:border-3 border-white shadow-sm flex items-center justify-center ${
                        stop === step.departure_stop ? 'bg-green-500' :
                        stop === step.arrival_stop ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}>
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                    </div>
                    
                    {/* Station Card */}
                    <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100 md:hover:shadow-md transition-shadow pl-10 md:pl-8 pr-3 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-gray-800 text-sm md:text-base truncate">
                              {stop}
                            </p>
                            {stop === step.departure_stop && (
                              <span className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded-full font-medium shrink-0">
                                Board
                              </span>
                            )}
                            {stop === step.arrival_stop && (
                              <span className="px-1.5 py-0.5 bg-red-50 text-red-700 text-xs rounded-full font-medium shrink-0">
                                Alight
                              </span>
                            )}
                          </div>
                          <p className={`text-xs text-gray-500 ${stop === step.departure_stop ? 'text-green-500' :
                                              stop === step.arrival_stop ? 'text-red-500' :
                                              'text-gray-500'}`}>
                            Station {idx + 1} • {stop === step.departure_stop ? 'Start' :
                                              stop === step.arrival_stop ? 'Your Destination (End)' :
                                              'Intermediate'}
                          </p>
                        </div>
                        {idx < step.stops.length - 1 && (
                          <ChevronRight className="h-4 w-4 text-gray-400 ml-2 shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Step Separator */}
              {index < route.metroSteps.length - 1 && (
                <div className="flex items-center justify-center my-6 md:my-8">
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <ArrowDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };


   // Comprehensive SEO Optimization with all 289 stations
  useEffect(() => {
    // Generate comprehensive keywords from all stations
    const allStationsKeywords = [
      // Core Route Planning Keywords
      'Delhi Metro route finder', 'Delhi Metro route planner', 'Delhi Metro journey planner',
      'Delhi Metro directions', 'Metro route calculator Delhi', 'Delhi Metro station to station',
      'Delhi Metro shortest route', 'Metro travel planner Delhi', 'Delhi Metro navigation',
      'DMRC route planner', 'Metro path finder Delhi', 'Delhi Metro travel guide',
      'Metro itinerary planner Delhi', 'Delhi Metro trip planner', 'Metro journey calculator',
      
      // Station-specific keywords (all 289 stations)
      // Red Line Stations
      'Shaheed Sthal metro station', 'Hindon River metro', 'Arthala metro station',
      'Mohan Nagar metro', 'Shyam Park metro station', 'Major Mohit Sharma metro',
      'Raj Bagh metro station', 'Shaheed Nagar metro', 'Dilshad Garden metro station',
      'Jhilmil metro station', 'Mansarovar Park metro', 'Shahdara metro station',
      'Welcome metro station', 'Seelampur metro', 'Shastri Park metro station',
      'Kashmere Gate metro station', 'Tis Hazari metro', 'Pul Bangash metro station',
      'Pratap Nagar metro', 'Shastri Nagar metro station', 'Inderlok metro station',
      'Kanhiya Nagar metro', 'Keshav Puram metro station', 'Netaji Subhash Place metro',
      'Kohat Enclave metro', 'Pitam Pura metro station', 'Rohini East metro',
      'Rohini West metro station', 'Rithala metro station',
      
      // Yellow Line Stations
      'Samaypur Badli metro', 'Rohini Sector 18,19 metro', 'Haiderpur Badli Mor metro',
      'Jahangirpuri metro station', 'Adarsh Nagar metro', 'Azadpur metro station',
      'Model Town metro', 'GTB Nagar metro station', 'Vishwa Vidyalaya metro',
      'Vidhan Sabha metro station', 'Civil Lines metro', 'Chandni Chowk metro station',
      'Chawri Bazar metro', 'New Delhi metro station', 'Rajiv Chowk metro',
      'Patel Chowk metro station', 'Central Secretariat metro', 'Udyog Bhawan metro',
      'Lok Kalyan Marg metro station', 'Jor Bagh metro', 'INA metro station',
      'AIIMS metro', 'Green Park metro station', 'Hauz Khas metro',
      'Malviya Nagar metro station', 'Saket metro', 'Qutab Minar metro station',
      'Chhatarpur metro', 'Sultanpur metro station', 'Ghitorni metro',
      'Arjan Garh metro station', 'Guru Dronacharya metro', 'Sikandarpur metro station',
      'MG Road metro', 'IFFCO Chowk metro station', 'Huda City Centre metro',
      
      // Blue Line Stations
      'Dwarka Sector 21 metro', 'Dwarka Sector 8 metro station', 'Dwarka Sector 9 metro',
      'Dwarka Sector 10 metro station', 'Dwarka Sector 11 metro', 'Dwarka Sector 12 metro station',
      'Dwarka Sector 13 metro', 'Dwarka Sector 14 metro station', 'Dwarka metro',
      'Dwarka Mor metro station', 'Nawada metro', 'Uttam Nagar West metro station',
      'Uttam Nagar East metro', 'Janakpuri West metro station', 'Janakpuri East metro',
      'Tilak Nagar metro station', 'Subhash Nagar metro', 'Tagore Garden metro station',
      'Rajouri Garden metro', 'Ramesh Nagar metro station', 'Moti Nagar metro',
      'Kirti Nagar metro station', 'Shadipur metro', 'Patel Nagar metro station',
      'Rajendra Place metro', 'Karol Bagh metro station', 'Jhandewalan metro',
      'RK Ashram Marg metro station', 'Barakhamba Road metro', 'Mandi House metro station',
      'Supreme Court metro', 'Indraprastha metro station', 'Yamuna Bank metro',
      'Akshardham metro station', 'Mayur Vihar Phase-1 metro', 'Mayur Vihar Extension metro station',
      'New Ashok Nagar metro', 'Noida Sector 15 metro station', 'Noida Sector 16 metro',
      'Noida Sector 18 metro station', 'Botanical Garden metro', 'Golf Course metro station',
      'Noida City Centre metro', 'Noida Sector 34 metro station', 'Noida Sector 52 metro',
      'Noida Sector 61 metro station', 'Noida Sector 59 metro', 'Noida Sector 62 metro station',
      'Noida Electronic City metro',
      
      // Green Line Stations
      'Ashok Park Main metro', 'Punjabi Bagh metro station', 'Shivaji Park metro',
      'Madipur metro station', 'Paschim Vihar East metro', 'Paschim Vihar West metro station',
      'Peera Garhi metro', 'Udyog Nagar metro station', 'Surajmal Stadium metro',
      'Nangloi metro station', 'Nangloi Railway Station metro', 'Rajdhani Park metro station',
      'Mundka metro', 'Mundka Industrial Area metro station', 'Ghevra metro',
      'Tikri Kalan metro station', 'Tikri Border metro', 'Pandit Shree Ram Sharma metro station',
      'Bahadurgarh City metro', 'Brigadier Hoshiar Singh metro station',
      
      // Violet Line Stations
      'Lal Qila metro station', 'Jama Masjid metro', 'Delhi Gate metro station',
      'ITO metro', 'Janpath metro station', 'Khan Market metro',
      'JLN Stadium metro station', 'Jangpura metro', 'Lajpat Nagar metro station',
      'Moolchand metro', 'Kailash Colony metro station', 'Nehru Place metro',
      'Kalkaji Mandir metro station', 'Govind Puri metro', 'Harkesh Nagar Okhla metro station',
      'Jasola Apollo metro', 'Sarita Vihar metro station', 'Mohan Estate metro',
      'Tughlakabad metro station', 'Badarpur metro', 'Sarai metro station',
      'NHPC Chowk metro', 'Mewala Maharajpur metro station', 'Sector 28 metro',
      'Badkhal Mor metro station', 'Faridabad Old metro', 'Neelam Chowk Ajronda metro station',
      'Bata Chowk metro', 'Escorts Mujesar metro station', 'Sant Surdas - Sihi metro',
      'Raja Nahar Singh metro station',
      
      // Pink Line Stations
      'Majlis Park metro', 'Shalimar Bagh metro station', 'Shakurpur metro',
      'Punjabi Bagh West metro station', 'ESI - Basaidarapur metro', 'Mayapuri metro station',
      'Naraina Vihar metro', 'Delhi Cantonment metro station', 'Durgabai Deshmukh South Campus metro',
      'Sir M. Vishweshwaraiah Moti Bagh metro station', 'Bhikaji Cama Place metro',
      'Sarojini Nagar metro station', 'Dilli Haat - INA metro', 'South Extension metro station',
      'Vinobapuri metro', 'Ashram metro station', 'Sarai Kale Khan - Hazrat Nizamuddin metro',
      'Mayur Vihar - I metro station', 'Mayur Vihar Pocket 1 metro', 'Trilokpuri - Sanjay Lake metro station',
      'East Vinod Nagar - Mayur Vihar-II metro', 'Mandawali - West Vinod Nagar metro station',
      'IP Extension metro', 'Anand Vihar metro station', 'Karkarduma metro',
      'Karkarduma Court metro station', 'Krishna Nagar metro', 'East Azad Nagar metro station',
      'Jaffrabad metro', 'Maujpur - Babarpur metro station', 'Gokulpuri metro',
      'Johri Enclave metro station', 'Shiv Vihar metro',
      
      // Magenta Line Stations
      'Dabri Mor metro', 'Dashrath Puri metro station', 'Palam metro',
      'Sadar Bazaar Cantonment metro station', 'Terminal 1-IGI Airport metro',
      'Shankar Vihar metro station', 'Vasant Vihar metro', 'Munirka metro station',
      'R.K. Puram metro', 'IIT metro station', 'Panchsheel Park metro',
      'Chirag Delhi metro station', 'Greater Kailash metro', 'Nehru Enclave metro station',
      'Okhla NSIC metro', 'Sukhdev Vihar metro station', 'Jamia Millia Islamia metro',
      'Okhla Vihar metro station', 'Jasola Vihar Shaheen Bagh metro', 'Kalindi Kunj metro station',
      'Okhla Bird Sanctuary metro',
      
      // Grey Line Stations
      'Nangli metro', 'Najafgarh metro station',
      
      // Airport Express Line Stations
      'Shivaji Stadium metro', 'Delhi Aerocity metro station', 'IGI Airport T3 metro',
      'Yashobhoomi Dwarka Sector 25 metro station',
      
      // Aqua Line Stations
      'Sector 51 metro', 'Sector 50 metro station', 'Sector 76 metro',
      'Sector 101 metro station', 'Sector 81 metro', 'NSEZ metro station',
      'Sector 83 metro', 'Sector 137 metro station', 'Sector 142 metro',
      'Sector 143 metro station', 'Sector 144 metro', 'Sector 145 metro station',
      'Sector 146 metro', 'Sector 147 metro station', 'Sector 148 metro',
      'Knowledge Park II metro station', 'Pari Chowk metro', 'Alpha 1 metro station',
      'Delta 1 metro', 'GNIDA Office metro station', 'Depot Station metro',
      
      // Route Combinations
      'Delhi Metro from Kashmere Gate to Rajiv Chowk', 'Dwarka to Noida metro route',
      'Huda City Centre to New Delhi metro', 'Airport to Connaught Place metro',
      'Noida to Gurgaon metro route', 'Delhi University to CP metro',
      'IGI Airport to Delhi metro route', 'Faridabad to Delhi metro',
      'Ghaziabad to Delhi metro route', 'Bahadurgarh to Delhi metro',
      
      // Specific Route Queries
      'How to reach Rajiv Chowk by metro', 'Metro route to IGI Airport',
      'Delhi Metro to Red Fort route', 'Route to India Gate by metro',
      'Metro to Qutub Minar from CP', 'Delhi Metro to Lotus Temple',
      'Route to Akshardham by metro', 'Metro to Chandni Chowk',
      'How to go to Sarojini Nagar by metro', 'Metro to Dilli Haat',
      
      // Time & Fare Related
      'Delhi Metro travel time calculator', 'Metro journey time Delhi',
      'How long metro from Dwarka to Noida', 'Metro fare calculator Delhi',
      'Delhi Metro ticket price calculator', 'Metro travel cost Delhi',
      'Cheapest metro route Delhi', 'Fastest metro route Delhi',
      
      // Interchange Related
      'Delhi Metro interchange stations', 'Metro line change Delhi',
      'How to change metro lines Delhi', 'Metro transfer stations Delhi',
      'Best interchange stations Delhi Metro', 'Metro connection points Delhi',
      
      // Real-time & Updates
      'Delhi Metro live route planner', 'Real-time metro route Delhi',
      'Metro service status route planner', 'Delhi Metro current routes',
      'Metro disruption alternate routes', 'Delhi Metro best route now',
      
      // Mobile & App
      'Delhi Metro route planner app', 'Metro navigation app Delhi',
      'Mobile metro route finder', 'Delhi Metro offline route planner',
      'Metro route app download', 'Best app for Delhi Metro routes',
      
      // Tourist Specific
      'Delhi Metro route for tourists', 'Metro sightseeing routes Delhi',
      'Best metro routes for Delhi tourists', 'Metro to historical sites Delhi',
      'Delhi Metro temple route planner', 'Metro shopping routes Delhi',
      
      // Commuter Specific
      'Delhi Metro daily commute routes', 'Metro office route planner',
      'Best metro routes for students', 'Metro college routes Delhi',
      'Delhi Metro hospital routes', 'Metro to business districts',
      
      // Hindi Keywords
      'दिल्ली मेट्रो रूट प्लानर', 'मेट्रो रास्ता खोजें', 'दिल्ली मेट्रो स्टेशन से स्टेशन',
      'मेट्रो यात्रा योजक', 'दिल्ली मेट्रो नक्शा', 'मेट्रो टिकट कीमत कैलकुलेटर',
      'दिल्ली मेट्रो समय तालिका', 'मेट्रो सफर योजना', 'दिल्ली मेट्रो ऐप',
      
      // Emergency & Help
      'Delhi Metro lost and found route', 'Metro emergency exit routes',
      'Metro station facilities guide', 'Delhi Metro help desk locations',
      'Metro customer care route',
      
      // Future & Planning
      'Delhi Metro future routes', 'Metro expansion route planner',
      'New metro lines route planner', 'Delhi Metro Phase 4 routes',
      'Metro under construction routes',
      
      // Accessibility
      'Delhi Metro wheelchair accessible routes', 'Metro for disabled route planner',
      'Delhi Metro senior citizen routes', 'Metro baby stroller routes',
      
      // Weekend & Holiday
      'Delhi Metro weekend routes', 'Metro holiday schedule routes',
      'Sunday metro routes Delhi', 'Festival special metro routes',
      
      // Night Travel
      'Delhi Metro night routes', 'Late night metro routes',
      'Metro after hours routes', 'Delhi Metro extended hours routes',
      
      // Group Travel
      'Delhi Metro group travel routes', 'Metro for large groups',
      'Family metro routes Delhi', 'Tour group metro routes',
      
      // Luggage
      'Delhi Metro with luggage routes', 'Metro heavy baggage routes',
      'Airport luggage metro routes', 'Metro shopping with bags routes',
      
      // Weather Related
      'Delhi Metro rainy day routes', 'Metro summer routes',
      'Winter metro routes Delhi', 'Metro monsoon routes',
      
      // Event Specific
      'Delhi Metro cricket match routes', 'Metro concert routes',
      'Exhibition metro routes', 'Festival metro routes Delhi',
      
      // Health & Safety
      'Delhi Metro COVID safe routes', 'Metro social distancing routes',
      'Metro sanitized routes', 'Delhi Metro health guidelines routes'
    ].join(', ');

    // Update document title with specific route planning focus
    document.title = 'Delhi Metro Route Planner - Find Best Routes Between Any 2 Stations | DMRC';

    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Plan your Delhi Metro journey with our advanced route finder. Get best routes between any 2 of 289 stations across 12 lines. Real-time travel time, fare calculator, interchange guide & step-by-step directions.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set Keywords Meta Tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', allStationsKeywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = allStationsKeywords;
      document.head.appendChild(metaKeywords);
    }

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      linkCanonical.href = window.location.href;
      document.head.appendChild(linkCanonical);
    }

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Delhi Metro Route Planner - Find Routes Between All 289 Stations' },
      { property: 'og:description', content: 'Plan perfect Delhi Metro journeys with our intelligent route finder. Get real-time directions, fares & travel times for any station pair.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://mydelhimetro.in/delhi-metro-route-planner.jpg' },
      { property: 'og:site_name', content: 'Delhi Metro Route Planner' },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Delhi Metro Route Finder - Plan Your Perfect Journey' },
      { name: 'twitter:description', content: 'Find best Delhi Metro routes between any 2 stations. Real-time travel info, fares & step-by-step directions.' },
      { name: 'twitter:image', content: 'https://mydelhimetro.in/delhi-metro-route-twitter.jpg' },
      { name: 'twitter:site', content: '@DelhiMetro' },
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Structured Data for Route Planner
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Delhi Metro Route Planner",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "Any",
      "description": "Advanced route planning tool for Delhi Metro network with 289 stations and 12 lines",
      "url": window.location.href,
      "featureList": [
        "Station-to-station route planning",
        "Real-time travel time calculation",
        "Fare estimation",
        "Interchange information",
        "Step-by-step directions",
        "Multiple route options"
      ],
      "screenshot": "https://mydelhimetro.in/delhi-metro-route-screenshot.jpg",
      "softwareVersion": "2.0",
      "publisher": {
        "@type": "Organization",
        "name": "My Delhi Metro",
        "url": "https://www.delhimetrorail.com"
      }
    });
    document.head.appendChild(schemaScript);

    // FAQ Schema for Route Planning
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to find Delhi Metro route between two stations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter starting station in 'From' field and destination in 'To' field. Our route planner will show you the best metro route with travel time, fare and step-by-step directions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find metro routes to Delhi tourist attractions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Search for stations like Kashmere Gate (Red Fort), Central Secretariat (India Gate), Qutab Minar, or Kalkaji Mandir (Lotus Temple) to find routes to all major Delhi attractions."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate are the travel time estimates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our travel times are calculated based on actual metro schedules, train frequencies, and average interchange times. They're updated in real-time to reflect current service conditions."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    // Breadcrumb Schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Route Planner",
          "item": window.location.href
        }
      ]
    });
    document.head.appendChild(breadcrumbSchema);

  }, []);


  // Add SEO-rich content section
  const SEORichContent = () => (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Delhi Metro Route Planner - Complete Guide for All 289 Stations
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              How to Use Delhi Metro Route Planner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="font-bold text-blue-700 mb-3">Find Best Routes</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-700">Enter your starting station in "From" field</li>
                  <li className="text-gray-700">Enter destination station in "To" field</li>
                  <li className="text-gray-700">Click "Find Route" for optimized journey</li>
                  <li className="text-gray-700">Get detailed travel time, fare and directions</li>
                </ol>
              </div>
              
              <div className="bg-green-50 p-5 rounded-xl">
                <h3 className="font-bold text-green-700 mb-3">Popular Route Examples</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <strong>Airport to City:</strong> IGI Airport to New Delhi
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <strong>Shopping:</strong> Rajouri Garden to Connaught Place
                  </li>
                  <li className="text-gray-700 flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <strong>Tourist:</strong> Kashmere Gate to Qutub Minar
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Delhi Metro Network Coverage
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Metro Line</th>
                    <th className="py-3 px-4 border-b text-left">Color</th>
                    <th className="py-3 px-4 border-b text-left">Stations</th>
                    <th className="py-3 px-4 border-b text-left">Key Destinations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Red Line</td>
                    <td className="py-3 px-4 border-b">
                      <div className="w-4 h-4 rounded-full bg-red-500 inline-block mr-2"></div>
                      Red
                    </td>
                    <td className="py-3 px-4 border-b">29</td>
                    <td className="py-3 px-4 border-b">Kashmere Gate, Dilshad Garden, Rithala</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Yellow Line</td>
                    <td className="py-3 px-4 border-b">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 inline-block mr-2"></div>
                      Yellow
                    </td>
                    <td className="py-3 px-4 border-b">37</td>
                    <td className="py-3 px-4 border-b">Rajiv Chowk, HUDA City Center, Qutub Minar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Blue Line</td>
                    <td className="py-3 px-4 border-b">
                      <div className="w-4 h-4 rounded-full bg-blue-500 inline-block mr-2"></div>
                      Blue
                    </td>
                    <td className="py-3 px-4 border-b">50</td>
                    <td className="py-3 px-4 border-b">Dwarka, Noida, Yamuna Bank</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Key Features of Our Route Planner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  title: 'Real-time Travel Times', 
                  desc: 'Accurate journey duration based on current metro schedules',
                  icon: <Clock className="h-6 w-6" />,
                  color: 'text-blue-600'
                },
                { 
                  title: 'Fare Calculator', 
                  desc: 'Exact ticket prices for your selected route',
                  icon: <IndianRupee className="h-6 w-6" />,
                  color: 'text-green-600'
                },
                { 
                  title: 'Step-by-step Guide', 
                  desc: 'Detailed instructions including platform changes',
                  icon: <Navigation className="h-6 w-6" />,
                  color: 'text-purple-600'
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-gray-50 p-5 rounded-xl">
                  <div className={`mb-3 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Tips for Efficient Metro Travel in Delhi
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Avoid peak hours (8-10 AM, 5-7 PM) for comfortable travel</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Use Smart Card for 10% discount on every journey</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Check service alerts for any route disruptions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Follow station signage for quick interchanges</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );


  // Add SEO-optimized station list as hidden content
  const SEOStationList = () => (
    <div className="hidden" aria-hidden="true">
      {/* Hidden SEO content with all station names */}
      <h2>Complete Delhi Metro Stations List</h2>
      <p>Delhi Metro stations include: Shaheed Sthal, Hindon River, Arthala, Mohan Nagar, Shyam Park, Major Mohit Sharma, Raj Bagh, Shaheed Nagar, Dilshad Garden, Jhilmil, Mansarovar Park, Shahdara, Welcome, Seelampur, Shastri Park, Kashmere Gate, Tis Hazari, Pul Bangash, Pratap Nagar, Shastri Nagar, Inderlok, Kanhiya Nagar, Keshav Puram, Netaji Subhash Place, Kohat Enclave, Pitam Pura, Rohini East, Rohini West, Rithala, Samaypur Badli, Rohini Sector 18,19, Haiderpur Badli Mor, Jahangirpuri, Adarsh Nagar, Azadpur, Model Town, GTB Nagar, Vishwa Vidyalaya, Vidhan Sabha, Civil Lines, Chandni Chowk, Chawri Bazar, New Delhi, Rajiv Chowk, Patel Chowk, Central Secretariat, Udyog Bhawan, Lok Kalyan Marg, Jor Bagh, INA, AIIMS, Green Park, Hauz Khas, Malviya Nagar, Saket, Qutab Minar, Chhatarpur, Sultanpur, Ghitorni, Arjan Garh, Guru Dronacharya, Sikandarpur, MG Road, IFFCO Chowk, Huda City Centre, Dwarka Sector 21, Dwarka Sector 8, Dwarka Sector 9, Dwarka Sector 10, Dwarka Sector 11, Dwarka Sector 12, Dwarka Sector 13, Dwarka Sector 14, Dwarka, Dwarka Mor, Nawada, Uttam Nagar West, Uttam Nagar East, Janakpuri West, Janakpuri East, Tilak Nagar, Subhash Nagar, Tagore Garden, Rajouri Garden, Ramesh Nagar, Moti Nagar, Kirti Nagar, Shadipur, Patel Nagar, Rajendra Place, Karol Bagh, Jhandewalan, RK Ashram Marg, Barakhamba Road, Mandi House, Supreme Court, Indraprastha, Yamuna Bank, Akshardham, Mayur Vihar Phase-1, Mayur Vihar Extension, New Ashok Nagar, Noida Sector 15, Noida Sector 16, Noida Sector 18, Botanical Garden, Golf Course, Noida City Centre, Noida Sector 34, Noida Sector 52, Noida Sector 61, Noida Sector 59, Noida Sector 62, Noida Electronic City, Ashok Park Main, Punjabi Bagh, Shivaji Park, Madipur, Paschim Vihar East, Paschim Vihar West, Peera Garhi, Udyog Nagar, Surajmal Stadium, Nangloi, Nangloi Railway Station, Rajdhani Park, Mundka, Mundka Industrial Area, Ghevra, Tikri Kalan, Tikri Border, Pandit Shree Ram Sharma, Bahadurgarh City, Brigadier Hoshiar Singh, Lal Qila, Jama Masjid, Delhi Gate, ITO, Janpath, Khan Market, JLN Stadium, Jangpura, Lajpat Nagar, Moolchand, Kailash Colony, Nehru Place, Kalkaji Mandir, Govind Puri, Harkesh Nagar Okhla, Jasola Apollo, Sarita Vihar, Mohan Estate, Tughlakabad, Badarpur, Sarai, NHPC Chowk, Mewala Maharajpur, Sector 28, Badkhal Mor, Faridabad Old, Neelam Chowk Ajronda, Bata Chowk, Escorts Mujesar, Sant Surdas - Sihi, Raja Nahar Singh, Majlis Park, Shalimar Bagh, Shakurpur, Punjabi Bagh West, ESI - Basaidarapur, Mayapuri, Naraina Vihar, Delhi Cantonment, Durgabai Deshmukh South Campus, Sir M. Vishweshwaraiah Moti Bagh, Bhikaji Cama Place, Sarojini Nagar, Dilli Haat - INA, South Extension, Vinobapuri, Ashram, Sarai Kale Khan - Hazrat Nizamuddin, Mayur Vihar - I, Mayur Vihar Pocket 1, Trilokpuri - Sanjay Lake, East Vinod Nagar - Mayur Vihar-II, Mandawali - West Vinod Nagar, IP Extension, Anand Vihar, Karkarduma, Karkarduma Court, Krishna Nagar, East Azad Nagar, Jaffrabad, Maujpur - Babarpur, Gokulpuri, Johri Enclave, Shiv Vihar, Dabri Mor, Dashrath Puri, Palam, Sadar Bazaar Cantonment, Terminal 1-IGI Airport, Shankar Vihar, Vasant Vihar, Munirka, R.K. Puram, IIT, Panchsheel Park, Chirag Delhi, Greater Kailash, Nehru Enclave, Okhla NSIC, Sukhdev Vihar, Jamia Millia Islamia, Okhla Vihar, Jasola Vihar Shaheen Bagh, Kalindi Kunj, Okhla Bird Sanctuary, Nangli, Najafgarh, Shivaji Stadium, Delhi Aerocity, IGI Airport T3, Yashobhoomi Dwarka Sector 25, Sector 51, Sector 50, Sector 76, Sector 101, Sector 81, NSEZ, Sector 83, Sector 137, Sector 142, Sector 143, Sector 144, Sector 145, Sector 146, Sector 147, Sector 148, Knowledge Park II, Pari Chowk, Alpha 1, Delta 1, GNIDA Office, Depot Station and more.</p>
      
      <h3>Popular Metro Route Combinations</h3>
      <ul>
        <li>Kashmere Gate to Rajiv Chowk metro route</li>
        <li>Dwarka to Noida metro route</li>
        <li>New Delhi Railway Station to IGI Airport metro</li>
        <li>Huda City Centre to Kashmere Gate metro</li>
        <li>Botanical Garden to Rajiv Chowk metro</li>
        <li>Anand Vihar to Dwarka metro route</li>
        <li>Noida Sector 52 to Gurgaon metro</li>
        <li>Faridabad to Delhi University metro</li>
        <li>Ghaziabad to Connaught Place metro</li>
        <li>Bahadurgarh to Saket metro route</li>
      </ul>
    </div>
  );



  // Popular destinations categories
  const popularDestinations = {
    shopping: [
      { name: 'Rajouri Garden', icon: <ShoppingBag className="h-4 w-4" />, color: 'bg-pink-500' },
      { name: 'Connaught Place', icon: <ShoppingBag className="h-4 w-4" />, color: 'bg-yellow-500' },
      { name: 'DLF Promenade', icon: <ShoppingBag className="h-4 w-4" />, color: 'bg-purple-500' }
    ],
    education: [
      { name: 'Delhi University', icon: <School className="h-4 w-4" />, color: 'bg-blue-500' },
      { name: 'JNU', icon: <School className="h-4 w-4" />, color: 'bg-green-500' },
      { name: 'AIIMS', icon: <Hospital className="h-4 w-4" />, color: 'bg-red-500' }
    ],
    transport: [
      { name: 'New Delhi Railway', icon: <Train className="h-4 w-4" />, color: 'bg-orange-500' },
      { name: 'IGI Airport', icon: <Plane className="h-4 w-4" />, color: 'bg-cyan-500' },
      { name: 'ISBT Kashmere', icon: <Building className="h-4 w-4" />, color: 'bg-indigo-500' }
    ],
    landmarks: [
      { name: 'India Gate', icon: <Home className="h-4 w-4" />, color: 'bg-gray-500' },
      { name: 'Red Fort', icon: <Home className="h-4 w-4" />, color: 'bg-red-600' },
      { name: 'Lotus Temple', icon: <Home className="h-4 w-4" />, color: 'bg-white text-gray-800 border' }
    ]
  };



  // Add CSS animation for slow spin
  const style = `
    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
  `;

  return (
    <>
      <SEO
        title="Delhi Metro Route Planner | Find Best Route Between Stations"
        description="Find the fastest metro route between any two Delhi Metro stations. Enter start and end stations to get journey time, number of changes, and fare."
        keywords="route planner, metro route finder, Delhi Metro journey planner, best route"
        breadcrumbs={[{ name: 'Route Planner', url: '/route-planner' }]}
      />
      <Breadcrumb items={[{ name: 'Route Planner', url: '/route-planner' }]} />
      {/* <style>{style}</style> */}
      <div className=" from-gray-50 to-gray-100 md:w-[100%] mx-auto">
        {/* Main Content */}
        <main className="mx-auto">
          {/* Search Card - Modern Design */}
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 mb-4 border border-gray-200">
            <div className='w-[90%] md:w-[85%] mx-auto py-5 md:py-10'>

           
            <div className="flex items-center justify-between mb-6">
              <div>
              <h1 className="mb-3">
                <span className="block text-4xl italic md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-1 leading-tight tracking-tight [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
                Plan Your Journey
              </span>
                <span className="block text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-0 italic">
                  Plan your journey across Delhi Metro network
                </span>
              </h1>
                
              </div>
            </div>

            {/* Station Inputs */}
            <div className="space-y-6 flex flex-col md:flex-row md:space-y-0 md:space-x-6 ">
              {/* From Station */}
              <div className="relative w-full" ref={fromDropdownRef}>
                <div className="flex items-center mb-1">
               
                  <div className='text-white'>
                    {/* <span className="font-bold text-gray-700 text-lg">From Station</span> */}
                    <p className="text-[16px] ml-2 italic">Enter your starting point</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search starting station..."
                    value={searchTerm.from}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchTerm(prev => ({ ...prev, from: value }));
                      // setShowFromDropdown(true);
                      handleSearchStations('from', value);
                    }}
                    onFocus={() => setShowFromDropdown(true)}
                    // onClick={() => setShowFromDropdown(true)}
                    className="w-full p-2 pl-10 bg-white rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 group-hover:border-green-400 text-sm"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                  </div>
                  {fromStation && (
                    <button
                      onClick={() => {
                        dispatch(setFromStation(''));
                        setSearchTerm(prev => ({ ...prev, from: '' }));
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  )}
                </div>

                {showFromDropdown && (
                  <div className="absolute z-50 w-full bg-white rounded-xl mt-0 shadow-xl h-[450px] overflow-y-auto border border-gray-200 transform transition-all duration-200">
                    <div className="p-2 border-b border-gray-100 bg-gray-50">
                      <p className="text-sm text-gray-700">Select Starting Station</p>
                    </div>
                    {filteredStations.map((station) => (
                      <div
                        key={station.id}
                        onClick={() => handleStationSelect('from', station)}
                        className="p-3 border-b border-gray-100 hover:bg-green-50 cursor-pointer transform transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="flex items-center">
                          <div className=" flex items-center justify-center mr-3">
                            <MapPin className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-gray-800 text-sm">{station.name}</p>
                              <p className="font-medium text-gray-800 text-sm">{station.hindi}</p>
                              <span className={`text-xs px-2 py-1 rounded-full bg-${station.line?.split(' ')[0].toLowerCase()}-500  text-white font-medium`}>
                                {station.line?.split(' ')[0]}
                              </span>
                            </div>
                          
                          </div>
                      
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

         

              {/* To Station */}
              <div className="relative w-full" ref={toDropdownRef}>
                <div className="flex items-center mb-1">
               
                  <div>
                    {/* <span className="font-bold text-gray-700 text-lg">To Station</span> */}
                    <p className="text-[16px] text-white italic ml-2">Enter your destination</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search destination station..."
                    value={searchTerm.to}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchTerm(prev => ({ ...prev, to: value }));
                      setShowToDropdown(true);
                      handleSearchStations('to', value);
                    }}
                    onFocus={() => setShowToDropdown(true)}
                    className="w-full p-2 pl-10 bg-white rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-400 text-sm"
                  />
                  <div className="absolute left-4 top-1/3 transform -translatey-1/2">
                    <MapPin className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  {toStation && (
                    <button
                      onClick={() => {
                        dispatch(setToStation(''));
                        setSearchTerm(prev => ({ ...prev, to: '' }));
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  )}
                </div>

                {showToDropdown && (
                  <div className="absolute z-50 w-full bg-white rounded-xl shadow-xl h-[450px] overflow-y-auto border border-gray-200 transform transition-all duration-200">
                    <div className="p-2 border-b border-gray-100 bg-gray-50">
                      <p className="text-sm text-gray-700">Select Destination</p>
                    </div>
                    {filteredStations.map((station) => (
                      <div
                        key={station.id}
                        onClick={() => handleStationSelect('to', station)}
                        className="p-3 border-b border-gray-100 hover:bg-green-50 cursor-pointer transform transition-all duration-200 hover:translate-x-1"
                    >
                        <div className="flex items-center">
                          <div className="flex items-center justify-center mr-3">
                            <MapPin className="h-4 w-4 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-gray-800 text-sm">{station.name}</p>
                              <p className="font-medium text-gray-800 text-sm">{station.hindi}</p>
                              <span className={`text-xs px-2 py-1 rounded-full bg-${station.line?.split(' ')[0].toLowerCase()}-500  text-white font-medium`}>
                                {station.line?.split(' ')[0]}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
         
            {/* Selected Stations Preview */}
            {(fromStation || toStation) && (
              <div className="mt-4 ">
               
                <div className="grid grid-cols-2 gap-2">
                  {fromStation && (
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-green-100">
                     
                      <p className="text-md  text-gray-800">{fromStation}</p>
                      <div className="mt-1 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm text-gray-600">Starting point</p>
                      </div>
                    </div>
                  )}
                  
                  {toStation && (
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-red-100">
                     
                      <p className="text-md  text-gray-800">{toStation}</p>
                      <div className="mt-1 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <p className="text-sm text-gray-600">Destination</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

                 {/* Main Action Button */}
            <button
              onClick={handleFindRoute}
              disabled={!fromStation || !toStation || loadingRoute}
              className="w-full mt-8  bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-xl font-medium disabled:cursor-not-allowed flex items-center justify-center text-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transform"
            >
              {loadingRoute ? (
                <>
                  <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white mr-4"></div>
                  Finding Best Route...
                </>
              ) : (
                <>
                  <Navigation className="h-7 w-7 mr-3" />
                  Find Route
                </>
              )}
            </button>


            {/* Error Display */}
          {error && (
            <div className="my-6 animate-fadeIn">
              <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-2xl border border-red-500/30 backdrop-blur-sm p-2">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_70%)]"></div>
                
                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center shadow-lg">
                    <AlertCircle className="h-7 w-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">
                        Route Planning Issue
                      </h4>
                      <button 
                        onClick={() => setError('')}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="text-red-200 mb-4">
                      {error}
                    </p>
                    
                    {/* Helpful Suggestions */}
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-white font-medium mb-2 flex items-center gap-2">
                        <HelpCircle className="h-5 w-5" />
                        Try these suggestions:
                      </p>
                      <ul className="text-gray-300 text-sm space-y-2 pl-5">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          Check station names for spelling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          Ensure both stations are on Delhi Metro network
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          Try nearby stations if direct route not available
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                          Check for temporary service disruptions
                        </li>
                      </ul>
                    </div>
                    
                    {/* Action Button */}
                    <button
                      onClick={() => {
                        setError('');
                        // Optionally clear stations
                        dispatch(setFromStation(''));
                        dispatch(setToStation(''));
                        setSearchTerm({ from: '', to: '' });
                      }}
                      className="mt-4 px-6 py-2.5 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

            </div>

          </div>

          {/* Results Section with Ref for Scrolling */}
          {routeToDisplay && (
            <div ref={resultsRef} className="space-y-4 transition-all duration-500">
              {/* Tabs - Modern Design */}
              <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-2 border border-gray-200">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'map', label: 'Map View', icon: <MapPin className="h-5 w-5" /> },
                    { id: 'route', label: 'Timeline', icon: <Clock className="h-5 w-5" /> },
                    { id: 'details', label: 'Details', icon: <Train className="h-5 w-5" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 text-sm rounded-2xl font-medium capitalize transition-all duration-300 flex items-center justify-center space-x-2 ${
                        activeTab === tab.id 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-[1.02]' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="transition-all duration-300 animate-fadeIn">
                {activeTab === 'route' && (
                  <div className="space-y-4">
                    <RouteSummary route={routeToDisplay} />
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Journey Timeline</h3>
                          <p className="text-gray-600 mt-1 text-sm">Step-by-step guide for your metro journey</p>
                        </div>
                        
                      </div>
                      <MobileTimeline route={routeToDisplay} />
                    </div>
                  </div>
                )}

                {activeTab === 'map' && (
                  <MetroMapView route={routeToDisplay} />
                )}

                {activeTab === 'details' && (
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl mb-4 p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Journey Details</h3>
                        {/* <p className="text-gray-600 mt-1">Complete breakdown of your metro route</p> */}
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                        Save Journey
                      </button>
                    </div>
                    <div className="space-y-6">
                      {routeToDisplay.metroSteps?.map((step, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl p-2 hover:shadow-xl transition-all duration-300 bg-white">
                          <div className="">
                            <div className='flex items-center mb-2'>

                            <div className="w-6 h-6 rounded-xl mr-4 flex items-center justify-center text-white shadow-lg"
                                 style={{ backgroundColor: getLineColor(step.line) }}>
                              {getLineEmoji(step.line)}
                            </div>
                              <h4 className="font-bold text-gray-800 text-lg">{step.line}</h4>
                            </div>
                            <div className="flex-1 mb-2">
                              <div className="flex items-center mt-1 space-x-4">
                                <p className="text-sm text-gray-600 flex items-center">
                                  <Clock className="h-3 w-3 mr-1.5" />
                                  {step.duration}
                                </p>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <MapPin className="h-3 w-3 mr-1.5" />
                                  {step.num_stops} stations
                                </p>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <Navigation className="h-3 w-3 mr-1.5" />
                                  {step.distance}
                                </p>
                              </div>
                            </div>
                          
                          </div>
                          
                          {/* Platform Details */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gradient-to-r from-green-50 to-green-100/50 p-2 rounded-xl border border-green-200">
                              <div className="flex items-center mb-3">
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                                  <ArrowUp className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-600 font-medium">Departure Platform</p>
                                </div>
                              </div>
                                <div>
                                  <p className="font-bold text-gray-800 text-md">{step.departure_platform || 'Platform 1'}</p>
                                </div>
                              <div className="pl-13">
                                <p className=" text-gray-700 font-medium text-sm">{step.departure_stop}</p>
                               
                              </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-2 rounded-xl border border-red-200">
                              <div className="flex items-center mb-3">
                                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-3">
                                  <ArrowDown className="h-5 w-5 text-red-600" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-600 font-medium">Arrival Platform</p>
                                </div>
                              </div>
                                  <p className="font-bold text-gray-800 text-lg">{step.arrival_platform || 'Platform 1'}</p>
                              <div className="pl-13">
                                <p className="text-sm text-gray-700 font-medium">{step.arrival_stop}</p>
                               
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-700 mb-3">Stations on this line:</p>
                            {step.stops?.map((stop, idx) => (
                              <div key={idx} className="flex items-center group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="relative">
                                  <div className={`w-4 h-4 rounded-full mr-4 ${
                                    stop === step.departure_stop ? 'bg-green-500 ring-2 ring-green-500/30' :
                                    stop === step.arrival_stop ? 'bg-red-500 ring-2 ring-red-500/30' :
                                    'bg-blue-500 ring-2 ring-blue-500/30'
                                  }`}></div>
                                  {idx < step.stops.length - 1 && (
                                    <div className="absolute left-2 top-4 h-6 w-0.5 bg-gray-300"></div>
                                  )}
                                </div>
                                <p className="font-medium text-gray-700 flex-1">{stop}</p>
                                <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                                  #{idx + 1}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        

          {/* Quick Actions - Modern Design */}
          {!routeToDisplay && (
            <div className="mt-10">
              <h3 className="font-bold text-gray-700 text-xl mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-3 text-yellow-500" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Clock className="h-6 w-6" />, label: 'First/Last Metro', color: 'from-blue-500 to-blue-600' },
                  { icon: <IndianRupee className="h-6 w-6" />, label: 'Fare Calculator', color: 'from-green-500 to-green-600' },
                  { icon: <Train className="h-6 w-6" />, label: 'Metro Map', color: 'from-purple-500 to-purple-600' },
                  { icon: <AlertCircle className="h-6 w-6" />, label: 'Service Alert', color: 'from-orange-500 to-orange-600' }
                ].map((action, idx) => (
                  <button key={idx} className="group">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {action.icon}
                        </div>
                      </div>
                      <span className="font-semibold text-gray-700 block text-center">{action.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </main>
            {/* SEO Rich Content Section */}
          {/* <SEORichContent /> */}
        <section>
        <div className="">
              <div className="relative">

                <InteractiveMetroMap />
                
              </div>
            </div>
      </section>

        <div className="space-y-5 mx-5 pb-5 w-[95%] mx-auto">
          {Object.entries(popularDestinations).map(([category, items]) => (
             <div key={category}>
                <p className="text-sm font-medium text-gray-600 mb-3 capitalize">{category}</p>
                  <div className="grid grid-cols-3 gap-3">
                      {items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handlePopularDestination(item.name)}
                          className={`p-4 rounded-2xl ${item.color} text-white flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform active:scale-95`}
                        >
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                            {item.icon}
                          </div>
                          <span className="text-sm font-medium truncate w-full text-center">
                       {item.name.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
             </div>
            ))}
        </div>

      </div>
    </>
  );
};

export default RoutePlanner;