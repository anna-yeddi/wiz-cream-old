let app = new Vue({
    el: '#app',
    data: {
        product: 'Ice Cream Cone',
        description: 'Almond milk organic gelato served in a fresh crunchy waffle cone.',
        image: './assets/ian-dooley-281897-unsplash.jpg',
        inStock: true,
        inventory: 4,
        details: ["Organic gelato","Almond milk","Diary-free","Farm to table"],
        products: [
            {
                productId: 1202,
                productName: 'Strawberry Ice Cream Cone',
                productImage: './assets/ian-dooley-281897-unsplash.jpg',
                productIcon: './assets/icons/strawberry-icon.png',
                productInfo: 'Organic gelato made with local grown berries and almond milk served in a fresh crunchy waffle cone.',
            },
            {
                productId: 1204,
                productName: 'Pineapple Ice Cream Cone',
                productImage: './assets/rachael-gorjestani-154906-unsplash.jpg',
                productIcon: './assets/icons/pineapple-icon.png',
                productInfo: 'Organic gelato made with ethically-sourced pineapples and almond milk served in a fresh crunchy waffle cone.',
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        },
        updateProduct: function (productImage) {
            this.image = productImage;
        }
    }
})

// Change the data:
// app.product = 'Coat';