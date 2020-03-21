import React from "react";
import { render, screen } from "@testing-library/react";
import Tags from "./Tags";

test("should render tags", () => {
  const tags = ["dog", "cat", "fish"];

  render(<Tags tags={tags} />);

  expect(screen.queryByText(tags[0])).toBeInTheDocument();
  expect(screen.queryByText(tags[1])).toBeInTheDocument();
  expect(screen.queryByText(tags[2])).toBeInTheDocument();
});

test("should render no tags", () => {
  const tags = [];

  const { getByTestId } = render(<Tags tags={tags} />);

  expect(getByTestId("tags")).toBeInTheDocument();
  expect(getByTestId("tags")).toBeEmpty();
});
