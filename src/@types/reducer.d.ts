import rootReducer from "src/reducer/reducer"

declare global {
  type AppState = ReturnType<typeof rootReducer>
}
