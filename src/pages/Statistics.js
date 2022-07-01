import React, {useEffect} from 'react'
import AlcoholTypeChart from "../components/statistics/AlcoholTypeChart";
import AlcoholTypeTable from "../components/statistics/AlcoholTypeTable";
import GlassTypeTable from "../components/statistics/GlassTypeTable";
import GlassTypeChart from "../components/statistics/GlassTypeChart";
import {useAppContext} from "../context";

const Statistics = () => {
    const {getAlcoholChartInfo, getGlassChartInfo} = useAppContext();
    const typeData = getAlcoholChartInfo();
    const glassData = getGlassChartInfo();
    return (
        <div className="m-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <AlcoholTypeTable tableData={typeData}/>
                    </div>
                    <div className="col-6">
                        <AlcoholTypeChart chartData={typeData}/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <GlassTypeTable tableData={glassData}/>
                    </div>
                    <div className="col-6">
                        <GlassTypeChart chartData={glassData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
