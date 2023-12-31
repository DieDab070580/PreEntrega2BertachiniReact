const products = [
    {
        id: '1',
        name: 'Látex Dessutol Interior Exterior x 5K',
        price: 3500,
        category: 'Látex',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        descriptione: 'Descripcion del Ifon 12',
    },
    {id: '2',
    name: 'Iphone 13',
    price: 1200,
    category: 'celular',
    img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
    stock: 25,
    descriptione: 'Descripcion del Ifon 13',
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}