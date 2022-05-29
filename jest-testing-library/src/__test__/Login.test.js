import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../Login";

describe("Test Login Component", () => {
  test("render form with 1 button", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("should be failed on email validation", () => {
    const testEmail = "hoahtoahtoa.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  test("should be success on email validation", () => {
    const testEmail = "hoahtoahtoa@gmail.com";
    expect(validateEmail(testEmail)).toBe(true);
  });

  test("password input send have type password", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("パスワード入力");
    expect(password).toHaveAttribute("type", "password");
  });

  test("should be success to submit the form", () => {
    render(<Login />);
    const submit = screen.getByTestId("submit");
    const email = screen.getByPlaceholderText("メールアドレス入力");
    const password = screen.getByPlaceholderText("パスワード入力");

    userEvent.type(email, "hogehoge@gmail.com");
    userEvent.type(password, "abcdef");
    userEvent.click(submit);

    const userInfo = screen.getByText("hogehoge@gmail.com");
    expect(userInfo).toBeInTheDocument();
  });
});
