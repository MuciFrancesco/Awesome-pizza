import { BrowserRouter } from "react-router-dom";
import App from "./App"

function Root() {
    return (
        <div className="root">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    )
}

export default Root