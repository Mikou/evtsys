const knex = require('../src/services/db');

global.Array = Array;
global.Date = Date;
global.Function = Function;
global.Math = Math;
global.Number = Number;
global.Object = Object;
global.RegExp = RegExp;
global.String = String;
global.Uint8Array = Uint8Array;
global.WeakMap = WeakMap;
global.Set = Set;
global.Error = Error;
global.TypeError = TypeError;
global.parseInt = parseInt;
global.parseFloat = parseFloat;

const tables = Object.values(['users']);
const truncate = () =>
  Promise.all(
    tables.map(table =>
      knex.raw(`TRUNCATE TABLE ${table} RESTART identity CASCADE`)
    )
  );

beforeAll(async () => truncate());
afterEach(async () => truncate());
// manually teardown the connection pool
afterAll(knex.destroy);
