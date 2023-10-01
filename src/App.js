import {useRoutes} from 'react-router-dom';
import routes from "./routes";
import {Toaster} from "react-hot-toast";

function App() {
    return (
		<>
			<Toaster position="top-right" />
			{showRoutes}
		</>
	)
}

export default App;