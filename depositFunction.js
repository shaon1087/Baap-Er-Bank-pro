document.getElementById('btn-deposit').addEventListener('click', function()
    {
        const depositField = document.getElementById('deposit-input');
        const depositAmountString = depositField.value;
        const newDepositAmount = parseFloat(depositAmountString);

        depositField.value = '';


        const DepositAmountElement = document.getElementById('deposit-total');
        const totalDepositAmountString =DepositAmountElement.innerText;
        const totalDepositAmount = parseFloat(totalDepositAmountString);

        const finalDepositAmount = newDepositAmount + totalDepositAmount;
        DepositAmountElement.innerText = finalDepositAmount;


});