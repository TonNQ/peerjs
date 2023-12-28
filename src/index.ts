import { PeerServer } from "peer";

PeerServer({ port: (process.env.PORT || 1337) as number, path: "/" });
