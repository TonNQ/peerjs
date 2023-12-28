"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const peer_1 = require("peer");
(0, peer_1.PeerServer)({ port: (process.env.PORT || 1337), path: "/" });
