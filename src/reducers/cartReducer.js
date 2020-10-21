import { ADD_PRINT_CART, INCREASE_CART_NUMBER, REMOVE_FROM_CART } from "../actions/types"
// import { v4 as uuid } from 'uuid';
// import Data from './data.json';

const initialState = {
    printsInCart: 0, 
    cartPrice: 0,
    printsItems: {
        1:{
            id: 1,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric1.jpg",
            name: "Print 1",
            price: 100,
            added: false,
            number: 0
        },
        2:{
            id: 2,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric2.jpg",
            name: "Print 2",
            price: 120,
            added: false,
            number: 0
        },
        3:{
            id: 3,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric3.jpg",
            name: "Print 3",
            price: 130,
            added: false,
            number: 0
        },
        4:{
            id: 4,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric4.jpg",
            name: "Print 4",
            price: 130,
            added: false,
            number: 0
        },
        5:{
            id: 5,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric5.jpg",
            name: "Print 5",
            price: 150,
            added: false,
            number: 0
        },
        6:{
            id: 6,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric6.jpg",
            name: "Print 6",
            price: 110,
            added: false,
            number: 0
        },
        7:{
            id: 7,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric7.jpg",
            name: "Print 7",
            price: 130,
            added: false,
            number: 0
        },
        8:{
            id: 8,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric8.jpg",
            name: "Print 8",
            price: 170,
            added: false,
            number: 0
        },
        9:{
            id: 9,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric9.jpg",
            name: "Print 5",
            price: 160,
            added: false,
            number: 0
        },
        10:{
            id: 5,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric10.jpg",
            name: "Print 10",
            price: 100,
            added: false,
            number: 0
        },
        11:{
            id: 11,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric11.jpg",
            name: "Print 11",
            price: 135,
            added: false,
            number: 0
        },
        12:{
            id: 12,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric12.jpg",
            name: "Print 12",
            price: 125,
            added: false,
            number: 0
        },
        13:{
            id: 13,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric1.jpg",
            name: "Print 13",
            price: 100,
            added: false,
            number: 0
        },
        14:{
            id: 14,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric2.jpg",
            name: "Print 14",
            price: 120,
            added: false,
            number: 0
        },
        15:{
            id: 15,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric3.jpg",
            name: "Print 15",
            price: 130,
            added: false,
            number: 0
        },
        16:{
            id: 5,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric4.jpg",
            name: "Print 16",
            price: 130,
            added: false,
            number: 0
        },
        17:{
            id: 17,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric5.jpg",
            name: "Print 17",
            price: 150,
            added: false,
            number: 0
        },
        18:{
            id: 5,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric6.jpg",
            name: "Print 18",
            price: 110,
            added: false,
            number: 0
        },
        19:{
            id: 19,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric7.jpg",
            name: "Print 19",
            price: 130,
            added: false,
            number: 0
        },
        20:{
            id: 20,
            image: "http://serwer2096440.home.pl/autoinstalator/wordpress/wp-content/themes/zukitextile/img/Fabric8.jpg",
            name: "Print 20",
            price: 170,
            added: false,
            number: 0
        }
    }
}

export default (state = initialState, action) => {
    let addQuantity = '';
    switch(action.type){
        case ADD_PRINT_CART:
            addQuantity = {...state.printsItems[action.payload]}
            addQuantity.number += 1;
            addQuantity.added = true;
            return {
                ...state,
                printsInCart: state.printsInCart + 1,
                cartPrice: state.cartPrice + state.printsItems[action.payload].price,
                printsItems:{
                    ...state.printsItems,
                    [action.payload]: addQuantity
                }
            }
        case INCREASE_CART_NUMBER:
            return{
                ...state
            }
        case REMOVE_FROM_CART:
            addQuantity = {...state.printsItems[action.payload]};
            let printsToRemove = addQuantity.number;
            addQuantity.added = false;
            addQuantity.number = 0;
            return{
                ...state,
                printsInCart: state.printsInCart - printsToRemove,
                cartPrice: state.cartPrice - (printsToRemove * addQuantity.price),
                printsItems: {
                    ...state.printsItems,
                    [action.payload]: addQuantity
                }
            }
        default:
            return state
    }
}