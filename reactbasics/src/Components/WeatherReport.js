import React from 'react'
import './Common.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import htemp from './hot_temp.jpg'
import ctemp from './cold_temp.jpg'
import ntemp from './norm_temp.jpg'
import { useState } from 'react';
export default function WeatherReport() {
    var maxval = [], minval = [], avgs = [], report = [];
    var sortDays = [], savgs = []
    var wkrpt = "";
    var weather = [{ wid: 1, city: "Karachi", days: [31, 32, 34, 35, 36, 37, 41] },
    { wid: 2, city: "Lahore", days: [28, 31, 34, 36, 32, 38, 39] },
    { wid: 3, city: "Badin", days: [37, 38, 23, 40, 40, 16, 29] },
    { wid: 4, city: "Multan", days: [36, 15, 34, 20, 30, 31, 45] },
    { wid: 5, city: "Sakkar", days: [27, 27, 42, 23, 26, 41, 41] },
    { wid: 6, city: "Gharo", days: [15, 34, 19, 21, 15, 20, 14] },
    { wid: 7, city: "Shewan", days: [23, 27, 35, 21, 19, 22, 42] },
    { wid: 8, city: "Hyderabad", days: [19, 15, 17, 16, 10, 30, 27] },
    { wid: 9, city: "Chennai", days: [18, 31, 24, 40, 12, 23, 34] },
    { wid: 10, city: "Mumbai", days: [42, 41, 34, 35, 36, 33, 30] }]
    var aver = 0, faver = 0;

    weather.map((data) => {
        data.days.sort();
        sortDays.push(data.days)
        data.days.map((x) => {
            aver = aver + x;
        })
        faver = aver / 7;
        avgs.push(faver.toFixed(2))
        aver = 0;
    })
    avgs.map((data) => {
        if (data >= 35) {
            wkrpt = "hot temperature"
            report.push(wkrpt)

        }
        else if (data >= 20 && data < 35) {
            wkrpt = "normal temperature"
            report.push(wkrpt)
        }
        else if (data > 10 && data < 20) {
            wkrpt = "cold temperature"
            report.push(wkrpt)
        }
    })
    sortDays.map((data) => {
        minval.push(Math.min(...data));
        maxval.push(Math.max(...data));
    })
    // console.log(report)

    const [city, setCity] = useState({
        cityName: ''
    })
    var cityData;
    var check = false;
    function checkVal() {
        check = true;
        console.log(check)
    }
    function onSearchCity() {
        weather.filter((data) => {
            if (data.city == city.cityName) {
                console.log(data)
                cityData = <table>
                    <thead><tr><th>Weather Id</th><th>City Name</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th>
                        <th>Fri</th><th>Sat</th><th>Sun</th><th>Min(temp)</th><th>Max(temp)</th><th>Avg(temp)</th>
                        <th>Weather Report</th></tr></thead>
                    <tbody><tr><td>{data.wid}</td><td>{data.city}</td>
                        <td>{data.days}</td>
                    </tr></tbody></table>
            }
        })
    }
    savgs.push(avgs);
    weather.forEach(function (e) {
        if (typeof e === "object") {
            minval.map((x) => {
                if (e.days[0] == x) {
                    e["min"] = x
                }
            })
            maxval.map((x) => {
                if (e.days[6] == x) {
                    e["max"] = x
                }
            })
            avgs.map((x, ind) => {
                if (ind + 1 == e.wid) {
                    e["avg"] = x
                }
            })
            report.map((x, ind) => {
                if (ind + 1 == e.wid) {
                    e["temp"] = x
                    if (e["temp"] == "hot temperature") {
                        e["image"] = htemp
                    }
                    else if (e["temp"] == "cold temperature") {
                        e["image"] = ctemp
                    }
                    else {
                        e["image"] = ntemp
                    }
                }
            })
        }
    });

    function onChangeText(event) {
        const { name, value } = event.target;
        setCity((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div>
            <h1 id="head">WEATHER DATA REPORT SHEET</h1>
            <table>
                <tbody id="searchBox"><tr ><td>Enter the City</td><td><input type="text" name="cityName" id="city" value={city.cityName} onChange={onChangeText} /></td><td>
                    <input type="submit" onClick={onSearchCity} value="Search Data" /></td></tr></tbody>
            </table>
            <table id="t1">
                <thead><tr><th>Weather Id</th><th>City Name</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th>
                    <th>Fri</th><th>Sat</th><th>Sun</th><th>Min(temp)</th><th>Max(temp)</th><th>Avg(temp)</th>
                    <th>Weather Report</th><th>Weather Image</th></tr></thead>
                {
                    weather.map((data) => {
                        return (
                            <tbody><tr id="tdata"><td style={{ backgroundColor: "lightpink" }}>{data.wid}</td><td style={{ backgroundColor: "lightsteelblue" }}>{data.city}</td>
                                {
                                    data.days.map((x) => {
                                        if (x >= 10 && x < 20) {
                                            return (

                                                <td style={{ backgroundColor: "lightcoral" }}>{x}</td>
                                            )
                                        }
                                        else if (x >= 20 && x < 30) {
                                            return (
                                                <td style={{ backgroundColor: "lightseagreen" }}>{x}</td>
                                            )
                                        }
                                        else if (x >= 30 && x < 40) {
                                            return (
                                                <td style={{ backgroundColor: "lightgreen" }}>{x}</td>
                                            )
                                        }
                                        else {
                                            return (
                                                <td style={{ backgroundColor: "lightslategray" }}>{x}</td>
                                            )
                                        }
                                    })
                                }
                                {

                                    <td style={{backgroundColor:"lightskyblue"}}>{data.min}</td>
                                }
                                {
                                    <td style={{backgroundColor:"linen"}}>{data.max}</td>
                                }
                                {
                                    <td style={{backgroundColor:"lightsalmon"}}>{data.avg}</td>
                                }
                                {
                                    <td style={{backgroundColor:"greenyellow"}}>{data.temp}</td>
                                }
                                {
                                    <td><img src={data.image} className="imag" /></td>
                                }
                            </tr></tbody>

                        )

                    })

                }



            </table>

        </div>
    )
}
