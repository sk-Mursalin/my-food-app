import { render, screen } from "@testing-library/react"
import Body from "../component/Body"
import MOCK_DATA from "../mocks/mainApi.json"
import { act } from "react"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("should input box render",async ()=>{
     await act( async ()=>{
        render(<Body/>)
     })

    const btn = await screen.findByRole("button",{name:"Search"});
    expect(btn).toBeInTheDocument();
})