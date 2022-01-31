import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "react-query";

import {Countries} from "../../pages/Countries";
import {Country} from "../../pages/Country";
import {ErrorPage} from "../../pages/ErrorPage";

const queryClient = new QueryClient();

const App = () =>
    <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path='/' element={<Countries/>}/>
                <Route path='/country/:country' element={<Country/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Router>
    </QueryClientProvider>;

export default App;
