// App.jsx
import React, { lazy, Suspense, useState } from 'react';

// Import the SyncComponent synchronously
import SyncComponent from './SyncComponent';

// Import the AsyncComponent using dynamic import
const AsyncComponent = lazy(() => import('./AsyncComponent'));

const Lazy = () => {
    const [loadAsyncComponent, setLoadAsyncComponent] = useState(false);

    return (
        <div>
            <h1>My App</h1>

            {/* Button to trigger loading of AsyncComponent */}
            <button onClick={() => setLoadAsyncComponent(!loadAsyncComponent)}>
                Load {loadAsyncComponent ? "SyncComponent" : "AsyncComponent"}
            </button>

            {/* Use the Suspense component to handle the loading state */}
            <Suspense fallback={<div>Loading...</div>}>
                {/* Conditionally render AsyncComponent based on state */}
                {loadAsyncComponent ? (
                    <AsyncComponent />
                ) : (
                    <SyncComponent />
                )}
            </Suspense>
        </div>
    );
};

export default Lazy;
