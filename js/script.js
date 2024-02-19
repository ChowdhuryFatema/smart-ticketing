
// initial value
let restSeatCount = 40;
let bookingSeatCount = 0;

// get seat 
const seats = document.getElementsByClassName('seat');

for (let seat of seats) {
    // handle click 
    seat.addEventListener('click', function (e) {
        // count booking seat 
        bookingSeatCount++

        //  seat validation 
        if (bookingSeatCount > 4) {
            return alert("Can't select more than 4 tickets");
        }
        setInnerTextById('booking-seat', bookingSeatCount)

        // count rest seat
        restSeatCount--
        setInnerTextById('rest-seat', restSeatCount)


        // set seat gackground and color
        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = '#FFFFFF';
        e.target.setAttribute("disabled", "");

        // get seat name 
        const seatName = e.target.innerText;

        // create tr
        const tr = document.createElement('tr');
        tr.classList.add('border-0', '*:py-2');

        // create td 
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
        calculatePrice('total-price')
        // set grand total price 
        calculatePrice('grand-total')

        // anable coupon btn 
        if (bookingSeatCount === 4) {
            couponBtn.removeAttribute('disabled')
        }

        // disable form 
        const inputFields = document.getElementsByClassName('input');
        for (let inputField of inputFields) {
            inputField.removeAttribute('disabled')
            const nextBtn = document.getElementById('next-btn')

        }

        // anable next btn 
        const phoneNum = document.getElementById('number-field');
        phoneNum.addEventListener('keyup', function () {
            const phoneNumValue = phoneNum.value;
            if (phoneNumValue.length >= 11) {
                const nextBtn = document.getElementById('next-btn');
                nextBtn.removeAttribute('disabled');
            }

        })

    })

}


// coupon code get, set, apply and validation

const couponBtn = document.getElementById('coupon-btn');
// handle click on coupon btn
couponBtn.addEventListener('click', function () {

    // get total price 
    const totalPrice = parseFloat(document.getElementById("total-price").innerText);
    //  apply btn
    const couponField = document.getElementById('coupon-field');
    const couponFieldValue = couponField.value;

    if (couponFieldValue === 'NEW15') {
        // 15% discount 
        const discount = totalPrice * 15 / 100;
        setInnerTextById("discount-price", discount)
        setInnerTextById('grand-total', totalPrice - discount)
    }
    else if (couponFieldValue === 'Couple 20') {
        // 20% discount
        const discount = totalPrice * 20 / 100;
        setInnerTextById("discount-price", discount)
        setInnerTextById('grand-total', totalPrice - discount)
    }

    // Coupon code validation 
    if (couponFieldValue === 'NEW15' || couponFieldValue === 'Couple 20') {
        const couponContainer = document.getElementById('coupon-container');
        const discountContainer = document.getElementById('discount-container');
        couponContainer.classList.add('hidden');
        discountContainer.classList.remove('hidden');
    }
    else if (couponFieldValue === '') {
        alert('Please provide a valid coupon code!!!')
    }
    else {
        alert('Invalid Coupon');
        couponField.value = '';
    }

})

// form validation 
document.getElementById('next-btn').addEventListener('click', function () {

    // get input filed 
    const nameInputField = document.getElementById('name-field').value;
    const numberInputField = document.getElementById('number-field').value;
    const emailInputField = document.getElementById('email-field').value;

    // clear input value 
    clearInputValue('name-field')
    clearInputValue('number-field')
    clearInputValue('email-field')
        
    // input validation 
    if (nameInputField === "" || numberInputField === "" || emailInputField === "") {
        alert('Please Fill Up The Form!');
        document.getElementById('my_modal_5').close();
    }
    else {
        document.getElementById('my_modal_5').showModal();
    }

})















