// একটি সিনেমা Booking App-এ Default ভাবে প্রতি Booking-এ 1টি Seat এবং Ticket প্রতি ৩00 টাকা ধরা হয়, যদি ইউজার আলাদা কিছু না দেয়। তোমার কাজ হলো ES6 Default Parameter দিয়ে এই System টি তৈরি করা। 


// const bookticket = (movie, seats=1, pricePerseat = 300) => seats * pricePerseat;
// console.log(bookticket("Dune", 2, 450)); 

function bookticket(movie, seats=1, pricePerseat=300){
    return `${movie}: ${seats} seat(s), Total ${seats*pricePerseat}tk`
}
console.log(bookticket("Dune",3));
console.log(bookticket("Dune",2,450));
console.log(bookticket("Dune"));
