// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var docencia_pb = require('./docencia_pb.js');

function serialize_coreGRPC_ChangePasswordReply(arg) {
  if (!(arg instanceof docencia_pb.ChangePasswordReply)) {
    throw new Error('Expected argument of type coreGRPC.ChangePasswordReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_ChangePasswordReply(buffer_arg) {
  return docencia_pb.ChangePasswordReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_ChangePasswordRequest(arg) {
  if (!(arg instanceof docencia_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type coreGRPC.ChangePasswordRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_ChangePasswordRequest(buffer_arg) {
  return docencia_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_CodeReply(arg) {
  if (!(arg instanceof docencia_pb.CodeReply)) {
    throw new Error('Expected argument of type coreGRPC.CodeReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_CodeReply(buffer_arg) {
  return docencia_pb.CodeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_CodeRequest(arg) {
  if (!(arg instanceof docencia_pb.CodeRequest)) {
    throw new Error('Expected argument of type coreGRPC.CodeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_CodeRequest(buffer_arg) {
  return docencia_pb.CodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_FindOrCreateUserReply(arg) {
  if (!(arg instanceof docencia_pb.FindOrCreateUserReply)) {
    throw new Error('Expected argument of type coreGRPC.FindOrCreateUserReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_FindOrCreateUserReply(buffer_arg) {
  return docencia_pb.FindOrCreateUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_FindOrCreateUserRequest(arg) {
  if (!(arg instanceof docencia_pb.FindOrCreateUserRequest)) {
    throw new Error('Expected argument of type coreGRPC.FindOrCreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_FindOrCreateUserRequest(buffer_arg) {
  return docencia_pb.FindOrCreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_InfoIDRequest(arg) {
  if (!(arg instanceof docencia_pb.InfoIDRequest)) {
    throw new Error('Expected argument of type coreGRPC.InfoIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_InfoIDRequest(buffer_arg) {
  return docencia_pb.InfoIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_InfoReply(arg) {
  if (!(arg instanceof docencia_pb.InfoReply)) {
    throw new Error('Expected argument of type coreGRPC.InfoReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_InfoReply(buffer_arg) {
  return docencia_pb.InfoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_ListReply(arg) {
  if (!(arg instanceof docencia_pb.ListReply)) {
    throw new Error('Expected argument of type coreGRPC.ListReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_ListReply(buffer_arg) {
  return docencia_pb.ListReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_ListRequest(arg) {
  if (!(arg instanceof docencia_pb.ListRequest)) {
    throw new Error('Expected argument of type coreGRPC.ListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_ListRequest(buffer_arg) {
  return docencia_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_PullReply(arg) {
  if (!(arg instanceof docencia_pb.PullReply)) {
    throw new Error('Expected argument of type coreGRPC.PullReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_PullReply(buffer_arg) {
  return docencia_pb.PullReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_PullRequest(arg) {
  if (!(arg instanceof docencia_pb.PullRequest)) {
    throw new Error('Expected argument of type coreGRPC.PullRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_PullRequest(buffer_arg) {
  return docencia_pb.PullRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_PushReply(arg) {
  if (!(arg instanceof docencia_pb.PushReply)) {
    throw new Error('Expected argument of type coreGRPC.PushReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_PushReply(buffer_arg) {
  return docencia_pb.PushReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coreGRPC_PushRequest(arg) {
  if (!(arg instanceof docencia_pb.PushRequest)) {
    throw new Error('Expected argument of type coreGRPC.PushRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_coreGRPC_PushRequest(buffer_arg) {
  return docencia_pb.PushRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The signer service definition.
var CoreService = exports.CoreService = {
  // Sends a file to sign.
  changePassword: {
    path: '/coreGRPC.Core/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.ChangePasswordRequest,
    responseType: docencia_pb.ChangePasswordReply,
    requestSerialize: serialize_coreGRPC_ChangePasswordRequest,
    requestDeserialize: deserialize_coreGRPC_ChangePasswordRequest,
    responseSerialize: serialize_coreGRPC_ChangePasswordReply,
    responseDeserialize: deserialize_coreGRPC_ChangePasswordReply,
  },
  findOrCreateUser: {
    path: '/coreGRPC.Core/FindOrCreateUser',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.FindOrCreateUserRequest,
    responseType: docencia_pb.FindOrCreateUserReply,
    requestSerialize: serialize_coreGRPC_FindOrCreateUserRequest,
    requestDeserialize: deserialize_coreGRPC_FindOrCreateUserRequest,
    responseSerialize: serialize_coreGRPC_FindOrCreateUserReply,
    responseDeserialize: deserialize_coreGRPC_FindOrCreateUserReply,
  },
  getInfoByID: {
    path: '/coreGRPC.Core/GetInfoByID',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.InfoIDRequest,
    responseType: docencia_pb.InfoReply,
    requestSerialize: serialize_coreGRPC_InfoIDRequest,
    requestDeserialize: deserialize_coreGRPC_InfoIDRequest,
    responseSerialize: serialize_coreGRPC_InfoReply,
    responseDeserialize: deserialize_coreGRPC_InfoReply,
  },
};

exports.CoreClient = grpc.makeGenericClientConstructor(CoreService);
var CompilerService = exports.CompilerService = {
  compiler: {
    path: '/coreGRPC.Compiler/Compiler',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.CodeRequest,
    responseType: docencia_pb.CodeReply,
    requestSerialize: serialize_coreGRPC_CodeRequest,
    requestDeserialize: deserialize_coreGRPC_CodeRequest,
    responseSerialize: serialize_coreGRPC_CodeReply,
    responseDeserialize: deserialize_coreGRPC_CodeReply,
  },
};

exports.CompilerClient = grpc.makeGenericClientConstructor(CompilerService);
var GitlabService = exports.GitlabService = {
  // Sends a file to gitlab.
  push: {
    path: '/coreGRPC.Gitlab/Push',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.PushRequest,
    responseType: docencia_pb.PushReply,
    requestSerialize: serialize_coreGRPC_PushRequest,
    requestDeserialize: deserialize_coreGRPC_PushRequest,
    responseSerialize: serialize_coreGRPC_PushReply,
    responseDeserialize: deserialize_coreGRPC_PushReply,
  },
  pull: {
    path: '/coreGRPC.Gitlab/Pull',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.PullRequest,
    responseType: docencia_pb.PullReply,
    requestSerialize: serialize_coreGRPC_PullRequest,
    requestDeserialize: deserialize_coreGRPC_PullRequest,
    responseSerialize: serialize_coreGRPC_PullReply,
    responseDeserialize: deserialize_coreGRPC_PullReply,
  },
  list: {
    path: '/coreGRPC.Gitlab/List',
    requestStream: false,
    responseStream: false,
    requestType: docencia_pb.ListRequest,
    responseType: docencia_pb.ListReply,
    requestSerialize: serialize_coreGRPC_ListRequest,
    requestDeserialize: deserialize_coreGRPC_ListRequest,
    responseSerialize: serialize_coreGRPC_ListReply,
    responseDeserialize: deserialize_coreGRPC_ListReply,
  },
};

exports.GitlabClient = grpc.makeGenericClientConstructor(GitlabService);
