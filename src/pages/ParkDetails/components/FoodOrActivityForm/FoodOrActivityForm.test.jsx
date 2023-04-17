import { render, screen, fireEvent } from "@testing-library/react"
import FoodOrActivityForm from "./FoodOrActivityForm"

describe("FoodOrActivityForm", () => {
  const onChange = jest.fn()

  const props = {
    labelType: "Food or Activity",
    placeholder: "Enter food or activity",
    id: "food-activity",
    inputType: "text",
    value: "",
    onChange,
  }

  it("should render the label and input fields", () => {
    render(<FoodOrActivityForm {...props} />)
    expect(screen.getByLabelText("Food or Activity")).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText("Enter food or activity")
    ).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("should call onChange when the input value is changed", () => {
    render(<FoodOrActivityForm {...props} />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "Pizza" } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(expect.any(Object))
  })
})
