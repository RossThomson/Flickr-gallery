import React from "react";
import { render, screen, fireEvent, wait } from "@testing-library/react";
import Gallery from "./Gallery";

jest.mock("lodash.debounce", () => jest.fn(args => args));
jest.mock("moment", () =>
  jest.fn(() => ({
    format: jest.fn(() => "Example Date")
  }))
);

const DOMParser = global.window.DOMParser;

global.window.DOMParser = jest.fn(() => ({
  parseFromString: jest.fn(() => ({
    querySelectorAll: jest.fn(() => [
      {
        querySelector: jest.fn(args => {
          return args === "author > name" ? "John Smith" : "Test date";
        }),
        querySelectorAll: jest.fn(args => {
          return args === "link"
            ? [
                {
                  attributes: {
                    type: {
                      value: "image/jpeg"
                    },
                    href: {
                      value: "www.example.com"
                    }
                  }
                }
              ]
            : [
                {
                  attributes: {
                    term: {
                      value: "Tag"
                    }
                  }
                }
              ];
        })
      }
    ])
  }))
}));

test("should fetch data and render Cards", async () => {
  const mockResponse = Promise.resolve({});
  const mockFetchPromise = Promise.resolve({
    text: () => mockResponse
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const { getByTestId } = render(<Gallery />);

  fireEvent.change(getByTestId("search-input"), {
    target: { value: "foo" }
  });

  await wait(() => expect(getByTestId("card-grid")).not.toBeEmpty());
});

test("should handle error when fetching data", async () => {
  const mockFetchPromise = Promise.reject(new Error("error"));

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const { getByTestId } = render(<Gallery />);
  const alertSpy = jest.spyOn(window, "alert");

  try {
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "foo" }
    });
  } catch (e) {
    await wait(() => expect(getByTestId("card-grid")).toBeEmpty());
    expect(alertSpy).toBeCalled();
  }
});

afterAll(() => {
  global.window.DOMParserDOMParser = DOMParser;
});
