import 'vitest-canvas-mock';
import '../src/index.css';
import { vi } from 'vitest';

(window as any).scrollTo = vi.fn();

(window as any).IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
}));

(Intl as any).supportedValuesOf = vi.fn();

vi.mock('../src/utilities/context/topic-context/master-websocket', () => {
  return {
    // this will only affect "foo" outside of the original module
    createMasterWebSocket: vi.fn().mockReturnValue({
      lastMessage: vi.fn(),
      close: vi.fn(),
      send: vi.fn(),
      reconnect: vi.fn(),
    }),
  };
});

vi.mock('../src/utilities/context/topic-context/protobuf-parser', () => {
  return {
    // this will only affect "foo" outside of the original module
    ProtobufParser: vi.fn().mockReturnValue({
      decode: vi.fn(),
      encode: vi.fn(),
    }),
  };
});

// https://stackoverflow.com/a/76606869
const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
}));

vi.mock('axios', async (importActual) => {
  const actual = await importActual<typeof import('axios')>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
        post: mocks.post,
      })),
    },
  };

  return mockAxios;
});
