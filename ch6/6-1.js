const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

const calculateOutstanding = (orders) => {
  return orders.reduce((acc, cur) => acc + cur.amount, 0);
}

const recordDueDate = (invoice) => {
  const today = new Date();
  const dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
  );

  return {
    ...invoice, dueDate,
  }
}

const printDetails = (invoice, outstanding) => {
  console.log(invoice)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}


export function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice.orders);
  const newInvoice = recordDueDate(invoice);
  // console.log(newInvoice);

  printDetails(newInvoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);


