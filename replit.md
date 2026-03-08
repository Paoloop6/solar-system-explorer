# Solar System Explorer

## Overview

An interactive 3D solar system visualization built with React Three Fiber. Users can explore planets, click to view detailed information, and navigate through a realistic solar system model. The application features smooth animations, orbital mechanics, and an educational interface displaying planetary facts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React Three Fiber 3D Rendering**
- Uses `@react-three/fiber` as the WebGL wrapper for React
- Implements `@react-three/drei` for helper components like OrbitControls
- Leverages Three.js for 3D graphics rendering
- Canvas component serves as the WebGL renderer root
- Rationale: React Three Fiber provides a declarative approach to 3D graphics, making complex 3D scenes manageable within React's component model

**Component Structure**
- `SolarSystem`: Main 3D scene container managing planets and lighting
- `Planet`: Individual planet component with orbital mechanics
- `PlanetInfoPanel`: UI overlay displaying planetary information
- Separation of concerns between 3D rendering and 2D UI overlays
- Rationale: Modular components enable independent updates and testing of 3D objects versus UI elements

**State Management**
- Zustand for lightweight state management
- `useGame` store manages game phases (ready, playing, ended)
- `useAudio` store handles sound effects and background music
- Rationale: Zustand provides minimal boilerplate compared to Redux while maintaining React hooks integration

**Styling System**
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Custom CSS-in-JS for 3D canvas styling
- HSL-based color system with CSS variables
- Rationale: Tailwind enables rapid UI development while Radix ensures accessibility compliance

### Backend Architecture

**Express Server**
- Minimal Express.js server for API routes
- Vite middleware integration for development
- Static file serving for production builds
- Request/response logging middleware
- Rationale: Express provides flexibility for future API expansion while remaining lightweight

**Storage Layer**
- In-memory storage implementation (`MemStorage`)
- Interface-based design (`IStorage`) for future database integration
- User CRUD operations defined in storage interface
- Rationale: Interface pattern allows swapping storage implementations (memory to database) without changing business logic

**Development Setup**
- Vite dev server with HMR (Hot Module Replacement)
- Runtime error overlay for debugging
- ESBuild for production bundling
- Rationale: Vite provides instant server start and fast HMR, significantly improving developer experience

### Data Storage Solutions

**PostgreSQL with Drizzle ORM**
- Drizzle configured for PostgreSQL dialect
- Schema-first approach with TypeScript types
- Neon serverless PostgreSQL driver
- Schema located in `shared/schema.ts` for client/server sharing
- Migration files stored in `./migrations` directory
- Rationale: Drizzle provides type-safe database queries with minimal runtime overhead; Neon enables serverless Postgres deployment

**Shared Schema Pattern**
- Database schemas defined once in shared directory
- Zod schemas for runtime validation
- Type inference from Drizzle schemas
- Rationale: Single source of truth for data structures prevents client/server type mismatches

### Authentication and Authorization

**Session-Based Architecture** (Prepared but not implemented)
- `connect-pg-simple` configured for PostgreSQL session storage
- User model includes username/password fields
- Storage interface includes user lookup methods
- Rationale: PostgreSQL-backed sessions provide persistence across server restarts while remaining simple to implement

### External Dependencies

**3D Graphics Stack**
- `three`: Core 3D rendering library
- `@react-three/fiber`: React renderer for Three.js
- `@react-three/drei`: Helper components and abstractions
- `@react-three/postprocessing`: Visual effects pipeline
- `vite-plugin-glsl`: GLSL shader loading support

**UI Component Library**
- `@radix-ui/*`: Headless accessible components (accordion, dialog, dropdown, etc.)
- `class-variance-authority`: Component variant management
- `clsx` + `tailwind-merge`: Dynamic class composition

**Database and ORM**
- `@neondatabase/serverless`: Serverless PostgreSQL driver
- `drizzle-orm`: TypeScript ORM
- `drizzle-kit`: Schema management and migrations
- `drizzle-zod`: Zod schema generation from Drizzle schemas

**Data Fetching**
- `@tanstack/react-query`: Server state management with caching
- Custom query client with fetch wrapper
- Unauthorized request handling patterns

**Build Tools**
- `vite`: Frontend build tool and dev server
- `esbuild`: Backend bundler
- `tsx`: TypeScript execution for development
- `@vitejs/plugin-react`: React fast refresh support

**Utilities**
- `date-fns`: Date manipulation
- `nanoid`: Unique ID generation
- `zod`: Runtime type validation

**Font Management**
- `@fontsource/inter`: Self-hosted Inter font family

The application is structured as a monorepo with shared TypeScript types, enabling full-stack type safety from database to UI components.