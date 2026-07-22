import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import AppButton from '../src/components/AppButton.vue'

test('renders name and the counter', async () => {
  const { getByText, emitted } = render(AppButton, {
    props: { count: 0 },
  })

  await expect.element(getByText('Count: 0')).toBeInTheDocument()

  await getByText('Count: 0').click()

  expect(emitted().change).toBeTruthy()

  // await expect.element(getByText('Count: 1')).toBeInTheDocument()
})
