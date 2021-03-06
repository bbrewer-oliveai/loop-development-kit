// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var browser_pb = require('./browser_pb.js');
var session_pb = require('./session_pb.js');

function serialize_proto_BrowserActiveURLRequest(arg) {
  if (!(arg instanceof browser_pb.BrowserActiveURLRequest)) {
    throw new Error('Expected argument of type proto.BrowserActiveURLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserActiveURLRequest(buffer_arg) {
  return browser_pb.BrowserActiveURLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserActiveURLResponse(arg) {
  if (!(arg instanceof browser_pb.BrowserActiveURLResponse)) {
    throw new Error('Expected argument of type proto.BrowserActiveURLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserActiveURLResponse(buffer_arg) {
  return browser_pb.BrowserActiveURLResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserActiveURLStreamRequest(arg) {
  if (!(arg instanceof browser_pb.BrowserActiveURLStreamRequest)) {
    throw new Error('Expected argument of type proto.BrowserActiveURLStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserActiveURLStreamRequest(buffer_arg) {
  return browser_pb.BrowserActiveURLStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserActiveURLStreamResponse(arg) {
  if (!(arg instanceof browser_pb.BrowserActiveURLStreamResponse)) {
    throw new Error('Expected argument of type proto.BrowserActiveURLStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserActiveURLStreamResponse(buffer_arg) {
  return browser_pb.BrowserActiveURLStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserSelectedTextRequest(arg) {
  if (!(arg instanceof browser_pb.BrowserSelectedTextRequest)) {
    throw new Error('Expected argument of type proto.BrowserSelectedTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserSelectedTextRequest(buffer_arg) {
  return browser_pb.BrowserSelectedTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserSelectedTextResponse(arg) {
  if (!(arg instanceof browser_pb.BrowserSelectedTextResponse)) {
    throw new Error('Expected argument of type proto.BrowserSelectedTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserSelectedTextResponse(buffer_arg) {
  return browser_pb.BrowserSelectedTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserSelectedTextStreamRequest(arg) {
  if (!(arg instanceof browser_pb.BrowserSelectedTextStreamRequest)) {
    throw new Error('Expected argument of type proto.BrowserSelectedTextStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserSelectedTextStreamRequest(buffer_arg) {
  return browser_pb.BrowserSelectedTextStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_BrowserSelectedTextStreamResponse(arg) {
  if (!(arg instanceof browser_pb.BrowserSelectedTextStreamResponse)) {
    throw new Error('Expected argument of type proto.BrowserSelectedTextStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_BrowserSelectedTextStreamResponse(buffer_arg) {
  return browser_pb.BrowserSelectedTextStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BrowserService = exports.BrowserService = {
  // get the active URL
browserActiveURL: {
    path: '/proto.Browser/BrowserActiveURL',
    requestStream: false,
    responseStream: false,
    requestType: browser_pb.BrowserActiveURLRequest,
    responseType: browser_pb.BrowserActiveURLResponse,
    requestSerialize: serialize_proto_BrowserActiveURLRequest,
    requestDeserialize: deserialize_proto_BrowserActiveURLRequest,
    responseSerialize: serialize_proto_BrowserActiveURLResponse,
    responseDeserialize: deserialize_proto_BrowserActiveURLResponse,
  },
  // stream active URL every time it changes
browserActiveURLStream: {
    path: '/proto.Browser/BrowserActiveURLStream',
    requestStream: false,
    responseStream: true,
    requestType: browser_pb.BrowserActiveURLStreamRequest,
    responseType: browser_pb.BrowserActiveURLStreamResponse,
    requestSerialize: serialize_proto_BrowserActiveURLStreamRequest,
    requestDeserialize: deserialize_proto_BrowserActiveURLStreamRequest,
    responseSerialize: serialize_proto_BrowserActiveURLStreamResponse,
    responseDeserialize: deserialize_proto_BrowserActiveURLStreamResponse,
  },
  // get currently selected text
browserSelectedText: {
    path: '/proto.Browser/BrowserSelectedText',
    requestStream: false,
    responseStream: false,
    requestType: browser_pb.BrowserSelectedTextRequest,
    responseType: browser_pb.BrowserSelectedTextResponse,
    requestSerialize: serialize_proto_BrowserSelectedTextRequest,
    requestDeserialize: deserialize_proto_BrowserSelectedTextRequest,
    responseSerialize: serialize_proto_BrowserSelectedTextResponse,
    responseDeserialize: deserialize_proto_BrowserSelectedTextResponse,
  },
  // stream selected text every time it changes
browserSelectedTextStream: {
    path: '/proto.Browser/BrowserSelectedTextStream',
    requestStream: false,
    responseStream: true,
    requestType: browser_pb.BrowserSelectedTextStreamRequest,
    responseType: browser_pb.BrowserSelectedTextStreamResponse,
    requestSerialize: serialize_proto_BrowserSelectedTextStreamRequest,
    requestDeserialize: deserialize_proto_BrowserSelectedTextStreamRequest,
    responseSerialize: serialize_proto_BrowserSelectedTextStreamResponse,
    responseDeserialize: deserialize_proto_BrowserSelectedTextStreamResponse,
  },
};

exports.BrowserClient = grpc.makeGenericClientConstructor(BrowserService);
