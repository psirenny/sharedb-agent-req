# sharedb-agent-req

Sharedb middleware exposing the share request object to the connect agent.

## Installation

    npm install --save sharedb-agent-req

## Usage

    import sharedbAgentReq from 'sharedb-agent-req';
    const backend = /* ... */;

    // add req shareReq.agent
    backend.use('connect', sharedbAgentReq);
