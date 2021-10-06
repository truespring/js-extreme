function bookHotel(city) {
    var availabeHotel = 'None';
    for (var i = 0; i < hotels.length; i++) {
        var hotel = hotels[i];
        if (hotel.city === city && hotel.hasRoom) {
            availableHotel = hotel.name;
            break;
        }
    }
    // 여기서 i와 hotel은 여전히 접근 가능.
    console.log('Checked ' + (i + 1) + ' record(s)'); // Checked 2 record(s)
    console.log('Last checked ' + hotel.name); // Last checked Hotel B
    {
        function placeOrder() {
            var totalAmount = 200;
            console.log('Order placed to ' + availableHotel);
        }
    }
    placeOrder();
    // 접근 불가
    // console.log(totalAmount);
    return availabeHotel;
}
var hotels = [
    { 
        name: 'Hotel A', 
        hasRoom: false, 
        city: 'Sanya' 
    }, 
    {
        name: 'Hotel B', 
        hasRoom: true, 
        city: 'Sanya' 
    }
];
console.log(bookHotel('Sanya')); // Hotel B
// 접근 불가
// console.log(availableHotel);