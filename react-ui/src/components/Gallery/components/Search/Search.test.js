import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

test("should call callback function on update on Input change", () => {
  const expectedValue = "foobar";
  const onSearchChange = jest.fn();

  const { getByTestId } = render(<Search onSearchChange={onSearchChange} />);

  fireEvent.change(getByTestId("search-input"), {
    target: { value: expectedValue }
  });

  expect(onSearchChange).toBeCalledWith(expectedValue);
});
