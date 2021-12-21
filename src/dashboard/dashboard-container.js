import './dashboard.css';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import containerImage from './images/d.jpeg';
import range from './images/2.jpeg';

export const DashboardContainer = () => {

    return(
        <>
        <div className='dashboard-container-top'>
        <span className='dashboard-container-top-title'>Building 1</span>
        <span className='dashboard-home'><HomeOutlinedIcon /></span>
        <span className='dashboard-alert'><AddAlertOutlinedIcon /></span>
        <span className='dashboard-location'><AddLocationOutlinedIcon /></span>
            <span className='logout-btn'>Logout</span>
        </div>
            <div className='building-type-dropdown'>
                <select className="building-type-dropdown-select">
                    <option>AHU-8</option>
                </select>
            </div>
            <div>
            <div className='dashboard-section'>
                <div className='dashboard-section-header'>
                    <span>Building Performance Index</span>
                </div>
                <div className='dashboard-sub-section'>
                    <span className='dashboard-sub-section-text-1'>Aim : 458.0</span>
                    <div className='dashboard-sub-section-row'>
                        <div className='dashboard-sub-section-row-box'>
                            <div className='box-shadow-1'></div>
                            <span className='box-shadow-1-text'> {'< 5'}</span>
                            <div>
                                <span>Excellent</span>
                            </div>
                        </div>
                        <div className='dashboard-sub-section-row-box' style={{left:'23%'}}>
                            <div className='box-shadow-1' style={{backgroundColor: 'green'}}></div>
                            <span className='box-shadow-1-text'> {'5-20'}</span>
                            <div>
                                <span>Good</span>
                            </div>
                        </div>
                        <div className='dashboard-sub-section-row-box' style={{left:'46%'}}>
                            <div className='box-shadow-1' style={{backgroundColor: 'yellow'}}></div>
                            <span className='box-shadow-1-text'> {'17-35'}</span>
                            <div>
                                <span>Moderate</span>
                            </div>
                        </div>
                        <div className='dashboard-sub-section-row-box' style={{left:'70%'}}>
                            <div className='box-shadow-1' style={{backgroundColor: 'red'}}></div>
                            <span className='box-shadow-1-text'> {'> 50'}</span>
                            <div>
                                <span>Poor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dashboard-section' style={{left: '37%'}}>
                <div className='dashboard-section-header'>
                    <span>Energy Usage</span>
                </div>
                <div className='dashboard-sub-section'>
                    <img src={range} className='dashboard-sub-section-image'/>
                </div>
            </div>
            </div>
            <div className='dashboard-container-image'>
                <img src={containerImage} className='dashboard-container-image-1'/>
            </div>
        <div className='menu-details'>
            <div className='menu-details-section'>
                <div className='menu-details-section-header'>
                    <span>Supply for Status</span>
                </div>
                <div className='menu-details-section-row'>
                    <div className='menu-details-section-row-1'>
                        <span>S/Fan Low Speed Command</span>
                    </div>
                    <div className='menu-details-section-row-2'>
                        <span>Start</span>
                    </div>
                </div>
                <div className='menu-details-section-row'>
                    <div className='menu-details-section-row-1'>
                        <span>S/Fan Low Speed Run</span>
                    </div>
                    <div className='menu-details-section-row-2' style={{backgroundColor: 'red'}}>
                        <span>Off</span>
                    </div>
                </div>
                <div className='menu-details-section-row'>
                    <div className='menu-details-section-row-1'>
                        <span>S/Fan Low Speed Trip</span>
                    </div>
                    <div className='menu-details-section-row-2'>
                        <span>Normal</span>
                    </div>
                </div>
                <div className='menu-details-section-row'>
                    <div className='menu-details-section-row-1'>
                        <span>S/Fan High Speed Command</span>
                    </div>
                    <div className='menu-details-section-row-2'>
                        <span>Start</span>
                    </div>
                </div>
                <div className='menu-details-section-row'>
                    <div className='menu-details-section-row-1'>
                        <span>S/Fan High Speed Run</span>
                    </div>
                    <div className='menu-details-section-row-2'>
                        <span>On</span>
                    </div>
                </div>
                <div className='menu-details-section-row'>
                    <div className='menu-details-section-row-1'>
                        <span>S/Fan High Speed Trip</span>
                    </div>
                    <div className='menu-details-section-row-2'>
                        <span>Start</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}