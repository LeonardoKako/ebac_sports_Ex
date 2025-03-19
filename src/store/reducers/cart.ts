import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
  favorites: Produto[]
}

const initialState: CartState = {
  items: [],
  favorites: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const product = state.items.find((item) => item.id === action.payload.id)
      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const product = state.favorites.find(
        (item) => item.id === action.payload.id
      )
      if (!product) {
        state.favorites.push(action.payload)
      } else {
        alert('O jogo já está nos favoritos')
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const { add, addFavorite, removeFavorite } = cartSlice.actions
export default cartSlice.reducer
