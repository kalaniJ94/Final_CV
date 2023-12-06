import {useState} from 'react';
import GalaxyMap from './GalaxyMap';
import VoyagePage from './VoyagePage';

export default function pageNavigate(){
    const [activePage, setActivePage] = useState('GalaxyMap');

    const renderPage = () => {
        if (activePage === 'GalaxyMap'){
            return <GalaxyMap/>;
        } if (activePage === 'VoyagePage')
    }
}