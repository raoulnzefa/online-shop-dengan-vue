export const productGetters = {
  // semua prodak
  allProducts: (state, getters) => {
    return state.products
  },
  // dapatkan id produk
  productById:(state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p._id === id)[0]
    }else{
      return state.product
    }
  }
}

export const manufacturerGetters = {
  // semua manufacturers
  allManufacturers: state => state.manufacturers
}
