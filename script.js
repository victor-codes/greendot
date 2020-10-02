function openNav() {
    document.getElementById("hidden-nav").style.visibility = 'visible';
    document.getElementById("hidden-nav").style.width = '100%';
    document.getElementById("hidden-nav").style.transition = '0.3s';
    // document.getElementById("hidden-nav").style.animation = 'slide-in-right 1000ms ease-in 0ms both';
}
function closeNav() {
    document.getElementById('hidden-nav').style.visibility = 'hidden';
    document.getElementById('hidden-nav').style.width = '0%';
}

let fruit = ['banana', 'apples', 'mango', 'orange', 'tomato', 'pineapple', 'pawpaw']
//filter array items based on search criteria (keyword)

// function orbitalPeriod(arr) {
//     var GM = 398600.4418;
//     let tPeriod = 0
//     let upper = 0

//     var earthRadius = 6367.4447;
//     for (let i = 0; i < arr.length; i++) {
//         upper = 4 * Math.pow((earthRadius + arr[i].avgAlt), 3) * (Math.pow(Math.PI, 2))
//         tPeriod = Math.round(Math.sqrt((upper) / (GM)))
//         delete arr[i].avgAlt
//         arr[i].orbitalPeriod = tPeriod
//     }
//     arr = arr.map((x) => ({ name: x['name'], orbitalPeriod: x['avgAlt'] }))
//     return arr;
// }

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])



// function orbitalPeriod(arr) {
//     var GM = 398600.4418;
//     let tPeriod = 0
//     let upper = 0

//     var earthRadius = 6367.4447;
//     for (let i = 0; i < arr.length; i++) {
//         upper = 4 * Math.pow((earthRadius + arr[i].avgAlt), 3) * (Math.pow(Math.PI, 2))
//         tPeriod = Math.round(Math.sqrt((upper) / (GM)))
//         delete arr[i].avgAlt
//         arr[i].orbitalPeriod = tPeriod
//     }

//     return arr;
// }

// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
// orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])