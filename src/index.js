export default (shareReq, next) => {
  shareReq.agent.req = shareReq.req;
  next();
};
