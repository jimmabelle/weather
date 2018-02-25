const weather = () => {

    const SelectCountry = document.getElementById("countries").value

    //fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=ada31c4dd9505b9deb20760e90c6552a")
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + SelectCountry + "&units=metric&APPID=ada31c4dd9505b9deb20760e90c6552a")
    .then((response) => {
      return response.json()
      })
    .then((json) => {
        console.log(json)

        var city = json.name
        var coordLon = json.coord.lon
        var coordLat =  json.coord.lat
        var temp = json.main.temp
        var weatherMain = json.weather[0].main
        var country = json.sys.country
        var sunrise = json.sys.sunrise
        var sunset = json.sys.sunset


        //Creating a new js date object based on the timestamp
        //multiplied by 1000 so that argument is in milliseconds, not seconds

        const formattedDate = (unixTime) => {
          const date = new Date(unixTime * 1000)
          const hours = date.getHours()
          const minutes = "0" + date.getMinutes()
          const seconds = "0" + date.getSeconds()
          const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

            return formattedTime
        }

        const sunr = formattedDate(sunrise)
        const suns = formattedDate(sunset)

        document.getElementById("name").innerHTML = "<em>City:</em> " + city
        document.getElementById("coord").innerHTML = "<b>Coordinates</b><br> <em>Longtitude:</em> " + coordLon + " <br><em>Latitude:</em> " + coordLat
        document.getElementById("main").innerHTML = "The <em>main temperature</em> in " + name + " is: " + temp
        document.getElementById("description").innerHTML = "<em>The main weather:</em> " + weatherMain
        document.getElementById("sys").innerHTML = "<em>Country:</em> " + country + " <br><em>Sunrise:</em> " + sunr + " <br><em>Sunset:</em> " + suns

        //bg
        const bg = document.getElementById("bg")
        if (temp > 25) {
          bg.style.backgroundColor = "red"
        }else if (temp < 5) {
          bg.style.backgroundColor = "blue"
        } else {
          bg.style.backgroundColor = "green"
        }

      })
  }

weather()
