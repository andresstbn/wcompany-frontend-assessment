import { renderSuspended } from '@nuxt/test-utils/runtime'
import { expect, test } from 'vitest'
import { screen } from '@testing-library/vue'
import { CreditCardModal } from '#components'


const mockCreditCardInfo: CreditCardInfo = {
    cardHolder: 'John Doe',
    cardNumber: '1234',
    expirationDate: '01/23',
    cvv: '123'
}

test('credit card modal works and show card number', async () => {
    const component = await renderSuspended(CreditCardModal, {
        props: {
            modelValue: mockCreditCardInfo,
            show: true
        }
    })

    const cardNumberInput = screen.queryByTestId('card-number-input') as HTMLInputElement
    expect(cardNumberInput?.value).toContain(mockCreditCardInfo.cardNumber)
    component.unmount()
})

test('credit card modal show correct logo VISA', async () => {
    mockCreditCardInfo.cardNumber = '4111111111111111'
    const component = await renderSuspended(CreditCardModal, {
        props: {
            modelValue: mockCreditCardInfo,
            show: true
        }
    })

    expect(screen.queryByTestId('issuer-icon')?.classList).toContain('i-ri-visa-line')
    component.unmount()
})

test('credit card modal show correct logo MASTERCARD', async () => {
    mockCreditCardInfo.cardNumber = '5404985643432324'
    const component = await renderSuspended(CreditCardModal, {
        props: {
            modelValue: mockCreditCardInfo,
            show: true
        }
    })
    expect(screen.queryByTestId('issuer-icon')?.classList).toContain('i-ri-mastercard-fill')
    component.unmount()
})

test('credit card show invalid card number', async () => {
    mockCreditCardInfo.cardNumber = '12347777483847479384'
    const component = await renderSuspended(CreditCardModal, {
        props: {
            modelValue: mockCreditCardInfo,
            show: true
        }
    })
    expect(screen.queryByTestId('issuer-icon')?.classList).toContain('i-ri-error-warning-fill')
    component.unmount()
})