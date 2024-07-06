import {  bun,
  burger,
  milkshake,
  pasta,
  ramen,
  spaguetti,
  springrolls,
  pizza,
  dosa,
  sandwitch} from '../assets/png'

export const linkLogOut = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "menu",
    title: "Menu"
}
]  

export const navLinksAdmin =[
  {
    id: "contactRequest",
    title: "Contact",
  },
  {
      id: "orderDetails",
      title: "Orders",
  },
  {
      id: "reviewList",
      title: "Reviews"
  },
  {
    id: "menuList",
    title: "Menu"
  },
  {
    id: "dashboard",
    title: "DashBoard"
  }
]  

export const navLinks = [
    {
      id: "home",
      title: "Home"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
        id: "order",
        title: "Order",
    },
    {
        id: "review",
        title: "Review"
    },
    {
      id: "menu",
      title: "Menu"
  }
  ];

  export const CarouselImages = [
  {
    id: "burger",
    title: "Burger",
    img: "https://i.pinimg.com/236x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg",
    png: burger
  },
  {
    id: "pizza",
    title: "Pizza",
    img: "https://i.pinimg.com/236x/46/5d/f4/465df43334839b48eaf933f14f9f4e4a.jpg",
    png: pizza
  },
  {
    id: "chinese",
    title: "Chinese",
    img: "https://i.pinimg.com/236x/90/2c/87/902c87a8a3987143d7fd3b3ac12d4e14.jpg",
    png: spaguetti
  },
  {
    id: "sandwitches",
    title: "Sandwitches",
    img: "https://i.pinimg.com/236x/0c/03/81/0c03812bf3566770402d871bfc1b6358.jpg",
    png: sandwitch
  },
  {
    id: "dosa",
    title: "South Indian",
    img: "https://i.pinimg.com/236x/fd/2b/e7/fd2be7bb46b9eca348f92cc08375aed7.jpg",
    png: dosa
  },
  {
    id: "shakes",
    title: "Shakes",
    img: "https://i.pinimg.com/236x/1f/97/f4/1f97f4244fa49dcd7267bf734acf3d33.jpg",
    png: milkshake
  },
  {
    id: "momo",
    title: "momo",
    img: "https://i.pinimg.com/236x/36/37/7f/36377f95fc182227d9424b2f6144e9f1.jpg",
    png: bun

  },
  {
    id: "rolls",
    title: "Rolls",
    img: "https://i.pinimg.com/236x/fb/97/e4/fb97e499ba98ad480645d03b7fc5f732.jpg",
    png: springrolls
  },
  {
    id: "pasta",
    title: "Pasta",
    img: "https://i.pinimg.com/736x/8c/4d/88/8c4d88254265b6cc535aea98e9af35f1.jpg",
    png: pasta
  },
  {
    id: "maggie",
    title: "Maggie",
    img: "https://i.pinimg.com/236x/00/94/1e/00941e23a30dce9332d4ea0c980cbce8.jpg",
    png: ramen
  }
  ]

  export const menu = [
    {
      id: 1,
      name: 'South Indian',
      subcategories: [
        {
          subId: 1,
          name: 'Dosa',
          items: [
            { itemId: 1, name: 'Plain Dosa', price: '35' },
            { itemId: 2, name: 'Masala Dosa', price: '40' },
            { itemId: 3, name: 'Rava Dosa', price: '50' },
            { itemId: 4, name: 'Special Masala Dosa', price: '80' },
            { itemId: 5, name: 'Paneer Masala Dosa', price: '70' },
            { itemId: 6, name: 'Maysore Masala Dosa' , price: '70'},
            { itemId: 7, name: 'Special Mysore Masala Dosa' , price: '100'},
            { itemId: 8, name: 'Cheese Masala Dosa', price: '80' },
            { itemId: 9, name: 'Onion Tomato Masala Dosa', price: '60' },
            { itemId: 10, name: 'Sezawan Masala Dosa' , price: '50'},
            { itemId: 11, name: 'Spring Dosa' , price: '70'},
            { itemId: 12, name: 'Chiniese Masala Dosa' , price: '80'},
            { itemId: 13, name: 'Chilli Paneer Dosa' , price: '100'},
            { itemId: 14, name: 'Rava Masala Dosa' , price: '70'},
            { itemId: 15, name: 'Chocolate Dosa' , price: '80'},
            { itemId: 16, name: 'Green Salad Dosa', price: '70' },
            { itemId: 17, name: 'Butter Masala Dosa', price: '60' },
            { itemId: 18, name: 'Paneer Masala Dosa', price: '70' },
          ]
        },
        {
          subId: 2,
          name: 'Uttapam',
          items: [
            { itemId: 1, name: 'Plain Uttapam', price: '70' },
            { itemId: 2, name: 'Onion Uttapam', price: '70' },
            { itemId: 3, name: 'Tomato Onion Uttapam', price: '80' },
            { itemId: 4, name: 'Butter Uttapam', price: '80' },
            { itemId: 5, name: 'Paneer Uttapam', price: '100' },
            { itemId: 6, name: 'Cheeze Uttapam', price: '100' }
          ]
        },
        {
          subId: 3,
          name: 'Idli',
          items: [
            { itemId: 1, name: 'Idli Sambar', price:[{ type:'pec1', cost:'30'}, { type:'pec2', cost:'50'}] },
            { itemId: 2, name: 'Idli Chatni Coconut', price:[{ type:'pec1', cost:'30'}, { type:'pec2', cost:'50'}] },
            { itemId: 3, name: 'Idli Fry',  price: '60' },
            { itemId: 4, name: 'Wada Sambar',  price:[{ type:'pec1', cost:'30'}, { type:'pec2', cost:'50'}]}
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Chinese',
      subcategories: [
        {
          subId: 1,
          name: 'Noodles',
          items: [
            { itemId: 1, name: 'Veg Noodles',  price:[{ type:'half', cost:'40'}, { type:'full', cost:'90'}] },
            { itemId: 2, name: 'Veg Sezewan Noodles' , price:[{ type:'half', cost:'40'}, { type:'full', cost:'90'}]},
            { itemId: 3, name: 'Paneer Noodles' ,price:[{ type:'half', cost:'60'}, { type:'full', cost:'120'}]},
            { itemId: 4, name: 'Manchurain Noodles',price:[{ type:'half', cost:'50'}, { type:'full', cost:'100'}]},
            { itemId: 5, name: 'Manchurian Paneer Noodles' ,price:[{ type:'half', cost:'60'}, { type:'full', cost:'120'}]},
            { itemId: 7, name: 'Veg Allmix Noodles' , price:[{ type:'half', cost:'60'}, { type:'full', cost:'120'}]}
          ]
        },
        {
          subId: 2,
          name: 'Manchurian',
          items: [
            { itemId: 1, name: 'Dry Manchurian',price:[{ type:'half', cost:'80'}, { type:'full', cost:'150'}] },
            { itemId: 2, name: 'Gravy Manchurian', price:[{ type:'half', cost:'70'}, { type:'full', cost:'130'}]},
            { itemId: 3, name: 'Paneer Manchurian', price:[{ type:'half', cost:'100'}, { type:'full', cost:'180'}]},
            { itemId: 3, name: 'Chilli Paneer Dry',  price:[{ type:'half', cost:'100'}, { type:'full', cost:'180'}] },
            { itemId: 3, name: 'Chilli Paneer Gravy',  price:[{ type:'half', cost:'100'}, { type:'full', cost:'180'}] },
          ]
        },
        {
          subId: 3,
          name: 'Fried Rice',
          items: [
            { itemId: 1, name: 'Veg Fried Rice',  price:[{ type:'half', cost:'40'}, { type:'full', cost:'80'}]},
            { itemId: 2, name: 'Sezewan Rice',  price:[{ type:'half', cost:'45'}, { type:'full', cost:'90'}] },
            { itemId: 3, name: 'Paneer Rice',  price:[{ type:'half', cost:'60'}, { type:'full', cost:'120'}] },
            { itemId: 4, name: 'Manchurain Rice',  price:[{ type:'half', cost:'50'}, { type:'full', cost:'100'}]},
            { itemId: 5, name: 'Manchurian Paneer Rice', price:[{ type:'half', cost:'60'}, { type:'full', cost:'120'}]},
            { itemId: 6, name: 'Veg Biryani',price:[{ type:'half', cost:'60'}, { type:'full', cost:'120'}]},

          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Starters',
      category: 'Veg',
      subcategories: [
        {
          subId: 1,
          name: 'Rolls',
          items: [
            { itemId: 1, name: 'Veg Roll', price: '60', piece: '1'},
            { itemId: 2, name: 'Cheese Roll' ,  price: '100', piece: '1'},
            { itemId: 3, name: 'Paneer Roll',  price: '80', piece: '1' },
            { itemId: 4, name: 'Veg Lemon Roll',  price: '90', piece: '1' },
            { itemId: 5, name: 'Sweetcorn Roll',  price: '100', piece: '1' },
            { itemId: 6, name: 'Veg Special Roll',  price: '100', piece: '1' },
            { itemId: 7, name: 'Veg Mayo Roll',  price: '100', piece: '1' },
            { itemId: 8, name: 'Hot Spicy Roll',  price: '90', piece: '1' },
            { itemId: 9, name: 'Tandoori Paneer Roll',  price: '120', piece: '1' }
          ]
        },
        {
          subId: 2,
          name: 'Momos',
          items: [
            { itemId: 1, name: 'Steamed Momos', price: '50', piece: 6 },
            { itemId: 2, name: 'Fried Momos', price: '60', piece: 6 },
            { itemId: 3, name: 'Tandoori Momos', price: '70', piece: 6 },
            { itemId: 4, name: 'Paneer Momos' , price: '90', piece: 6},
            { itemId: 5, name: 'Paneer Fry Momos', price: '100', piece: 6 },
            { itemId: 6, name: 'Momos Gravy', price: '100', piece: 6 },
            { itemId: 7, name: 'Momos Creamy Gravy', price: '120', piece: 6 }
          ]
        },
        {
          subId: 3,
          name: 'Sandwiches',
          subsubcategories: [
            {
               sub2Id: 1,
               name: 'Grilled Sandwitches',
            
               items: [
                { itemId: 1, name: 'Veg Sandwitch', price: '60', piece: '1'},
                { itemId: 2, name: 'Cheese Sandwitch', price: '80', piece: '1'},
                { itemId: 3, name: 'Corn Sandwitch',  price: '80', piece: '1'},
                { itemId: 4, name: 'Corn Mashroom Sandwitch',  price: '100', piece: '1'},
                { itemId: 5, name: 'Mayo Sandwitch',  price: '80', piece: '1'},
                { itemId: 6, name: 'Chilley Paneer Sandwitch',  price: '120', piece: '1'},
                { itemId: 7, name: 'Jam Sandwitch',  price: '60', piece: '1'},
                { itemId: 8, name: 'Pineapple Sandwitch',  price: '120', piece: '1'},
               ]
            },
            {
              sub2Id: 2,
              name: 'Non-Grilled Sandwitches',
              items: [
                { itemId: 1, name: 'Mumbaiya Sandwitch' , price: '50', piece: '1'},
                { itemId: 2, name: 'Veg Mayo Sandwitch', price: '60', piece: '1'},
                { itemId: 3, name: 'Veg Mayo Cheese Sandwitch' , price: '80', piece: '1'},
                { itemId: 4, name: 'Pineapple Sandwitch' , price: '100', piece: '1'}
              ]
            }
          ]
        },
        {
          subId: 4,
          name: 'Maggie',
          items: [
            { itemId: 1, name: 'Plain Maggie', price: '60'},
            { itemId: 2, name: 'Masala Maggie', price: '80'},
            { itemId: 3, name: 'Cheese Maggie', price: '100'},
            { itemId: 4, name: 'Cheese Corn Maggie', price: '100'},
            { itemId: 5, name: 'Paneer Maggie', price: '100'},
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Shakes',
      items: [
        {  itemId: 1, name: 'Strawberry Shake', price: '100'},
        {  itemId: 2, name: 'Chocolate Shake', price: '120'},
        {  itemId: 3, name: 'Kit Kat Shake', price: '140'},
        {  itemId: 4, name: 'Oreo Shake', price: '140'}
      ]
    },
    {
      id: 5,
      name: 'Pizza',
      items: [
        { itemId: 1, name: 'Veg Pizza', price: '100'},
        { itemId: 2, name: 'Onion Capsicum Pizza', price: '140'},
        { itemId: 3, name: 'Tomato Onion Pizza', price: '140'},
        { itemId: 4, name: 'Tomato Onion Capsicum Pizza', price: '140'},
        { itemId: 5, name: 'Corn Pizza', price: '150'},
        { itemId: 6, name: 'Mushroom Pizza', price: '160'},
        { itemId: 7, name: 'Corn Mushroom Pizza', price: '160'},
        { itemId: 8, name: 'Paneer Pizza', price: '150'},
        { itemId: 9, name: 'Cheese Pizza', price: '180'},
        { itemId: 10, name: 'Cheese Burst Pizza', price: '200'},
        { itemId: 11, name: 'Pasta Pizza', price: '200'},
        { itemId: 12, name: 'Paneer Pasta Pizza', price: '200'},
        { itemId: 13, name: 'Margherita Pizza', price: '140'},
        { itemId: 14, name: 'Indian Smoky Pizza', price: '180'},
        { itemId: 15, name: 'Chilly Paneer Pizza', price: '220'},
        { itemId: 16, name: 'Allmix Pizza', price: '200'},
      ]
    },
    {
      id: 6,
      name: 'Burger',
      items: [
        { itemId: 1, name: 'Veg Burger', price: '60'},
        { itemId: 2, name: 'Cheese Burger', price: '80'},
        { itemId: 3, name: 'Chilly Cheese Burger', price: '90'},
        { itemId: 4, name: 'Paneer Burger', price: '80'},
        { itemId: 5, name: 'Italian Indian Burger', price: '100'}
      ]
    },
    {
      id: '7',
      name: 'Pasta',
      items: [
        { itemId: 1, name: 'Red Sauce Pasta', price: '100'},
        { itemId: 2, name: 'White Sauce Pasta', price: '100'},
        { itemId: 3, name: 'Chilly Red Sauce Pasta', price: '120'},
      ]
    }
  ];

export const reviews = [
  {
    id:"1",
    name:" Arav Dubey",
    content: " The food service was fast and efficient. One of the best restraunt for street food.",
    rating: "5",
    img: "https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.jpg?s=612x612&w=0&k=20&c=YQaYjmbPGpJ0DXxGSTLHFPWsBKjBsAmR_l-XHYt2vHU="
  },
  {
    id:"2",
    name:" Deepak Gupta",
    content: "Food Taste is Top Notch, Under Budget, quantity and quality is great.",
    rating: "4.5",
    img: "https://live.staticflickr.com/8099/8601630139_8e954769e2_z.jpg"
  },
  {
    id:"3",
    name:" Shruti Tiwari",
    content: " We order the food for guest , and they all liked it alot, will order again from this restraunt.",
    rating: "4.5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-g7RtDYpqBVjm2a-XZStd0GrL7ElK-uCVA&s"
  },
  {
    id:"4",
    name:" Sunny Rajak",
    content: "Really like the manchurain of this restarunt",
    rating: "5",
    img: "https://as2.ftcdn.net/v2/jpg/03/70/94/67/1000_F_370946798_Z0Sa3x1HjwYdOQXdjpbS39AIrASJlSzB.jpg"
  },
  {
    id:"5",
    name:" Akriti Gupta",
    content: "The Catering service was top notch, under the budget and great service",
    rating: "4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8tRAbqq2a0wWu2Bt8IiH_CRiDDIm1Ltd5w&s"
  },
  
]

export const aboutImages = [
  {
    id: "burger",
    title: "Burger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi82Yzr_TI_csJUSv1IqveRCrhvb-oAlC-A&s",
    png: burger
  },
  {
    id: "pizza",
    title: "Pizza",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylNb3nqIR7heFI4EYgmDe5Wsd4eEcDaPeVw&s",
    png: pizza
  },
  {
    id: "chinese",
    title: "Chinese",
    img: "https://i.pinimg.com/236x/90/2c/87/902c87a8a3987143d7fd3b3ac12d4e14.jpg",
    png: spaguetti
  },
  {
    id: "sandwitches",
    title: "Sandwitches",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuQkdQ-0jZ7XrkxaTvQyPpQ8affPTokC45g&s",
    png: sandwitch
  },
  {
    id: "dosa",
    title: "South Indian",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7GS2zKgfeNgQLrD4vB_3ybsghrL5cNc3_w&s",
    png: dosa
  },
  {
    id: "shakes",
    title: "Shakes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2qoGFynwwQODv9Swo0U3HU-jsllCYYYA9g&s",
    png: milkshake
  },
  {
    id: "momo",
    title: "momo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcKOX7akvE_4rKpwdoT-UOBEvFDTlmQgXRw&s",
    png: bun

  },
  {
    id: "rolls",
    title: "Rolls",
    img: "https://i.pinimg.com/236x/fb/97/e4/fb97e499ba98ad480645d03b7fc5f732.jpg",
    png: springrolls
  },
  {
    id: "pasta",
    title: "Pasta",
    img: "https://i.pinimg.com/736x/8c/4d/88/8c4d88254265b6cc535aea98e9af35f1.jpg",
    png: pasta
  },
  {
    id: "maggie",
    title: "Maggie",
    img: "https://i.pinimg.com/236x/00/94/1e/00941e23a30dce9332d4ea0c980cbce8.jpg",
    png: ramen
  }
]
  
  

