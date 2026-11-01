import MainLayout from "../layout/MainLayout";

// The preloader lives in index.html and is dismissed from main.jsx (for every route),
// so the home page renders immediately with no artificial delay.
const AppWrapper = () => <MainLayout />;

export default AppWrapper;
