import { IncomingMessage, ServerResponse } from "http";

export type NextRequest = IncomingMessage & { cookies: Partial<Record<string, string>> };
export type NextResponse = ServerResponse<IncomingMessage>;
