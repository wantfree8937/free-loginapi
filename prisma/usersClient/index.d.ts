
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model Characterinventories
 * 
 */
export type Characterinventories = $Result.DefaultSelection<Prisma.$CharacterinventoriesPayload>
/**
 * Model EquippedItems
 * 
 */
export type EquippedItems = $Result.DefaultSelection<Prisma.$EquippedItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs>;

  /**
   * `prisma.characterinventories`: Exposes CRUD operations for the **Characterinventories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characterinventories
    * const characterinventories = await prisma.characterinventories.findMany()
    * ```
    */
  get characterinventories(): Prisma.CharacterinventoriesDelegate<ExtArgs>;

  /**
   * `prisma.equippedItems`: Exposes CRUD operations for the **EquippedItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquippedItems
    * const equippedItems = await prisma.equippedItems.findMany()
    * ```
    */
  get equippedItems(): Prisma.EquippedItemsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Characters: 'Characters',
    Characterinventories: 'Characterinventories',
    EquippedItems: 'EquippedItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'characters' | 'characterinventories' | 'equippedItems'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      Characterinventories: {
        payload: Prisma.$CharacterinventoriesPayload<ExtArgs>
        fields: Prisma.CharacterinventoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterinventoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterinventoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>
          }
          findFirst: {
            args: Prisma.CharacterinventoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterinventoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>
          }
          findMany: {
            args: Prisma.CharacterinventoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>[]
          }
          create: {
            args: Prisma.CharacterinventoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>
          }
          createMany: {
            args: Prisma.CharacterinventoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharacterinventoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>
          }
          update: {
            args: Prisma.CharacterinventoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>
          }
          deleteMany: {
            args: Prisma.CharacterinventoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterinventoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharacterinventoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterinventoriesPayload>
          }
          aggregate: {
            args: Prisma.CharacterinventoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacterinventories>
          }
          groupBy: {
            args: Prisma.CharacterinventoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharacterinventoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterinventoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CharacterinventoriesCountAggregateOutputType> | number
          }
        }
      }
      EquippedItems: {
        payload: Prisma.$EquippedItemsPayload<ExtArgs>
        fields: Prisma.EquippedItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquippedItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquippedItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>
          }
          findFirst: {
            args: Prisma.EquippedItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquippedItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>
          }
          findMany: {
            args: Prisma.EquippedItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>[]
          }
          create: {
            args: Prisma.EquippedItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>
          }
          createMany: {
            args: Prisma.EquippedItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EquippedItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>
          }
          update: {
            args: Prisma.EquippedItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>
          }
          deleteMany: {
            args: Prisma.EquippedItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EquippedItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EquippedItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquippedItemsPayload>
          }
          aggregate: {
            args: Prisma.EquippedItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEquippedItems>
          }
          groupBy: {
            args: Prisma.EquippedItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EquippedItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquippedItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<EquippedItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Characters: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Characters?: boolean | UsersCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
  }


  /**
   * Count Type CharactersCountOutputType
   */

  export type CharactersCountOutputType = {
    EquippedItems: number
  }

  export type CharactersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EquippedItems?: boolean | CharactersCountOutputTypeCountEquippedItemsArgs
  }

  // Custom InputTypes
  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersCountOutputType
     */
    select?: CharactersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountEquippedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquippedItemsWhereInput
  }


  /**
   * Count Type CharacterinventoriesCountOutputType
   */

  export type CharacterinventoriesCountOutputType = {
    EquippedItems: number
  }

  export type CharacterinventoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EquippedItems?: boolean | CharacterinventoriesCountOutputTypeCountEquippedItemsArgs
  }

  // Custom InputTypes
  /**
   * CharacterinventoriesCountOutputType without action
   */
  export type CharacterinventoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterinventoriesCountOutputType
     */
    select?: CharacterinventoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterinventoriesCountOutputType without action
   */
  export type CharacterinventoriesCountOutputTypeCountEquippedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquippedItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    idname: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    idname: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    idname: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    idname?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    idname?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    idname?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    idname: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    idname?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Characters?: boolean | Users$CharactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    idname?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Characters?: boolean | Users$CharactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Characters: Prisma.$CharactersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      idname: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Characters<T extends Users$CharactersArgs<ExtArgs> = {}>(args?: Subset<T, Users$CharactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'Int'>
    readonly idname: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.Characters
   */
  export type Users$CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    cursor?: CharactersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    characterId: number | null
    UserId: number | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersSumAggregateOutputType = {
    characterId: number | null
    UserId: number | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersMinAggregateOutputType = {
    characterId: number | null
    name: string | null
    UserId: number | null
    health: number | null
    power: number | null
    money: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersMaxAggregateOutputType = {
    characterId: number | null
    name: string | null
    UserId: number | null
    health: number | null
    power: number | null
    money: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersCountAggregateOutputType = {
    characterId: number
    name: number
    UserId: number
    health: number
    power: number
    money: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    characterId?: true
    UserId?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersSumAggregateInputType = {
    characterId?: true
    UserId?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersMinAggregateInputType = {
    characterId?: true
    name?: true
    UserId?: true
    health?: true
    power?: true
    money?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersMaxAggregateInputType = {
    characterId?: true
    name?: true
    UserId?: true
    health?: true
    power?: true
    money?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersCountAggregateInputType = {
    characterId?: true
    name?: true
    UserId?: true
    health?: true
    power?: true
    money?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    characterId: number
    name: string
    UserId: number
    health: number | null
    power: number | null
    money: number | null
    createdAt: Date
    updatedAt: Date
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    name?: boolean
    UserId?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Characterinventories?: boolean | Characters$CharacterinventoriesArgs<ExtArgs>
    EquippedItems?: boolean | Characters$EquippedItemsArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectScalar = {
    characterId?: boolean
    name?: boolean
    UserId?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Characterinventories?: boolean | Characters$CharacterinventoriesArgs<ExtArgs>
    EquippedItems?: boolean | Characters$EquippedItemsArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Characterinventories: Prisma.$CharacterinventoriesPayload<ExtArgs> | null
      EquippedItems: Prisma.$EquippedItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      name: string
      UserId: number
      health: number | null
      power: number | null
      money: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }


  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharactersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharactersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const charactersWithCharacterIdOnly = await prisma.characters.findMany({ select: { characterId: true } })
     * 
    **/
    findMany<T extends CharactersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
    **/
    create<T extends CharactersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharactersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
    **/
    delete<T extends CharactersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharactersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharactersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharactersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
    **/
    upsert<T extends CharactersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Characterinventories<T extends Characters$CharacterinventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Characters$CharacterinventoriesArgs<ExtArgs>>): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    EquippedItems<T extends Characters$EquippedItemsArgs<ExtArgs> = {}>(args?: Subset<T, Characters$EquippedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Characters model
   */ 
  interface CharactersFieldRefs {
    readonly characterId: FieldRef<"Characters", 'Int'>
    readonly name: FieldRef<"Characters", 'String'>
    readonly UserId: FieldRef<"Characters", 'Int'>
    readonly health: FieldRef<"Characters", 'Int'>
    readonly power: FieldRef<"Characters", 'Int'>
    readonly money: FieldRef<"Characters", 'Int'>
    readonly createdAt: FieldRef<"Characters", 'DateTime'>
    readonly updatedAt: FieldRef<"Characters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters.Characterinventories
   */
  export type Characters$CharacterinventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    where?: CharacterinventoriesWhereInput
  }

  /**
   * Characters.EquippedItems
   */
  export type Characters$EquippedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    where?: EquippedItemsWhereInput
    orderBy?: EquippedItemsOrderByWithRelationInput | EquippedItemsOrderByWithRelationInput[]
    cursor?: EquippedItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquippedItemsScalarFieldEnum | EquippedItemsScalarFieldEnum[]
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model Characterinventories
   */

  export type AggregateCharacterinventories = {
    _count: CharacterinventoriesCountAggregateOutputType | null
    _avg: CharacterinventoriesAvgAggregateOutputType | null
    _sum: CharacterinventoriesSumAggregateOutputType | null
    _min: CharacterinventoriesMinAggregateOutputType | null
    _max: CharacterinventoriesMaxAggregateOutputType | null
  }

  export type CharacterinventoriesAvgAggregateOutputType = {
    inventoryId: number | null
    CharacterId: number | null
  }

  export type CharacterinventoriesSumAggregateOutputType = {
    inventoryId: number | null
    CharacterId: number | null
  }

  export type CharacterinventoriesMinAggregateOutputType = {
    inventoryId: number | null
    CharacterId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterinventoriesMaxAggregateOutputType = {
    inventoryId: number | null
    CharacterId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterinventoriesCountAggregateOutputType = {
    inventoryId: number
    CharacterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterinventoriesAvgAggregateInputType = {
    inventoryId?: true
    CharacterId?: true
  }

  export type CharacterinventoriesSumAggregateInputType = {
    inventoryId?: true
    CharacterId?: true
  }

  export type CharacterinventoriesMinAggregateInputType = {
    inventoryId?: true
    CharacterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterinventoriesMaxAggregateInputType = {
    inventoryId?: true
    CharacterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterinventoriesCountAggregateInputType = {
    inventoryId?: true
    CharacterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterinventoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characterinventories to aggregate.
     */
    where?: CharacterinventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterinventories to fetch.
     */
    orderBy?: CharacterinventoriesOrderByWithRelationInput | CharacterinventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterinventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterinventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterinventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characterinventories
    **/
    _count?: true | CharacterinventoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterinventoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterinventoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterinventoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterinventoriesMaxAggregateInputType
  }

  export type GetCharacterinventoriesAggregateType<T extends CharacterinventoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterinventories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterinventories[P]>
      : GetScalarType<T[P], AggregateCharacterinventories[P]>
  }




  export type CharacterinventoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterinventoriesWhereInput
    orderBy?: CharacterinventoriesOrderByWithAggregationInput | CharacterinventoriesOrderByWithAggregationInput[]
    by: CharacterinventoriesScalarFieldEnum[] | CharacterinventoriesScalarFieldEnum
    having?: CharacterinventoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterinventoriesCountAggregateInputType | true
    _avg?: CharacterinventoriesAvgAggregateInputType
    _sum?: CharacterinventoriesSumAggregateInputType
    _min?: CharacterinventoriesMinAggregateInputType
    _max?: CharacterinventoriesMaxAggregateInputType
  }

  export type CharacterinventoriesGroupByOutputType = {
    inventoryId: number
    CharacterId: number
    createdAt: Date
    updatedAt: Date
    _count: CharacterinventoriesCountAggregateOutputType | null
    _avg: CharacterinventoriesAvgAggregateOutputType | null
    _sum: CharacterinventoriesSumAggregateOutputType | null
    _min: CharacterinventoriesMinAggregateOutputType | null
    _max: CharacterinventoriesMaxAggregateOutputType | null
  }

  type GetCharacterinventoriesGroupByPayload<T extends CharacterinventoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterinventoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterinventoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterinventoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterinventoriesGroupByOutputType[P]>
        }
      >
    >


  export type CharacterinventoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryId?: boolean
    CharacterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
    EquippedItems?: boolean | Characterinventories$EquippedItemsArgs<ExtArgs>
    _count?: boolean | CharacterinventoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterinventories"]>

  export type CharacterinventoriesSelectScalar = {
    inventoryId?: boolean
    CharacterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type CharacterinventoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
    EquippedItems?: boolean | Characterinventories$EquippedItemsArgs<ExtArgs>
    _count?: boolean | CharacterinventoriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CharacterinventoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characterinventories"
    objects: {
      Character: Prisma.$CharactersPayload<ExtArgs>
      EquippedItems: Prisma.$EquippedItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      inventoryId: number
      CharacterId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characterinventories"]>
    composites: {}
  }


  type CharacterinventoriesGetPayload<S extends boolean | null | undefined | CharacterinventoriesDefaultArgs> = $Result.GetResult<Prisma.$CharacterinventoriesPayload, S>

  type CharacterinventoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterinventoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterinventoriesCountAggregateInputType | true
    }

  export interface CharacterinventoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characterinventories'], meta: { name: 'Characterinventories' } }
    /**
     * Find zero or one Characterinventories that matches the filter.
     * @param {CharacterinventoriesFindUniqueArgs} args - Arguments to find a Characterinventories
     * @example
     * // Get one Characterinventories
     * const characterinventories = await prisma.characterinventories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterinventoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterinventoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Characterinventories that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterinventoriesFindUniqueOrThrowArgs} args - Arguments to find a Characterinventories
     * @example
     * // Get one Characterinventories
     * const characterinventories = await prisma.characterinventories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharacterinventoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterinventoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Characterinventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesFindFirstArgs} args - Arguments to find a Characterinventories
     * @example
     * // Get one Characterinventories
     * const characterinventories = await prisma.characterinventories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterinventoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterinventoriesFindFirstArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Characterinventories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesFindFirstOrThrowArgs} args - Arguments to find a Characterinventories
     * @example
     * // Get one Characterinventories
     * const characterinventories = await prisma.characterinventories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharacterinventoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterinventoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Characterinventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characterinventories
     * const characterinventories = await prisma.characterinventories.findMany()
     * 
     * // Get first 10 Characterinventories
     * const characterinventories = await prisma.characterinventories.findMany({ take: 10 })
     * 
     * // Only select the `inventoryId`
     * const characterinventoriesWithInventoryIdOnly = await prisma.characterinventories.findMany({ select: { inventoryId: true } })
     * 
    **/
    findMany<T extends CharacterinventoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterinventoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Characterinventories.
     * @param {CharacterinventoriesCreateArgs} args - Arguments to create a Characterinventories.
     * @example
     * // Create one Characterinventories
     * const Characterinventories = await prisma.characterinventories.create({
     *   data: {
     *     // ... data to create a Characterinventories
     *   }
     * })
     * 
    **/
    create<T extends CharacterinventoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterinventoriesCreateArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Characterinventories.
     * @param {CharacterinventoriesCreateManyArgs} args - Arguments to create many Characterinventories.
     * @example
     * // Create many Characterinventories
     * const characterinventories = await prisma.characterinventories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharacterinventoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterinventoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characterinventories.
     * @param {CharacterinventoriesDeleteArgs} args - Arguments to delete one Characterinventories.
     * @example
     * // Delete one Characterinventories
     * const Characterinventories = await prisma.characterinventories.delete({
     *   where: {
     *     // ... filter to delete one Characterinventories
     *   }
     * })
     * 
    **/
    delete<T extends CharacterinventoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterinventoriesDeleteArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Characterinventories.
     * @param {CharacterinventoriesUpdateArgs} args - Arguments to update one Characterinventories.
     * @example
     * // Update one Characterinventories
     * const characterinventories = await prisma.characterinventories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterinventoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterinventoriesUpdateArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Characterinventories.
     * @param {CharacterinventoriesDeleteManyArgs} args - Arguments to filter Characterinventories to delete.
     * @example
     * // Delete a few Characterinventories
     * const { count } = await prisma.characterinventories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterinventoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterinventoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characterinventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characterinventories
     * const characterinventories = await prisma.characterinventories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterinventoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterinventoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characterinventories.
     * @param {CharacterinventoriesUpsertArgs} args - Arguments to update or create a Characterinventories.
     * @example
     * // Update or create a Characterinventories
     * const characterinventories = await prisma.characterinventories.upsert({
     *   create: {
     *     // ... data to create a Characterinventories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characterinventories we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterinventoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterinventoriesUpsertArgs<ExtArgs>>
    ): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Characterinventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesCountArgs} args - Arguments to filter Characterinventories to count.
     * @example
     * // Count the number of Characterinventories
     * const count = await prisma.characterinventories.count({
     *   where: {
     *     // ... the filter for the Characterinventories we want to count
     *   }
     * })
    **/
    count<T extends CharacterinventoriesCountArgs>(
      args?: Subset<T, CharacterinventoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterinventoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characterinventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterinventoriesAggregateArgs>(args: Subset<T, CharacterinventoriesAggregateArgs>): Prisma.PrismaPromise<GetCharacterinventoriesAggregateType<T>>

    /**
     * Group by Characterinventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterinventoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterinventoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterinventoriesGroupByArgs['orderBy'] }
        : { orderBy?: CharacterinventoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterinventoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterinventoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characterinventories model
   */
  readonly fields: CharacterinventoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characterinventories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterinventoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    EquippedItems<T extends Characterinventories$EquippedItemsArgs<ExtArgs> = {}>(args?: Subset<T, Characterinventories$EquippedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Characterinventories model
   */ 
  interface CharacterinventoriesFieldRefs {
    readonly inventoryId: FieldRef<"Characterinventories", 'Int'>
    readonly CharacterId: FieldRef<"Characterinventories", 'Int'>
    readonly createdAt: FieldRef<"Characterinventories", 'DateTime'>
    readonly updatedAt: FieldRef<"Characterinventories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characterinventories findUnique
   */
  export type CharacterinventoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * Filter, which Characterinventories to fetch.
     */
    where: CharacterinventoriesWhereUniqueInput
  }

  /**
   * Characterinventories findUniqueOrThrow
   */
  export type CharacterinventoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * Filter, which Characterinventories to fetch.
     */
    where: CharacterinventoriesWhereUniqueInput
  }

  /**
   * Characterinventories findFirst
   */
  export type CharacterinventoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * Filter, which Characterinventories to fetch.
     */
    where?: CharacterinventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterinventories to fetch.
     */
    orderBy?: CharacterinventoriesOrderByWithRelationInput | CharacterinventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characterinventories.
     */
    cursor?: CharacterinventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterinventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterinventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characterinventories.
     */
    distinct?: CharacterinventoriesScalarFieldEnum | CharacterinventoriesScalarFieldEnum[]
  }

  /**
   * Characterinventories findFirstOrThrow
   */
  export type CharacterinventoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * Filter, which Characterinventories to fetch.
     */
    where?: CharacterinventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterinventories to fetch.
     */
    orderBy?: CharacterinventoriesOrderByWithRelationInput | CharacterinventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characterinventories.
     */
    cursor?: CharacterinventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterinventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterinventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characterinventories.
     */
    distinct?: CharacterinventoriesScalarFieldEnum | CharacterinventoriesScalarFieldEnum[]
  }

  /**
   * Characterinventories findMany
   */
  export type CharacterinventoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * Filter, which Characterinventories to fetch.
     */
    where?: CharacterinventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterinventories to fetch.
     */
    orderBy?: CharacterinventoriesOrderByWithRelationInput | CharacterinventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characterinventories.
     */
    cursor?: CharacterinventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterinventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterinventories.
     */
    skip?: number
    distinct?: CharacterinventoriesScalarFieldEnum | CharacterinventoriesScalarFieldEnum[]
  }

  /**
   * Characterinventories create
   */
  export type CharacterinventoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Characterinventories.
     */
    data: XOR<CharacterinventoriesCreateInput, CharacterinventoriesUncheckedCreateInput>
  }

  /**
   * Characterinventories createMany
   */
  export type CharacterinventoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characterinventories.
     */
    data: CharacterinventoriesCreateManyInput | CharacterinventoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characterinventories update
   */
  export type CharacterinventoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Characterinventories.
     */
    data: XOR<CharacterinventoriesUpdateInput, CharacterinventoriesUncheckedUpdateInput>
    /**
     * Choose, which Characterinventories to update.
     */
    where: CharacterinventoriesWhereUniqueInput
  }

  /**
   * Characterinventories updateMany
   */
  export type CharacterinventoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characterinventories.
     */
    data: XOR<CharacterinventoriesUpdateManyMutationInput, CharacterinventoriesUncheckedUpdateManyInput>
    /**
     * Filter which Characterinventories to update
     */
    where?: CharacterinventoriesWhereInput
  }

  /**
   * Characterinventories upsert
   */
  export type CharacterinventoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Characterinventories to update in case it exists.
     */
    where: CharacterinventoriesWhereUniqueInput
    /**
     * In case the Characterinventories found by the `where` argument doesn't exist, create a new Characterinventories with this data.
     */
    create: XOR<CharacterinventoriesCreateInput, CharacterinventoriesUncheckedCreateInput>
    /**
     * In case the Characterinventories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterinventoriesUpdateInput, CharacterinventoriesUncheckedUpdateInput>
  }

  /**
   * Characterinventories delete
   */
  export type CharacterinventoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
    /**
     * Filter which Characterinventories to delete.
     */
    where: CharacterinventoriesWhereUniqueInput
  }

  /**
   * Characterinventories deleteMany
   */
  export type CharacterinventoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characterinventories to delete
     */
    where?: CharacterinventoriesWhereInput
  }

  /**
   * Characterinventories.EquippedItems
   */
  export type Characterinventories$EquippedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    where?: EquippedItemsWhereInput
    orderBy?: EquippedItemsOrderByWithRelationInput | EquippedItemsOrderByWithRelationInput[]
    cursor?: EquippedItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquippedItemsScalarFieldEnum | EquippedItemsScalarFieldEnum[]
  }

  /**
   * Characterinventories without action
   */
  export type CharacterinventoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterinventories
     */
    select?: CharacterinventoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterinventoriesInclude<ExtArgs> | null
  }


  /**
   * Model EquippedItems
   */

  export type AggregateEquippedItems = {
    _count: EquippedItemsCountAggregateOutputType | null
    _avg: EquippedItemsAvgAggregateOutputType | null
    _sum: EquippedItemsSumAggregateOutputType | null
    _min: EquippedItemsMinAggregateOutputType | null
    _max: EquippedItemsMaxAggregateOutputType | null
  }

  export type EquippedItemsAvgAggregateOutputType = {
    equippedItemId: number | null
    CharacterId: number | null
    InventoryId: number | null
  }

  export type EquippedItemsSumAggregateOutputType = {
    equippedItemId: number | null
    CharacterId: number | null
    InventoryId: number | null
  }

  export type EquippedItemsMinAggregateOutputType = {
    equippedItemId: number | null
    CharacterId: number | null
    InventoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquippedItemsMaxAggregateOutputType = {
    equippedItemId: number | null
    CharacterId: number | null
    InventoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquippedItemsCountAggregateOutputType = {
    equippedItemId: number
    CharacterId: number
    InventoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquippedItemsAvgAggregateInputType = {
    equippedItemId?: true
    CharacterId?: true
    InventoryId?: true
  }

  export type EquippedItemsSumAggregateInputType = {
    equippedItemId?: true
    CharacterId?: true
    InventoryId?: true
  }

  export type EquippedItemsMinAggregateInputType = {
    equippedItemId?: true
    CharacterId?: true
    InventoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquippedItemsMaxAggregateInputType = {
    equippedItemId?: true
    CharacterId?: true
    InventoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquippedItemsCountAggregateInputType = {
    equippedItemId?: true
    CharacterId?: true
    InventoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquippedItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquippedItems to aggregate.
     */
    where?: EquippedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemsOrderByWithRelationInput | EquippedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquippedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquippedItems
    **/
    _count?: true | EquippedItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquippedItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquippedItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquippedItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquippedItemsMaxAggregateInputType
  }

  export type GetEquippedItemsAggregateType<T extends EquippedItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateEquippedItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquippedItems[P]>
      : GetScalarType<T[P], AggregateEquippedItems[P]>
  }




  export type EquippedItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquippedItemsWhereInput
    orderBy?: EquippedItemsOrderByWithAggregationInput | EquippedItemsOrderByWithAggregationInput[]
    by: EquippedItemsScalarFieldEnum[] | EquippedItemsScalarFieldEnum
    having?: EquippedItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquippedItemsCountAggregateInputType | true
    _avg?: EquippedItemsAvgAggregateInputType
    _sum?: EquippedItemsSumAggregateInputType
    _min?: EquippedItemsMinAggregateInputType
    _max?: EquippedItemsMaxAggregateInputType
  }

  export type EquippedItemsGroupByOutputType = {
    equippedItemId: number
    CharacterId: number
    InventoryId: number
    createdAt: Date
    updatedAt: Date
    _count: EquippedItemsCountAggregateOutputType | null
    _avg: EquippedItemsAvgAggregateOutputType | null
    _sum: EquippedItemsSumAggregateOutputType | null
    _min: EquippedItemsMinAggregateOutputType | null
    _max: EquippedItemsMaxAggregateOutputType | null
  }

  type GetEquippedItemsGroupByPayload<T extends EquippedItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquippedItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquippedItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquippedItemsGroupByOutputType[P]>
            : GetScalarType<T[P], EquippedItemsGroupByOutputType[P]>
        }
      >
    >


  export type EquippedItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    equippedItemId?: boolean
    CharacterId?: boolean
    InventoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
    Characterinventory?: boolean | CharacterinventoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equippedItems"]>

  export type EquippedItemsSelectScalar = {
    equippedItemId?: boolean
    CharacterId?: boolean
    InventoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type EquippedItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
    Characterinventory?: boolean | CharacterinventoriesDefaultArgs<ExtArgs>
  }


  export type $EquippedItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquippedItems"
    objects: {
      Character: Prisma.$CharactersPayload<ExtArgs>
      Characterinventory: Prisma.$CharacterinventoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      equippedItemId: number
      CharacterId: number
      InventoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equippedItems"]>
    composites: {}
  }


  type EquippedItemsGetPayload<S extends boolean | null | undefined | EquippedItemsDefaultArgs> = $Result.GetResult<Prisma.$EquippedItemsPayload, S>

  type EquippedItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquippedItemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EquippedItemsCountAggregateInputType | true
    }

  export interface EquippedItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquippedItems'], meta: { name: 'EquippedItems' } }
    /**
     * Find zero or one EquippedItems that matches the filter.
     * @param {EquippedItemsFindUniqueArgs} args - Arguments to find a EquippedItems
     * @example
     * // Get one EquippedItems
     * const equippedItems = await prisma.equippedItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EquippedItemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EquippedItemsFindUniqueArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EquippedItems that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EquippedItemsFindUniqueOrThrowArgs} args - Arguments to find a EquippedItems
     * @example
     * // Get one EquippedItems
     * const equippedItems = await prisma.equippedItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EquippedItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquippedItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EquippedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsFindFirstArgs} args - Arguments to find a EquippedItems
     * @example
     * // Get one EquippedItems
     * const equippedItems = await prisma.equippedItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EquippedItemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EquippedItemsFindFirstArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EquippedItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsFindFirstOrThrowArgs} args - Arguments to find a EquippedItems
     * @example
     * // Get one EquippedItems
     * const equippedItems = await prisma.equippedItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EquippedItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquippedItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EquippedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquippedItems
     * const equippedItems = await prisma.equippedItems.findMany()
     * 
     * // Get first 10 EquippedItems
     * const equippedItems = await prisma.equippedItems.findMany({ take: 10 })
     * 
     * // Only select the `equippedItemId`
     * const equippedItemsWithEquippedItemIdOnly = await prisma.equippedItems.findMany({ select: { equippedItemId: true } })
     * 
    **/
    findMany<T extends EquippedItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquippedItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EquippedItems.
     * @param {EquippedItemsCreateArgs} args - Arguments to create a EquippedItems.
     * @example
     * // Create one EquippedItems
     * const EquippedItems = await prisma.equippedItems.create({
     *   data: {
     *     // ... data to create a EquippedItems
     *   }
     * })
     * 
    **/
    create<T extends EquippedItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EquippedItemsCreateArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EquippedItems.
     * @param {EquippedItemsCreateManyArgs} args - Arguments to create many EquippedItems.
     * @example
     * // Create many EquippedItems
     * const equippedItems = await prisma.equippedItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EquippedItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquippedItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EquippedItems.
     * @param {EquippedItemsDeleteArgs} args - Arguments to delete one EquippedItems.
     * @example
     * // Delete one EquippedItems
     * const EquippedItems = await prisma.equippedItems.delete({
     *   where: {
     *     // ... filter to delete one EquippedItems
     *   }
     * })
     * 
    **/
    delete<T extends EquippedItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EquippedItemsDeleteArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EquippedItems.
     * @param {EquippedItemsUpdateArgs} args - Arguments to update one EquippedItems.
     * @example
     * // Update one EquippedItems
     * const equippedItems = await prisma.equippedItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EquippedItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EquippedItemsUpdateArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EquippedItems.
     * @param {EquippedItemsDeleteManyArgs} args - Arguments to filter EquippedItems to delete.
     * @example
     * // Delete a few EquippedItems
     * const { count } = await prisma.equippedItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EquippedItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquippedItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquippedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquippedItems
     * const equippedItems = await prisma.equippedItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EquippedItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EquippedItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EquippedItems.
     * @param {EquippedItemsUpsertArgs} args - Arguments to update or create a EquippedItems.
     * @example
     * // Update or create a EquippedItems
     * const equippedItems = await prisma.equippedItems.upsert({
     *   create: {
     *     // ... data to create a EquippedItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquippedItems we want to update
     *   }
     * })
    **/
    upsert<T extends EquippedItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EquippedItemsUpsertArgs<ExtArgs>>
    ): Prisma__EquippedItemsClient<$Result.GetResult<Prisma.$EquippedItemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EquippedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsCountArgs} args - Arguments to filter EquippedItems to count.
     * @example
     * // Count the number of EquippedItems
     * const count = await prisma.equippedItems.count({
     *   where: {
     *     // ... the filter for the EquippedItems we want to count
     *   }
     * })
    **/
    count<T extends EquippedItemsCountArgs>(
      args?: Subset<T, EquippedItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquippedItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquippedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquippedItemsAggregateArgs>(args: Subset<T, EquippedItemsAggregateArgs>): Prisma.PrismaPromise<GetEquippedItemsAggregateType<T>>

    /**
     * Group by EquippedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquippedItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquippedItemsGroupByArgs['orderBy'] }
        : { orderBy?: EquippedItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquippedItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquippedItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquippedItems model
   */
  readonly fields: EquippedItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquippedItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquippedItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Characterinventory<T extends CharacterinventoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterinventoriesDefaultArgs<ExtArgs>>): Prisma__CharacterinventoriesClient<$Result.GetResult<Prisma.$CharacterinventoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EquippedItems model
   */ 
  interface EquippedItemsFieldRefs {
    readonly equippedItemId: FieldRef<"EquippedItems", 'Int'>
    readonly CharacterId: FieldRef<"EquippedItems", 'Int'>
    readonly InventoryId: FieldRef<"EquippedItems", 'Int'>
    readonly createdAt: FieldRef<"EquippedItems", 'DateTime'>
    readonly updatedAt: FieldRef<"EquippedItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquippedItems findUnique
   */
  export type EquippedItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItems to fetch.
     */
    where: EquippedItemsWhereUniqueInput
  }

  /**
   * EquippedItems findUniqueOrThrow
   */
  export type EquippedItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItems to fetch.
     */
    where: EquippedItemsWhereUniqueInput
  }

  /**
   * EquippedItems findFirst
   */
  export type EquippedItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItems to fetch.
     */
    where?: EquippedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemsOrderByWithRelationInput | EquippedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquippedItems.
     */
    cursor?: EquippedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquippedItems.
     */
    distinct?: EquippedItemsScalarFieldEnum | EquippedItemsScalarFieldEnum[]
  }

  /**
   * EquippedItems findFirstOrThrow
   */
  export type EquippedItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItems to fetch.
     */
    where?: EquippedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemsOrderByWithRelationInput | EquippedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquippedItems.
     */
    cursor?: EquippedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquippedItems.
     */
    distinct?: EquippedItemsScalarFieldEnum | EquippedItemsScalarFieldEnum[]
  }

  /**
   * EquippedItems findMany
   */
  export type EquippedItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItems to fetch.
     */
    where?: EquippedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemsOrderByWithRelationInput | EquippedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquippedItems.
     */
    cursor?: EquippedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    distinct?: EquippedItemsScalarFieldEnum | EquippedItemsScalarFieldEnum[]
  }

  /**
   * EquippedItems create
   */
  export type EquippedItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a EquippedItems.
     */
    data: XOR<EquippedItemsCreateInput, EquippedItemsUncheckedCreateInput>
  }

  /**
   * EquippedItems createMany
   */
  export type EquippedItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquippedItems.
     */
    data: EquippedItemsCreateManyInput | EquippedItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquippedItems update
   */
  export type EquippedItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a EquippedItems.
     */
    data: XOR<EquippedItemsUpdateInput, EquippedItemsUncheckedUpdateInput>
    /**
     * Choose, which EquippedItems to update.
     */
    where: EquippedItemsWhereUniqueInput
  }

  /**
   * EquippedItems updateMany
   */
  export type EquippedItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquippedItems.
     */
    data: XOR<EquippedItemsUpdateManyMutationInput, EquippedItemsUncheckedUpdateManyInput>
    /**
     * Filter which EquippedItems to update
     */
    where?: EquippedItemsWhereInput
  }

  /**
   * EquippedItems upsert
   */
  export type EquippedItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the EquippedItems to update in case it exists.
     */
    where: EquippedItemsWhereUniqueInput
    /**
     * In case the EquippedItems found by the `where` argument doesn't exist, create a new EquippedItems with this data.
     */
    create: XOR<EquippedItemsCreateInput, EquippedItemsUncheckedCreateInput>
    /**
     * In case the EquippedItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquippedItemsUpdateInput, EquippedItemsUncheckedUpdateInput>
  }

  /**
   * EquippedItems delete
   */
  export type EquippedItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
    /**
     * Filter which EquippedItems to delete.
     */
    where: EquippedItemsWhereUniqueInput
  }

  /**
   * EquippedItems deleteMany
   */
  export type EquippedItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquippedItems to delete
     */
    where?: EquippedItemsWhereInput
  }

  /**
   * EquippedItems without action
   */
  export type EquippedItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItems
     */
    select?: EquippedItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    idname: 'idname',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    characterId: 'characterId',
    name: 'name',
    UserId: 'UserId',
    health: 'health',
    power: 'power',
    money: 'money',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const CharacterinventoriesScalarFieldEnum: {
    inventoryId: 'inventoryId',
    CharacterId: 'CharacterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterinventoriesScalarFieldEnum = (typeof CharacterinventoriesScalarFieldEnum)[keyof typeof CharacterinventoriesScalarFieldEnum]


  export const EquippedItemsScalarFieldEnum: {
    equippedItemId: 'equippedItemId',
    CharacterId: 'CharacterId',
    InventoryId: 'InventoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquippedItemsScalarFieldEnum = (typeof EquippedItemsScalarFieldEnum)[keyof typeof EquippedItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: IntFilter<"Users"> | number
    idname?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Characters?: CharactersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    idname?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Characters?: CharactersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    idname?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Characters?: CharactersListRelationFilter
  }, "userId" | "idname">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    idname?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Users"> | number
    idname?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    name?: StringFilter<"Characters"> | string
    UserId?: IntFilter<"Characters"> | number
    health?: IntNullableFilter<"Characters"> | number | null
    power?: IntNullableFilter<"Characters"> | number | null
    money?: IntNullableFilter<"Characters"> | number | null
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    User?: XOR<UsersRelationFilter, UsersWhereInput>
    Characterinventories?: XOR<CharacterinventoriesNullableRelationFilter, CharacterinventoriesWhereInput> | null
    EquippedItems?: EquippedItemsListRelationFilter
  }

  export type CharactersOrderByWithRelationInput = {
    characterId?: SortOrder
    name?: SortOrder
    UserId?: SortOrder
    health?: SortOrderInput | SortOrder
    power?: SortOrderInput | SortOrder
    money?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UsersOrderByWithRelationInput
    Characterinventories?: CharacterinventoriesOrderByWithRelationInput
    EquippedItems?: EquippedItemsOrderByRelationAggregateInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    name?: string
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    UserId?: IntFilter<"Characters"> | number
    health?: IntNullableFilter<"Characters"> | number | null
    power?: IntNullableFilter<"Characters"> | number | null
    money?: IntNullableFilter<"Characters"> | number | null
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    User?: XOR<UsersRelationFilter, UsersWhereInput>
    Characterinventories?: XOR<CharacterinventoriesNullableRelationFilter, CharacterinventoriesWhereInput> | null
    EquippedItems?: EquippedItemsListRelationFilter
  }, "characterId" | "name">

  export type CharactersOrderByWithAggregationInput = {
    characterId?: SortOrder
    name?: SortOrder
    UserId?: SortOrder
    health?: SortOrderInput | SortOrder
    power?: SortOrderInput | SortOrder
    money?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Characters"> | number
    name?: StringWithAggregatesFilter<"Characters"> | string
    UserId?: IntWithAggregatesFilter<"Characters"> | number
    health?: IntNullableWithAggregatesFilter<"Characters"> | number | null
    power?: IntNullableWithAggregatesFilter<"Characters"> | number | null
    money?: IntNullableWithAggregatesFilter<"Characters"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
  }

  export type CharacterinventoriesWhereInput = {
    AND?: CharacterinventoriesWhereInput | CharacterinventoriesWhereInput[]
    OR?: CharacterinventoriesWhereInput[]
    NOT?: CharacterinventoriesWhereInput | CharacterinventoriesWhereInput[]
    inventoryId?: IntFilter<"Characterinventories"> | number
    CharacterId?: IntFilter<"Characterinventories"> | number
    createdAt?: DateTimeFilter<"Characterinventories"> | Date | string
    updatedAt?: DateTimeFilter<"Characterinventories"> | Date | string
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
    EquippedItems?: EquippedItemsListRelationFilter
  }

  export type CharacterinventoriesOrderByWithRelationInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Character?: CharactersOrderByWithRelationInput
    EquippedItems?: EquippedItemsOrderByRelationAggregateInput
  }

  export type CharacterinventoriesWhereUniqueInput = Prisma.AtLeast<{
    inventoryId?: number
    CharacterId?: number
    AND?: CharacterinventoriesWhereInput | CharacterinventoriesWhereInput[]
    OR?: CharacterinventoriesWhereInput[]
    NOT?: CharacterinventoriesWhereInput | CharacterinventoriesWhereInput[]
    createdAt?: DateTimeFilter<"Characterinventories"> | Date | string
    updatedAt?: DateTimeFilter<"Characterinventories"> | Date | string
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
    EquippedItems?: EquippedItemsListRelationFilter
  }, "inventoryId" | "CharacterId">

  export type CharacterinventoriesOrderByWithAggregationInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterinventoriesCountOrderByAggregateInput
    _avg?: CharacterinventoriesAvgOrderByAggregateInput
    _max?: CharacterinventoriesMaxOrderByAggregateInput
    _min?: CharacterinventoriesMinOrderByAggregateInput
    _sum?: CharacterinventoriesSumOrderByAggregateInput
  }

  export type CharacterinventoriesScalarWhereWithAggregatesInput = {
    AND?: CharacterinventoriesScalarWhereWithAggregatesInput | CharacterinventoriesScalarWhereWithAggregatesInput[]
    OR?: CharacterinventoriesScalarWhereWithAggregatesInput[]
    NOT?: CharacterinventoriesScalarWhereWithAggregatesInput | CharacterinventoriesScalarWhereWithAggregatesInput[]
    inventoryId?: IntWithAggregatesFilter<"Characterinventories"> | number
    CharacterId?: IntWithAggregatesFilter<"Characterinventories"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Characterinventories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characterinventories"> | Date | string
  }

  export type EquippedItemsWhereInput = {
    AND?: EquippedItemsWhereInput | EquippedItemsWhereInput[]
    OR?: EquippedItemsWhereInput[]
    NOT?: EquippedItemsWhereInput | EquippedItemsWhereInput[]
    equippedItemId?: IntFilter<"EquippedItems"> | number
    CharacterId?: IntFilter<"EquippedItems"> | number
    InventoryId?: IntFilter<"EquippedItems"> | number
    createdAt?: DateTimeFilter<"EquippedItems"> | Date | string
    updatedAt?: DateTimeFilter<"EquippedItems"> | Date | string
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
    Characterinventory?: XOR<CharacterinventoriesRelationFilter, CharacterinventoriesWhereInput>
  }

  export type EquippedItemsOrderByWithRelationInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Character?: CharactersOrderByWithRelationInput
    Characterinventory?: CharacterinventoriesOrderByWithRelationInput
  }

  export type EquippedItemsWhereUniqueInput = Prisma.AtLeast<{
    equippedItemId?: number
    AND?: EquippedItemsWhereInput | EquippedItemsWhereInput[]
    OR?: EquippedItemsWhereInput[]
    NOT?: EquippedItemsWhereInput | EquippedItemsWhereInput[]
    CharacterId?: IntFilter<"EquippedItems"> | number
    InventoryId?: IntFilter<"EquippedItems"> | number
    createdAt?: DateTimeFilter<"EquippedItems"> | Date | string
    updatedAt?: DateTimeFilter<"EquippedItems"> | Date | string
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
    Characterinventory?: XOR<CharacterinventoriesRelationFilter, CharacterinventoriesWhereInput>
  }, "equippedItemId">

  export type EquippedItemsOrderByWithAggregationInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquippedItemsCountOrderByAggregateInput
    _avg?: EquippedItemsAvgOrderByAggregateInput
    _max?: EquippedItemsMaxOrderByAggregateInput
    _min?: EquippedItemsMinOrderByAggregateInput
    _sum?: EquippedItemsSumOrderByAggregateInput
  }

  export type EquippedItemsScalarWhereWithAggregatesInput = {
    AND?: EquippedItemsScalarWhereWithAggregatesInput | EquippedItemsScalarWhereWithAggregatesInput[]
    OR?: EquippedItemsScalarWhereWithAggregatesInput[]
    NOT?: EquippedItemsScalarWhereWithAggregatesInput | EquippedItemsScalarWhereWithAggregatesInput[]
    equippedItemId?: IntWithAggregatesFilter<"EquippedItems"> | number
    CharacterId?: IntWithAggregatesFilter<"EquippedItems"> | number
    InventoryId?: IntWithAggregatesFilter<"EquippedItems"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EquippedItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquippedItems"> | Date | string
  }

  export type UsersCreateInput = {
    idname: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Characters?: CharactersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: number
    idname: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Characters?: CharactersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    idname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characters?: CharactersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    idname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characters?: CharactersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: number
    idname: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    idname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    idname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UsersCreateNestedOneWithoutCharactersInput
    Characterinventories?: CharacterinventoriesCreateNestedOneWithoutCharacterInput
    EquippedItems?: EquippedItemsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateInput = {
    characterId?: number
    name: string
    UserId: number
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Characterinventories?: CharacterinventoriesUncheckedCreateNestedOneWithoutCharacterInput
    EquippedItems?: EquippedItemsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    Characterinventories?: CharacterinventoriesUpdateOneWithoutCharacterNestedInput
    EquippedItems?: EquippedItemsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characterinventories?: CharacterinventoriesUncheckedUpdateOneWithoutCharacterNestedInput
    EquippedItems?: EquippedItemsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyInput = {
    characterId?: number
    name: string
    UserId: number
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterinventoriesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Character: CharactersCreateNestedOneWithoutCharacterinventoriesInput
    EquippedItems?: EquippedItemsCreateNestedManyWithoutCharacterinventoryInput
  }

  export type CharacterinventoriesUncheckedCreateInput = {
    inventoryId?: number
    CharacterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    EquippedItems?: EquippedItemsUncheckedCreateNestedManyWithoutCharacterinventoryInput
  }

  export type CharacterinventoriesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharactersUpdateOneRequiredWithoutCharacterinventoriesNestedInput
    EquippedItems?: EquippedItemsUpdateManyWithoutCharacterinventoryNestedInput
  }

  export type CharacterinventoriesUncheckedUpdateInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EquippedItems?: EquippedItemsUncheckedUpdateManyWithoutCharacterinventoryNestedInput
  }

  export type CharacterinventoriesCreateManyInput = {
    inventoryId?: number
    CharacterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterinventoriesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterinventoriesUncheckedUpdateManyInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Character: CharactersCreateNestedOneWithoutEquippedItemsInput
    Characterinventory: CharacterinventoriesCreateNestedOneWithoutEquippedItemsInput
  }

  export type EquippedItemsUncheckedCreateInput = {
    equippedItemId?: number
    CharacterId: number
    InventoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquippedItemsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharactersUpdateOneRequiredWithoutEquippedItemsNestedInput
    Characterinventory?: CharacterinventoriesUpdateOneRequiredWithoutEquippedItemsNestedInput
  }

  export type EquippedItemsUncheckedUpdateInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    InventoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsCreateManyInput = {
    equippedItemId?: number
    CharacterId: number
    InventoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquippedItemsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsUncheckedUpdateManyInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    InventoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CharactersListRelationFilter = {
    every?: CharactersWhereInput
    some?: CharactersWhereInput
    none?: CharactersWhereInput
  }

  export type CharactersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    idname?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    idname?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    idname?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CharacterinventoriesNullableRelationFilter = {
    is?: CharacterinventoriesWhereInput | null
    isNot?: CharacterinventoriesWhereInput | null
  }

  export type EquippedItemsListRelationFilter = {
    every?: EquippedItemsWhereInput
    some?: EquippedItemsWhereInput
    none?: EquippedItemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EquippedItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersCountOrderByAggregateInput = {
    characterId?: SortOrder
    name?: SortOrder
    UserId?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    characterId?: SortOrder
    name?: SortOrder
    UserId?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    characterId?: SortOrder
    name?: SortOrder
    UserId?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    characterId?: SortOrder
    UserId?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CharactersRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type CharacterinventoriesCountOrderByAggregateInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterinventoriesAvgOrderByAggregateInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
  }

  export type CharacterinventoriesMaxOrderByAggregateInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterinventoriesMinOrderByAggregateInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterinventoriesSumOrderByAggregateInput = {
    inventoryId?: SortOrder
    CharacterId?: SortOrder
  }

  export type CharacterinventoriesRelationFilter = {
    is?: CharacterinventoriesWhereInput
    isNot?: CharacterinventoriesWhereInput
  }

  export type EquippedItemsCountOrderByAggregateInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquippedItemsAvgOrderByAggregateInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
  }

  export type EquippedItemsMaxOrderByAggregateInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquippedItemsMinOrderByAggregateInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquippedItemsSumOrderByAggregateInput = {
    equippedItemId?: SortOrder
    CharacterId?: SortOrder
    InventoryId?: SortOrder
  }

  export type CharactersCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type CharactersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CharactersUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharactersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    connect?: UsersWhereUniqueInput
  }

  export type CharacterinventoriesCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterinventoriesCreateWithoutCharacterInput, CharacterinventoriesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterinventoriesCreateOrConnectWithoutCharacterInput
    connect?: CharacterinventoriesWhereUniqueInput
  }

  export type EquippedItemsCreateNestedManyWithoutCharacterInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterInput, EquippedItemsUncheckedCreateWithoutCharacterInput> | EquippedItemsCreateWithoutCharacterInput[] | EquippedItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterInput | EquippedItemsCreateOrConnectWithoutCharacterInput[]
    createMany?: EquippedItemsCreateManyCharacterInputEnvelope
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
  }

  export type CharacterinventoriesUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterinventoriesCreateWithoutCharacterInput, CharacterinventoriesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterinventoriesCreateOrConnectWithoutCharacterInput
    connect?: CharacterinventoriesWhereUniqueInput
  }

  export type EquippedItemsUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterInput, EquippedItemsUncheckedCreateWithoutCharacterInput> | EquippedItemsCreateWithoutCharacterInput[] | EquippedItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterInput | EquippedItemsCreateOrConnectWithoutCharacterInput[]
    createMany?: EquippedItemsCreateManyCharacterInputEnvelope
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    upsert?: UsersUpsertWithoutCharactersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCharactersInput, UsersUpdateWithoutCharactersInput>, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterinventoriesUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterinventoriesCreateWithoutCharacterInput, CharacterinventoriesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterinventoriesCreateOrConnectWithoutCharacterInput
    upsert?: CharacterinventoriesUpsertWithoutCharacterInput
    disconnect?: CharacterinventoriesWhereInput | boolean
    delete?: CharacterinventoriesWhereInput | boolean
    connect?: CharacterinventoriesWhereUniqueInput
    update?: XOR<XOR<CharacterinventoriesUpdateToOneWithWhereWithoutCharacterInput, CharacterinventoriesUpdateWithoutCharacterInput>, CharacterinventoriesUncheckedUpdateWithoutCharacterInput>
  }

  export type EquippedItemsUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterInput, EquippedItemsUncheckedCreateWithoutCharacterInput> | EquippedItemsCreateWithoutCharacterInput[] | EquippedItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterInput | EquippedItemsCreateOrConnectWithoutCharacterInput[]
    upsert?: EquippedItemsUpsertWithWhereUniqueWithoutCharacterInput | EquippedItemsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: EquippedItemsCreateManyCharacterInputEnvelope
    set?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    disconnect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    delete?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    update?: EquippedItemsUpdateWithWhereUniqueWithoutCharacterInput | EquippedItemsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: EquippedItemsUpdateManyWithWhereWithoutCharacterInput | EquippedItemsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: EquippedItemsScalarWhereInput | EquippedItemsScalarWhereInput[]
  }

  export type CharacterinventoriesUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterinventoriesCreateWithoutCharacterInput, CharacterinventoriesUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterinventoriesCreateOrConnectWithoutCharacterInput
    upsert?: CharacterinventoriesUpsertWithoutCharacterInput
    disconnect?: CharacterinventoriesWhereInput | boolean
    delete?: CharacterinventoriesWhereInput | boolean
    connect?: CharacterinventoriesWhereUniqueInput
    update?: XOR<XOR<CharacterinventoriesUpdateToOneWithWhereWithoutCharacterInput, CharacterinventoriesUpdateWithoutCharacterInput>, CharacterinventoriesUncheckedUpdateWithoutCharacterInput>
  }

  export type EquippedItemsUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterInput, EquippedItemsUncheckedCreateWithoutCharacterInput> | EquippedItemsCreateWithoutCharacterInput[] | EquippedItemsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterInput | EquippedItemsCreateOrConnectWithoutCharacterInput[]
    upsert?: EquippedItemsUpsertWithWhereUniqueWithoutCharacterInput | EquippedItemsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: EquippedItemsCreateManyCharacterInputEnvelope
    set?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    disconnect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    delete?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    update?: EquippedItemsUpdateWithWhereUniqueWithoutCharacterInput | EquippedItemsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: EquippedItemsUpdateManyWithWhereWithoutCharacterInput | EquippedItemsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: EquippedItemsScalarWhereInput | EquippedItemsScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutCharacterinventoriesInput = {
    create?: XOR<CharactersCreateWithoutCharacterinventoriesInput, CharactersUncheckedCreateWithoutCharacterinventoriesInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharacterinventoriesInput
    connect?: CharactersWhereUniqueInput
  }

  export type EquippedItemsCreateNestedManyWithoutCharacterinventoryInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterinventoryInput, EquippedItemsUncheckedCreateWithoutCharacterinventoryInput> | EquippedItemsCreateWithoutCharacterinventoryInput[] | EquippedItemsUncheckedCreateWithoutCharacterinventoryInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterinventoryInput | EquippedItemsCreateOrConnectWithoutCharacterinventoryInput[]
    createMany?: EquippedItemsCreateManyCharacterinventoryInputEnvelope
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
  }

  export type EquippedItemsUncheckedCreateNestedManyWithoutCharacterinventoryInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterinventoryInput, EquippedItemsUncheckedCreateWithoutCharacterinventoryInput> | EquippedItemsCreateWithoutCharacterinventoryInput[] | EquippedItemsUncheckedCreateWithoutCharacterinventoryInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterinventoryInput | EquippedItemsCreateOrConnectWithoutCharacterinventoryInput[]
    createMany?: EquippedItemsCreateManyCharacterinventoryInputEnvelope
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
  }

  export type CharactersUpdateOneRequiredWithoutCharacterinventoriesNestedInput = {
    create?: XOR<CharactersCreateWithoutCharacterinventoriesInput, CharactersUncheckedCreateWithoutCharacterinventoriesInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharacterinventoriesInput
    upsert?: CharactersUpsertWithoutCharacterinventoriesInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutCharacterinventoriesInput, CharactersUpdateWithoutCharacterinventoriesInput>, CharactersUncheckedUpdateWithoutCharacterinventoriesInput>
  }

  export type EquippedItemsUpdateManyWithoutCharacterinventoryNestedInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterinventoryInput, EquippedItemsUncheckedCreateWithoutCharacterinventoryInput> | EquippedItemsCreateWithoutCharacterinventoryInput[] | EquippedItemsUncheckedCreateWithoutCharacterinventoryInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterinventoryInput | EquippedItemsCreateOrConnectWithoutCharacterinventoryInput[]
    upsert?: EquippedItemsUpsertWithWhereUniqueWithoutCharacterinventoryInput | EquippedItemsUpsertWithWhereUniqueWithoutCharacterinventoryInput[]
    createMany?: EquippedItemsCreateManyCharacterinventoryInputEnvelope
    set?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    disconnect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    delete?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    update?: EquippedItemsUpdateWithWhereUniqueWithoutCharacterinventoryInput | EquippedItemsUpdateWithWhereUniqueWithoutCharacterinventoryInput[]
    updateMany?: EquippedItemsUpdateManyWithWhereWithoutCharacterinventoryInput | EquippedItemsUpdateManyWithWhereWithoutCharacterinventoryInput[]
    deleteMany?: EquippedItemsScalarWhereInput | EquippedItemsScalarWhereInput[]
  }

  export type EquippedItemsUncheckedUpdateManyWithoutCharacterinventoryNestedInput = {
    create?: XOR<EquippedItemsCreateWithoutCharacterinventoryInput, EquippedItemsUncheckedCreateWithoutCharacterinventoryInput> | EquippedItemsCreateWithoutCharacterinventoryInput[] | EquippedItemsUncheckedCreateWithoutCharacterinventoryInput[]
    connectOrCreate?: EquippedItemsCreateOrConnectWithoutCharacterinventoryInput | EquippedItemsCreateOrConnectWithoutCharacterinventoryInput[]
    upsert?: EquippedItemsUpsertWithWhereUniqueWithoutCharacterinventoryInput | EquippedItemsUpsertWithWhereUniqueWithoutCharacterinventoryInput[]
    createMany?: EquippedItemsCreateManyCharacterinventoryInputEnvelope
    set?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    disconnect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    delete?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    connect?: EquippedItemsWhereUniqueInput | EquippedItemsWhereUniqueInput[]
    update?: EquippedItemsUpdateWithWhereUniqueWithoutCharacterinventoryInput | EquippedItemsUpdateWithWhereUniqueWithoutCharacterinventoryInput[]
    updateMany?: EquippedItemsUpdateManyWithWhereWithoutCharacterinventoryInput | EquippedItemsUpdateManyWithWhereWithoutCharacterinventoryInput[]
    deleteMany?: EquippedItemsScalarWhereInput | EquippedItemsScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutEquippedItemsInput = {
    create?: XOR<CharactersCreateWithoutEquippedItemsInput, CharactersUncheckedCreateWithoutEquippedItemsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutEquippedItemsInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharacterinventoriesCreateNestedOneWithoutEquippedItemsInput = {
    create?: XOR<CharacterinventoriesCreateWithoutEquippedItemsInput, CharacterinventoriesUncheckedCreateWithoutEquippedItemsInput>
    connectOrCreate?: CharacterinventoriesCreateOrConnectWithoutEquippedItemsInput
    connect?: CharacterinventoriesWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutEquippedItemsNestedInput = {
    create?: XOR<CharactersCreateWithoutEquippedItemsInput, CharactersUncheckedCreateWithoutEquippedItemsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutEquippedItemsInput
    upsert?: CharactersUpsertWithoutEquippedItemsInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutEquippedItemsInput, CharactersUpdateWithoutEquippedItemsInput>, CharactersUncheckedUpdateWithoutEquippedItemsInput>
  }

  export type CharacterinventoriesUpdateOneRequiredWithoutEquippedItemsNestedInput = {
    create?: XOR<CharacterinventoriesCreateWithoutEquippedItemsInput, CharacterinventoriesUncheckedCreateWithoutEquippedItemsInput>
    connectOrCreate?: CharacterinventoriesCreateOrConnectWithoutEquippedItemsInput
    upsert?: CharacterinventoriesUpsertWithoutEquippedItemsInput
    connect?: CharacterinventoriesWhereUniqueInput
    update?: XOR<XOR<CharacterinventoriesUpdateToOneWithWhereWithoutEquippedItemsInput, CharacterinventoriesUpdateWithoutEquippedItemsInput>, CharacterinventoriesUncheckedUpdateWithoutEquippedItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CharactersCreateWithoutUserInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Characterinventories?: CharacterinventoriesCreateNestedOneWithoutCharacterInput
    EquippedItems?: EquippedItemsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutUserInput = {
    characterId?: number
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Characterinventories?: CharacterinventoriesUncheckedCreateNestedOneWithoutCharacterInput
    EquippedItems?: EquippedItemsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutUserInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersCreateManyUserInputEnvelope = {
    data: CharactersCreateManyUserInput | CharactersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    update: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersUpdateWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    data: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
  }

  export type CharactersUpdateManyWithWhereWithoutUserInput = {
    where: CharactersScalarWhereInput
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyWithoutUserInput>
  }

  export type CharactersScalarWhereInput = {
    AND?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    OR?: CharactersScalarWhereInput[]
    NOT?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    name?: StringFilter<"Characters"> | string
    UserId?: IntFilter<"Characters"> | number
    health?: IntNullableFilter<"Characters"> | number | null
    power?: IntNullableFilter<"Characters"> | number | null
    money?: IntNullableFilter<"Characters"> | number | null
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
  }

  export type UsersCreateWithoutCharactersInput = {
    idname: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutCharactersInput = {
    userId?: number
    idname: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutCharactersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterinventoriesCreateWithoutCharacterInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    EquippedItems?: EquippedItemsCreateNestedManyWithoutCharacterinventoryInput
  }

  export type CharacterinventoriesUncheckedCreateWithoutCharacterInput = {
    inventoryId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    EquippedItems?: EquippedItemsUncheckedCreateNestedManyWithoutCharacterinventoryInput
  }

  export type CharacterinventoriesCreateOrConnectWithoutCharacterInput = {
    where: CharacterinventoriesWhereUniqueInput
    create: XOR<CharacterinventoriesCreateWithoutCharacterInput, CharacterinventoriesUncheckedCreateWithoutCharacterInput>
  }

  export type EquippedItemsCreateWithoutCharacterInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Characterinventory: CharacterinventoriesCreateNestedOneWithoutEquippedItemsInput
  }

  export type EquippedItemsUncheckedCreateWithoutCharacterInput = {
    equippedItemId?: number
    InventoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquippedItemsCreateOrConnectWithoutCharacterInput = {
    where: EquippedItemsWhereUniqueInput
    create: XOR<EquippedItemsCreateWithoutCharacterInput, EquippedItemsUncheckedCreateWithoutCharacterInput>
  }

  export type EquippedItemsCreateManyCharacterInputEnvelope = {
    data: EquippedItemsCreateManyCharacterInput | EquippedItemsCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCharactersInput = {
    update: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type UsersUpdateWithoutCharactersInput = {
    idname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutCharactersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    idname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterinventoriesUpsertWithoutCharacterInput = {
    update: XOR<CharacterinventoriesUpdateWithoutCharacterInput, CharacterinventoriesUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterinventoriesCreateWithoutCharacterInput, CharacterinventoriesUncheckedCreateWithoutCharacterInput>
    where?: CharacterinventoriesWhereInput
  }

  export type CharacterinventoriesUpdateToOneWithWhereWithoutCharacterInput = {
    where?: CharacterinventoriesWhereInput
    data: XOR<CharacterinventoriesUpdateWithoutCharacterInput, CharacterinventoriesUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterinventoriesUpdateWithoutCharacterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EquippedItems?: EquippedItemsUpdateManyWithoutCharacterinventoryNestedInput
  }

  export type CharacterinventoriesUncheckedUpdateWithoutCharacterInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EquippedItems?: EquippedItemsUncheckedUpdateManyWithoutCharacterinventoryNestedInput
  }

  export type EquippedItemsUpsertWithWhereUniqueWithoutCharacterInput = {
    where: EquippedItemsWhereUniqueInput
    update: XOR<EquippedItemsUpdateWithoutCharacterInput, EquippedItemsUncheckedUpdateWithoutCharacterInput>
    create: XOR<EquippedItemsCreateWithoutCharacterInput, EquippedItemsUncheckedCreateWithoutCharacterInput>
  }

  export type EquippedItemsUpdateWithWhereUniqueWithoutCharacterInput = {
    where: EquippedItemsWhereUniqueInput
    data: XOR<EquippedItemsUpdateWithoutCharacterInput, EquippedItemsUncheckedUpdateWithoutCharacterInput>
  }

  export type EquippedItemsUpdateManyWithWhereWithoutCharacterInput = {
    where: EquippedItemsScalarWhereInput
    data: XOR<EquippedItemsUpdateManyMutationInput, EquippedItemsUncheckedUpdateManyWithoutCharacterInput>
  }

  export type EquippedItemsScalarWhereInput = {
    AND?: EquippedItemsScalarWhereInput | EquippedItemsScalarWhereInput[]
    OR?: EquippedItemsScalarWhereInput[]
    NOT?: EquippedItemsScalarWhereInput | EquippedItemsScalarWhereInput[]
    equippedItemId?: IntFilter<"EquippedItems"> | number
    CharacterId?: IntFilter<"EquippedItems"> | number
    InventoryId?: IntFilter<"EquippedItems"> | number
    createdAt?: DateTimeFilter<"EquippedItems"> | Date | string
    updatedAt?: DateTimeFilter<"EquippedItems"> | Date | string
  }

  export type CharactersCreateWithoutCharacterinventoriesInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UsersCreateNestedOneWithoutCharactersInput
    EquippedItems?: EquippedItemsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutCharacterinventoriesInput = {
    characterId?: number
    name: string
    UserId: number
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    EquippedItems?: EquippedItemsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutCharacterinventoriesInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutCharacterinventoriesInput, CharactersUncheckedCreateWithoutCharacterinventoriesInput>
  }

  export type EquippedItemsCreateWithoutCharacterinventoryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Character: CharactersCreateNestedOneWithoutEquippedItemsInput
  }

  export type EquippedItemsUncheckedCreateWithoutCharacterinventoryInput = {
    equippedItemId?: number
    CharacterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquippedItemsCreateOrConnectWithoutCharacterinventoryInput = {
    where: EquippedItemsWhereUniqueInput
    create: XOR<EquippedItemsCreateWithoutCharacterinventoryInput, EquippedItemsUncheckedCreateWithoutCharacterinventoryInput>
  }

  export type EquippedItemsCreateManyCharacterinventoryInputEnvelope = {
    data: EquippedItemsCreateManyCharacterinventoryInput | EquippedItemsCreateManyCharacterinventoryInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithoutCharacterinventoriesInput = {
    update: XOR<CharactersUpdateWithoutCharacterinventoriesInput, CharactersUncheckedUpdateWithoutCharacterinventoriesInput>
    create: XOR<CharactersCreateWithoutCharacterinventoriesInput, CharactersUncheckedCreateWithoutCharacterinventoriesInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutCharacterinventoriesInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutCharacterinventoriesInput, CharactersUncheckedUpdateWithoutCharacterinventoriesInput>
  }

  export type CharactersUpdateWithoutCharacterinventoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    EquippedItems?: EquippedItemsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutCharacterinventoriesInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EquippedItems?: EquippedItemsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type EquippedItemsUpsertWithWhereUniqueWithoutCharacterinventoryInput = {
    where: EquippedItemsWhereUniqueInput
    update: XOR<EquippedItemsUpdateWithoutCharacterinventoryInput, EquippedItemsUncheckedUpdateWithoutCharacterinventoryInput>
    create: XOR<EquippedItemsCreateWithoutCharacterinventoryInput, EquippedItemsUncheckedCreateWithoutCharacterinventoryInput>
  }

  export type EquippedItemsUpdateWithWhereUniqueWithoutCharacterinventoryInput = {
    where: EquippedItemsWhereUniqueInput
    data: XOR<EquippedItemsUpdateWithoutCharacterinventoryInput, EquippedItemsUncheckedUpdateWithoutCharacterinventoryInput>
  }

  export type EquippedItemsUpdateManyWithWhereWithoutCharacterinventoryInput = {
    where: EquippedItemsScalarWhereInput
    data: XOR<EquippedItemsUpdateManyMutationInput, EquippedItemsUncheckedUpdateManyWithoutCharacterinventoryInput>
  }

  export type CharactersCreateWithoutEquippedItemsInput = {
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UsersCreateNestedOneWithoutCharactersInput
    Characterinventories?: CharacterinventoriesCreateNestedOneWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutEquippedItemsInput = {
    characterId?: number
    name: string
    UserId: number
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Characterinventories?: CharacterinventoriesUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutEquippedItemsInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutEquippedItemsInput, CharactersUncheckedCreateWithoutEquippedItemsInput>
  }

  export type CharacterinventoriesCreateWithoutEquippedItemsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Character: CharactersCreateNestedOneWithoutCharacterinventoriesInput
  }

  export type CharacterinventoriesUncheckedCreateWithoutEquippedItemsInput = {
    inventoryId?: number
    CharacterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterinventoriesCreateOrConnectWithoutEquippedItemsInput = {
    where: CharacterinventoriesWhereUniqueInput
    create: XOR<CharacterinventoriesCreateWithoutEquippedItemsInput, CharacterinventoriesUncheckedCreateWithoutEquippedItemsInput>
  }

  export type CharactersUpsertWithoutEquippedItemsInput = {
    update: XOR<CharactersUpdateWithoutEquippedItemsInput, CharactersUncheckedUpdateWithoutEquippedItemsInput>
    create: XOR<CharactersCreateWithoutEquippedItemsInput, CharactersUncheckedCreateWithoutEquippedItemsInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutEquippedItemsInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutEquippedItemsInput, CharactersUncheckedUpdateWithoutEquippedItemsInput>
  }

  export type CharactersUpdateWithoutEquippedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    Characterinventories?: CharacterinventoriesUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutEquippedItemsInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characterinventories?: CharacterinventoriesUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharacterinventoriesUpsertWithoutEquippedItemsInput = {
    update: XOR<CharacterinventoriesUpdateWithoutEquippedItemsInput, CharacterinventoriesUncheckedUpdateWithoutEquippedItemsInput>
    create: XOR<CharacterinventoriesCreateWithoutEquippedItemsInput, CharacterinventoriesUncheckedCreateWithoutEquippedItemsInput>
    where?: CharacterinventoriesWhereInput
  }

  export type CharacterinventoriesUpdateToOneWithWhereWithoutEquippedItemsInput = {
    where?: CharacterinventoriesWhereInput
    data: XOR<CharacterinventoriesUpdateWithoutEquippedItemsInput, CharacterinventoriesUncheckedUpdateWithoutEquippedItemsInput>
  }

  export type CharacterinventoriesUpdateWithoutEquippedItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharactersUpdateOneRequiredWithoutCharacterinventoriesNestedInput
  }

  export type CharacterinventoriesUncheckedUpdateWithoutEquippedItemsInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateManyUserInput = {
    characterId?: number
    name: string
    health?: number | null
    power?: number | null
    money?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characterinventories?: CharacterinventoriesUpdateOneWithoutCharacterNestedInput
    EquippedItems?: EquippedItemsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutUserInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characterinventories?: CharacterinventoriesUncheckedUpdateOneWithoutCharacterNestedInput
    EquippedItems?: EquippedItemsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateManyWithoutUserInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: NullableIntFieldUpdateOperationsInput | number | null
    power?: NullableIntFieldUpdateOperationsInput | number | null
    money?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsCreateManyCharacterInput = {
    equippedItemId?: number
    InventoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquippedItemsUpdateWithoutCharacterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Characterinventory?: CharacterinventoriesUpdateOneRequiredWithoutEquippedItemsNestedInput
  }

  export type EquippedItemsUncheckedUpdateWithoutCharacterInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    InventoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsUncheckedUpdateManyWithoutCharacterInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    InventoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsCreateManyCharacterinventoryInput = {
    equippedItemId?: number
    CharacterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquippedItemsUpdateWithoutCharacterinventoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Character?: CharactersUpdateOneRequiredWithoutEquippedItemsNestedInput
  }

  export type EquippedItemsUncheckedUpdateWithoutCharacterinventoryInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquippedItemsUncheckedUpdateManyWithoutCharacterinventoryInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    CharacterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersCountOutputTypeDefaultArgs instead
     */
    export type CharactersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterinventoriesCountOutputTypeDefaultArgs instead
     */
    export type CharacterinventoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterinventoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersDefaultArgs instead
     */
    export type CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterinventoriesDefaultArgs instead
     */
    export type CharacterinventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterinventoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquippedItemsDefaultArgs instead
     */
    export type EquippedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquippedItemsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}