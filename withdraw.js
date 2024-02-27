document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInputElement.value;
    const withdrawInput = parseFloat(withdrawInputString);

    withdrawInputElement.value = '';

   const withdrawElement = document.getElementById('withdraw-total');
   const withdrawElementString = withdrawElement.innerText;
   const previousWithdrawAmount = parseFloat(withdrawElementString);

   const withdrawTotalAmount = previousWithdrawAmount + withdrawInput; 
   withdrawElement.innerText = withdrawTotalAmount;


   const balanceElement = document.getElementById('balance-total');
   const balanceElementString = balanceElement.innerText;
   const newBalanceTotal = parseFloat(balanceElementString);

   const newBalanceTotalAmount = newBalanceTotal - withdrawInput;

    balanceElement.innerText = newBalanceTotalAmount;
    
});