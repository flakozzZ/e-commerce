import React, {Suspense} from "react";
import {Routes} from "react-router-dom";
import DefaultLayout from "@/app/layout/default.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";


const App = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <DefaultLayout>
                <Routes>
                </Routes>
            </DefaultLayout>
        </Suspense>
    );
};

export default App;