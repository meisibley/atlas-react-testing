import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { expect, test } from "vitest";
import { FooBar } from "../components/FooBar";
import { afterEach } from "vitest";

afterEach(() => {
    cleanup();
});

test('toggles "Foo" visibility when the "Toggle Foo" button is clicked', () => {
    render(<FooBar />);

    const toggleFooButton = screen.getByText("Toggle Foo");

    fireEvent.click(toggleFooButton);
    expect(screen.queryByText("Foo")).not.toBeInTheDocument();

    fireEvent.click(toggleFooButton);
    expect(screen.getByText("Foo")).toBeInTheDocument();
});

test('toggles "Bar" visibility when the "Toggle Bar" button is clicked', () => {
    render(<FooBar />);
  
    const toggleBarButton = screen.getByText("Toggle Bar");
  
    // Click the "Toggle Bar" button to show "Bar"
    fireEvent.click(toggleBarButton);
    expect(screen.getByText("Bar")).toBeInTheDocument();
  
    // Click the "Toggle Bar" button again to hide "Bar"
    fireEvent.click(toggleBarButton);
    expect(screen.queryByText("Bar")).not.toBeInTheDocument();
  });

