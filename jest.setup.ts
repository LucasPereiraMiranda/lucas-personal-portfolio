import "@testing-library/jest-dom";

// Mock IntersectionObserver for Framer Motion
class MockIntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock scrollTo
window.scrollTo = jest.fn();
