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
    })
};