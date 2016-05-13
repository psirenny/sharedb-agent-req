# sharedb-agent-req

Make sharedb requests available to the agent.

## Installation

    npm install --save sharedb-agent-req

## Usage

    import sharedbAgentReq from 'sharedb-agent-req';
    const backend = /* ... */;

    // add req shareReq.agent
    backend.use('connect', sharedbAgentReq);
