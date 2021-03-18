Vue.use(Vuetify);
Vue.use(VueRouter);

// const store = new Vuex.Store({
//    state:{
//        products: [
//            new Mobile(1,'Iphone 11', 699.99,'Apple'),
//            new SmartDevice(2, 'IPad', 329.99, 'Apple', 10.9),
//            new Laptop(3, 'Macbook', 999.99, 'Apple', 13.3, '2TB'),
//            new Mobile(4, 'IPhone 12', 999.99, 'Apple'),
//            new Mobile(5, 'Iphone 11', 699.99,'Apple'),
//            new Mobile(6,'Iphone 11', 699.99,'Apple'),
//            new Mobile(7,'Iphone 11', 699.99,'Apple'),
//            new Mobile(8,'Iphone 11', 699.99,'Apple'),
//            new Mobile(9,'Iphone 11', 699.99,'Apple'),
//
//
//        ],
//
//        StoreCart: [],
//    },
//     getters: {
//       products: (state) => state.products,
//       StoreCart: (state) => state.StoreCart
//     },
//    mutations: {
//        ADD_Item(state, id){
//            state.StoreCart.push(id);
//        },
//        REMOVE_Item(state, index){
//            state.StoreCart.splice(index, 1);
//        }
//    },
//    actions: {
//        addItem(context, id) {
//            context.commit("ADD_Item", id);
//        },
//        removeItem(context, index){
//            context.commit("REMOVE_Item", index);
//        }
//    },
//    modules: {},
// });

// sets the routes and components to show for the router
const routes = [
    { path: '/shop', component: ShopComponent},
    { path: '/cart', component: CartComponent}
]
// initializes router to routes
const router = new VueRouter({
    routes
})
const app = new Vue({
    // el: the DOM element to be replaced with a Vue instance
    el: '#app',
    router,
    // store,

    vuetify: new Vuetify(),
    // data for the navbar so it will stay for each different view
    data: () => ({
        appTitle: 'Shopping',
        s1debar: false,
        menuItems: [
            { title: 'Products', path: '/shop', icon: 'mdi-cart'},
            { title: 'Cart', path: '/cart', icon: 'mdi-cart'}
        ]
    }),
    // methods: usually "events" triggered by v-on:
    methods: {

    },
    // computed: values that are updated and cached if dependencies change
    computed: {

    },
    //mounted:  called after the instance has been mounted,
    mounted: function() {

    },


});