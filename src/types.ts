import { Schema } from '@typeschema/main';

export type HandlerFunction<TParams, TQuery, TBody> = (
  request: Request,
  context: { params: TParams; query: TQuery; body: TBody },
) => unknown;

export interface RouteHandlerBuilderConfig {
  paramsSchema: Schema;
  querySchema: Schema;
  bodySchema: Schema;
}

export type OriginalRouteHandler = (request: Request, context?: { params: Record<string, unknown> }) => unknown;
