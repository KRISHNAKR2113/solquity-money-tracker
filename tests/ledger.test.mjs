import test from'node:test';import assert from'node:assert/strict';import{summarize}from'../src/ledger.js';
test('summarizes income and spending without double counting',()=>{assert.deepEqual(summarize([{amount:100},{amount:-25},{amount:-5}]),{income:100,spending:30,available:70,rate:70})});
test('handles a ledger without income',()=>{assert.equal(summarize([{amount:-10}]).rate,0)});
