import { createRoot } from 'react-dom/client'
import App from "@/app/App.tsx";
import '@/app/index.scss'
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
