import test from'node:test';import assert from'node:assert/strict';import{summarize,accountBalance,portfolioSummary,emi}from'../src/ledger.js';
test('summarizes income and spending without double counting',()=>{assert.deepEqual(summarize([{amount:100},{amount:-25},{amount:-5}]),{income:100,spending:30,available:70,rate:70})});
test('handles a ledger without income',()=>{assert.equal(summarize([{amount:-10}]).rate,0)});
test('calculates a local account balance from confirmed records',()=>{assert.equal(accountBalance({name:'Cash',opening:100},[{account:'Cash',amount:-20},{account:'Bank',amount:50}]),80)});
test('keeps investment cost and value separate',()=>{assert.deepEqual(portfolioSummary([{invested:100,value:112},{invested:50,value:48}]),{invested:150,value:160,gain:10,gainPercent:10/150*100})});
test('calculates a zero-interest installment',()=>{assert.equal(emi(12000,0,12),1000)});
