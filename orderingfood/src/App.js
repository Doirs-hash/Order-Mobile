import Meals from "./components/meals/Meals";
import './App.css'
import { useEffect, useState } from "react";
import CartContext from "./store/cart-context";
import FilterMeal from "./components/filterSearch/FilterMeal";
import Cart from "./components/cart/Cart";

const datas = [
  {
    id: 1,
    img: '/img/1.jpg',
    title: '狼牙土豆',
    remarks: '狼牙土豆狼牙土豆狼牙土豆狼牙土豆狼牙土豆',
    price: 12.5
  },
  {
    id: 2,
    img: '/img/2.jpg',
    title: '素菜集合',
    remarks: '素菜集合菜集合素菜集合',
    price: 25
  },
  {
    id: 3,
    img: '/img/3.jpg',
    title: '啥都有',
    remarks: '啥都有啥都有啥都有啥都有啥都有啥都有啥都有啥都有',
    price: 28
  },
  {
    id: 4,
    img: '/img/4.jpg',
    title: '千层肚',
    remarks: '千层肚千层肚千层肚千层肚千层肚千层肚千层肚千层肚',
    price: 10
  },
  {
    id: 5,
    img: '/img/5.jpg',
    title: '鸭肠',
    remarks: '鸭肠鸭肠鸭肠鸭肠鸭肠鸭肠鸭肠鸭肠鸭肠鸭肠',
    price: 12
  },
  {
    id: 6,
    img: '/img/6.jpg',
    title: '小酥肉',
    remarks: '小酥肉小酥肉小酥肉小酥肉小酥肉小酥肉小酥肉小酥肉',
    price: 15
  },
  {
    id: 7,
    img: '/img/7.png',
    title: '牛百叶',
    remarks: '牛百叶牛百叶牛百叶牛百叶牛百叶牛百叶牛百叶牛百叶牛百叶',
    price: 10
  },
  {
    id: 8,
    img: '/img/8.jpg',
    title: '无骨鸡爪',
    remarks: '无骨鸡爪无骨鸡爪无骨鸡爪无骨鸡爪无骨鸡爪无骨鸡爪无骨鸡爪',
    price: 15
  },

]

const App = () => {
  const [mealDatas, setMealDatas] = useState(datas)
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,//总数量
    totalPrice: 0,//总价格
  })

  //添加商品
  const addItem = (meal) => {
    const newCart = { ...cartData }

    if (newCart.items.indexOf(meal) === -1) {
      newCart.items.push(meal)
      meal.amount = 1
    } else {
      meal.amount += 1
    }

    newCart.totalAmount += 1
    newCart.totalPrice += meal.price
    setCartData(newCart)
  }

  //减少商品
  const removeItem = (meal) => {
    const newCart = { ...cartData }
    meal.amount -= 1
    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1)
    }
    newCart.totalAmount -= 1
    newCart.totalPrice -= meal.price
    setCartData(newCart)
  }

  //搜索
  const searchChange=(keyWord)=>{
    const newData=datas.filter(item=>item.title.indexOf(keyWord)!==-1)
    setMealDatas(newData)
  }

  const clearCart=()=>{
    const newCart={...cartData}
    newCart.items.forEach(item=>delete item.amount)
    newCart.items=[]
    newCart.totalAmount=0
    newCart.totalPrice=0
    setCartData(newCart)
  }

  return (
    <CartContext.Provider value={{ ...cartData, addItem, removeItem ,clearCart}}>
      <div style={{ width: '100%' }}>
        <FilterMeal searchChange={searchChange}/>
        <Meals
          mealData={mealDatas}
        />
        <Cart />
      </div>
    </CartContext.Provider>

  );
}

export default App;
