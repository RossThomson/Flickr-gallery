import {
  toBeInTheDocument,
  toHaveClass,
  toBeEmpty
} from "@testing-library/jest-dom";

expect.extend({ toBeInTheDocument, toHaveClass, toBeEmpty });
