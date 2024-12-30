export const priceFormat = (price) => {
    const RupiahFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)
    return RupiahFormat;
}