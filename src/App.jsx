import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const LoadingSpinner = lazy(() => import("./pages/LoadingSpinner"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const RajivChowk = lazy(() => import("./pages/RajivChowk"));
const StationsPage = lazy(() => import("./pages/StationsPage"));
const NewDelhiStation = lazy(() => import("./pages/NewDelhiStation"));
const KashmereGateStation = lazy(() => import("./pages/KashmereGateStation"));
const NoidaCityCentreStation = lazy(
  () => import("./pages/NoidaCityCentreStation"),
);
// import LoadingSpinner from './components/LoadingSpinner' // यह नया import

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const RoutePlanner = lazy(() => import("./pages/RoutePlanner"));
const Fares = lazy(() => import("./pages/Fares"));
const Network = lazy(() => import("./pages/Network"));
const SmartCard = lazy(() => import("./pages/SmartCard"));
const TouristInfo = lazy(() => import("./pages/TouristInfo"));
const Blogs = lazy(() => import("./pages/Blogs"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RedFortPlace = lazy(() => import("./pages/RedFortPlace"));
const IndiaGatePlace = lazy(() => import("./pages/IndiaGatePlace"));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header />

      <main>
        {/* SEO & Performance: Suspense improves Core Web Vitals by showing loading state while components load */}
        {/* This reduces Largest Contentful Paint (LCP) and improves user experience metrics that Google uses for ranking */}
        <Suspense fallback={<LoadingSpinner type="metro" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
            <Route path="/fares" element={<Fares />} />
            <Route path="/rajiv-chowk-metro-station" element={<RajivChowk />} />
            <Route path="/stations" element={<StationsPage />} />
            <Route path="/network" element={<Network />} />
            <Route path="/smart-card" element={<SmartCard />} />
            <Route path="/tourist-info" element={<TouristInfo />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route
              path="/new-delhi-metro-station"
              element={<NewDelhiStation />}
            />
            <Route
              path="/kashmere-gate-metro-station"
              element={<KashmereGateStation />}
            />
            <Route
              path="/noida-city-centre-metro-station"
              element={<NoidaCityCentreStation />}
            />
            <Route path="/places/red-fort-delhi" element={<RedFortPlace />} />
            <Route path="/places/india-gate" element={<IndiaGatePlace />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
