// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

function TChannelPeerState(channel, peer) {
    var self = this;
    self.channel = channel;
    self.peer = peer;
}

TChannelPeerState.prototype.type = 'tchannel.base';

TChannelPeerState.prototype.close = function close(callback) {
    callback();
};

TChannelPeerState.prototype.shouldRequest = function shouldRequest(/* req, options */) {
    // TODO: req isn't quite right currently as a "TChannelOutRequest",
    // the intention is that the other (non-options) arg encapsulates all
    // requests across retries and setries
    return 0;
};

// Request life cycle:

TChannelPeerState.prototype.onRequest = function onRequest(/* req */) {
};

TChannelPeerState.prototype.onRequestResponse = function onRequestResponse(/* req */) {
};

TChannelPeerState.prototype.onRequestError = function onRequestError(/* req */) {
};

module.exports = TChannelPeerState;
