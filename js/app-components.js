
const ShopComponent = Vue.component('Shop', {
   data() {
       return {
           //=================This generates a maximum call size stack exceeded=====================================
            shop: new ShopCollection()
                .addProduct(new Mobile('Iphone 11', 699.99,'Apple')),

           //====================This is the array that works with the shop==========================================

           // shop: [
           //     new Mobile('Iphone 11', 699.99,'Apple'),
           //     new SmartDevice('IPad', 329.99, 'Apple', 10.9),
           //     new Laptop('Macbook', 999.99, 'Apple', 13.3, '2TB'),
           //     new Mobile('IPhone 12', 999.99, 'Apple'),
           //     new Mobile('Iphone 11', 699.99,'Apple'),
           //     new Mobile('Iphone 11', 699.99,'Apple'),
           //     new Mobile('Iphone 11', 699.99,'Apple'),
           //     new Mobile('Iphone 11', 699.99,'Apple'),
           //     new Mobile('Iphone 11', 699.99,'Apple'),
           //
           // //
           // ],

           //===============Tested this with cart inside of shop but trying to get it to work with them being seperate components
           // cart: new CartCollection()
           //     .addToCart(new Mobile('IPhone 11', 699.99, 'Apple'))
           //     .addToCart(new SmartDevice('IPad', 329.99, 'Apple', 10.9))
           //     .addToCart(new Laptop('Macbook', 999.99, 'Apple', 13.3, '2TB'))


       }
   },
    props:{

    },

    methods: {

    },

    computed: {
       // used this with vuex=============
        // products() {
        //     return this.$store.getters.products;
        // },
    },

    template: `

<!--<div class="row" v-for="rowIdx in Math.ceil(shop.length / 3)">-->
<!--<div class="one-third column" v-for="item in shop.slice((rowIdx - 1), rowIdx)">-->
<!--  <shop-item :item="item"></shop-item>-->
<!--</div>-->
<!--</div>-->
<div>
<!--Creates rows of 3-->
<v-row v-for="rowIdx in Math.ceil(shop.length / 3)">
  <v-col v-for="item in shop.slice(3 * (rowIdx - 1), 3 * rowIdx)">
    <shop-item :item="item"></shop-item>
<!--    <shop-item :item="item" @update-cart="updateCart"></shop-item>-->
  </v-col>
</v-row>
</div>
    `,
});

const CartComponent = Vue.component('Cart', {

    data() {
        return {
            cart: [],
            total: 0
        }
    },
    props:{

    },

    methods: {
        // tried to use this to update the current cart array just to try and get it working before trying the collection
        updateCart(e){
            console.log('testing')
            this.cart.push(e)
            this.total++
        }
    },

    computed: {

    },

    template: `

      <div>
      <v-row class="align-self-start">
        <v-col>
          <shop-item v-for="item in cart" :item="item"></shop-item>
        </v-col>
        <v-col>
          <div>
            <h3>Products</h3>
            <v-row>
              <v-col>cost</v-col>
              <v-col>Calculate cart method goes here</v-col>
            </v-row>
            <v-row>
              <v-col>tax estimate</v-col>
              <v-col>Calculate tax method goes here</v-col>
            </v-row>
            <v-divider></v-divider>
            more text goes here
          </div>
        </v-col>
      </v-row>
      </div>
      

    `,
});



const ShopItemComponent = Vue.component('ShopItem', {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    methods: {

    },

    computed: {
      typeOfItem(){
          return this.item.constructor.name;
      },
      // products() {
      //   return this.$store.getters.products;
      // },
    },

    template: `
      <div>
      <component :is="typeOfItem" :item="item" class="card-body"></component><br>
      </div>
      
      
      
    `
});

const PhoneComponent = Vue.component('Mobile', {
   extends: ShopItemComponent,

    methods: {
       // supposed to emit update cart event which pushes item into cart array but I think it isn't working because the cart component is not related to shop item
       addToCart(item){
            this.$emit('update-cart', item)
            console.log(JSON.stringify(item));
        },
    },

   template: `



<div>


    <v-card
    class="mx-auto"
    max-width="100%"
    >
        <v-card-content>
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.price}}</v-card-subtitle>
            <v-card-actions>
            <v-btn
            color="grey darken-4"
            text
            @click="addToCart(item)"
            >Add to Cart</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            icon
            >
            <v-icon>{{item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card-content>
        <v-expand-transition>
        <div v-show="item.show">
        <v-divider></v-divider>
        <v-card-text>
        some text goes here
        </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</div>

   `,
});

const TabletComponent = Vue.component('SmartDevice', {
   extends: ShopItemComponent,

    methods: {
        // addToCart(id){
        //     this.$store.dispatch("addItem", id)
        // }
    },

   template: `




<div>
    <v-card
    class="mx-auto"
    max-width="100%"
    >
        <v-card-content>
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.price}}</v-card-subtitle>
            <v-card-actions>
            <v-btn
            color="grey darken-4"
            text
            
            >Add to Cart</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            icon
            >
            <v-icon>{{item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card-content>
        <v-expand-transition>
        <div v-show="item.show">
        <v-divider></v-divider>
        <v-card-text>
        some text goes here
        </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</div>

   `,
});

const ComputerComponent = Vue.component('Laptop', {
    extends: ShopItemComponent,

    methods: {
        // addToCart(id){
        //     this.$store.dispatch("addItem", id)
        // }
    },

    template: `



<div>
    <v-card
    class="mx-auto"
    max-width="100%"
    >
        <v-card-content>
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.price}}</v-card-subtitle>
            <v-card-actions>
            <v-btn
            color="grey darken-4"
            text
            
            >Add to Cart</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            icon
            >
            <v-icon>{{item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card-content>
        <v-expand-transition>
        <div v-show="item.show">
        <v-divider></v-divider>
        <v-card-text>
        some text goes here
        </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</div>

    `,
});

