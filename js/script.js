const seats = document.getElementsByClassName('seat');

for( let seat of seats ){
    
    seat.addEventListener('click', function(e){
        
         
         // count booking seat 
         let bookingSeat = getInnerTextNumber('booking-seat');
         bookingSeat++ 

        //  seat validation 
         if( bookingSeat > 4 ){
            return alert("Can't Buy More Than Four"); 
        }

         setInnerTextById('booking-seat', bookingSeat)

        
        
         if( bookingSeat === 4 ){
            let couponBtn = document.getElementById('coupon-btn');
            couponBtn.removeAttribute('disabled', ''); 
        }


        
        // set seat gackground and color
        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = '#FFFFFF';
        e.target.setAttribute("disabled", "");

         // get rest seat 
         let restSeat = getInnerTextNumber('rest-seat');
         restSeat--
        //  set rest seat 
         setInnerTextById('rest-seat', restSeat)



        // get seat name 
        const seatName = e.target.innerText;

        const tr = document.createElement('tr');
        tr.classList.add('border-0', '*:py-2');

        const td = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td.innerText = seatName;
        td2.innerText = 'Economoy';
        td3.innerText = '550';

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);

        const seatDetails = document.getElementById('seat-details-container');
        seatDetails.appendChild(tr)

        // set total price 
        const totalInitialPrice = getInnerTextNumber('total-price')
        const totalPrice = totalInitialPrice + 550;
        setInnerTextById('total-price', totalPrice)

        // set grand total 
        setInnerTextById('grand-total', totalPrice)
        
        

    })
}