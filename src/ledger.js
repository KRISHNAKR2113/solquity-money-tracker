export const seed=[
  {id:'salary',description:'Monthly salary',amount:72000,category:'Income',date:'2026-09-01'},
  {id:'rent',description:'Home rent',amount:-18000,category:'Home',date:'2026-09-02'},
  {id:'groceries',description:'Weekly groceries',amount:-2450,category:'Food',date:'2026-09-05'},
  {id:'metro',description:'Metro card',amount:-800,category:'Transport',date:'2026-09-07'}
];
export function summarize(records){const income=records.filter(x=>x.amount>0).reduce((sum,x)=>sum+x.amount,0);const spending=Math.abs(records.filter(x=>x.amount<0).reduce((sum,x)=>sum+x.amount,0));const available=income-spending;return{income,spending,available,rate:income?Math.round((available/income)*100):0}}
export function addRecord(records,{description,amount,category}){const value=Number(amount);if(!description.trim()||!Number.isFinite(value)||value<=0)throw new Error('Enter a description and positive amount.');return[{id:crypto.randomUUID(),description:description.trim(),amount:category==='Income'?value:-value,category,date:new Date().toISOString().slice(0,10)},...records]}
