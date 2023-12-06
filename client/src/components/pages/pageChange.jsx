import {useState} from 'react';
import Navigation from './Navigation';
import GalaxyMap from './GalaxyMap';
import VoyagePage from './VoyagePage';

export default function pageNavigate(){
    const [activePage, setActivePage] = useState('GalaxyMap');

    const renderPage = () => {
        if (activePage === 'GalaxyMap'){
            return <GalaxyMap/>;
        } if (activePage === 'VoyagePage'){
            return <VoyagePage/>;
        }
    };
    const handlePageChange = (page) => setActivePage(page);

    return(
        <div>
            <Navigation activePage={activePage} handlePageChange={handlePageChange} />
            <main className="mx-3">{renderPage()}</main>
        </div>
    );
}