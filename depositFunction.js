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

        const balanceElement = document.getElementById('balance-total');
        const previousBalanceString =balanceElement.innerText;
        const previousBalance = parseFloat(previousBalanceString);
       
        const newBalanceTotal = previousBalance + newDepositAmount;
        balanceElement.innerText = newBalanceTotal;

});