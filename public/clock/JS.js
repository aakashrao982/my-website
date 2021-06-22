<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <title>Aakash' cloCk</title>
  <link rel="stylesheet" href="CSS.css">
  <link rel="shortcut icon" type="image/jpg"
    href="https://i.pinimg.com/originals/92/13/df/9213df2e7622e767f9fd09fcd656c5cb.jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  


</head>

<body>

  <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" id="clk">CloCk</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="chg_fmt">Change ForMat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="alrm_btn">Stop_Watch</a>
    </li>
  </ul>


  <div class="container container-sm" id="showing_content">
    <div class="container mx-4" , id="clock">
      <span class="" id="hours">4</span>
      <span style="font-size: 20vw;">:</span>
      <span class="" id="minutes">5</span>
      <span style="font-size: 20vw;">:</span>
      <span class="" id="seconds">7</span>

    </div>

    <div id="change_fmt" class="container">
      <img src="" alt="">
    </div>

    <pre>
</pre>

    <div id="stop_watch" class="container container-sm">

      <div class="container container-sm" id="st_content" style="padding-left: 3vm; padding-right: 3vm;">
        <div class="card" style="width: 89vw;">
          <ul class="list-group list-group-flush" >
            <div class="card" style="font-size: 2vw; color: #bd3029;">
              Graph 
              <div class="card-body" id="cannvas">
                <canvas id="myChart" width="70vw" height="330" aria-level="chart" role="img"></canvas>
              </div>
            </div>
            
            <div class="container" id="chartContainer" >
              <hr>
                
            </div>
            <!pre style="font-size: 2vw;">
            </pre>
            
            <li class="list-group-item" id="counter" style="height: 150px;">counter</li>
            <button type="button" id="startbtn" class="btn btn-primary btn-lg">start/stop</button>
              <button type="button" id="resetbtn" class="btn btn-secondary btn-lg">Reset</button>
              <button type="button" id="lapbtn" class="btn btn-secondary btn-lg">Lap</button>
            <li class="list-group-item" id="laps" style="list-style : none;">
              <div class="container overflow-auto" id="laps_show" style="height: 400px;">
                <h2>Laps</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" style="font-size: 2vw;">Sequence</th>
                      <th scope="col" style="font-size: 2vw;">Time Interval</th>

                    </tr>
                  </thead>
                  <tbody id="lap_body">
                    <tr>

                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

          </ul>
        </div>
      </div>




    </div>

  </div>









  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
    integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
    crossorigin="anonymous"></script>

  <script src="chart.js"></script>
  <! graph>
    <script>
      
    </script>
    <script src="JS.js"></script>
</body>

</html>
