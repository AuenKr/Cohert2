import { z } from "@hono/zod-openapi";

// Input Schema from the user on the route
export const ParamsSchema = z.object({
    id: z
        .string()
        .min(3)
        .openapi({
            param: {
                name: 'id',
                in: 'path',
            },
            example: '123',
        }),
})