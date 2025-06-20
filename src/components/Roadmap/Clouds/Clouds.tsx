import { FunctionComponent } from "react";
import './Clouds.scss'
import cloud1 from 'assets/roadmap/cloud_1.png'
import cloud2 from 'assets/roadmap/cloud_2.png'

interface CloudsProps {};

const Clouds: FunctionComponent<CloudsProps> = () => {
    return (
        <div className="clouds-wrapper">
            <img src={cloud1} alt="cloud1" className="cloud" id="cloud-1"/>
            <img src={cloud2} alt="cloud2" className="cloud" id="cloud-2"/>
            <img src={cloud1} alt="cloud1" className="cloud" id="cloud-3"/>
            <img src={cloud2} alt="cloud2" className="cloud" id="cloud-4"/>
        </div>
    );
};

export default Clouds;
