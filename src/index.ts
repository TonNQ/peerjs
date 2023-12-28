import { PeerServer } from "peer";

PeerServer({ port: (process.env.PORT || 13337) as number, path: "/" });
