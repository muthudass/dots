import { DashboardContainer } from "./dashboard-container";
import './dashboard.css';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import plant from './images/p.jpeg';
import pump from './images/pumpsPmu.jpeg';
import ahu from './images/Ahu.jpeg';
import energy from './images/energy.jpeg';
import mm from './images/MaintenanceManager.jpeg';
import report from './images/report.jpeg';
import vav from './images/Vav.jpeg';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import { useState } from "react";
import Logo from './images/logo.jpeg';

export const Dashboard = () => {

    const [activeElement, setActiveElement] = useState('plant');

    const handleMouseEnter = (e, actEle) => {
        // e.target.className = "side-menu active-side-menu"
        // setActiveElement(actEle);
    }
    const handleMouseLeave = e => {
        // e.target.className = "side-menu"
    }

    return (
        <>
            <div className="dashboard">
                <img src={Logo} alt='Logo' className='dashboard-logo' />
                <div className="region-building">
                    <div className="region-dropdown">
                        <span style={{fontWeight: '500', color: '#700f08'}}>Region</span>
                        <select className="dropdown-select">
                            <option></option>
                            <option>UAE</option>
                            <option>DUBAI</option>
                            <option>JLT</option>
                        </select>
                    </div>
                    <div className="building-dropdown">
                        <span style={{fontWeight: '500', color: '#700f08'}}>Buildings</span>
                        <select className="dropdown-select">
                            <option></option>
                            <option>JLT Tower</option>
                            <option>Marsa Tower</option>
                            <option>City Walk Tower</option>
                        </select>
                    </div>
                </div>
                <ul className="side-menu-list">
                    <li><div className={`side-menu ${activeElement === 'plant' ? 'active-side-menu' : ''}`}
                        onMouseEnter={(e) => handleMouseEnter(e, 'plant')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('plant')}>
                        <span>
                            <img src={plant} className="side-menu-logo" />
                            <span className="side-memu-heading">Plant</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'floorLayout' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('floorLayout')}>
                        <span>
                            <FactoryOutlinedIcon />
                            <span>Floor Layout</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'pumpsPmu' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('pumpsPmu')}>
                        <span>
                            <img src={pump} className="side-menu-logo" />
                            <span>Pumps Pmu</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'ahu' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('ahu')}>
                        <span>
                            <img src={ahu} className="side-menu-logo" />
                            <span>Ahu</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'vav' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('vav')}>
                        <span>
                            <img src={vav} className="side-menu-logo" />
                            <span>Vav</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'vent' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('vent')}>
                        <span>
                            <DeviceThermostatOutlinedIcon />
                            <span>Ventilation System</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'gm' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('gm')}>
                        <span>
                            <MonitorOutlinedIcon />
                            <span>General Monitoring</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'mm' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('mm')}>
                        <span>
                            <img src={mm} className="side-menu-logo" />
                            <span>Maintenance Manager</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'energy' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('energy')}>
                        <span>
                            <img src={energy} className="side-menu-logo" />
                            <span>Energy</span>
                        </span>
                    </div></li>
                    <li><div className={`side-menu ${activeElement === 'report' ? 'active-side-menu' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setActiveElement('report')}>
                        <span>
                            <img src={report} className="side-menu-logo" />
                            <span>Report</span>
                        </span>
                    </div></li>
                </ul>
                <div className="dashboard-container">
                    <DashboardContainer />
                </div>
            </div>
        </>
    );
}