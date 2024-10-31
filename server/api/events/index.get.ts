export default defineEventHandler(async (event) => {
    const products = [
        {
            id:1,
            title: 'producto1',
            price: 100,
            description: 'Descripcion del producto 1'
        },
        {
            id: 2,
            title: 'producto1',
            price: 200,
            description: 'Descripcion del producto 2'
        },{
            id: 3,
            title: 'producto1',
            price: 300,
            description: 'Descripcion del producto 3'
        }
        
    ]

    return products

})