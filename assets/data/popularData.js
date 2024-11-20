const popularData = [
    {
        id: '1',
        image: require('../images/pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 gr',
        rating: '5.0',
        price: '39.99',
        sizeName: 'Medium',
        sizeNumber: 14,
        crust: 'This Crust',
        deliveryTime: 45,
        ingredients: [
            {
                id: '1',
                name: 'Tomato',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name: 'Ham',
                image: require('../images/tomato.png')
            },
            {
                id: '3',
                name: 'Cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '4',
                name: 'Garlic',
                image: require('../images/garlic.png')
            }
        ]
    },
    {
        id: '2',
        image: require('../images/pizza2.png'),
        title: 'Vegetarian Pizza',
        weight: '450 gr',
        rating: '5.99',
        price: '40.99',
        sizeName: 'Small',
        sizeNumber: 10,
        crust: 'Thick Crust',
        deliveryTime: 45,
        ingredients: [
            {
                id: '1',
                name: 'Cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '2',
                name: 'Garlic',
                image: require('../images/garlic.png')
            }
        ]
    },
    {
        id: '3',
        image: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '650 gr',
        rating: '5.0',
        price: '45.99',
        sizeName: 'Large',
        sizeNumber: 18,
        crust: 'Thin Crust',
        deliveryTime: 35,
        ingredients: [
            {
                id: '1',
                name: 'Tomato',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name: 'Cheese',
                image: require('../images/cheese.png')
            }
        ]
    },
];

export default popularData;