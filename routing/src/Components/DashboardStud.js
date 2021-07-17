import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { Link, useRouteMatch } from 'react-router-dom';
export default function DashboardStud() {
    let {path,urls}=useRouteMatch()
    var url = "http://localhost:5000/students"
    var num = 0;
    var getDt = []
    const [count, setCount] = useState()
    const [ug, setUG] = useState()
    const [pg, setPG] = useState()
    var inc = 0, inc1 = 0;
    useEffect(() => {

        $(document).ready(function () {

            $('.counter').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

        });
        fetch(url).then(res => res.json()).then((data) => {
            num = data.length
            setCount(num)
            data.map((x) => {
                if (x.rb == "PG") {
                    inc = inc + 1;
                }
                else if (x.rb == "UG") {
                    inc1 = inc1 + 1;
                }
                setPG(inc)
                setUG(inc1)
            })
        })


    }, [])
    return (

        <div>
            <div class="container" >
                <div class="row" >
                    <div class="four col-md-3">
                        <div class="counter-box colored"> <i class="fa fa-users"></i> <span class="counter">500
                        </span>
                            <p style={{ color: 'brown' }}>{count}</p>
                            <p>Count of Students</p>
                        </div>
                    </div>
                    <div class="four col-md-3" >
                        <div class="counter-box colored"> <i class="fa fa-graduation-cap" aria-hidden="true"></i><span class="counter">250</span>
                            <p style={{ color: 'brown' }}>{ug}</p>
                            <p>UG Students</p>
                        </div>
                    </div>
                    <div class="four col-md-3">
                        <div class="counter-box colored"><i class="fa fa-graduation-cap" aria-hidden="true"></i><span class="counter">250</span>
                            <p style={{ color: 'brown' }}>{pg}</p>
                            <p>PG Students</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <table>
                    <tr><td><Link to="/dashboard/addStudent">Add Student</Link></td></tr>
                    <tr><td><Link to="/dashboard/viewStudent">View Student</Link></td></tr>
                    <tr><td><Link to="/dashboard/updateStudent">Edit Student</Link></td></tr>
                    <tr><td><Link to="/dashboard/deleteStudent">Delete Student</Link></td></tr>
                    </table>
                </nav>
            </div>
        </div>
    )
}
