import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import FastFlags from './pages/FastFlags';
import PS99Data from './pages/PS99Data';
import ScriptHub from './pages/ScriptHub';
import MultiInstanceLauncher from './pages/MultiInstanceLauncher';
import Macros from './pages/Macros';
import MyConfigs from './pages/MyConfigs';
import DownloadApp from './pages/DownloadApp';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider data-filename="pages/GitHubExport" data-linenumber="110" data-visual-selector-id="pages/GitHubExport110" client={queryClient}>
      <Router data-filename="pages/GitHubExport" data-linenumber="111" data-visual-selector-id="pages/GitHubExport111">
        <Layout data-filename="pages/GitHubExport" data-linenumber="112" data-visual-selector-id="pages/GitHubExport112">
          <Routes data-filename="pages/GitHubExport" data-linenumber="113" data-visual-selector-id="pages/GitHubExport113">
            <Route data-filename="pages/GitHubExport" data-linenumber="114" data-visual-selector-id="pages/GitHubExport114" path="/" element={<Navigate data-filename='pages/GitHubExport' data-linenumber='114' data-visual-selector-id='pages/GitHubExport114' to="/Dashboard" replace />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="115" data-visual-selector-id="pages/GitHubExport115" path="/Dashboard" element={<Dashboard data-filename='pages/GitHubExport' data-linenumber='115' data-visual-selector-id='pages/GitHubExport115' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="116" data-visual-selector-id="pages/GitHubExport116" path="/FastFlags" element={<FastFlags data-filename='pages/GitHubExport' data-linenumber='116' data-visual-selector-id='pages/GitHubExport116' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="117" data-visual-selector-id="pages/GitHubExport117" path="/PS99Data" element={<PS99Data />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="118" data-visual-selector-id="pages/GitHubExport118" path="/ScriptHub" element={<ScriptHub data-filename='pages/GitHubExport' data-linenumber='118' data-visual-selector-id='pages/GitHubExport118' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="119" data-visual-selector-id="pages/GitHubExport119" path="/MultiInstanceLauncher" element={<MultiInstanceLauncher data-filename='pages/GitHubExport' data-linenumber='119' data-visual-selector-id='pages/GitHubExport119' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="120" data-visual-selector-id="pages/GitHubExport120" path="/Macros" element={<Macros data-filename='pages/GitHubExport' data-linenumber='120' data-visual-selector-id='pages/GitHubExport120' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="121" data-visual-selector-id="pages/GitHubExport121" path="/MyConfigs" element={<MyConfigs data-filename='pages/GitHubExport' data-linenumber='121' data-visual-selector-id='pages/GitHubExport121' />} />
            <Route data-filename="pages/GitHubExport" data-linenumber="122" data-visual-selector-id="pages/GitHubExport122" path="/DownloadApp" element={<DownloadApp data-filename='pages/GitHubExport' data-linenumber='122' data-visual-selector-id='pages/GitHubExport122' />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}