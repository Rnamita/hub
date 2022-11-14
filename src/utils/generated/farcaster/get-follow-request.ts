// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { UserId, UserIdT } from '../farcaster/user-id';


export class GetFollowRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetFollowRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetFollowRequest(bb:flatbuffers.ByteBuffer, obj?:GetFollowRequest):GetFollowRequest {
  return (obj || new GetFollowRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetFollowRequest(bb:flatbuffers.ByteBuffer, obj?:GetFollowRequest):GetFollowRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetFollowRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

fid(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

fidLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

fidArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

user(obj?:UserId):UserId|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new UserId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startGetFollowRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addFid(builder:flatbuffers.Builder, fidOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, fidOffset, 0);
}

static createFidVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFidVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, userOffset, 0);
}

static endGetFollowRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // fid
  builder.requiredField(offset, 6) // user
  return offset;
}


unpack(): GetFollowRequestT {
  return new GetFollowRequestT(
    this.bb!.createScalarList(this.fid.bind(this), this.fidLength()),
    (this.user() !== null ? this.user()!.unpack() : null)
  );
}


unpackTo(_o: GetFollowRequestT): void {
  _o.fid = this.bb!.createScalarList(this.fid.bind(this), this.fidLength());
  _o.user = (this.user() !== null ? this.user()!.unpack() : null);
}
}

export class GetFollowRequestT {
constructor(
  public fid: (number)[] = [],
  public user: UserIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const fid = GetFollowRequest.createFidVector(builder, this.fid);
  const user = (this.user !== null ? this.user!.pack(builder) : 0);

  GetFollowRequest.startGetFollowRequest(builder);
  GetFollowRequest.addFid(builder, fid);
  GetFollowRequest.addUser(builder, user);

  return GetFollowRequest.endGetFollowRequest(builder);
}
}