import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../component/Header"
import { Provider } from "react-redux"
import myStore from "../utils/myStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

jest.mock("../assets/images/logo.png", () => "mock-logo.png")

test("should be render on page", () => {
    render(
        <BrowserRouter>
            <Provider store={myStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
})

test("should be render on page", () => {
    render(
        <BrowserRouter>
            <Provider store={myStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const contact = screen.getByText("Contact Us");
    expect(contact).toBeInTheDocument();
});

test("should be render on page", () => {
    render(
        <BrowserRouter>
            <Provider store={myStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "login" });
    expect(loginBtn).toBeInTheDocument();

    fireEvent.click(loginBtn);
    
    const logoutBtn = screen.getByRole("button",{name:"logout"});
    expect(logoutBtn).toBeInTheDocument();
});

