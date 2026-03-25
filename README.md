# Scalable Food Delivery Backend System

This repository contains the early foundation of a Swiggy-like food delivery backend built with NestJS and TypeScript. The current codebase is a starter backend service with basic Nest application structure, test setup, and room to grow into a scalable multi-module delivery platform.

## Project Overview

The main application lives inside the `food-delivery-system` folder and is structured as a NestJS backend service. At the moment, the project is in the bootstrap stage:

- NestJS application scaffold is set up
- TypeScript build and lint tooling are configured
- Unit and e2e testing setup is available
- Prisma packages are installed for future database integration
- A basic root API endpoint is implemented

## Current Status

Right now, the backend is a clean starter rather than a fully implemented delivery platform.

Implemented today:

- Application bootstrap with NestJS
- Root controller with `GET /`
- Default service response: `Hello World!`
- Jest-based testing setup
- Git workflow notes in `food-delivery-system/docs/README.md`

Not yet implemented:

- Authentication and authorization
- User, restaurant, menu, cart, order, and delivery modules
- Database schema and Prisma setup files
- Environment-based configuration wiring
- API documentation

## Tech Stack

- Node.js
- NestJS
- TypeScript
- Prisma packages
- Jest
- ESLint
- Prettier

## Repository Structure

```text
Scalable-Food-Delivery-Backend-System-Swiggy-like/
|-- README.md
|-- Food Delivery app literature Survery.xlsx
`-- food-delivery-system/
    |-- docs/
    |-- src/
    |   |-- app.controller.ts
    |   |-- app.module.ts
    |   |-- app.service.ts
    |   `-- main.ts
    |-- test/
    |-- package.json
    `-- tsconfig.json
```

## Getting Started

1. Move into the backend project:

```bash
cd food-delivery-system
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run start:dev
```

4. Open the app locally:

```text
http://localhost:3000
```

The current response from the root endpoint is:

```text
Hello World!
```

## Available Scripts

Run these commands from the `food-delivery-system` directory:

```bash
npm run start
npm run start:dev
npm run start:debug
npm run build
npm run start:prod
npm run lint
npm run test
npm run test:cov
npm run test:e2e
```

## Project Analysis

From the current source code, this repository appears intended to become a scalable backend for a food delivery application, but it is still in the initial setup phase.

Key observations:

- The app boots from `src/main.ts` and listens on port `3000` by default
- `AppModule` currently has no feature modules imported
- The only exposed route is `GET /`
- Prisma is installed in `package.json`, but there is no schema or database module yet
- `@nestjs/config` is installed, but configuration is not wired into the application yet
- Testing scaffolding exists for both unit and e2e tests

## Suggested Next Steps

- Add domain modules such as auth, users, restaurants, menus, orders, and delivery
- Create Prisma schema and connect a database
- Introduce environment validation and configuration management
- Add request validation, DTOs, and error handling
- Add Swagger or similar API documentation
- Set up Docker and deployment configuration

## Development Notes

- Backend source: `food-delivery-system/src`
- Test files: `food-delivery-system/test`
- Git workflow notes: `food-delivery-system/docs/README.md`

## License

The backend package is currently marked as `UNLICENSED` in its `package.json`.
