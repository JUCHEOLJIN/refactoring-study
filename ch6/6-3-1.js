export function price(order) {
  const 기본가격 = order.quantity * order.itemPrice;
  const 할인금액 = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const 배송비 = Math.min(basePrice * 0.1, 100);
  return 기본가격 - 할인금액 + 배송비;
}
