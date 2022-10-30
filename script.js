window.onload=function() {
    $.ajax({
        url: "http://localhost:8085/api/hotels/getallhotels",
        type:'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        dataType: "json",
    }).done(function (response) {
        document.getElementById("card-title-1").innerHTML= response[0].name;
        document.getElementById("card-title-2").innerHTML = response[1].name;
        document.getElementById("card-title-3").innerHTML = response[2].name;
        document.getElementById("location-1").innerHTML= response[0].location;
        document.getElementById("location-2").innerHTML = response[1].location;
        document.getElementById("location-3").innerHTML = response[2].location;
    })
};

// function search() {
//     $.ajax({
//         url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=10.017594%2C76.342077&radius=1500&type=restaurant&key=AIzaSyAYz8O3E3wZD7cmoTtNIWpZS3Bx-1ul0AQ",
//         type:'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         dataType: "json",
//     }).done(function (response) {
//         console.log(response)
//     })

// }

function search() {
        $.ajax({
            url: "http://localhost:8085/api/hotels/getHotels/veg",
            type:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: "json",
        }).done(function (response) {
            console.log(response)
            document.getElementById("card-title-1").innerHTML= response[0].name;
        document.getElementById("card-title-2").innerHTML = response[1].name;
        document.getElementById("card-title-3").innerHTML = response[2].name;
        document.getElementById("location-1").innerHTML= response[0].location;
        document.getElementById("location-2").innerHTML = response[1].location;
        document.getElementById("location-3").innerHTML = response[2].location;
        document.getElementById("card-image-1").src= response[0].image;
        document.getElementById("card-image-2").src = response[1].image;
        document.getElementById("card-image-3").src = response[2].image;
        
        })
    
    }
    function search1() {
        $.ajax({
            url: "http://localhost:8085/api/hotels/getHotels/non-veg",
            type:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: "json",
        }).done(function (response) {
            document.getElementById("card-title-1").innerHTML= response[0].name;
        document.getElementById("card-title-2").innerHTML = response[1].name;
        document.getElementById("card-title-3").innerHTML = response[2].name;
        document.getElementById("location-1").innerHTML= response[0].location;
        document.getElementById("location-2").innerHTML = response[1].location;
        document.getElementById("location-3").innerHTML = response[2].location;
        document.getElementById("card-image-1").src= response[0].image;
        document.getElementById("card-image-2").src = response[1].image;
        document.getElementById("card-image-3").src = response[2].image;
        })
    
    }
    function search2() {
        $.ajax({
            url: "http://localhost:8085/api/hotels/getHotel/dining",
            type:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: "json",
        }).done(function (response) {
            document.getElementById("card-title-1").innerHTML= response[0].name;
        document.getElementById("card-title-2").innerHTML = response[1].name;
        document.getElementById("card-title-3").innerHTML = response[2].name;
        document.getElementById("card-image-1").src= response[0].image;
        document.getElementById("card-image-2").src = response[1].image;
        document.getElementById("card-image-3").src = response[2].image;
        document.getElementById("location-1").innerHTML= response[0].location;
        document.getElementById("location-2").innerHTML = response[1].location;
        document.getElementById("location-3").innerHTML = response[2].location;
        })
    
    }
    function search3() {
        $.ajax({
            url: "http://localhost:8085/api/hotels/getHotel/takeAway",
            type:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: "json",
        }).done(function (response) {
            document.getElementById("card-title-1").innerHTML= response[0].name;
        document.getElementById("card-title-2").innerHTML = response[1].name;
        document.getElementById("card-title-3").innerHTML = response[2].name;
        document.getElementById("card-image-1").src= response[0].image;
        document.getElementById("card-image-2").src = response[1].image;
        document.getElementById("card-image-3").src = response[2].image;
        document.getElementById("location-1").innerHTML= response[0].location;
        document.getElementById("location-2").innerHTML = response[1].location;
        document.getElementById("location-3").innerHTML = response[2].location;
        })
    
    }