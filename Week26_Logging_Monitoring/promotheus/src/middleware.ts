import type { NextFunction, Request, Response } from "express";
import client from "prom-client";

// export const middleware = (req: Request, res: Response, next: NextFunction) => {
//   const startTime = Date.now();
//   next();
//   const endTime = Date.now();
//   console.log(`Request took ${endTime - startTime}ms`);
// }

const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
})

const requestGauge = new client.Gauge({
  name: 'active_requests',
  help: 'Number of active requests'
})

const requestHistogram = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000] // Define your own buckets here
})


export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  requestGauge.inc()

  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Request took ${duration} ms`);
    console.log("Route ", req.route,)

    // Increment request counter
    requestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path, // for old and new express app support prev req.route.path new req.path
      status_code: res.statusCode
    });

    // // Histogram
    // requestHistogram.observe({
    //   method: req.method,
    //   route: req.route ? req.route.path : req.path,
    //   code: res.statusCode,
    // }, duration);

    // Gauge decrement
    requestGauge.dec();
  })

  next();
}