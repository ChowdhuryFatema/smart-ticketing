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
  
        
        // get coupon btn 
        const couponBtn = document.getElementById('coupon-btn');
        if( bookingSeat === 4 ){
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

        // creat td 
        const td = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td.innerText = seatName;
        td2.innerText = 'Economoy';
        td3.innerText = '550';

        // appending child 
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

        // handle click even 
        couponBtn.addEventListener('click', function(){
            // get coupon field value
            const couponField = document.getElementById('coupon-field');
            const couponFieldValue = couponField.value;
            if( couponFieldValue === 'NEW15' ){
                // 15% discount 
                const discount = totalPrice * 15 /100;
                setInnerTextById("discount-price", discount)
                setInnerTextById('grand-total', totalPrice - discount)
            }
            else if(couponFieldValue === 'Couple 20'){
                 // 20% discount
                const discount = totalPrice * 20 /100;
                setInnerTextById("discount-price", discount)
                setInnerTextById('grand-total', totalPrice - discount)
            }
            if( couponFieldValue === 'NEW15' || couponFieldValue === 'Couple 20' ){
                const couponContainer = document.getElementById('coupon-container');
                const discountContainer = document.getElementById('discount-container');
                couponContainer.classList.add('hidden');
                discountContainer.classList.remove('hidden');
            }
            
        })

    })
}





