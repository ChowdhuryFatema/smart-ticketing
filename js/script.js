const seats = document.getElementsByClassName('seat');

for( let seat of seats ){
    seat.addEventListener('click', function(e){

        // set seat gackground and color
        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = '#FFFFFF';

         // get rest seat 
         let restSeat = getInnerTextNumber('rest-seat');
         restSeat--
        //  set rest seat 
         setInnerTextById('rest-seat', restSeat)
         
         // count booking seat 
         let booking = getInnerTextNumber('booking');
         booking++ 
         setInnerTextById('booking', booking)

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

    })
}