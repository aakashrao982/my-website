
var t = 0;

document.getElementById("chg_fmt").addEventListener("click", function () {
    t = 1;
})
document.getElementById("clk").addEventListener("click", function () {
    t = 0;
    console.log("hello")
})

document.getElementById("alrm_btn").addEventListener("click", function () {
    t = 2;
})

function display_t1(d) {

    document.getElementsByTagName("body")[0].style.backgroundImage = "url('day.png')"
    document.getElementById("chg_fmt").className = "nav-link";
    document.getElementById("clk").className = "nav-link active";
    document.getElementById("alrm_btn").className = "nav-link";
    document.getElementById("showing_content").style.color = "black";

    let hrs = d.getHours();
    let minn = d.getMinutes();
    let sec = d.getSeconds();
    document.getElementById("hours").innerText = hrs;
    document.getElementById("minutes").innerText = minn;
    document.getElementById("seconds").innerText = sec;
}

function display_t2(d) {

    let hrs = d.getHours();
    if (hrs > 12) {
        hrs -= 12;
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('night.png')"
        document.getElementById("showing_content").style.color = "#c2c2a3";
    }
    document.getElementById("chg_fmt").className = "nav-link active";
    document.getElementById("clk").className = "nav-link";
    document.getElementById("alrm_btn").className = "nav-link";

    let minn = d.getMinutes();
    let sec = d.getSeconds();
    document.getElementById("hours").innerText = hrs;
    document.getElementById("minutes").innerText = minn;
    document.getElementById("seconds").innerText = sec;
}

function display_t3() {
    document.getElementById("chg_fmt").className = "nav-link";
    document.getElementById("alrm_btn").className = "nav-link active";
    document.getElementById("clk").className = "nav-link";



}


var intervalId = window.setInterval(function () {
    let d = new Date();
    if (t == 1) {
        display_t2(d);
    }
    else if (t == 0) {
        display_t1(d);
    }
    else if (t == 2) {
        display_t3();
    }


}, 1000);

//////////////////       stopwatch------------------------------------------------------------------

function display_stopwatch() {
    let h1 = 0, m1 = 0;
    h1 = Math.floor(h);
    console.log(m1);
    m1 = Math.floor(m);
    let counter = document.getElementById("counter").innerHTML = `     ${h1} : ${m1} : ${s}    `;
}
var status = 0, c = 0, time_id = 0, h = 0, s = 0, m = 0, lap_count = 0, prev_lap_count = 0, max_s = 0;


document.getElementById("startbtn").addEventListener("click", function () {
    if (status == 0) {
        status = 1;
        time_id = setInterval(intcremet_s, 1000);
    }
    else {
        status = 0;
        clearInterval(time_id);
    }
})

function intcremet_s() {
    if (status == 1) {

        //let h = 0, m = 0, s = 0
        s = c;
        c++;
        if (s >= 60) {
            m = s / 60;
            if (m >= 60) {
                h = m / 60;
                m = m % 60;
            }
            s = s % 60;
        }
        s = Math.floor(s);
        m = Math.floor(m);
        h = Math.floor(h);
        display_stopwatch();
    }
    //intcremet_s();
}

document.getElementById("resetbtn").addEventListener("click", function () {
    document.getElementById("lap_body").innerHTML = "";
    clearInterval(time_id);
    h = 0;
    s = 0
    m = 0
    c = 0;
    display_stopwatch();
    laps_value = [];
    x_lable = [];
    console.log(laps_value);
    display_chart();
    //document.getElementById("myChart").remove();
})



document.getElementById("lapbtn").addEventListener("click", function () {
    console.log("hi")
    lap_count++;

    x_lable.push(lap_count);         // for graph
    laps_value.push(c - prev_lap_count);
    // destroying canvas
    display_chart();
    //printing chart

    let h1 = 0, m1 = 0, s1 = 0;
    s1 = c - prev_lap_count;
    prev_lap_count = c;

    if (s1 >= 60) {
        m1 = s1 / 60;
        if (m1 >= 60) {
            h1 = m1 / 60;
            m1 = m1 % 60;
        }
        s1 = s1 % 60;
        m1 = Math.floor(m1);
        console.log("m1 = " + m1)
        h1 = Math.floor(h1)
    }
    let str = `
                  <tr>
                    <th scope="row" style="font-size: 1.5vw;">${lap_count}</th>
                    <td style="font-size: 1.5vw;">${h1} : ${m1} : ${s1}</td>
                  </tr>
                </tbody>
   `
    let person = {
        y: s1,
        indexLabel: "",
        markerColor: ""
    };
    localStorage.setItem("lap_count", JSON.stringify(person));

    document.getElementById("lap_body").innerHTML += str;

});



///  graph
var x_lable = [];
var laps_value = [];




function display_chart() {

    // var oldcanv = document.getElementById('cannvas');
    // document.removeChild(oldcanv)

    // var canv = document.createElement('canvas');
    // canv.id = 'myChart';
    // canv.width="400";
    // canv.height="400";
    // canv.role="img";
    // document.body.appendChild(canv);

    document.getElementById("myChart").remove();
    document.getElementById("cannvas").innerHTML=`<canvas id="myChart" width="75vw" height="25vw" aria-level="chart" role="img"></canvas>`



    var ctx = document.getElementById('myChart').getContext('2d');
    //ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: x_lable,
            datasets: [{
                label: 'Laps Time Period',
                data: laps_value,  //  customable data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },

    });
}


