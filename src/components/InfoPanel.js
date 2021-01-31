import React from 'react';
import GlobalStats from './Cards/GlobalStats'
import  CountryPicker  from './CountryPicker/CountryPicker'
import Chart from './Chart/Chart'
export const InfoPanel = ({currentScreen}) => {
    if(currentScreen === 0){
        return <GlobalStats />
    }
    else if(currentScreen === 1){
        return <CountryPicker />
    }
    else if(currentScreen === 2){
        return <Chart />
    }
    else return <GlobalStats />
}
