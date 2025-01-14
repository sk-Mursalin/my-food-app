import { render, screen } from "@testing-library/react"
import ResCard from "../component/ResCard"
import MOCK_DATA from "../mocks/pizzaHut"
import MOCK_DATA2 from "../mocks/kfc.json"
import "@testing-library/jest-dom";

test("shoud be render pizza rescard",()=>{
    render(<ResCard aboutRes = {MOCK_DATA}/>);
    const cost = screen.getByText("₹350 for two");
    expect(cost).toBeInTheDocument();
});

test("shoud be render pizza rescard",()=>{
    render(<ResCard aboutRes = {MOCK_DATA}/>);
    const name = screen.getByText("Pizza Hut..");
    expect(name).toBeInTheDocument();
});

test("shoud be render pizza rescard",()=>{
    render(<ResCard aboutRes = {MOCK_DATA}/>);
    const rating = screen.getByText(4.2);
    expect(rating).toBeInTheDocument();
});

test("should be render kfc rescard", ()=>{
    render(<ResCard aboutRes={MOCK_DATA2}/>);
    const resName = screen.getByText("KFC..");
    expect(resName).toBeInTheDocument()
});

test("should be render kfc rescard", ()=>{
    render(<ResCard aboutRes={MOCK_DATA2}/>);
    const rating = screen.getByText(4.4);
    expect(rating).toBeInTheDocument()
});

test("should be render kfc rescard", ()=>{
    render(<ResCard aboutRes={MOCK_DATA2}/>);
    const cost = screen.getByText("₹400 for two");
    expect(cost).toBeInTheDocument();
});