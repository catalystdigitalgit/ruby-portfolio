import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ToolBelt from './components/Toolbelt';
import RecentWork from './components/RecentWork';

function App() {
  return (
    <div className="min-h-screen bg-app-gradient dark:bg-app-gradient-dark transition-colors duration-300">
      <Header />
      <Hero />
      <Timeline />
      <ToolBelt />
      <RecentWork />
    </div>
  );
}

export default App;