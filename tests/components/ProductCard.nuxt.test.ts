import { renderSuspended } from '@nuxt/test-utils/runtime'
import { expect, test } from 'vitest'
import { ProductCard } from '#components'
import { screen } from '@testing-library/vue'


const mockProduct = {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve,",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": { "rate": 4.1, "count": 259 }
}

const component = await renderSuspended(ProductCard, {
    props: {
        product: mockProduct
    }
})

test('product card show article correctly', async () => {
    expect(screen.queryByTestId('product-title')?.textContent).toContain(mockProduct.title)
    expect(screen.queryByTestId('product-price')?.textContent).toContain(formatCOP(mockProduct.price))
    expect(screen.queryByTestId('product-image')?.getAttribute('src')).toContain(mockProduct.image)
})

test('buy button puts product in main store', async () => {
    const buyButton = screen.queryByTestId('buy-button')
    await buyButton?.click()
    expect(useMainStore().selectedProduct).toEqual(mockProduct)
    component.unmount()
})


