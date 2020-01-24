var app = new Vue({
  el: '#app',
  data: {
    product: 'Rubber duck',
    brand: 'MicroDucks',
    selectedVariant: 0,
    specialOffer: true,
    // inventory: 8,
    // image: 'spiderman.webp',
    cart: 0,
    details: [
      "80% cotton",
      "20% polyester",
      "red"
    ],
    variants: [
      {
        variantId: 2233,
        variantQuantity: 4,
        variantImage: 'darth-vader.webp',
        variantColor: "black"
      },
      {
        variantId: 2234,
        variantQuantity: 12,
        variantImage: 'batman.webp',
        variantColor: "grey"
      },
      {
        variantId: 2235,
        variantQuantity: 0,
        variantImage: 'spiderman.webp',
        variantColor: "red"
      }
    ]
  },
  methods: {
    addToCart() {
      this.cart += 1
      // this.inventory -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
      // console.log(index)
    }
  },
  computed: {
    // computed properties
    title() {
      return this.brand + ' ~ ' + this.product
    },
    inStock() {
      // ternary operator 
      // return ( this.inventory > 0 ? true : false )
      return this.variants[this.selectedVariant].variantQuantity
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    }
  }
})
