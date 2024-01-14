// App.jsx
import React, { lazy, Suspense, useState } from 'react';

// Import lazily loaded components
const Tab1Content = lazy(() => import('./Tab1Content'));
const Tab2Content = lazy(() => import('./Tab2Content'));

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <h1>Tab Switching with Lazy Loading</h1>

      {/* Tabs */}
      <div>
        <button onClick={() => setActiveTab(1)}>Tab 1</button>
        <button onClick={() => setActiveTab(2)}>Tab 2</button>
      </div>

      {/* Use the Suspense component to handle the loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Conditionally render content based on the active tab */}
        {activeTab === 1 ? <Tab1Content /> : <Tab2Content />}
      </Suspense>
    </div>
  );
};

export default App;
