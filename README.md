## TodoApp (React Native / Expo)

This repository contains a small cross-platform Todo mobile application built with Expo and React Native. The README below is tailored for inclusion on a resume — it summarises the project, technology choices, the repository layout, and suggested resume bullet-points.

## Quick summary

- Purpose: Simple Todo app with local persistence and basic navigation.
- Primary technologies: Expo, React Native, React Navigation, AsyncStorage.

## Tech stack

- React Native (via Expo)
- Expo CLI
- React Navigation (stack)
- @react-native-async-storage/async-storage for local data persistence
- react-native-vector-icons for icons

## Repository structure (important files)

- `App.js` — App entry: sets up React Navigation stack and registers the two main screens.
- `index.js` — Expo entrypoint which registers the root component.
- `app.json` — Expo configuration (app name, icons, splash settings, platform settings).
- `package.json` — Dependencies and npm scripts (includes `expo start`, `expo start --android`, etc.).
- `assets/` — App icons and splash assets used by Expo.
- `src/screens/HomeScreen.js` — Main screen: displays list of todos, expand/collapse, mark finished, delete, and navigation to add screen. Uses AsyncStorage to load/save todos.
- `src/screens/AddNewTodo.js` — Screen with form to add a todo (title + description). Saves to AsyncStorage and validates inputs.

## Key features

- Add a todo with title and description.
- Local persistence using AsyncStorage (todos survive app restarts).
- Mark todos as finished, delete todos, and expand to see details.
- Navigation between Home and AddNewTodo screens using React Navigation stack.

## How to run (development)

1. Install dependencies:

```powershell
cd c:\Users\Pranj\todoapp
npm install
```

2. Start the Expo development server:

```powershell
npm run start
# or
expo start
```

3. Launch on a device or simulator using Expo Go or the provided npm scripts (e.g., `npm run android`).

Notes: The project uses Expo (see `package.json` scripts). Ensure `expo` CLI is installed globally if you plan to run `expo start` directly.
