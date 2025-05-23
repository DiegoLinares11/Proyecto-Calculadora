import Display from '../components/Display'
import '../App.css'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    value: { control: 'text' }
  }
}

export const Default = {
  args: {
    value: '0'
  }
}

export const WithValue = {
  args: {
    value: '123'
  }
}

export const WithLargeNumber = {
  args: {
    value: '123456789'
  }
}

export const WithDecimal = {
  args: {
    value: '123.456'
  }
}

export const WithError = {
  args: {
    value: 'ERROR'
  }
}