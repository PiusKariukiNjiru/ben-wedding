import React, { useState } from 'react';
import axios from 'axios';

const MpesaPaymentForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/mpesa/stkpush', { phoneNumber, amount });
            alert('Payment initiated, please check your phone');
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Error initiating payment');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Phone Number:
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
            <label>
                Amount:
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </label>
            <button type="submit">Pay with M-Pesa</button>
        </form>
    );
};

export default MpesaPaymentForm;
