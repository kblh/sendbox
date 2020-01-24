Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div>
      <div class="product-image">
        <img :src="image" :alt="product" :class="{ 'not-in-stock': !inStock }">
      </div>

      <div class="product-info">
        <h1>
          {{ title }}
          <sup v-show="specialOffer" class="color--secondary fz90p">special offer</sup>
        </h1>

        <p>Shipping: {{ shipping }}</p>

        <p v-if="inStock > 10" class="color--success">In Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0" class="color--secondary">Almost sold out: <strong>{{ inStock }} left</strong>!</p>
        <p v-else class="color--danger">Out of Stock</p>

        <ul>
          <li v-for="string in details">{{ string }}</li>
        </ul>

        <div v-for="(variant, index) in variants" 
          :key="variant.variantId"
          class="variant-color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @click="updateProduct(index)"
        >
          <!-- <div>{{ variant.variantColor }}</div> -->
        </div>


        <div>
          <button @click="addToCart" :disabled="!inStock">Add to cart</button>
        </div>

      </div>

      <h3>Reviews</h3>
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul>
        <li v-for="review in reviews">
          <strong>{{ review.name }}:</strong> {{ review.review }}
        </li>
      </ul>
      <div class="mb3r">
        <product-review @review-submitted="addReview"></product-review>
      </div>

    </div>
  `,
  data() {
    return {
      product: 'Rubber duck',
      brand: 'MicroDucks',
      selectedVariant: 0,
      specialOffer: true,
      // inventory: 8,
      // image: 'spiderman.webp',
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
      ],
      reviews: [] 
    }
  }, 
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      this.variants[this.selectedVariant].variantQuantity -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
      // console.log(index)
    },
    addReview(productReview) {
      this.reviews.push(productReview)
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
    },
    shipping() {
      return ( this.premium ? "Free" : "2.99" )
    }
  }
})


Vue.component('product-review', {
  template: `
    <form @submit.prevent="onSubmit">
      <div class="mb1r">
        <input placeholder="Name" v-model="name">
      </div>
      <div class="mb1r">
        <textarea placeholder="Review" v-model="review"></textarea>
      </div>
      <div class="mb1r">
        <button type="submit">Submit</button>
      </div>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review
      }
      this.$emit('review-submitted', productReview)
      this.name = null
      this.review = null
    }
  }
})


var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    premiumSubscription: true
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})
