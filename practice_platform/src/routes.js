
import  compHome from './components/Home.vue'
import  compCustomer from './components/Customer/Customer.vue'
import  compCustomerId from './components/Customer/CustomerId.vue'

import compCustomerStart from './components/Customer/CustomerStart.vue'
import compCustomerDetail from './components/Customer/CustomerDetail.vue'
import compCustomerEdit from './components/Customer/CustomerEdit.vue'

export const routes = [
    {
        path:'/',
        component:compHome
    },
    {
        path:'/customerid/:id',
        component: compCustomerId,
       
    },
    {
        path:'/customer',
        component: compCustomer,
        children:[
            {
                path:'/',
                component:compCustomerStart
            },
            {
                path:':id',
                component:compCustomerDetail
            },
            {
                path:':id/edit',
                component:compCustomerEdit,
                name:'customerEdit'
            }
        ]
       
    },
    {
        path: '*',
        component:compHome
    }
];