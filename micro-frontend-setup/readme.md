# 🚀 Vite-Based Micro Frontend Architecture (React + Module Federation)

This project demonstrates a basic **Micro Frontend (MFE)** architecture using:

- React
- Vite
- @originjs/vite-plugin-federation

We build:

- **root** → Host application (routing, layout)
- **dashboard** → Remote micro frontend

Each application:
- Runs independently
- Builds independently
- Deploys independently

---

## 🏗 Architecture Overview

apps/
├── root → Host app (router, layout)
└── dashboard → Remote micro frontend

The `root` app dynamically loads the `dashboard` app at runtime using Module Federation.

---

## 🧩 Step 0: What We’re Building

- root handles routing
- dashboard exposes a React component
- root dynamically imports dashboard
- Shared dependencies (react, react-dom) are singleton

---

## 🛠 Step 1: Create the Applications

### Create Root (Host)

\`\`\`bash
npm create vite@latest root -- --template react
cd root
npm install
\`\`\`

### Create Dashboard (Remote)

\`\`\`bash
npm create vite@latest dashboard -- --template react
cd dashboard
npm install
\`\`\`

---

## 📦 Step 2: Install Module Federation Plugin

Install in both apps:

\`\`\`bash
npm install @originjs/vite-plugin-federation
\`\`\`

---

## ⚙️ Step 3: Configure the Remote (Dashboard)

Open `dashboard/vite.config.js` and replace with:

\`\`\`js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
\`\`\`

**What This Does:**

- Creates `remoteEntry.js`
- Exposes `DashboardApp`
- Shares React dependencies

---

## ⚙️ Step 4: Configure the Host (Root)

Open `root/vite.config.js` and replace with:

\`\`\`js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "root",
      remotes: {
        dashboard: "http://localhost:5001/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
\`\`\`

---

## 🧠 Step 5: Use Remote in Root

Install router in root:

\`\`\`bash
npm install react-router-dom
\`\`\`

Update `root/src/App.jsx`:

\`\`\`jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("dashboard/DashboardApp"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
\`\`\`

---

## 🔌 Step 6: Configure Ports

Update both apps:

- `root/vite.config.js`:

\`\`\`js
server: {
  port: 5000,
},
\`\`\`

- `dashboard/vite.config.js`:

\`\`\`js
server: {
  port: 5001,
},
\`\`\`

---

## ▶️ Step 7: Run the Applications

Start dashboard first:

\`\`\`bash
cd dashboard
npm run dev
\`\`\`

Then start root:

\`\`\`bash
cd root
npm run dev
\`\`\`

---

## 🌐 Access Application

Open: `http://localhost:5000/dashboard`  
The dashboard micro frontend should load inside root.

---

## 🏗 Production Build

**Build Dashboard**

\`\`\`bash
cd dashboard
npm run build
npm run preview -- --port 5001
\`\`\`

**Build Root**

\`\`\`bash
cd root
npm run build
npm run preview -- --port 5000
\`\`\`

Open: `http://localhost:5000/dashboard`

---

## 🧠 Key Concepts

| Concept | Description |
|---------|-------------|
| Host (root) | Composes and loads remotes |
| Remote (dashboard) | Exposes modules |
| remoteEntry.js | Entry file for federation |
| Shared dependencies | Prevent duplicate React instances |
| React.lazy | Dynamic loading of remote |

---

## 🎯 Benefits of This Setup

- Independent development
- Independent deployment
- Scalable architecture
- Team autonomy


# Micro Frontend Architecture – One App Based Implementation

## 📌 Overview

This project follows a **Micro Frontend (MFE)** architecture using the **One App framework**.  
The application is composed of a **Root Module (Composition Layer)** and multiple **Child Modules (Domain Modules)**.

The architecture enables:

- Independent deployment of modules
- Domain-based ownership
- Environment-specific configuration
- Scalable team collaboration
- Optimized performance through shared CDN assets

---

# 🏗 Architecture Overview

Root Module (Shell)
├── Authentication
├── Environment Configuration
├── Initial Routing
├── Global Redux Store
└── Child Modules (Domain Driven)
├── Module A
├── Module B
└── Module C


---

# 🧩 1. Root Module Responsibilities

The Root module acts as the **application composition layer** and is the main entry point of the application.

## Responsibilities:

### ✅ Initial Routing
- Defines top-level routes
- Dynamically resolves child modules
- Uses `holocron-module-route` for module-based routing

### ✅ Authentication
- Centralized authentication logic
- Token validation
- Session management
- Access control enforcement

### ✅ Environment Configuration
- Controlled via Helm files
- Supports multiple environments:
  - Development
  - QA
  - Production

Configuration controls:
- API endpoints
- CDN module map URLs
- Feature flags
- Third-party integrations

---

# 📦 2. Child Modules

Each child module:

- Represents a business/domain capability
- Is independently developed
- Has its own routing logic
- Can define nested modules using `childRoutes`

Example:

Root
├── Product Module
│ ├── Product Details
│ ├── Reviews
│
├── Checkout Module
│ ├── Payment
│ ├── Order Summary


This structure ensures:

- Clear domain boundaries
- Feature isolation
- Independent scalability

---

# 🔄 3. Module Composition (Holocron)

The application uses Holocron for dynamic module composition.

### How it works:

- Root dynamically loads child modules at runtime.
- Child modules register their own routes.
- Modules can define `childRoutes` for nested structure.

Benefits:

- Loose coupling
- Runtime extensibility
- Independent version control

---

# 🗄 4. State Management Strategy

We use **Redux as a centralized global store**.

### Implementation:

- Redux store initialized at Root level.
- Child modules connect to shared store.
- Shared state includes:
  - Authentication
  - User profile
  - Feature flags
  - Global configurations

### Design Principle:

We avoid direct cross-module imports to maintain proper isolation and prevent tight coupling.

---

# 🚀 5. Deployment Strategy

Each module:

- Is built independently.
- Generates its own build artifact.
- Is deployed independently to CDN.

## 📦 CDN Strategy

After deployment:

- A CDN URL is generated.
- The module version is registered in a **GitHub Module Map**.

The Module Map manages:

- Dev environment versions
- QA environment versions
- Production versions

This enables:

- Independent releases
- Safe rollbacks
- Environment-based control

---

# ⚡ 6. Performance Optimization

To improve performance:

- Shared vendor packages are shipped via a common CDN bundle.
- Reduces duplicate dependencies across modules.
- Improves browser caching.
- Decreases overall load time.

This ensures:

- Smaller module bundles
- Faster initial rendering
- Better cache utilization

---

# 🎯 7. Architectural Benefits

| Capability | Benefit |
|------------|----------|
| Independent Builds | Faster releases |
| Module Isolation | Reduced coupling |
| Environment Control | Safe deployments |
| Shared CDN Vendors | Optimized performance |
| Domain Ownership | Team autonomy |

---

# 🧠 8. Governance & Considerations

Micro Frontend architecture introduces complexity.  
Proper governance is required for:

- Shared dependency versioning
- Design system consistency
- Redux usage discipline
- Performance monitoring
- Module version tracking

---

# 🔐 9. Environment Management

Environment configuration is managed using:

- Helm files
- Environment-based Module Maps
- Feature toggles

Supported environments:

- Development
- QA
- Production

---

# 📈 10. Scalability Strategy

This architecture supports:

- Adding new business domains without modifying core
- Independent team scaling
- Controlled production rollouts
- Canary deployments
- Feature flag-based releases

---

# 🏁 Conclusion

This Micro Frontend architecture using One App provides:

- Domain-driven modularity
- Independent deployment capability
- Runtime module composition
- Centralized authentication and state management
- CDN-based performance optimization

It is designed to scale both technically and organizationally while maintaining governance and performance standards.
