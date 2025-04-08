const gifts = ['Ropa', 'AirPods', 'Smartwatch', 'Reloj', 'Bufanda', 'Cartera', 'Libro', 'Kindle', 'Perfume', 'Patinete'];

function findGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return "El regalo no se encuentra en la lista";
    }

    if (gifts[index] === giftName) {
        return `Regalo en la posicion ${index}`
    }

    index++;
    return findGift(gifts, giftName, index)
}

let giftToFind = "Perfume";
console.log(findGift(gifts, giftToFind));

let giftToFind2 = "Aretes";
console.log(findGift(gifts, giftToFind2));