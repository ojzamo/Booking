// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  return {
    addBooking: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    maxNumberOfGuest: ctc1,
    name: ctc2
    });
  const ctc4 = stdlib.T_Object({
    houses: ctc3,
    numberOfGuest: ctc1
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    maxNumberOfGuest: ctc1,
    name: ctc2
    });
  const ctc4 = stdlib.T_Object({
    houses: ctc3,
    numberOfGuest: ctc1
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    maxNumberOfGuest: ctc1,
    name: ctc2
    });
  const ctc4 = stdlib.T_Object({
    houses: ctc3,
    numberOfGuest: ctc1
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Data({
    Guest_enrollHouse0_31: ctc7,
    Guest_getBooking0_31: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:69:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v158, time: v157, didSend: v22, from: v156 } = txn1;
      
      ;
      const v160 = v157;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v158, time: v157, didSend: v22, from: v156 } = txn1;
  ;
  let v160 = v157;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v195], secs: v197, time: v196, didSend: v110, from: v194 } = txn2;
    switch (v195[0]) {
      case 'Guest_enrollHouse0_31': {
        const v198 = v195[1];
        undefined /* setApiDetails */;
        ;
        const v209 = null;
        await txn2.getOutput('Guest_enrollHouse', 'v209', ctc0, v209);
        const cv160 = v196;
        
        v160 = cv160;
        
        continue;
        break;
        }
      case 'Guest_getBooking0_31': {
        const v232 = v195[1];
        undefined /* setApiDetails */;
        ;
        const v251 = v232[stdlib.checkedBigNumberify('./index.rsh:86:10:spread', stdlib.UInt_max, '0')];
        const v253 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v251), null);
        await txn2.getOutput('Guest_getBooking', 'v253', ctc5, v253);
        const cv160 = v196;
        
        v160 = cv160;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Guest_enrollHouse3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Guest_enrollHouse3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Guest_enrollHouse3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    maxNumberOfGuest: ctc1,
    name: ctc2
    });
  const ctc4 = stdlib.T_Object({
    houses: ctc3,
    numberOfGuest: ctc1
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Data({
    Guest_enrollHouse0_31: ctc7,
    Guest_getBooking0_31: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v168 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:76:42:application call to [unknown function] (defined at: ./index.rsh:76:42:function exp)', 'at ./index.rsh:73:44:application call to "runGuest_enrollHouse0_31" (defined at: ./index.rsh:76:10:function exp)', 'at ./index.rsh:73:44:application call to [unknown function] (defined at: ./index.rsh:73:44:function exp)'],
    msg: 'in',
    who: 'Guest_enrollHouse'
    });
  const v176 = ['Guest_enrollHouse0_31', v168];
  
  const txn1 = await (ctc.sendrecv({
    args: [v176],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v195], secs: v197, time: v196, didSend: v110, from: v194 } = txn1;
      
      switch (v195[0]) {
        case 'Guest_enrollHouse0_31': {
          const v198 = v195[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Guest_enrollHouse"
            });
          ;
          const v209 = null;
          const v210 = await txn1.getOutput('Guest_enrollHouse', 'v209', ctc0, v209);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'Guest_getBooking0_31': {
          const v232 = v195[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v195], secs: v197, time: v196, didSend: v110, from: v194 } = txn1;
  switch (v195[0]) {
    case 'Guest_enrollHouse0_31': {
      const v198 = v195[1];
      undefined /* setApiDetails */;
      ;
      const v209 = null;
      const v210 = await txn1.getOutput('Guest_enrollHouse', 'v209', ctc0, v209);
      if (v110) {
        stdlib.protect(ctc0, await interact.out(v198, v210), {
          at: './index.rsh:76:11:application',
          fs: ['at ./index.rsh:76:11:application call to [unknown function] (defined at: ./index.rsh:76:11:function exp)', 'at ./index.rsh:80:14:application call to "ret" (defined at: ./index.rsh:79:15:function exp)', 'at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:15:function exp)'],
          msg: 'out',
          who: 'Guest_enrollHouse'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Guest_getBooking0_31': {
      const v232 = v195[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Guest_getBooking3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Guest_getBooking3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Guest_getBooking3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    maxNumberOfGuest: ctc1,
    name: ctc2
    });
  const ctc4 = stdlib.T_Object({
    houses: ctc3,
    numberOfGuest: ctc1
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Data({
    Guest_enrollHouse0_31: ctc7,
    Guest_getBooking0_31: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v180 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:86:41:application call to [unknown function] (defined at: ./index.rsh:86:41:function exp)', 'at ./index.rsh:73:44:application call to "runGuest_getBooking0_31" (defined at: ./index.rsh:86:10:function exp)', 'at ./index.rsh:73:44:application call to [unknown function] (defined at: ./index.rsh:73:44:function exp)'],
    msg: 'in',
    who: 'Guest_getBooking'
    });
  const v188 = ['Guest_getBooking0_31', v180];
  
  const txn1 = await (ctc.sendrecv({
    args: [v188],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v195], secs: v197, time: v196, didSend: v110, from: v194 } = txn1;
      
      switch (v195[0]) {
        case 'Guest_enrollHouse0_31': {
          const v198 = v195[1];
          
          break;
          }
        case 'Guest_getBooking0_31': {
          const v232 = v195[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Guest_getBooking"
            });
          ;
          const v251 = v232[stdlib.checkedBigNumberify('./index.rsh:86:10:spread', stdlib.UInt_max, '0')];
          const v253 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v251), null);
          const v254 = await txn1.getOutput('Guest_getBooking', 'v253', ctc5, v253);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v195], secs: v197, time: v196, didSend: v110, from: v194 } = txn1;
  switch (v195[0]) {
    case 'Guest_enrollHouse0_31': {
      const v198 = v195[1];
      return;
      break;
      }
    case 'Guest_getBooking0_31': {
      const v232 = v195[1];
      undefined /* setApiDetails */;
      ;
      const v251 = v232[stdlib.checkedBigNumberify('./index.rsh:86:10:spread', stdlib.UInt_max, '0')];
      const v253 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v251), null);
      const v254 = await txn1.getOutput('Guest_getBooking', 'v253', ctc5, v253);
      if (v110) {
        stdlib.protect(ctc0, await interact.out(v232, v254), {
          at: './index.rsh:86:11:application',
          fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:11:function exp)', 'at ./index.rsh:91:14:application call to "ret" (defined at: ./index.rsh:89:15:function exp)', 'at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:15:function exp)'],
          msg: 'out',
          who: 'Guest_getBooking'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function Guest_enrollHouse(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest_enrollHouse expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest_enrollHouse expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Guest_enrollHouse3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Guest_getBooking(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest_getBooking expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest_getBooking expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Guest_getBooking3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Guest_enrollHouse(address)byte[0]`, `Guest_getBooking(address)(byte,byte[272])`],
    pure: [],
    sigs: [`Guest_enrollHouse(address)byte[0]`, `Guest_getBooking(address)(byte,byte[272])`]
    },
  appApproval: `BiAGAAEDkQLG6PnACAImBAABAAEBAQIiNQAxGEEBZyhkSSJbNQGBCFs1AjEZIxJBACQxACWvSwEpSwJXAH9mSwEqSwJXf39mSwErSwJX/hNmSEhCARk2GgAXSUEAMSI1BCM1BkkhBAxAABAhBBJENhoBNf8qNP9QQgAsgZX2vrMFEkQ2GgE1/yk0/1BCABg2GgIXNQQ2GgM2GgEXSSEFDEAAYSEFEkQkNAESRDQESSISTDQCEhFESTUFNf+ABKLFs9s0/1CwNP8iVUAAE4AIAAAAAAAAANGwKDUHMgZCAEo0/1cBIDX+gAgAAAAAAAAA/TT+iACtULA0/ogApjUHMgZCACYiEkSBoI0GiACwIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAyBkIAADX/JDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEJDE3EkQiNQEiNQJC/69JMRhhQAAESCWviUkpYksBKmJQSwErYlBMSIk0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 3,
  mapDataSize: 273,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Guest_enrollHouse0_31",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Guest_getBooking0_31",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v195",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v209",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_maxNumberOfGuest",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1",
                "name": "_houses",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "_numberOfGuest",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v253",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Guest_enrollHouse",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Guest_getBooking",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_maxNumberOfGuest",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1",
                "name": "_houses",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "_numberOfGuest",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_maxNumberOfGuest",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_name",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1",
                "name": "_houses",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "_numberOfGuest",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Guest_enrollHouse0_31",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_Guest_getBooking0_31",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v195",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ec338038062000ec38339810160408190526200002691620001e5565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000a8565b6200008d6200010f565b6020810151439052620000a081620000d2565b50506200028d565b81620000ce5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516200010a9260029201906200013f565b505050565b60405180604001604052806000151581526020016200013a6040518060200160405280600081525090565b905290565b8280546200014d9062000250565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b600060408284031215620001f857600080fd5b604080519081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200024457600080fd5b60208201529392505050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b610c26806200029d6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100db5780638db976cb146100f0578063ab53f2c614610103578063de40ab841461012657005b80631e93b0f1146100775780633bc5b7bf1461009b57806342287b30146100c857005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a757600080fd5b506100bb6100b636600461085f565b610149565b60405161009291906108b7565b6100bb6100d636600461085f565b610160565b3480156100e757600080fd5b50600154610088565b6100756100fe366004610950565b6101aa565b34801561010f57600080fd5b506101186101ce565b604051610092929190610968565b61013961013436600461085f565b61026b565b6040519015158152602001610092565b610151610688565b61015a826102ab565b92915050565b610168610688565b6101706106ac565b60208101805151600190525151604001516001600160a01b03841690526101956106f9565b61019f82826103e7565b602001519392505050565b6101b26106f9565b6101ca6101c436849003840184610a89565b826103e7565b5050565b6000606060005460028080546101e390610b41565b80601f016020809104026020016040519081016040528092919081815260200182805461020f90610b41565b801561025c5780601f106102315761010080835404028352916020019161025c565b820191906000526020600020905b81548152906001019060200180831161023f57829003601f168201915b50505050509050915091509091565b60006102756106ac565b602081810180515160009052515101516001600160a01b03841690526102996106f9565b6102a382826103e7565b519392505050565b6102b3610688565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156102e2576102e2610883565b14156103d8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561032357610323610883565b600181111561033457610334610883565b815281546101009081900460ff1615156020808401919091526040805160808082018352600187015482840190815283519586018452600288015486526003880154868601526004880154868501526005880154606080880191909152600689015492870192909252600788015460a0870152600888015460c0870152600988015460e087015290820194909452928352600a909401549082015291015292915050565b60008082526020820152919050565b6103f7600360005414600a610628565b815161041290158061040b57508251600154145b600b610628565b60008080556002805461042490610b41565b80601f016020809104026020016040519081016040528092919081815260200182805461045090610b41565b801561049d5780601f106104725761010080835404028352916020019161049d565b820191906000526020600020905b81548152906001019060200180831161048057829003601f168201915b50505050508060200190518101906104b59190610b76565b90506104d260408051808201909152600060208201908152815290565b7f38f80604f98596d0f9a64be857c0268158881eeb9115ae21b6702dab30d9825f3385604051610503929190610b98565b60405180910390a1600060208501515151600181111561052557610525610883565b141561058e5761053734156008610628565b604051600081527fc5d4ce75cb395af9528ea8afd9355db80b92e4c42b8ef5f67b66650e3fe8c30a9060200160405180910390a160008352610577610715565b60208101514390526105888161064d565b50610622565b60016020850151515160018111156105a8576105a8610883565b1415610622576020840151516040015181526105c634156009610628565b8051517f2e991f8a1f32ea716f7c04d45d2577d7a453c052105f18ea9c9dd2a8331c5395906105f4906102ab565b60405161060191906108b7565b60405180910390a1805151610615906102ab565b6020840152610577610715565b50505050565b816101ca5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6003600090815543600155604080516020808201849052825180830382018152918301909252805161068392600292019061073f565b505050565b60408051606081018252600080825260208201529081016106a76107c3565b905290565b6040518060400160405280600081526020016106a7604080516080810182526000602080830182815284518083018652838152848601528451918201909452908152606082015290815290565b60405180604001604052806000151581526020016106a7610688565b60405180604001604052806000151581526020016106a76040518060200160405280600081525090565b82805461074b90610b41565b90600052602060002090601f01602090048101928261076d57600085556107b3565b82601f1061078657805160ff19168380011785556107b3565b828001600101855582156107b3579182015b828111156107b3578251825591602001919060010190610798565b506107bf929150610832565b5090565b604051806040016040528061082560408051808201825260008082528251610100810184528181526020818101839052938101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152909182015290565b8152602001600081525090565b5b808211156107bf5760008155600101610833565b6001600160a01b038116811461085c57600080fd5b50565b60006020828403121561087157600080fd5b813561087c81610847565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061085c57634e487b7160e01b600052602160045260246000fd5b81516101808201906108c881610899565b808352506020830151151560208301526040830151805180516040850152602081015190508051606085015260208101516080850152604081015160a0850152606081015160c0850152608081015160e085015260a081015161010085015260c081015161012085015260e08101516101408501525060208101516101608401525092915050565b60006080828403121561096257600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561099c57858101830151858201606001528201610980565b818111156109ae576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff811182821017156109f657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff811182821017156109f657634e487b7160e01b600052604160045260246000fd5b600060208284031215610a3f57600080fd5b6040516020810181811067ffffffffffffffff82111715610a7057634e487b7160e01b600052604160045260246000fd5b6040529050808235610a8181610847565b905292915050565b60008183036080811215610a9c57600080fd5b6040516040810181811067ffffffffffffffff82111715610acd57634e487b7160e01b600052604160045260246000fd5b604052833581526060601f1983011215610ae657600080fd5b610aee6109c5565b9150610af86109fc565b602085013560028110610b0a57600080fd5b8152610b198660408701610a2d565b6020820152610b2b8660608701610a2d565b6040820152825260208101919091529392505050565b600181811c90821680610b5557607f821691505b6020821081141561096257634e487b7160e01b600052602260045260246000fd5b600060208284031215610b8857600080fd5b8151801515811461087c57600080fd5b6001600160a01b038381168252825160208084019190915283015151805160a08401929190610bc681610899565b8060408601525081602082015151166060850152816040820151511660808501525050939250505056fea26469706673582212207b71365961673817d9368541532becec06f77cd381049e46062c12fa0db31e0464736f6c634300080c0033`,
  BytecodeLen: 3779,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:97:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:44:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Guest_enrollHouse": Guest_enrollHouse,
  "Guest_getBooking": Guest_getBooking
  };
export const _APIs = {
  Guest: {
    enrollHouse: Guest_enrollHouse,
    getBooking: Guest_getBooking
    }
  };
