import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

jest.mock("moment", () =>
  jest.fn(() => ({
    format: jest.fn(() => "Example Date")
  }))
);

test("should render Card", () => {
  const link = "www.example.jpg";
  const author = "John Smith";
  const dateTaken = "Example Date";

  const { getByTestId } = render(
    <Card link={link} author={author} dateTaken={dateTaken} tags={[]} />
  );

  expect(getByTestId("anchor")).toBeInTheDocument();
  expect(getByTestId("anchor").attributes.href.value).toEqual(link);
  expect(screen.queryByText(author)).toBeInTheDocument();
  expect(screen.queryByText(dateTaken)).toBeInTheDocument();
});
