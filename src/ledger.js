export const seed={
 transactions:[
  {id:'salary',description:'Monthly salary',amount:72000,category:'Income',account:'Everyday account',date:'2026-09-01',status:'confirmed'},
  {id:'rent',description:'Home rent',amount:-18000,category:'Home',account:'Everyday account',date:'2026-09-02',status:'confirmed'},
  {id:'groceries',description:'Weekly groceries',amount:-2450,category:'Food',account:'Everyday account',date:'2026-09-05',status:'confirmed'},
  {id:'metro',description:'Metro card recharge',amount:-800,category:'Transport',account:'Travel card',date:'2026-09-07',status:'confirmed'},
  {id:'refund',description:'Shopping refund',amount:1299,category:'Shopping',account:'Everyday account',date:'2026-09-09',status:'refund'},
  {id:'utilities',description:'Electricity bill',amount:-1860,category:'Home',account:'Everyday account',date:'2026-09-11',status:'confirmed'},
  {id:'coffee',description:'Coffee with team',amount:-420,category:'Food',account:'Cash wallet',date:'2026-09-14',status:'confirmed'}
 ],
 accounts:[{id:'everyday',name:'Everyday account',type:'Bank',opening:42000,color:'#8b6cff'},{id:'cash',name:'Cash wallet',type:'Cash',opening:3500,color:'#59d6ad'},{id:'travel',name:'Travel card',type:'Prepaid',opening:2400,color:'#f0b55d'}],
 captures:[{id:'c1',description:'Fresh Basket',amount:1840,category:'Food',account:'Everyday account',source:'Payment notification',time:'Today · 10:42'},{id:'c2',description:'Metro recharge',amount:500,category:'Transport',account:'Travel card',source:'Payment notification',time:'Today · 08:15'},{id:'c3',description:'Arun sent money',amount:-2200,category:'Income',account:'Everyday account',source:'Incoming payment',time:'Yesterday · 21:04',incoming:true}],
 budgets:[{id:'food',name:'Food & dining',limit:9000,color:'#ff8f70'},{id:'home',name:'Home',limit:22000,color:'#8b6cff'},{id:'transport',name:'Transport',limit:3500,color:'#59d6ad'},{id:'shopping',name:'Shopping',limit:6000,color:'#f0b55d'}],
 goals:[{id:'emergency',name:'Emergency fund',target:150000,saved:92000,due:'Mar 2027'},{id:'laptop',name:'New laptop',target:120000,saved:48500,due:'Jan 2027'}],
 recurring:[{id:'sip',name:'Index fund SIP',amount:6000,day:5,type:'Investment',next:'5 Oct'},{id:'rent-plan',name:'Home rent',amount:18000,day:2,type:'Payment',next:'2 Oct'},{id:'cloud',name:'Cloud storage',amount:149,day:16,type:'Subscription',next:'16 Oct'}],
 holdings:[{id:'index',name:'Nifty 50 Index Fund',type:'Mutual fund',invested:54000,value:58640,units:214.38},{id:'gold',name:'Gold ETF',type:'ETF',invested:26000,value:27920,units:42.1},{id:'deposit',name:'Fixed deposit',type:'Deposit',invested:50000,value:52350,units:1}],
 cards:[{id:'card-1',name:'Everyday card',last4:'2841',network:'Visa',account:'Everyday account',color:'#7654d8'}]
};
export function summarize(records){const confirmed=records.filter(x=>x.status!=='pending');const income=confirmed.filter(x=>x.amount>0).reduce((sum,x)=>sum+x.amount,0);const spending=Math.abs(confirmed.filter(x=>x.amount<0).reduce((sum,x)=>sum+x.amount,0));const available=income-spending;return{income,spending,available,rate:income?Math.round((available/income)*100):0}}
export function byCategory(records){return records.filter(x=>x.amount<0).reduce((result,item)=>({...result,[item.category]:(result[item.category]||0)+Math.abs(item.amount)}),{})}
export function accountBalance(account,records){return account.opening+records.filter(x=>x.account===account.name).reduce((sum,x)=>sum+x.amount,0)}
export function budgetSpent(budget,records){return records.filter(x=>x.category===budget.name.split(' ')[0]||x.category===budget.name).filter(x=>x.amount<0).reduce((sum,x)=>sum+Math.abs(x.amount),0)}
export function portfolioSummary(holdings){const invested=holdings.reduce((s,x)=>s+x.invested,0),value=holdings.reduce((s,x)=>s+x.value,0);return{invested,value,gain:value-invested,gainPercent:invested?((value-invested)/invested)*100:0}}
export function emi(principal,annualRate,months){const p=Number(principal),n=Number(months),r=Number(annualRate)/1200;if(!p||!n)return 0;if(!r)return p/n;return p*r*(1+r)**n/((1+r)**n-1)}
export function addRecord(records,input){const value=Number(input.amount);if(!input.description?.trim()||!Number.isFinite(value)||value<=0)throw new Error('Enter a description and positive amount.');return[{id:globalThis.crypto?.randomUUID?.()||String(Date.now()),description:input.description.trim(),amount:input.direction==='income'?value:-value,category:input.category,account:input.account,date:input.date||new Date().toISOString().slice(0,10),status:'confirmed'},...records]}
