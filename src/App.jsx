import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Sponsors from './pages/Sponsors';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Newsletters from './pages/Newsletters';
import Team from './pages/Team';
import MembersDirectory from './pages/MembersDirectory';
import { NotFound } from './pages/Others';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/team" element={<Team />} />
        <Route path="/directory" element={<MembersDirectory />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
