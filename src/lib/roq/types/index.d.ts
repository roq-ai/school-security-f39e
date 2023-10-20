/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model access_log
 *
 */
export type access_log = $Result.DefaultSelection<Prisma.$access_logPayload>;
/**
 * Model incident
 *
 */
export type incident = $Result.DefaultSelection<Prisma.$incidentPayload>;
/**
 * Model maintenance_log
 *
 */
export type maintenance_log = $Result.DefaultSelection<Prisma.$maintenance_logPayload>;
/**
 * Model school
 *
 */
export type school = $Result.DefaultSelection<Prisma.$schoolPayload>;
/**
 * Model security_system
 *
 */
export type security_system = $Result.DefaultSelection<Prisma.$security_systemPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Access_logs
 * const access_logs = await prisma.access_log.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Access_logs
   * const access_logs = await prisma.access_log.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.access_log`: Exposes CRUD operations for the **access_log** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Access_logs
   * const access_logs = await prisma.access_log.findMany()
   * ```
   */
  get access_log(): Prisma.access_logDelegate<ExtArgs>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **incident** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Incidents
   * const incidents = await prisma.incident.findMany()
   * ```
   */
  get incident(): Prisma.incidentDelegate<ExtArgs>;

  /**
   * `prisma.maintenance_log`: Exposes CRUD operations for the **maintenance_log** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Maintenance_logs
   * const maintenance_logs = await prisma.maintenance_log.findMany()
   * ```
   */
  get maintenance_log(): Prisma.maintenance_logDelegate<ExtArgs>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **school** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   */
  get school(): Prisma.schoolDelegate<ExtArgs>;

  /**
   * `prisma.security_system`: Exposes CRUD operations for the **security_system** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Security_systems
   * const security_systems = await prisma.security_system.findMany()
   * ```
   */
  get security_system(): Prisma.security_systemDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    access_log: 'access_log';
    incident: 'incident';
    maintenance_log: 'maintenance_log';
    school: 'school';
    security_system: 'security_system';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'access_log' | 'incident' | 'maintenance_log' | 'school' | 'security_system' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      access_log: {
        payload: Prisma.$access_logPayload<ExtArgs>;
        fields: Prisma.access_logFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.access_logFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.access_logFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>;
          };
          findFirst: {
            args: Prisma.access_logFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.access_logFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>;
          };
          findMany: {
            args: Prisma.access_logFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>[];
          };
          create: {
            args: Prisma.access_logCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>;
          };
          createMany: {
            args: Prisma.access_logCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.access_logDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>;
          };
          update: {
            args: Prisma.access_logUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>;
          };
          deleteMany: {
            args: Prisma.access_logDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.access_logUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.access_logUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$access_logPayload>;
          };
          aggregate: {
            args: Prisma.Access_logAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccess_log>;
          };
          groupBy: {
            args: Prisma.access_logGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Access_logGroupByOutputType>[];
          };
          count: {
            args: Prisma.access_logCountArgs<ExtArgs>;
            result: $Utils.Optional<Access_logCountAggregateOutputType> | number;
          };
        };
      };
      incident: {
        payload: Prisma.$incidentPayload<ExtArgs>;
        fields: Prisma.incidentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.incidentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.incidentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>;
          };
          findFirst: {
            args: Prisma.incidentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.incidentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>;
          };
          findMany: {
            args: Prisma.incidentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>[];
          };
          create: {
            args: Prisma.incidentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>;
          };
          createMany: {
            args: Prisma.incidentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.incidentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>;
          };
          update: {
            args: Prisma.incidentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>;
          };
          deleteMany: {
            args: Prisma.incidentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.incidentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.incidentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incidentPayload>;
          };
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIncident>;
          };
          groupBy: {
            args: Prisma.incidentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IncidentGroupByOutputType>[];
          };
          count: {
            args: Prisma.incidentCountArgs<ExtArgs>;
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number;
          };
        };
      };
      maintenance_log: {
        payload: Prisma.$maintenance_logPayload<ExtArgs>;
        fields: Prisma.maintenance_logFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.maintenance_logFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.maintenance_logFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>;
          };
          findFirst: {
            args: Prisma.maintenance_logFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.maintenance_logFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>;
          };
          findMany: {
            args: Prisma.maintenance_logFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>[];
          };
          create: {
            args: Prisma.maintenance_logCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>;
          };
          createMany: {
            args: Prisma.maintenance_logCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.maintenance_logDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>;
          };
          update: {
            args: Prisma.maintenance_logUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>;
          };
          deleteMany: {
            args: Prisma.maintenance_logDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.maintenance_logUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.maintenance_logUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>;
          };
          aggregate: {
            args: Prisma.Maintenance_logAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMaintenance_log>;
          };
          groupBy: {
            args: Prisma.maintenance_logGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Maintenance_logGroupByOutputType>[];
          };
          count: {
            args: Prisma.maintenance_logCountArgs<ExtArgs>;
            result: $Utils.Optional<Maintenance_logCountAggregateOutputType> | number;
          };
        };
      };
      school: {
        payload: Prisma.$schoolPayload<ExtArgs>;
        fields: Prisma.schoolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.schoolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.schoolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findFirst: {
            args: Prisma.schoolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.schoolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findMany: {
            args: Prisma.schoolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>[];
          };
          create: {
            args: Prisma.schoolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          createMany: {
            args: Prisma.schoolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.schoolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          update: {
            args: Prisma.schoolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          deleteMany: {
            args: Prisma.schoolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.schoolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.schoolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchool>;
          };
          groupBy: {
            args: Prisma.schoolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SchoolGroupByOutputType>[];
          };
          count: {
            args: Prisma.schoolCountArgs<ExtArgs>;
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number;
          };
        };
      };
      security_system: {
        payload: Prisma.$security_systemPayload<ExtArgs>;
        fields: Prisma.security_systemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.security_systemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.security_systemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>;
          };
          findFirst: {
            args: Prisma.security_systemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.security_systemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>;
          };
          findMany: {
            args: Prisma.security_systemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>[];
          };
          create: {
            args: Prisma.security_systemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>;
          };
          createMany: {
            args: Prisma.security_systemCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.security_systemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>;
          };
          update: {
            args: Prisma.security_systemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>;
          };
          deleteMany: {
            args: Prisma.security_systemDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.security_systemUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.security_systemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$security_systemPayload>;
          };
          aggregate: {
            args: Prisma.Security_systemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSecurity_system>;
          };
          groupBy: {
            args: Prisma.security_systemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Security_systemGroupByOutputType>[];
          };
          count: {
            args: Prisma.security_systemCountArgs<ExtArgs>;
            result: $Utils.Optional<Security_systemCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    access_log: number;
    incident: number;
    security_system: number;
  };

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access_log?: boolean | SchoolCountOutputTypeCountAccess_logArgs;
    incident?: boolean | SchoolCountOutputTypeCountIncidentArgs;
    security_system?: boolean | SchoolCountOutputTypeCountSecurity_systemArgs;
  };

  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAccess_logArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: access_logWhereInput;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountIncidentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: incidentWhereInput;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSecurity_systemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: security_systemWhereInput;
  };

  /**
   * Count Type Security_systemCountOutputType
   */

  export type Security_systemCountOutputType = {
    maintenance_log: number;
  };

  export type Security_systemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      maintenance_log?: boolean | Security_systemCountOutputTypeCountMaintenance_logArgs;
    };

  // Custom InputTypes

  /**
   * Security_systemCountOutputType without action
   */
  export type Security_systemCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Security_systemCountOutputType
     */
    select?: Security_systemCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Security_systemCountOutputType without action
   */
  export type Security_systemCountOutputTypeCountMaintenance_logArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: maintenance_logWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    access_log: number;
    incident: number;
    maintenance_log: number;
    school: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access_log?: boolean | UserCountOutputTypeCountAccess_logArgs;
    incident?: boolean | UserCountOutputTypeCountIncidentArgs;
    maintenance_log?: boolean | UserCountOutputTypeCountMaintenance_logArgs;
    school?: boolean | UserCountOutputTypeCountSchoolArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccess_logArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: access_logWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: incidentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenance_logArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: maintenance_logWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model access_log
   */

  export type AggregateAccess_log = {
    _count: Access_logCountAggregateOutputType | null;
    _min: Access_logMinAggregateOutputType | null;
    _max: Access_logMaxAggregateOutputType | null;
  };

  export type Access_logMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    school_id: string | null;
    access_time: Date | null;
    exit_time: Date | null;
    access_point: string | null;
    purpose: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Access_logMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    school_id: string | null;
    access_time: Date | null;
    exit_time: Date | null;
    access_point: string | null;
    purpose: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Access_logCountAggregateOutputType = {
    id: number;
    user_id: number;
    school_id: number;
    access_time: number;
    exit_time: number;
    access_point: number;
    purpose: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Access_logMinAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    access_time?: true;
    exit_time?: true;
    access_point?: true;
    purpose?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Access_logMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    access_time?: true;
    exit_time?: true;
    access_point?: true;
    purpose?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Access_logCountAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    access_time?: true;
    exit_time?: true;
    access_point?: true;
    purpose?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Access_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_log to aggregate.
     */
    where?: access_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of access_logs to fetch.
     */
    orderBy?: access_logOrderByWithRelationInput | access_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: access_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` access_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` access_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned access_logs
     **/
    _count?: true | Access_logCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Access_logMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Access_logMaxAggregateInputType;
  };

  export type GetAccess_logAggregateType<T extends Access_logAggregateArgs> = {
    [P in keyof T & keyof AggregateAccess_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess_log[P]>
      : GetScalarType<T[P], AggregateAccess_log[P]>;
  };

  export type access_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: access_logWhereInput;
    orderBy?: access_logOrderByWithAggregationInput | access_logOrderByWithAggregationInput[];
    by: Access_logScalarFieldEnum[] | Access_logScalarFieldEnum;
    having?: access_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Access_logCountAggregateInputType | true;
    _min?: Access_logMinAggregateInputType;
    _max?: Access_logMaxAggregateInputType;
  };

  export type Access_logGroupByOutputType = {
    id: string;
    user_id: string;
    school_id: string;
    access_time: Date;
    exit_time: Date | null;
    access_point: string;
    purpose: string;
    created_at: Date;
    updated_at: Date;
    _count: Access_logCountAggregateOutputType | null;
    _min: Access_logMinAggregateOutputType | null;
    _max: Access_logMaxAggregateOutputType | null;
  };

  type GetAccess_logGroupByPayload<T extends access_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Access_logGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Access_logGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Access_logGroupByOutputType[P]>
          : GetScalarType<T[P], Access_logGroupByOutputType[P]>;
      }
    >
  >;

  export type access_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        school_id?: boolean;
        access_time?: boolean;
        exit_time?: boolean;
        access_point?: boolean;
        purpose?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        school?: boolean | schoolDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['access_log']
    >;

  export type access_logSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    school_id?: boolean;
    access_time?: boolean;
    exit_time?: boolean;
    access_point?: boolean;
    purpose?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type access_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $access_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'access_log';
    objects: {
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        school_id: string;
        access_time: Date;
        exit_time: Date | null;
        access_point: string;
        purpose: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['access_log']
    >;
    composites: {};
  };

  type access_logGetPayload<S extends boolean | null | undefined | access_logDefaultArgs> = $Result.GetResult<
    Prisma.$access_logPayload,
    S
  >;

  type access_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    access_logFindManyArgs,
    'select' | 'include'
  > & {
    select?: Access_logCountAggregateInputType | true;
  };

  export interface access_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['access_log']; meta: { name: 'access_log' } };
    /**
     * Find zero or one Access_log that matches the filter.
     * @param {access_logFindUniqueArgs} args - Arguments to find a Access_log
     * @example
     * // Get one Access_log
     * const access_log = await prisma.access_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends access_logFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, access_logFindUniqueArgs<ExtArgs>>,
    ): Prisma__access_logClient<
      $Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Access_log that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {access_logFindUniqueOrThrowArgs} args - Arguments to find a Access_log
     * @example
     * // Get one Access_log
     * const access_log = await prisma.access_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends access_logFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, access_logFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__access_logClient<
      $Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Access_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_logFindFirstArgs} args - Arguments to find a Access_log
     * @example
     * // Get one Access_log
     * const access_log = await prisma.access_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends access_logFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, access_logFindFirstArgs<ExtArgs>>,
    ): Prisma__access_logClient<
      $Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Access_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_logFindFirstOrThrowArgs} args - Arguments to find a Access_log
     * @example
     * // Get one Access_log
     * const access_log = await prisma.access_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends access_logFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, access_logFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__access_logClient<
      $Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Access_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Access_logs
     * const access_logs = await prisma.access_log.findMany()
     *
     * // Get first 10 Access_logs
     * const access_logs = await prisma.access_log.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const access_logWithIdOnly = await prisma.access_log.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends access_logFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, access_logFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Access_log.
     * @param {access_logCreateArgs} args - Arguments to create a Access_log.
     * @example
     * // Create one Access_log
     * const Access_log = await prisma.access_log.create({
     *   data: {
     *     // ... data to create a Access_log
     *   }
     * })
     *
     **/
    create<T extends access_logCreateArgs<ExtArgs>>(
      args: SelectSubset<T, access_logCreateArgs<ExtArgs>>,
    ): Prisma__access_logClient<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Access_logs.
     *     @param {access_logCreateManyArgs} args - Arguments to create many Access_logs.
     *     @example
     *     // Create many Access_logs
     *     const access_log = await prisma.access_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends access_logCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, access_logCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Access_log.
     * @param {access_logDeleteArgs} args - Arguments to delete one Access_log.
     * @example
     * // Delete one Access_log
     * const Access_log = await prisma.access_log.delete({
     *   where: {
     *     // ... filter to delete one Access_log
     *   }
     * })
     *
     **/
    delete<T extends access_logDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, access_logDeleteArgs<ExtArgs>>,
    ): Prisma__access_logClient<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Access_log.
     * @param {access_logUpdateArgs} args - Arguments to update one Access_log.
     * @example
     * // Update one Access_log
     * const access_log = await prisma.access_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends access_logUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, access_logUpdateArgs<ExtArgs>>,
    ): Prisma__access_logClient<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Access_logs.
     * @param {access_logDeleteManyArgs} args - Arguments to filter Access_logs to delete.
     * @example
     * // Delete a few Access_logs
     * const { count } = await prisma.access_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends access_logDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, access_logDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Access_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Access_logs
     * const access_log = await prisma.access_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends access_logUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, access_logUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Access_log.
     * @param {access_logUpsertArgs} args - Arguments to update or create a Access_log.
     * @example
     * // Update or create a Access_log
     * const access_log = await prisma.access_log.upsert({
     *   create: {
     *     // ... data to create a Access_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access_log we want to update
     *   }
     * })
     **/
    upsert<T extends access_logUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, access_logUpsertArgs<ExtArgs>>,
    ): Prisma__access_logClient<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Access_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_logCountArgs} args - Arguments to filter Access_logs to count.
     * @example
     * // Count the number of Access_logs
     * const count = await prisma.access_log.count({
     *   where: {
     *     // ... the filter for the Access_logs we want to count
     *   }
     * })
     **/
    count<T extends access_logCountArgs>(
      args?: Subset<T, access_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Access_logCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Access_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Access_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Access_logAggregateArgs>(
      args: Subset<T, Access_logAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccess_logAggregateType<T>>;

    /**
     * Group by Access_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_logGroupByArgs} args - Group by arguments.
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
      T extends access_logGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: access_logGroupByArgs['orderBy'] }
        : { orderBy?: access_logGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, access_logGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAccess_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the access_log model
     */
    readonly fields: access_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for access_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__access_logClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the access_log model
   */
  interface access_logFieldRefs {
    readonly id: FieldRef<'access_log', 'String'>;
    readonly user_id: FieldRef<'access_log', 'String'>;
    readonly school_id: FieldRef<'access_log', 'String'>;
    readonly access_time: FieldRef<'access_log', 'DateTime'>;
    readonly exit_time: FieldRef<'access_log', 'DateTime'>;
    readonly access_point: FieldRef<'access_log', 'String'>;
    readonly purpose: FieldRef<'access_log', 'String'>;
    readonly created_at: FieldRef<'access_log', 'DateTime'>;
    readonly updated_at: FieldRef<'access_log', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * access_log findUnique
   */
  export type access_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * Filter, which access_log to fetch.
     */
    where: access_logWhereUniqueInput;
  };

  /**
   * access_log findUniqueOrThrow
   */
  export type access_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * Filter, which access_log to fetch.
     */
    where: access_logWhereUniqueInput;
  };

  /**
   * access_log findFirst
   */
  export type access_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * Filter, which access_log to fetch.
     */
    where?: access_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of access_logs to fetch.
     */
    orderBy?: access_logOrderByWithRelationInput | access_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for access_logs.
     */
    cursor?: access_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` access_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` access_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of access_logs.
     */
    distinct?: Access_logScalarFieldEnum | Access_logScalarFieldEnum[];
  };

  /**
   * access_log findFirstOrThrow
   */
  export type access_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * Filter, which access_log to fetch.
     */
    where?: access_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of access_logs to fetch.
     */
    orderBy?: access_logOrderByWithRelationInput | access_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for access_logs.
     */
    cursor?: access_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` access_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` access_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of access_logs.
     */
    distinct?: Access_logScalarFieldEnum | Access_logScalarFieldEnum[];
  };

  /**
   * access_log findMany
   */
  export type access_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * Filter, which access_logs to fetch.
     */
    where?: access_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of access_logs to fetch.
     */
    orderBy?: access_logOrderByWithRelationInput | access_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing access_logs.
     */
    cursor?: access_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` access_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` access_logs.
     */
    skip?: number;
    distinct?: Access_logScalarFieldEnum | Access_logScalarFieldEnum[];
  };

  /**
   * access_log create
   */
  export type access_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * The data needed to create a access_log.
     */
    data: XOR<access_logCreateInput, access_logUncheckedCreateInput>;
  };

  /**
   * access_log createMany
   */
  export type access_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many access_logs.
     */
    data: access_logCreateManyInput | access_logCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * access_log update
   */
  export type access_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * The data needed to update a access_log.
     */
    data: XOR<access_logUpdateInput, access_logUncheckedUpdateInput>;
    /**
     * Choose, which access_log to update.
     */
    where: access_logWhereUniqueInput;
  };

  /**
   * access_log updateMany
   */
  export type access_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update access_logs.
     */
    data: XOR<access_logUpdateManyMutationInput, access_logUncheckedUpdateManyInput>;
    /**
     * Filter which access_logs to update
     */
    where?: access_logWhereInput;
  };

  /**
   * access_log upsert
   */
  export type access_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * The filter to search for the access_log to update in case it exists.
     */
    where: access_logWhereUniqueInput;
    /**
     * In case the access_log found by the `where` argument doesn't exist, create a new access_log with this data.
     */
    create: XOR<access_logCreateInput, access_logUncheckedCreateInput>;
    /**
     * In case the access_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<access_logUpdateInput, access_logUncheckedUpdateInput>;
  };

  /**
   * access_log delete
   */
  export type access_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    /**
     * Filter which access_log to delete.
     */
    where: access_logWhereUniqueInput;
  };

  /**
   * access_log deleteMany
   */
  export type access_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_logs to delete
     */
    where?: access_logWhereInput;
  };

  /**
   * access_log without action
   */
  export type access_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
  };

  /**
   * Model incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null;
    _min: IncidentMinAggregateOutputType | null;
    _max: IncidentMaxAggregateOutputType | null;
  };

  export type IncidentMinAggregateOutputType = {
    id: string | null;
    incident_type: string | null;
    incident_date: Date | null;
    description: string | null;
    school_id: string | null;
    reported_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type IncidentMaxAggregateOutputType = {
    id: string | null;
    incident_type: string | null;
    incident_date: Date | null;
    description: string | null;
    school_id: string | null;
    reported_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type IncidentCountAggregateOutputType = {
    id: number;
    incident_type: number;
    incident_date: number;
    description: number;
    school_id: number;
    reported_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type IncidentMinAggregateInputType = {
    id?: true;
    incident_type?: true;
    incident_date?: true;
    description?: true;
    school_id?: true;
    reported_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type IncidentMaxAggregateInputType = {
    id?: true;
    incident_type?: true;
    incident_date?: true;
    description?: true;
    school_id?: true;
    reported_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type IncidentCountAggregateInputType = {
    id?: true;
    incident_type?: true;
    incident_date?: true;
    description?: true;
    school_id?: true;
    reported_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incident to aggregate.
     */
    where?: incidentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentOrderByWithRelationInput | incidentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: incidentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incidents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned incidents
     **/
    _count?: true | IncidentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IncidentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IncidentMaxAggregateInputType;
  };

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
    [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>;
  };

  export type incidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incidentWhereInput;
    orderBy?: incidentOrderByWithAggregationInput | incidentOrderByWithAggregationInput[];
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum;
    having?: incidentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncidentCountAggregateInputType | true;
    _min?: IncidentMinAggregateInputType;
    _max?: IncidentMaxAggregateInputType;
  };

  export type IncidentGroupByOutputType = {
    id: string;
    incident_type: string;
    incident_date: Date;
    description: string;
    school_id: string;
    reported_by: string;
    created_at: Date;
    updated_at: Date;
    _count: IncidentCountAggregateOutputType | null;
    _min: IncidentMinAggregateOutputType | null;
    _max: IncidentMaxAggregateOutputType | null;
  };

  type GetIncidentGroupByPayload<T extends incidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof IncidentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
          : GetScalarType<T[P], IncidentGroupByOutputType[P]>;
      }
    >
  >;

  export type incidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        incident_type?: boolean;
        incident_date?: boolean;
        description?: boolean;
        school_id?: boolean;
        reported_by?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        school?: boolean | schoolDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['incident']
    >;

  export type incidentSelectScalar = {
    id?: boolean;
    incident_type?: boolean;
    incident_date?: boolean;
    description?: boolean;
    school_id?: boolean;
    reported_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type incidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    school?: boolean | schoolDefaultArgs<ExtArgs>;
  };

  export type $incidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'incident';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      school: Prisma.$schoolPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        incident_type: string;
        incident_date: Date;
        description: string;
        school_id: string;
        reported_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['incident']
    >;
    composites: {};
  };

  type incidentGetPayload<S extends boolean | null | undefined | incidentDefaultArgs> = $Result.GetResult<
    Prisma.$incidentPayload,
    S
  >;

  type incidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    incidentFindManyArgs,
    'select' | 'include'
  > & {
    select?: IncidentCountAggregateInputType | true;
  };

  export interface incidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incident']; meta: { name: 'incident' } };
    /**
     * Find zero or one Incident that matches the filter.
     * @param {incidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends incidentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, incidentFindUniqueArgs<ExtArgs>>,
    ): Prisma__incidentClient<
      $Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Incident that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {incidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends incidentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incidentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__incidentClient<
      $Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends incidentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, incidentFindFirstArgs<ExtArgs>>,
    ): Prisma__incidentClient<
      $Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends incidentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incidentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__incidentClient<
      $Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     *
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends incidentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incidentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Incident.
     * @param {incidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     *
     **/
    create<T extends incidentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, incidentCreateArgs<ExtArgs>>,
    ): Prisma__incidentClient<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Incidents.
     *     @param {incidentCreateManyArgs} args - Arguments to create many Incidents.
     *     @example
     *     // Create many Incidents
     *     const incident = await prisma.incident.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends incidentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incidentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Incident.
     * @param {incidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     *
     **/
    delete<T extends incidentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, incidentDeleteArgs<ExtArgs>>,
    ): Prisma__incidentClient<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Incident.
     * @param {incidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends incidentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, incidentUpdateArgs<ExtArgs>>,
    ): Prisma__incidentClient<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Incidents.
     * @param {incidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends incidentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incidentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends incidentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, incidentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Incident.
     * @param {incidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     **/
    upsert<T extends incidentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, incidentUpsertArgs<ExtArgs>>,
    ): Prisma__incidentClient<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
     **/
    count<T extends incidentCountArgs>(
      args?: Subset<T, incidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(
      args: Subset<T, IncidentAggregateArgs>,
    ): Prisma.PrismaPromise<GetIncidentAggregateType<T>>;

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incidentGroupByArgs} args - Group by arguments.
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
      T extends incidentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incidentGroupByArgs['orderBy'] }
        : { orderBy?: incidentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, incidentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the incident model
     */
    readonly fields: incidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incidentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the incident model
   */
  interface incidentFieldRefs {
    readonly id: FieldRef<'incident', 'String'>;
    readonly incident_type: FieldRef<'incident', 'String'>;
    readonly incident_date: FieldRef<'incident', 'DateTime'>;
    readonly description: FieldRef<'incident', 'String'>;
    readonly school_id: FieldRef<'incident', 'String'>;
    readonly reported_by: FieldRef<'incident', 'String'>;
    readonly created_at: FieldRef<'incident', 'DateTime'>;
    readonly updated_at: FieldRef<'incident', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * incident findUnique
   */
  export type incidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * Filter, which incident to fetch.
     */
    where: incidentWhereUniqueInput;
  };

  /**
   * incident findUniqueOrThrow
   */
  export type incidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * Filter, which incident to fetch.
     */
    where: incidentWhereUniqueInput;
  };

  /**
   * incident findFirst
   */
  export type incidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * Filter, which incident to fetch.
     */
    where?: incidentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentOrderByWithRelationInput | incidentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for incidents.
     */
    cursor?: incidentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incidents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[];
  };

  /**
   * incident findFirstOrThrow
   */
  export type incidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * Filter, which incident to fetch.
     */
    where?: incidentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentOrderByWithRelationInput | incidentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for incidents.
     */
    cursor?: incidentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incidents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[];
  };

  /**
   * incident findMany
   */
  export type incidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * Filter, which incidents to fetch.
     */
    where?: incidentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incidents to fetch.
     */
    orderBy?: incidentOrderByWithRelationInput | incidentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing incidents.
     */
    cursor?: incidentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incidents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incidents.
     */
    skip?: number;
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[];
  };

  /**
   * incident create
   */
  export type incidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * The data needed to create a incident.
     */
    data: XOR<incidentCreateInput, incidentUncheckedCreateInput>;
  };

  /**
   * incident createMany
   */
  export type incidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incidents.
     */
    data: incidentCreateManyInput | incidentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * incident update
   */
  export type incidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * The data needed to update a incident.
     */
    data: XOR<incidentUpdateInput, incidentUncheckedUpdateInput>;
    /**
     * Choose, which incident to update.
     */
    where: incidentWhereUniqueInput;
  };

  /**
   * incident updateMany
   */
  export type incidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incidents.
     */
    data: XOR<incidentUpdateManyMutationInput, incidentUncheckedUpdateManyInput>;
    /**
     * Filter which incidents to update
     */
    where?: incidentWhereInput;
  };

  /**
   * incident upsert
   */
  export type incidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * The filter to search for the incident to update in case it exists.
     */
    where: incidentWhereUniqueInput;
    /**
     * In case the incident found by the `where` argument doesn't exist, create a new incident with this data.
     */
    create: XOR<incidentCreateInput, incidentUncheckedCreateInput>;
    /**
     * In case the incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incidentUpdateInput, incidentUncheckedUpdateInput>;
  };

  /**
   * incident delete
   */
  export type incidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    /**
     * Filter which incident to delete.
     */
    where: incidentWhereUniqueInput;
  };

  /**
   * incident deleteMany
   */
  export type incidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incidents to delete
     */
    where?: incidentWhereInput;
  };

  /**
   * incident without action
   */
  export type incidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
  };

  /**
   * Model maintenance_log
   */

  export type AggregateMaintenance_log = {
    _count: Maintenance_logCountAggregateOutputType | null;
    _min: Maintenance_logMinAggregateOutputType | null;
    _max: Maintenance_logMaxAggregateOutputType | null;
  };

  export type Maintenance_logMinAggregateOutputType = {
    id: string | null;
    security_system_id: string | null;
    maintenance_date: Date | null;
    maintained_by: string | null;
    description: string | null;
    next_maintenance_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Maintenance_logMaxAggregateOutputType = {
    id: string | null;
    security_system_id: string | null;
    maintenance_date: Date | null;
    maintained_by: string | null;
    description: string | null;
    next_maintenance_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Maintenance_logCountAggregateOutputType = {
    id: number;
    security_system_id: number;
    maintenance_date: number;
    maintained_by: number;
    description: number;
    next_maintenance_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Maintenance_logMinAggregateInputType = {
    id?: true;
    security_system_id?: true;
    maintenance_date?: true;
    maintained_by?: true;
    description?: true;
    next_maintenance_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Maintenance_logMaxAggregateInputType = {
    id?: true;
    security_system_id?: true;
    maintenance_date?: true;
    maintained_by?: true;
    description?: true;
    next_maintenance_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Maintenance_logCountAggregateInputType = {
    id?: true;
    security_system_id?: true;
    maintenance_date?: true;
    maintained_by?: true;
    description?: true;
    next_maintenance_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Maintenance_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance_log to aggregate.
     */
    where?: maintenance_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: maintenance_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenance_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned maintenance_logs
     **/
    _count?: true | Maintenance_logCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Maintenance_logMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Maintenance_logMaxAggregateInputType;
  };

  export type GetMaintenance_logAggregateType<T extends Maintenance_logAggregateArgs> = {
    [P in keyof T & keyof AggregateMaintenance_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance_log[P]>
      : GetScalarType<T[P], AggregateMaintenance_log[P]>;
  };

  export type maintenance_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenance_logWhereInput;
    orderBy?: maintenance_logOrderByWithAggregationInput | maintenance_logOrderByWithAggregationInput[];
    by: Maintenance_logScalarFieldEnum[] | Maintenance_logScalarFieldEnum;
    having?: maintenance_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Maintenance_logCountAggregateInputType | true;
    _min?: Maintenance_logMinAggregateInputType;
    _max?: Maintenance_logMaxAggregateInputType;
  };

  export type Maintenance_logGroupByOutputType = {
    id: string;
    security_system_id: string;
    maintenance_date: Date;
    maintained_by: string;
    description: string;
    next_maintenance_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Maintenance_logCountAggregateOutputType | null;
    _min: Maintenance_logMinAggregateOutputType | null;
    _max: Maintenance_logMaxAggregateOutputType | null;
  };

  type GetMaintenance_logGroupByPayload<T extends maintenance_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Maintenance_logGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Maintenance_logGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Maintenance_logGroupByOutputType[P]>
          : GetScalarType<T[P], Maintenance_logGroupByOutputType[P]>;
      }
    >
  >;

  export type maintenance_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        security_system_id?: boolean;
        maintenance_date?: boolean;
        maintained_by?: boolean;
        description?: boolean;
        next_maintenance_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        security_system?: boolean | security_systemDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['maintenance_log']
    >;

  export type maintenance_logSelectScalar = {
    id?: boolean;
    security_system_id?: boolean;
    maintenance_date?: boolean;
    maintained_by?: boolean;
    description?: boolean;
    next_maintenance_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type maintenance_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    security_system?: boolean | security_systemDefaultArgs<ExtArgs>;
  };

  export type $maintenance_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'maintenance_log';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      security_system: Prisma.$security_systemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        security_system_id: string;
        maintenance_date: Date;
        maintained_by: string;
        description: string;
        next_maintenance_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['maintenance_log']
    >;
    composites: {};
  };

  type maintenance_logGetPayload<S extends boolean | null | undefined | maintenance_logDefaultArgs> = $Result.GetResult<
    Prisma.$maintenance_logPayload,
    S
  >;

  type maintenance_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    maintenance_logFindManyArgs,
    'select' | 'include'
  > & {
    select?: Maintenance_logCountAggregateInputType | true;
  };

  export interface maintenance_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintenance_log']; meta: { name: 'maintenance_log' } };
    /**
     * Find zero or one Maintenance_log that matches the filter.
     * @param {maintenance_logFindUniqueArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends maintenance_logFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, maintenance_logFindUniqueArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Maintenance_log that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {maintenance_logFindUniqueOrThrowArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends maintenance_logFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenance_logFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Maintenance_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logFindFirstArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends maintenance_logFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenance_logFindFirstArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Maintenance_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logFindFirstOrThrowArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends maintenance_logFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenance_logFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Maintenance_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenance_logs
     * const maintenance_logs = await prisma.maintenance_log.findMany()
     *
     * // Get first 10 Maintenance_logs
     * const maintenance_logs = await prisma.maintenance_log.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const maintenance_logWithIdOnly = await prisma.maintenance_log.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends maintenance_logFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenance_logFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Maintenance_log.
     * @param {maintenance_logCreateArgs} args - Arguments to create a Maintenance_log.
     * @example
     * // Create one Maintenance_log
     * const Maintenance_log = await prisma.maintenance_log.create({
     *   data: {
     *     // ... data to create a Maintenance_log
     *   }
     * })
     *
     **/
    create<T extends maintenance_logCreateArgs<ExtArgs>>(
      args: SelectSubset<T, maintenance_logCreateArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Maintenance_logs.
     *     @param {maintenance_logCreateManyArgs} args - Arguments to create many Maintenance_logs.
     *     @example
     *     // Create many Maintenance_logs
     *     const maintenance_log = await prisma.maintenance_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends maintenance_logCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenance_logCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Maintenance_log.
     * @param {maintenance_logDeleteArgs} args - Arguments to delete one Maintenance_log.
     * @example
     * // Delete one Maintenance_log
     * const Maintenance_log = await prisma.maintenance_log.delete({
     *   where: {
     *     // ... filter to delete one Maintenance_log
     *   }
     * })
     *
     **/
    delete<T extends maintenance_logDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, maintenance_logDeleteArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Maintenance_log.
     * @param {maintenance_logUpdateArgs} args - Arguments to update one Maintenance_log.
     * @example
     * // Update one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends maintenance_logUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, maintenance_logUpdateArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Maintenance_logs.
     * @param {maintenance_logDeleteManyArgs} args - Arguments to filter Maintenance_logs to delete.
     * @example
     * // Delete a few Maintenance_logs
     * const { count } = await prisma.maintenance_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends maintenance_logDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenance_logDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Maintenance_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenance_logs
     * const maintenance_log = await prisma.maintenance_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends maintenance_logUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, maintenance_logUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Maintenance_log.
     * @param {maintenance_logUpsertArgs} args - Arguments to update or create a Maintenance_log.
     * @example
     * // Update or create a Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.upsert({
     *   create: {
     *     // ... data to create a Maintenance_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance_log we want to update
     *   }
     * })
     **/
    upsert<T extends maintenance_logUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, maintenance_logUpsertArgs<ExtArgs>>,
    ): Prisma__maintenance_logClient<
      $Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Maintenance_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logCountArgs} args - Arguments to filter Maintenance_logs to count.
     * @example
     * // Count the number of Maintenance_logs
     * const count = await prisma.maintenance_log.count({
     *   where: {
     *     // ... the filter for the Maintenance_logs we want to count
     *   }
     * })
     **/
    count<T extends maintenance_logCountArgs>(
      args?: Subset<T, maintenance_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Maintenance_logCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Maintenance_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Maintenance_logAggregateArgs>(
      args: Subset<T, Maintenance_logAggregateArgs>,
    ): Prisma.PrismaPromise<GetMaintenance_logAggregateType<T>>;

    /**
     * Group by Maintenance_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logGroupByArgs} args - Group by arguments.
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
      T extends maintenance_logGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintenance_logGroupByArgs['orderBy'] }
        : { orderBy?: maintenance_logGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, maintenance_logGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMaintenance_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the maintenance_log model
     */
    readonly fields: maintenance_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintenance_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintenance_logClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    security_system<T extends security_systemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, security_systemDefaultArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the maintenance_log model
   */
  interface maintenance_logFieldRefs {
    readonly id: FieldRef<'maintenance_log', 'String'>;
    readonly security_system_id: FieldRef<'maintenance_log', 'String'>;
    readonly maintenance_date: FieldRef<'maintenance_log', 'DateTime'>;
    readonly maintained_by: FieldRef<'maintenance_log', 'String'>;
    readonly description: FieldRef<'maintenance_log', 'String'>;
    readonly next_maintenance_date: FieldRef<'maintenance_log', 'DateTime'>;
    readonly created_at: FieldRef<'maintenance_log', 'DateTime'>;
    readonly updated_at: FieldRef<'maintenance_log', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * maintenance_log findUnique
   */
  export type maintenance_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance_log to fetch.
     */
    where: maintenance_logWhereUniqueInput;
  };

  /**
   * maintenance_log findUniqueOrThrow
   */
  export type maintenance_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the maintenance_log
       */
      select?: maintenance_logSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: maintenance_logInclude<ExtArgs> | null;
      /**
       * Filter, which maintenance_log to fetch.
       */
      where: maintenance_logWhereUniqueInput;
    };

  /**
   * maintenance_log findFirst
   */
  export type maintenance_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance_log to fetch.
     */
    where?: maintenance_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for maintenance_logs.
     */
    cursor?: maintenance_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenance_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of maintenance_logs.
     */
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[];
  };

  /**
   * maintenance_log findFirstOrThrow
   */
  export type maintenance_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the maintenance_log
       */
      select?: maintenance_logSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: maintenance_logInclude<ExtArgs> | null;
      /**
       * Filter, which maintenance_log to fetch.
       */
      where?: maintenance_logWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of maintenance_logs to fetch.
       */
      orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for maintenance_logs.
       */
      cursor?: maintenance_logWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` maintenance_logs from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` maintenance_logs.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of maintenance_logs.
       */
      distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[];
    };

  /**
   * maintenance_log findMany
   */
  export type maintenance_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance_logs to fetch.
     */
    where?: maintenance_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing maintenance_logs.
     */
    cursor?: maintenance_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenance_logs.
     */
    skip?: number;
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[];
  };

  /**
   * maintenance_log create
   */
  export type maintenance_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * The data needed to create a maintenance_log.
     */
    data: XOR<maintenance_logCreateInput, maintenance_logUncheckedCreateInput>;
  };

  /**
   * maintenance_log createMany
   */
  export type maintenance_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintenance_logs.
     */
    data: maintenance_logCreateManyInput | maintenance_logCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * maintenance_log update
   */
  export type maintenance_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * The data needed to update a maintenance_log.
     */
    data: XOR<maintenance_logUpdateInput, maintenance_logUncheckedUpdateInput>;
    /**
     * Choose, which maintenance_log to update.
     */
    where: maintenance_logWhereUniqueInput;
  };

  /**
   * maintenance_log updateMany
   */
  export type maintenance_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintenance_logs.
     */
    data: XOR<maintenance_logUpdateManyMutationInput, maintenance_logUncheckedUpdateManyInput>;
    /**
     * Filter which maintenance_logs to update
     */
    where?: maintenance_logWhereInput;
  };

  /**
   * maintenance_log upsert
   */
  export type maintenance_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * The filter to search for the maintenance_log to update in case it exists.
     */
    where: maintenance_logWhereUniqueInput;
    /**
     * In case the maintenance_log found by the `where` argument doesn't exist, create a new maintenance_log with this data.
     */
    create: XOR<maintenance_logCreateInput, maintenance_logUncheckedCreateInput>;
    /**
     * In case the maintenance_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintenance_logUpdateInput, maintenance_logUncheckedUpdateInput>;
  };

  /**
   * maintenance_log delete
   */
  export type maintenance_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    /**
     * Filter which maintenance_log to delete.
     */
    where: maintenance_logWhereUniqueInput;
  };

  /**
   * maintenance_log deleteMany
   */
  export type maintenance_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance_logs to delete
     */
    where?: maintenance_logWhereInput;
  };

  /**
   * maintenance_log without action
   */
  export type maintenance_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
  };

  /**
   * Model school
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _avg: SchoolAvgAggregateOutputType | null;
    _sum: SchoolSumAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  export type SchoolAvgAggregateOutputType = {
    established_year: number | null;
    total_students: number | null;
    total_staff: number | null;
  };

  export type SchoolSumAggregateOutputType = {
    established_year: number | null;
    total_students: number | null;
    total_staff: number | null;
  };

  export type SchoolMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_year: number | null;
    total_students: number | null;
    total_staff: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_year: number | null;
    total_students: number | null;
    total_staff: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    established_year: number;
    total_students: number;
    total_staff: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type SchoolAvgAggregateInputType = {
    established_year?: true;
    total_students?: true;
    total_staff?: true;
  };

  export type SchoolSumAggregateInputType = {
    established_year?: true;
    total_students?: true;
    total_staff?: true;
  };

  export type SchoolMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_year?: true;
    total_students?: true;
    total_staff?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_year?: true;
    total_students?: true;
    total_staff?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_year?: true;
    total_students?: true;
    total_staff?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school to aggregate.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schools
     **/
    _count?: true | SchoolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SchoolAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SchoolSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SchoolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SchoolMaxAggregateInputType;
  };

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>;
  };

  export type schoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithAggregationInput | schoolOrderByWithAggregationInput[];
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum;
    having?: schoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _avg?: SchoolAvgAggregateInputType;
    _sum?: SchoolSumAggregateInputType;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
  };

  export type SchoolGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    established_year: number | null;
    total_students: number | null;
    total_staff: number | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: SchoolCountAggregateOutputType | null;
    _avg: SchoolAvgAggregateOutputType | null;
    _sum: SchoolSumAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  type GetSchoolGroupByPayload<T extends schoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SchoolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
          : GetScalarType<T[P], SchoolGroupByOutputType[P]>;
      }
    >
  >;

  export type schoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      established_year?: boolean;
      total_students?: boolean;
      total_staff?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      access_log?: boolean | school$access_logArgs<ExtArgs>;
      incident?: boolean | school$incidentArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      security_system?: boolean | school$security_systemArgs<ExtArgs>;
      _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['school']
  >;

  export type schoolSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    established_year?: boolean;
    total_students?: boolean;
    total_staff?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type schoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access_log?: boolean | school$access_logArgs<ExtArgs>;
    incident?: boolean | school$incidentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    security_system?: boolean | school$security_systemArgs<ExtArgs>;
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $schoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'school';
    objects: {
      access_log: Prisma.$access_logPayload<ExtArgs>[];
      incident: Prisma.$incidentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      security_system: Prisma.$security_systemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        established_year: number | null;
        total_students: number | null;
        total_staff: number | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['school']
    >;
    composites: {};
  };

  type schoolGetPayload<S extends boolean | null | undefined | schoolDefaultArgs> = $Result.GetResult<
    Prisma.$schoolPayload,
    S
  >;

  type schoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    schoolFindManyArgs,
    'select' | 'include'
  > & {
    select?: SchoolCountAggregateInputType | true;
  };

  export interface schoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['school']; meta: { name: 'school' } };
    /**
     * Find zero or one School that matches the filter.
     * @param {schoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends schoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, schoolFindUniqueArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one School that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {schoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends schoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends schoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends schoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     *
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends schoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a School.
     * @param {schoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     *
     **/
    create<T extends schoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolCreateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schools.
     *     @param {schoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends schoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a School.
     * @param {schoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     *
     **/
    delete<T extends schoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schoolDeleteArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one School.
     * @param {schoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends schoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schools.
     * @param {schoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends schoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends schoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one School.
     * @param {schoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     **/
    upsert<T extends schoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpsertArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
     **/
    count<T extends schoolCountArgs>(
      args?: Subset<T, schoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(
      args: Subset<T, SchoolAggregateArgs>,
    ): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolGroupByArgs} args - Group by arguments.
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
      T extends schoolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolGroupByArgs['orderBy'] }
        : { orderBy?: schoolGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, schoolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the school model
     */
    readonly fields: schoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for school.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    access_log<T extends school$access_logArgs<ExtArgs> = {}>(
      args?: Subset<T, school$access_logArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findMany'> | Null>;

    incident<T extends school$incidentArgs<ExtArgs> = {}>(
      args?: Subset<T, school$incidentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    security_system<T extends school$security_systemArgs<ExtArgs> = {}>(
      args?: Subset<T, school$security_systemArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the school model
   */
  interface schoolFieldRefs {
    readonly id: FieldRef<'school', 'String'>;
    readonly description: FieldRef<'school', 'String'>;
    readonly location: FieldRef<'school', 'String'>;
    readonly established_year: FieldRef<'school', 'Int'>;
    readonly total_students: FieldRef<'school', 'Int'>;
    readonly total_staff: FieldRef<'school', 'Int'>;
    readonly name: FieldRef<'school', 'String'>;
    readonly created_at: FieldRef<'school', 'DateTime'>;
    readonly updated_at: FieldRef<'school', 'DateTime'>;
    readonly user_id: FieldRef<'school', 'String'>;
    readonly tenant_id: FieldRef<'school', 'String'>;
  }

  // Custom InputTypes

  /**
   * school findUnique
   */
  export type schoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findUniqueOrThrow
   */
  export type schoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findFirst
   */
  export type schoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findFirstOrThrow
   */
  export type schoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findMany
   */
  export type schoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school create
   */
  export type schoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to create a school.
     */
    data: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
  };

  /**
   * school createMany
   */
  export type schoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolCreateManyInput | schoolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * school update
   */
  export type schoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to update a school.
     */
    data: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
    /**
     * Choose, which school to update.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school updateMany
   */
  export type schoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyInput>;
    /**
     * Filter which schools to update
     */
    where?: schoolWhereInput;
  };

  /**
   * school upsert
   */
  export type schoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The filter to search for the school to update in case it exists.
     */
    where: schoolWhereUniqueInput;
    /**
     * In case the school found by the `where` argument doesn't exist, create a new school with this data.
     */
    create: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
    /**
     * In case the school was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
  };

  /**
   * school delete
   */
  export type schoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter which school to delete.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school deleteMany
   */
  export type schoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolWhereInput;
  };

  /**
   * school.access_log
   */
  export type school$access_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    where?: access_logWhereInput;
    orderBy?: access_logOrderByWithRelationInput | access_logOrderByWithRelationInput[];
    cursor?: access_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Access_logScalarFieldEnum | Access_logScalarFieldEnum[];
  };

  /**
   * school.incident
   */
  export type school$incidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    where?: incidentWhereInput;
    orderBy?: incidentOrderByWithRelationInput | incidentOrderByWithRelationInput[];
    cursor?: incidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[];
  };

  /**
   * school.security_system
   */
  export type school$security_systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    where?: security_systemWhereInput;
    orderBy?: security_systemOrderByWithRelationInput | security_systemOrderByWithRelationInput[];
    cursor?: security_systemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Security_systemScalarFieldEnum | Security_systemScalarFieldEnum[];
  };

  /**
   * school without action
   */
  export type schoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
  };

  /**
   * Model security_system
   */

  export type AggregateSecurity_system = {
    _count: Security_systemCountAggregateOutputType | null;
    _min: Security_systemMinAggregateOutputType | null;
    _max: Security_systemMaxAggregateOutputType | null;
  };

  export type Security_systemMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    model: string | null;
    manufacturer: string | null;
    installation_date: Date | null;
    last_maintenance_date: Date | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Security_systemMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    model: string | null;
    manufacturer: string | null;
    installation_date: Date | null;
    last_maintenance_date: Date | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Security_systemCountAggregateOutputType = {
    id: number;
    name: number;
    model: number;
    manufacturer: number;
    installation_date: number;
    last_maintenance_date: number;
    school_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Security_systemMinAggregateInputType = {
    id?: true;
    name?: true;
    model?: true;
    manufacturer?: true;
    installation_date?: true;
    last_maintenance_date?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Security_systemMaxAggregateInputType = {
    id?: true;
    name?: true;
    model?: true;
    manufacturer?: true;
    installation_date?: true;
    last_maintenance_date?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Security_systemCountAggregateInputType = {
    id?: true;
    name?: true;
    model?: true;
    manufacturer?: true;
    installation_date?: true;
    last_maintenance_date?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Security_systemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which security_system to aggregate.
     */
    where?: security_systemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of security_systems to fetch.
     */
    orderBy?: security_systemOrderByWithRelationInput | security_systemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: security_systemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` security_systems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` security_systems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned security_systems
     **/
    _count?: true | Security_systemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Security_systemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Security_systemMaxAggregateInputType;
  };

  export type GetSecurity_systemAggregateType<T extends Security_systemAggregateArgs> = {
    [P in keyof T & keyof AggregateSecurity_system]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurity_system[P]>
      : GetScalarType<T[P], AggregateSecurity_system[P]>;
  };

  export type security_systemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: security_systemWhereInput;
    orderBy?: security_systemOrderByWithAggregationInput | security_systemOrderByWithAggregationInput[];
    by: Security_systemScalarFieldEnum[] | Security_systemScalarFieldEnum;
    having?: security_systemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Security_systemCountAggregateInputType | true;
    _min?: Security_systemMinAggregateInputType;
    _max?: Security_systemMaxAggregateInputType;
  };

  export type Security_systemGroupByOutputType = {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date;
    last_maintenance_date: Date | null;
    school_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Security_systemCountAggregateOutputType | null;
    _min: Security_systemMinAggregateOutputType | null;
    _max: Security_systemMaxAggregateOutputType | null;
  };

  type GetSecurity_systemGroupByPayload<T extends security_systemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Security_systemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Security_systemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Security_systemGroupByOutputType[P]>
          : GetScalarType<T[P], Security_systemGroupByOutputType[P]>;
      }
    >
  >;

  export type security_systemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        model?: boolean;
        manufacturer?: boolean;
        installation_date?: boolean;
        last_maintenance_date?: boolean;
        school_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        maintenance_log?: boolean | security_system$maintenance_logArgs<ExtArgs>;
        school?: boolean | schoolDefaultArgs<ExtArgs>;
        _count?: boolean | Security_systemCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['security_system']
    >;

  export type security_systemSelectScalar = {
    id?: boolean;
    name?: boolean;
    model?: boolean;
    manufacturer?: boolean;
    installation_date?: boolean;
    last_maintenance_date?: boolean;
    school_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type security_systemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenance_log?: boolean | security_system$maintenance_logArgs<ExtArgs>;
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    _count?: boolean | Security_systemCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $security_systemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'security_system';
    objects: {
      maintenance_log: Prisma.$maintenance_logPayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        model: string;
        manufacturer: string;
        installation_date: Date;
        last_maintenance_date: Date | null;
        school_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['security_system']
    >;
    composites: {};
  };

  type security_systemGetPayload<S extends boolean | null | undefined | security_systemDefaultArgs> = $Result.GetResult<
    Prisma.$security_systemPayload,
    S
  >;

  type security_systemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    security_systemFindManyArgs,
    'select' | 'include'
  > & {
    select?: Security_systemCountAggregateInputType | true;
  };

  export interface security_systemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['security_system']; meta: { name: 'security_system' } };
    /**
     * Find zero or one Security_system that matches the filter.
     * @param {security_systemFindUniqueArgs} args - Arguments to find a Security_system
     * @example
     * // Get one Security_system
     * const security_system = await prisma.security_system.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends security_systemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, security_systemFindUniqueArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Security_system that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {security_systemFindUniqueOrThrowArgs} args - Arguments to find a Security_system
     * @example
     * // Get one Security_system
     * const security_system = await prisma.security_system.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends security_systemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, security_systemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Security_system that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_systemFindFirstArgs} args - Arguments to find a Security_system
     * @example
     * // Get one Security_system
     * const security_system = await prisma.security_system.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends security_systemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, security_systemFindFirstArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Security_system that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_systemFindFirstOrThrowArgs} args - Arguments to find a Security_system
     * @example
     * // Get one Security_system
     * const security_system = await prisma.security_system.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends security_systemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, security_systemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Security_systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_systemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Security_systems
     * const security_systems = await prisma.security_system.findMany()
     *
     * // Get first 10 Security_systems
     * const security_systems = await prisma.security_system.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const security_systemWithIdOnly = await prisma.security_system.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends security_systemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, security_systemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Security_system.
     * @param {security_systemCreateArgs} args - Arguments to create a Security_system.
     * @example
     * // Create one Security_system
     * const Security_system = await prisma.security_system.create({
     *   data: {
     *     // ... data to create a Security_system
     *   }
     * })
     *
     **/
    create<T extends security_systemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, security_systemCreateArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Security_systems.
     *     @param {security_systemCreateManyArgs} args - Arguments to create many Security_systems.
     *     @example
     *     // Create many Security_systems
     *     const security_system = await prisma.security_system.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends security_systemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, security_systemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Security_system.
     * @param {security_systemDeleteArgs} args - Arguments to delete one Security_system.
     * @example
     * // Delete one Security_system
     * const Security_system = await prisma.security_system.delete({
     *   where: {
     *     // ... filter to delete one Security_system
     *   }
     * })
     *
     **/
    delete<T extends security_systemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, security_systemDeleteArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Security_system.
     * @param {security_systemUpdateArgs} args - Arguments to update one Security_system.
     * @example
     * // Update one Security_system
     * const security_system = await prisma.security_system.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends security_systemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, security_systemUpdateArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Security_systems.
     * @param {security_systemDeleteManyArgs} args - Arguments to filter Security_systems to delete.
     * @example
     * // Delete a few Security_systems
     * const { count } = await prisma.security_system.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends security_systemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, security_systemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Security_systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_systemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Security_systems
     * const security_system = await prisma.security_system.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends security_systemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, security_systemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Security_system.
     * @param {security_systemUpsertArgs} args - Arguments to update or create a Security_system.
     * @example
     * // Update or create a Security_system
     * const security_system = await prisma.security_system.upsert({
     *   create: {
     *     // ... data to create a Security_system
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Security_system we want to update
     *   }
     * })
     **/
    upsert<T extends security_systemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, security_systemUpsertArgs<ExtArgs>>,
    ): Prisma__security_systemClient<
      $Result.GetResult<Prisma.$security_systemPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Security_systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_systemCountArgs} args - Arguments to filter Security_systems to count.
     * @example
     * // Count the number of Security_systems
     * const count = await prisma.security_system.count({
     *   where: {
     *     // ... the filter for the Security_systems we want to count
     *   }
     * })
     **/
    count<T extends security_systemCountArgs>(
      args?: Subset<T, security_systemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Security_systemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Security_system.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Security_systemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Security_systemAggregateArgs>(
      args: Subset<T, Security_systemAggregateArgs>,
    ): Prisma.PrismaPromise<GetSecurity_systemAggregateType<T>>;

    /**
     * Group by Security_system.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_systemGroupByArgs} args - Group by arguments.
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
      T extends security_systemGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: security_systemGroupByArgs['orderBy'] }
        : { orderBy?: security_systemGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, security_systemGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSecurity_systemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the security_system model
     */
    readonly fields: security_systemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for security_system.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__security_systemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    maintenance_log<T extends security_system$maintenance_logArgs<ExtArgs> = {}>(
      args?: Subset<T, security_system$maintenance_logArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the security_system model
   */
  interface security_systemFieldRefs {
    readonly id: FieldRef<'security_system', 'String'>;
    readonly name: FieldRef<'security_system', 'String'>;
    readonly model: FieldRef<'security_system', 'String'>;
    readonly manufacturer: FieldRef<'security_system', 'String'>;
    readonly installation_date: FieldRef<'security_system', 'DateTime'>;
    readonly last_maintenance_date: FieldRef<'security_system', 'DateTime'>;
    readonly school_id: FieldRef<'security_system', 'String'>;
    readonly created_at: FieldRef<'security_system', 'DateTime'>;
    readonly updated_at: FieldRef<'security_system', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * security_system findUnique
   */
  export type security_systemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * Filter, which security_system to fetch.
     */
    where: security_systemWhereUniqueInput;
  };

  /**
   * security_system findUniqueOrThrow
   */
  export type security_systemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the security_system
       */
      select?: security_systemSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: security_systemInclude<ExtArgs> | null;
      /**
       * Filter, which security_system to fetch.
       */
      where: security_systemWhereUniqueInput;
    };

  /**
   * security_system findFirst
   */
  export type security_systemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * Filter, which security_system to fetch.
     */
    where?: security_systemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of security_systems to fetch.
     */
    orderBy?: security_systemOrderByWithRelationInput | security_systemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for security_systems.
     */
    cursor?: security_systemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` security_systems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` security_systems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of security_systems.
     */
    distinct?: Security_systemScalarFieldEnum | Security_systemScalarFieldEnum[];
  };

  /**
   * security_system findFirstOrThrow
   */
  export type security_systemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the security_system
       */
      select?: security_systemSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: security_systemInclude<ExtArgs> | null;
      /**
       * Filter, which security_system to fetch.
       */
      where?: security_systemWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of security_systems to fetch.
       */
      orderBy?: security_systemOrderByWithRelationInput | security_systemOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for security_systems.
       */
      cursor?: security_systemWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` security_systems from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` security_systems.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of security_systems.
       */
      distinct?: Security_systemScalarFieldEnum | Security_systemScalarFieldEnum[];
    };

  /**
   * security_system findMany
   */
  export type security_systemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * Filter, which security_systems to fetch.
     */
    where?: security_systemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of security_systems to fetch.
     */
    orderBy?: security_systemOrderByWithRelationInput | security_systemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing security_systems.
     */
    cursor?: security_systemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` security_systems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` security_systems.
     */
    skip?: number;
    distinct?: Security_systemScalarFieldEnum | Security_systemScalarFieldEnum[];
  };

  /**
   * security_system create
   */
  export type security_systemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * The data needed to create a security_system.
     */
    data: XOR<security_systemCreateInput, security_systemUncheckedCreateInput>;
  };

  /**
   * security_system createMany
   */
  export type security_systemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many security_systems.
     */
    data: security_systemCreateManyInput | security_systemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * security_system update
   */
  export type security_systemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * The data needed to update a security_system.
     */
    data: XOR<security_systemUpdateInput, security_systemUncheckedUpdateInput>;
    /**
     * Choose, which security_system to update.
     */
    where: security_systemWhereUniqueInput;
  };

  /**
   * security_system updateMany
   */
  export type security_systemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update security_systems.
     */
    data: XOR<security_systemUpdateManyMutationInput, security_systemUncheckedUpdateManyInput>;
    /**
     * Filter which security_systems to update
     */
    where?: security_systemWhereInput;
  };

  /**
   * security_system upsert
   */
  export type security_systemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * The filter to search for the security_system to update in case it exists.
     */
    where: security_systemWhereUniqueInput;
    /**
     * In case the security_system found by the `where` argument doesn't exist, create a new security_system with this data.
     */
    create: XOR<security_systemCreateInput, security_systemUncheckedCreateInput>;
    /**
     * In case the security_system was found with the provided `where` argument, update it with this data.
     */
    update: XOR<security_systemUpdateInput, security_systemUncheckedUpdateInput>;
  };

  /**
   * security_system delete
   */
  export type security_systemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
    /**
     * Filter which security_system to delete.
     */
    where: security_systemWhereUniqueInput;
  };

  /**
   * security_system deleteMany
   */
  export type security_systemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which security_systems to delete
     */
    where?: security_systemWhereInput;
  };

  /**
   * security_system.maintenance_log
   */
  export type security_system$maintenance_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the maintenance_log
       */
      select?: maintenance_logSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: maintenance_logInclude<ExtArgs> | null;
      where?: maintenance_logWhereInput;
      orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[];
      cursor?: maintenance_logWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[];
    };

  /**
   * security_system without action
   */
  export type security_systemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_system
     */
    select?: security_systemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: security_systemInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      access_log?: boolean | user$access_logArgs<ExtArgs>;
      incident?: boolean | user$incidentArgs<ExtArgs>;
      maintenance_log?: boolean | user$maintenance_logArgs<ExtArgs>;
      school?: boolean | user$schoolArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access_log?: boolean | user$access_logArgs<ExtArgs>;
    incident?: boolean | user$incidentArgs<ExtArgs>;
    maintenance_log?: boolean | user$maintenance_logArgs<ExtArgs>;
    school?: boolean | user$schoolArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      access_log: Prisma.$access_logPayload<ExtArgs>[];
      incident: Prisma.$incidentPayload<ExtArgs>[];
      maintenance_log: Prisma.$maintenance_logPayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    access_log<T extends user$access_logArgs<ExtArgs> = {}>(
      args?: Subset<T, user$access_logArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_logPayload<ExtArgs>, T, 'findMany'> | Null>;

    incident<T extends user$incidentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$incidentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incidentPayload<ExtArgs>, T, 'findMany'> | Null>;

    maintenance_log<T extends user$maintenance_logArgs<ExtArgs> = {}>(
      args?: Subset<T, user$maintenance_logArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends user$schoolArgs<ExtArgs> = {}>(
      args?: Subset<T, user$schoolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.access_log
   */
  export type user$access_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_log
     */
    select?: access_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: access_logInclude<ExtArgs> | null;
    where?: access_logWhereInput;
    orderBy?: access_logOrderByWithRelationInput | access_logOrderByWithRelationInput[];
    cursor?: access_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Access_logScalarFieldEnum | Access_logScalarFieldEnum[];
  };

  /**
   * user.incident
   */
  export type user$incidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incident
     */
    select?: incidentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incidentInclude<ExtArgs> | null;
    where?: incidentWhereInput;
    orderBy?: incidentOrderByWithRelationInput | incidentOrderByWithRelationInput[];
    cursor?: incidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[];
  };

  /**
   * user.maintenance_log
   */
  export type user$maintenance_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenance_logInclude<ExtArgs> | null;
    where?: maintenance_logWhereInput;
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[];
    cursor?: maintenance_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[];
  };

  /**
   * user.school
   */
  export type user$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    cursor?: schoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Access_logScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    school_id: 'school_id';
    access_time: 'access_time';
    exit_time: 'exit_time';
    access_point: 'access_point';
    purpose: 'purpose';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Access_logScalarFieldEnum = (typeof Access_logScalarFieldEnum)[keyof typeof Access_logScalarFieldEnum];

  export const IncidentScalarFieldEnum: {
    id: 'id';
    incident_type: 'incident_type';
    incident_date: 'incident_date';
    description: 'description';
    school_id: 'school_id';
    reported_by: 'reported_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum];

  export const Maintenance_logScalarFieldEnum: {
    id: 'id';
    security_system_id: 'security_system_id';
    maintenance_date: 'maintenance_date';
    maintained_by: 'maintained_by';
    description: 'description';
    next_maintenance_date: 'next_maintenance_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Maintenance_logScalarFieldEnum =
    (typeof Maintenance_logScalarFieldEnum)[keyof typeof Maintenance_logScalarFieldEnum];

  export const SchoolScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    established_year: 'established_year';
    total_students: 'total_students';
    total_staff: 'total_staff';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];

  export const Security_systemScalarFieldEnum: {
    id: 'id';
    name: 'name';
    model: 'model';
    manufacturer: 'manufacturer';
    installation_date: 'installation_date';
    last_maintenance_date: 'last_maintenance_date';
    school_id: 'school_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Security_systemScalarFieldEnum =
    (typeof Security_systemScalarFieldEnum)[keyof typeof Security_systemScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type access_logWhereInput = {
    AND?: access_logWhereInput | access_logWhereInput[];
    OR?: access_logWhereInput[];
    NOT?: access_logWhereInput | access_logWhereInput[];
    id?: UuidFilter<'access_log'> | string;
    user_id?: UuidFilter<'access_log'> | string;
    school_id?: UuidFilter<'access_log'> | string;
    access_time?: DateTimeFilter<'access_log'> | Date | string;
    exit_time?: DateTimeNullableFilter<'access_log'> | Date | string | null;
    access_point?: StringFilter<'access_log'> | string;
    purpose?: StringFilter<'access_log'> | string;
    created_at?: DateTimeFilter<'access_log'> | Date | string;
    updated_at?: DateTimeFilter<'access_log'> | Date | string;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type access_logOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    access_time?: SortOrder;
    exit_time?: SortOrderInput | SortOrder;
    access_point?: SortOrder;
    purpose?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type access_logWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: access_logWhereInput | access_logWhereInput[];
      OR?: access_logWhereInput[];
      NOT?: access_logWhereInput | access_logWhereInput[];
      user_id?: UuidFilter<'access_log'> | string;
      school_id?: UuidFilter<'access_log'> | string;
      access_time?: DateTimeFilter<'access_log'> | Date | string;
      exit_time?: DateTimeNullableFilter<'access_log'> | Date | string | null;
      access_point?: StringFilter<'access_log'> | string;
      purpose?: StringFilter<'access_log'> | string;
      created_at?: DateTimeFilter<'access_log'> | Date | string;
      updated_at?: DateTimeFilter<'access_log'> | Date | string;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type access_logOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    access_time?: SortOrder;
    exit_time?: SortOrderInput | SortOrder;
    access_point?: SortOrder;
    purpose?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: access_logCountOrderByAggregateInput;
    _max?: access_logMaxOrderByAggregateInput;
    _min?: access_logMinOrderByAggregateInput;
  };

  export type access_logScalarWhereWithAggregatesInput = {
    AND?: access_logScalarWhereWithAggregatesInput | access_logScalarWhereWithAggregatesInput[];
    OR?: access_logScalarWhereWithAggregatesInput[];
    NOT?: access_logScalarWhereWithAggregatesInput | access_logScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'access_log'> | string;
    user_id?: UuidWithAggregatesFilter<'access_log'> | string;
    school_id?: UuidWithAggregatesFilter<'access_log'> | string;
    access_time?: DateTimeWithAggregatesFilter<'access_log'> | Date | string;
    exit_time?: DateTimeNullableWithAggregatesFilter<'access_log'> | Date | string | null;
    access_point?: StringWithAggregatesFilter<'access_log'> | string;
    purpose?: StringWithAggregatesFilter<'access_log'> | string;
    created_at?: DateTimeWithAggregatesFilter<'access_log'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'access_log'> | Date | string;
  };

  export type incidentWhereInput = {
    AND?: incidentWhereInput | incidentWhereInput[];
    OR?: incidentWhereInput[];
    NOT?: incidentWhereInput | incidentWhereInput[];
    id?: UuidFilter<'incident'> | string;
    incident_type?: StringFilter<'incident'> | string;
    incident_date?: DateTimeFilter<'incident'> | Date | string;
    description?: StringFilter<'incident'> | string;
    school_id?: UuidFilter<'incident'> | string;
    reported_by?: UuidFilter<'incident'> | string;
    created_at?: DateTimeFilter<'incident'> | Date | string;
    updated_at?: DateTimeFilter<'incident'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
  };

  export type incidentOrderByWithRelationInput = {
    id?: SortOrder;
    incident_type?: SortOrder;
    incident_date?: SortOrder;
    description?: SortOrder;
    school_id?: SortOrder;
    reported_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    school?: schoolOrderByWithRelationInput;
  };

  export type incidentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: incidentWhereInput | incidentWhereInput[];
      OR?: incidentWhereInput[];
      NOT?: incidentWhereInput | incidentWhereInput[];
      incident_type?: StringFilter<'incident'> | string;
      incident_date?: DateTimeFilter<'incident'> | Date | string;
      description?: StringFilter<'incident'> | string;
      school_id?: UuidFilter<'incident'> | string;
      reported_by?: UuidFilter<'incident'> | string;
      created_at?: DateTimeFilter<'incident'> | Date | string;
      updated_at?: DateTimeFilter<'incident'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    },
    'id'
  >;

  export type incidentOrderByWithAggregationInput = {
    id?: SortOrder;
    incident_type?: SortOrder;
    incident_date?: SortOrder;
    description?: SortOrder;
    school_id?: SortOrder;
    reported_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: incidentCountOrderByAggregateInput;
    _max?: incidentMaxOrderByAggregateInput;
    _min?: incidentMinOrderByAggregateInput;
  };

  export type incidentScalarWhereWithAggregatesInput = {
    AND?: incidentScalarWhereWithAggregatesInput | incidentScalarWhereWithAggregatesInput[];
    OR?: incidentScalarWhereWithAggregatesInput[];
    NOT?: incidentScalarWhereWithAggregatesInput | incidentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'incident'> | string;
    incident_type?: StringWithAggregatesFilter<'incident'> | string;
    incident_date?: DateTimeWithAggregatesFilter<'incident'> | Date | string;
    description?: StringWithAggregatesFilter<'incident'> | string;
    school_id?: UuidWithAggregatesFilter<'incident'> | string;
    reported_by?: UuidWithAggregatesFilter<'incident'> | string;
    created_at?: DateTimeWithAggregatesFilter<'incident'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'incident'> | Date | string;
  };

  export type maintenance_logWhereInput = {
    AND?: maintenance_logWhereInput | maintenance_logWhereInput[];
    OR?: maintenance_logWhereInput[];
    NOT?: maintenance_logWhereInput | maintenance_logWhereInput[];
    id?: UuidFilter<'maintenance_log'> | string;
    security_system_id?: UuidFilter<'maintenance_log'> | string;
    maintenance_date?: DateTimeFilter<'maintenance_log'> | Date | string;
    maintained_by?: UuidFilter<'maintenance_log'> | string;
    description?: StringFilter<'maintenance_log'> | string;
    next_maintenance_date?: DateTimeNullableFilter<'maintenance_log'> | Date | string | null;
    created_at?: DateTimeFilter<'maintenance_log'> | Date | string;
    updated_at?: DateTimeFilter<'maintenance_log'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    security_system?: XOR<Security_systemRelationFilter, security_systemWhereInput>;
  };

  export type maintenance_logOrderByWithRelationInput = {
    id?: SortOrder;
    security_system_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintained_by?: SortOrder;
    description?: SortOrder;
    next_maintenance_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    security_system?: security_systemOrderByWithRelationInput;
  };

  export type maintenance_logWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: maintenance_logWhereInput | maintenance_logWhereInput[];
      OR?: maintenance_logWhereInput[];
      NOT?: maintenance_logWhereInput | maintenance_logWhereInput[];
      security_system_id?: UuidFilter<'maintenance_log'> | string;
      maintenance_date?: DateTimeFilter<'maintenance_log'> | Date | string;
      maintained_by?: UuidFilter<'maintenance_log'> | string;
      description?: StringFilter<'maintenance_log'> | string;
      next_maintenance_date?: DateTimeNullableFilter<'maintenance_log'> | Date | string | null;
      created_at?: DateTimeFilter<'maintenance_log'> | Date | string;
      updated_at?: DateTimeFilter<'maintenance_log'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      security_system?: XOR<Security_systemRelationFilter, security_systemWhereInput>;
    },
    'id'
  >;

  export type maintenance_logOrderByWithAggregationInput = {
    id?: SortOrder;
    security_system_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintained_by?: SortOrder;
    description?: SortOrder;
    next_maintenance_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: maintenance_logCountOrderByAggregateInput;
    _max?: maintenance_logMaxOrderByAggregateInput;
    _min?: maintenance_logMinOrderByAggregateInput;
  };

  export type maintenance_logScalarWhereWithAggregatesInput = {
    AND?: maintenance_logScalarWhereWithAggregatesInput | maintenance_logScalarWhereWithAggregatesInput[];
    OR?: maintenance_logScalarWhereWithAggregatesInput[];
    NOT?: maintenance_logScalarWhereWithAggregatesInput | maintenance_logScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'maintenance_log'> | string;
    security_system_id?: UuidWithAggregatesFilter<'maintenance_log'> | string;
    maintenance_date?: DateTimeWithAggregatesFilter<'maintenance_log'> | Date | string;
    maintained_by?: UuidWithAggregatesFilter<'maintenance_log'> | string;
    description?: StringWithAggregatesFilter<'maintenance_log'> | string;
    next_maintenance_date?: DateTimeNullableWithAggregatesFilter<'maintenance_log'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'maintenance_log'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'maintenance_log'> | Date | string;
  };

  export type schoolWhereInput = {
    AND?: schoolWhereInput | schoolWhereInput[];
    OR?: schoolWhereInput[];
    NOT?: schoolWhereInput | schoolWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    location?: StringNullableFilter<'school'> | string | null;
    established_year?: IntNullableFilter<'school'> | number | null;
    total_students?: IntNullableFilter<'school'> | number | null;
    total_staff?: IntNullableFilter<'school'> | number | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
    access_log?: Access_logListRelationFilter;
    incident?: IncidentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    security_system?: Security_systemListRelationFilter;
  };

  export type schoolOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_year?: SortOrderInput | SortOrder;
    total_students?: SortOrderInput | SortOrder;
    total_staff?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    access_log?: access_logOrderByRelationAggregateInput;
    incident?: incidentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    security_system?: security_systemOrderByRelationAggregateInput;
  };

  export type schoolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: schoolWhereInput | schoolWhereInput[];
      OR?: schoolWhereInput[];
      NOT?: schoolWhereInput | schoolWhereInput[];
      description?: StringNullableFilter<'school'> | string | null;
      location?: StringNullableFilter<'school'> | string | null;
      established_year?: IntNullableFilter<'school'> | number | null;
      total_students?: IntNullableFilter<'school'> | number | null;
      total_staff?: IntNullableFilter<'school'> | number | null;
      name?: StringFilter<'school'> | string;
      created_at?: DateTimeFilter<'school'> | Date | string;
      updated_at?: DateTimeFilter<'school'> | Date | string;
      user_id?: UuidFilter<'school'> | string;
      tenant_id?: StringFilter<'school'> | string;
      access_log?: Access_logListRelationFilter;
      incident?: IncidentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      security_system?: Security_systemListRelationFilter;
    },
    'id'
  >;

  export type schoolOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_year?: SortOrderInput | SortOrder;
    total_students?: SortOrderInput | SortOrder;
    total_staff?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: schoolCountOrderByAggregateInput;
    _avg?: schoolAvgOrderByAggregateInput;
    _max?: schoolMaxOrderByAggregateInput;
    _min?: schoolMinOrderByAggregateInput;
    _sum?: schoolSumOrderByAggregateInput;
  };

  export type schoolScalarWhereWithAggregatesInput = {
    AND?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    OR?: schoolScalarWhereWithAggregatesInput[];
    NOT?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'school'> | string;
    description?: StringNullableWithAggregatesFilter<'school'> | string | null;
    location?: StringNullableWithAggregatesFilter<'school'> | string | null;
    established_year?: IntNullableWithAggregatesFilter<'school'> | number | null;
    total_students?: IntNullableWithAggregatesFilter<'school'> | number | null;
    total_staff?: IntNullableWithAggregatesFilter<'school'> | number | null;
    name?: StringWithAggregatesFilter<'school'> | string;
    created_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'school'> | string;
    tenant_id?: StringWithAggregatesFilter<'school'> | string;
  };

  export type security_systemWhereInput = {
    AND?: security_systemWhereInput | security_systemWhereInput[];
    OR?: security_systemWhereInput[];
    NOT?: security_systemWhereInput | security_systemWhereInput[];
    id?: UuidFilter<'security_system'> | string;
    name?: StringFilter<'security_system'> | string;
    model?: StringFilter<'security_system'> | string;
    manufacturer?: StringFilter<'security_system'> | string;
    installation_date?: DateTimeFilter<'security_system'> | Date | string;
    last_maintenance_date?: DateTimeNullableFilter<'security_system'> | Date | string | null;
    school_id?: UuidFilter<'security_system'> | string;
    created_at?: DateTimeFilter<'security_system'> | Date | string;
    updated_at?: DateTimeFilter<'security_system'> | Date | string;
    maintenance_log?: Maintenance_logListRelationFilter;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
  };

  export type security_systemOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    installation_date?: SortOrder;
    last_maintenance_date?: SortOrderInput | SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    maintenance_log?: maintenance_logOrderByRelationAggregateInput;
    school?: schoolOrderByWithRelationInput;
  };

  export type security_systemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: security_systemWhereInput | security_systemWhereInput[];
      OR?: security_systemWhereInput[];
      NOT?: security_systemWhereInput | security_systemWhereInput[];
      name?: StringFilter<'security_system'> | string;
      model?: StringFilter<'security_system'> | string;
      manufacturer?: StringFilter<'security_system'> | string;
      installation_date?: DateTimeFilter<'security_system'> | Date | string;
      last_maintenance_date?: DateTimeNullableFilter<'security_system'> | Date | string | null;
      school_id?: UuidFilter<'security_system'> | string;
      created_at?: DateTimeFilter<'security_system'> | Date | string;
      updated_at?: DateTimeFilter<'security_system'> | Date | string;
      maintenance_log?: Maintenance_logListRelationFilter;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    },
    'id'
  >;

  export type security_systemOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    installation_date?: SortOrder;
    last_maintenance_date?: SortOrderInput | SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: security_systemCountOrderByAggregateInput;
    _max?: security_systemMaxOrderByAggregateInput;
    _min?: security_systemMinOrderByAggregateInput;
  };

  export type security_systemScalarWhereWithAggregatesInput = {
    AND?: security_systemScalarWhereWithAggregatesInput | security_systemScalarWhereWithAggregatesInput[];
    OR?: security_systemScalarWhereWithAggregatesInput[];
    NOT?: security_systemScalarWhereWithAggregatesInput | security_systemScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'security_system'> | string;
    name?: StringWithAggregatesFilter<'security_system'> | string;
    model?: StringWithAggregatesFilter<'security_system'> | string;
    manufacturer?: StringWithAggregatesFilter<'security_system'> | string;
    installation_date?: DateTimeWithAggregatesFilter<'security_system'> | Date | string;
    last_maintenance_date?: DateTimeNullableWithAggregatesFilter<'security_system'> | Date | string | null;
    school_id?: UuidWithAggregatesFilter<'security_system'> | string;
    created_at?: DateTimeWithAggregatesFilter<'security_system'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'security_system'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    access_log?: Access_logListRelationFilter;
    incident?: IncidentListRelationFilter;
    maintenance_log?: Maintenance_logListRelationFilter;
    school?: SchoolListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    access_log?: access_logOrderByRelationAggregateInput;
    incident?: incidentOrderByRelationAggregateInput;
    maintenance_log?: maintenance_logOrderByRelationAggregateInput;
    school?: schoolOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      access_log?: Access_logListRelationFilter;
      incident?: IncidentListRelationFilter;
      maintenance_log?: Maintenance_logListRelationFilter;
      school?: SchoolListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type access_logCreateInput = {
    id?: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutAccess_logInput;
    user: userCreateNestedOneWithoutAccess_logInput;
  };

  export type access_logUncheckedCreateInput = {
    id?: string;
    user_id: string;
    school_id: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type access_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutAccess_logNestedInput;
    user?: userUpdateOneRequiredWithoutAccess_logNestedInput;
  };

  export type access_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type access_logCreateManyInput = {
    id?: string;
    user_id: string;
    school_id: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type access_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type access_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentCreateInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutIncidentInput;
    school: schoolCreateNestedOneWithoutIncidentInput;
  };

  export type incidentUncheckedCreateInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    school_id: string;
    reported_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutIncidentNestedInput;
    school?: schoolUpdateOneRequiredWithoutIncidentNestedInput;
  };

  export type incidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    reported_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentCreateManyInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    school_id: string;
    reported_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    reported_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logCreateInput = {
    id?: string;
    maintenance_date: Date | string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMaintenance_logInput;
    security_system: security_systemCreateNestedOneWithoutMaintenance_logInput;
  };

  export type maintenance_logUncheckedCreateInput = {
    id?: string;
    security_system_id: string;
    maintenance_date: Date | string;
    maintained_by: string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenance_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMaintenance_logNestedInput;
    security_system?: security_systemUpdateOneRequiredWithoutMaintenance_logNestedInput;
  };

  export type maintenance_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    security_system_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintained_by?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logCreateManyInput = {
    id?: string;
    security_system_id: string;
    maintenance_date: Date | string;
    maintained_by: string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenance_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    security_system_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintained_by?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    access_log?: access_logCreateNestedManyWithoutSchoolInput;
    incident?: incidentCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    security_system?: security_systemCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    access_log?: access_logUncheckedCreateNestedManyWithoutSchoolInput;
    incident?: incidentUncheckedCreateNestedManyWithoutSchoolInput;
    security_system?: security_systemUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUpdateManyWithoutSchoolNestedInput;
    incident?: incidentUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    security_system?: security_systemUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUncheckedUpdateManyWithoutSchoolNestedInput;
    incident?: incidentUncheckedUpdateManyWithoutSchoolNestedInput;
    security_system?: security_systemUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type schoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type schoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type security_systemCreateInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    maintenance_log?: maintenance_logCreateNestedManyWithoutSecurity_systemInput;
    school: schoolCreateNestedOneWithoutSecurity_systemInput;
  };

  export type security_systemUncheckedCreateInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutSecurity_systemInput;
  };

  export type security_systemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_log?: maintenance_logUpdateManyWithoutSecurity_systemNestedInput;
    school?: schoolUpdateOneRequiredWithoutSecurity_systemNestedInput;
  };

  export type security_systemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutSecurity_systemNestedInput;
  };

  export type security_systemCreateManyInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type security_systemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type security_systemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logCreateNestedManyWithoutUserInput;
    incident?: incidentCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logUncheckedCreateNestedManyWithoutUserInput;
    incident?: incidentUncheckedCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUpdateManyWithoutUserNestedInput;
    incident?: incidentUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUncheckedUpdateManyWithoutUserNestedInput;
    incident?: incidentUncheckedUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type SchoolRelationFilter = {
    is?: schoolWhereInput;
    isNot?: schoolWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type access_logCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    access_time?: SortOrder;
    exit_time?: SortOrder;
    access_point?: SortOrder;
    purpose?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type access_logMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    access_time?: SortOrder;
    exit_time?: SortOrder;
    access_point?: SortOrder;
    purpose?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type access_logMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    access_time?: SortOrder;
    exit_time?: SortOrder;
    access_point?: SortOrder;
    purpose?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type incidentCountOrderByAggregateInput = {
    id?: SortOrder;
    incident_type?: SortOrder;
    incident_date?: SortOrder;
    description?: SortOrder;
    school_id?: SortOrder;
    reported_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incidentMaxOrderByAggregateInput = {
    id?: SortOrder;
    incident_type?: SortOrder;
    incident_date?: SortOrder;
    description?: SortOrder;
    school_id?: SortOrder;
    reported_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incidentMinOrderByAggregateInput = {
    id?: SortOrder;
    incident_type?: SortOrder;
    incident_date?: SortOrder;
    description?: SortOrder;
    school_id?: SortOrder;
    reported_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Security_systemRelationFilter = {
    is?: security_systemWhereInput;
    isNot?: security_systemWhereInput;
  };

  export type maintenance_logCountOrderByAggregateInput = {
    id?: SortOrder;
    security_system_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintained_by?: SortOrder;
    description?: SortOrder;
    next_maintenance_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type maintenance_logMaxOrderByAggregateInput = {
    id?: SortOrder;
    security_system_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintained_by?: SortOrder;
    description?: SortOrder;
    next_maintenance_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type maintenance_logMinOrderByAggregateInput = {
    id?: SortOrder;
    security_system_id?: SortOrder;
    maintenance_date?: SortOrder;
    maintained_by?: SortOrder;
    description?: SortOrder;
    next_maintenance_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type Access_logListRelationFilter = {
    every?: access_logWhereInput;
    some?: access_logWhereInput;
    none?: access_logWhereInput;
  };

  export type IncidentListRelationFilter = {
    every?: incidentWhereInput;
    some?: incidentWhereInput;
    none?: incidentWhereInput;
  };

  export type Security_systemListRelationFilter = {
    every?: security_systemWhereInput;
    some?: security_systemWhereInput;
    none?: security_systemWhereInput;
  };

  export type access_logOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type incidentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type security_systemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type schoolCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_year?: SortOrder;
    total_students?: SortOrder;
    total_staff?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolAvgOrderByAggregateInput = {
    established_year?: SortOrder;
    total_students?: SortOrder;
    total_staff?: SortOrder;
  };

  export type schoolMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_year?: SortOrder;
    total_students?: SortOrder;
    total_staff?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_year?: SortOrder;
    total_students?: SortOrder;
    total_staff?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolSumOrderByAggregateInput = {
    established_year?: SortOrder;
    total_students?: SortOrder;
    total_staff?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type Maintenance_logListRelationFilter = {
    every?: maintenance_logWhereInput;
    some?: maintenance_logWhereInput;
    none?: maintenance_logWhereInput;
  };

  export type maintenance_logOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type security_systemCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    installation_date?: SortOrder;
    last_maintenance_date?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type security_systemMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    installation_date?: SortOrder;
    last_maintenance_date?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type security_systemMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    installation_date?: SortOrder;
    last_maintenance_date?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SchoolListRelationFilter = {
    every?: schoolWhereInput;
    some?: schoolWhereInput;
    none?: schoolWhereInput;
  };

  export type schoolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type schoolCreateNestedOneWithoutAccess_logInput = {
    create?: XOR<schoolCreateWithoutAccess_logInput, schoolUncheckedCreateWithoutAccess_logInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutAccess_logInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAccess_logInput = {
    create?: XOR<userCreateWithoutAccess_logInput, userUncheckedCreateWithoutAccess_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutAccess_logInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type schoolUpdateOneRequiredWithoutAccess_logNestedInput = {
    create?: XOR<schoolCreateWithoutAccess_logInput, schoolUncheckedCreateWithoutAccess_logInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutAccess_logInput;
    upsert?: schoolUpsertWithoutAccess_logInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutAccess_logInput, schoolUpdateWithoutAccess_logInput>,
      schoolUncheckedUpdateWithoutAccess_logInput
    >;
  };

  export type userUpdateOneRequiredWithoutAccess_logNestedInput = {
    create?: XOR<userCreateWithoutAccess_logInput, userUncheckedCreateWithoutAccess_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutAccess_logInput;
    upsert?: userUpsertWithoutAccess_logInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAccess_logInput, userUpdateWithoutAccess_logInput>,
      userUncheckedUpdateWithoutAccess_logInput
    >;
  };

  export type userCreateNestedOneWithoutIncidentInput = {
    create?: XOR<userCreateWithoutIncidentInput, userUncheckedCreateWithoutIncidentInput>;
    connectOrCreate?: userCreateOrConnectWithoutIncidentInput;
    connect?: userWhereUniqueInput;
  };

  export type schoolCreateNestedOneWithoutIncidentInput = {
    create?: XOR<schoolCreateWithoutIncidentInput, schoolUncheckedCreateWithoutIncidentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutIncidentInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutIncidentNestedInput = {
    create?: XOR<userCreateWithoutIncidentInput, userUncheckedCreateWithoutIncidentInput>;
    connectOrCreate?: userCreateOrConnectWithoutIncidentInput;
    upsert?: userUpsertWithoutIncidentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutIncidentInput, userUpdateWithoutIncidentInput>,
      userUncheckedUpdateWithoutIncidentInput
    >;
  };

  export type schoolUpdateOneRequiredWithoutIncidentNestedInput = {
    create?: XOR<schoolCreateWithoutIncidentInput, schoolUncheckedCreateWithoutIncidentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutIncidentInput;
    upsert?: schoolUpsertWithoutIncidentInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutIncidentInput, schoolUpdateWithoutIncidentInput>,
      schoolUncheckedUpdateWithoutIncidentInput
    >;
  };

  export type userCreateNestedOneWithoutMaintenance_logInput = {
    create?: XOR<userCreateWithoutMaintenance_logInput, userUncheckedCreateWithoutMaintenance_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutMaintenance_logInput;
    connect?: userWhereUniqueInput;
  };

  export type security_systemCreateNestedOneWithoutMaintenance_logInput = {
    create?: XOR<
      security_systemCreateWithoutMaintenance_logInput,
      security_systemUncheckedCreateWithoutMaintenance_logInput
    >;
    connectOrCreate?: security_systemCreateOrConnectWithoutMaintenance_logInput;
    connect?: security_systemWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutMaintenance_logNestedInput = {
    create?: XOR<userCreateWithoutMaintenance_logInput, userUncheckedCreateWithoutMaintenance_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutMaintenance_logInput;
    upsert?: userUpsertWithoutMaintenance_logInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMaintenance_logInput, userUpdateWithoutMaintenance_logInput>,
      userUncheckedUpdateWithoutMaintenance_logInput
    >;
  };

  export type security_systemUpdateOneRequiredWithoutMaintenance_logNestedInput = {
    create?: XOR<
      security_systemCreateWithoutMaintenance_logInput,
      security_systemUncheckedCreateWithoutMaintenance_logInput
    >;
    connectOrCreate?: security_systemCreateOrConnectWithoutMaintenance_logInput;
    upsert?: security_systemUpsertWithoutMaintenance_logInput;
    connect?: security_systemWhereUniqueInput;
    update?: XOR<
      XOR<
        security_systemUpdateToOneWithWhereWithoutMaintenance_logInput,
        security_systemUpdateWithoutMaintenance_logInput
      >,
      security_systemUncheckedUpdateWithoutMaintenance_logInput
    >;
  };

  export type access_logCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<access_logCreateWithoutSchoolInput, access_logUncheckedCreateWithoutSchoolInput>
      | access_logCreateWithoutSchoolInput[]
      | access_logUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutSchoolInput | access_logCreateOrConnectWithoutSchoolInput[];
    createMany?: access_logCreateManySchoolInputEnvelope;
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
  };

  export type incidentCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<incidentCreateWithoutSchoolInput, incidentUncheckedCreateWithoutSchoolInput>
      | incidentCreateWithoutSchoolInput[]
      | incidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutSchoolInput | incidentCreateOrConnectWithoutSchoolInput[];
    createMany?: incidentCreateManySchoolInputEnvelope;
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutSchoolInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    connect?: userWhereUniqueInput;
  };

  export type security_systemCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<security_systemCreateWithoutSchoolInput, security_systemUncheckedCreateWithoutSchoolInput>
      | security_systemCreateWithoutSchoolInput[]
      | security_systemUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?:
      | security_systemCreateOrConnectWithoutSchoolInput
      | security_systemCreateOrConnectWithoutSchoolInput[];
    createMany?: security_systemCreateManySchoolInputEnvelope;
    connect?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
  };

  export type access_logUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<access_logCreateWithoutSchoolInput, access_logUncheckedCreateWithoutSchoolInput>
      | access_logCreateWithoutSchoolInput[]
      | access_logUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutSchoolInput | access_logCreateOrConnectWithoutSchoolInput[];
    createMany?: access_logCreateManySchoolInputEnvelope;
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
  };

  export type incidentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<incidentCreateWithoutSchoolInput, incidentUncheckedCreateWithoutSchoolInput>
      | incidentCreateWithoutSchoolInput[]
      | incidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutSchoolInput | incidentCreateOrConnectWithoutSchoolInput[];
    createMany?: incidentCreateManySchoolInputEnvelope;
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
  };

  export type security_systemUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<security_systemCreateWithoutSchoolInput, security_systemUncheckedCreateWithoutSchoolInput>
      | security_systemCreateWithoutSchoolInput[]
      | security_systemUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?:
      | security_systemCreateOrConnectWithoutSchoolInput
      | security_systemCreateOrConnectWithoutSchoolInput[];
    createMany?: security_systemCreateManySchoolInputEnvelope;
    connect?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type access_logUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<access_logCreateWithoutSchoolInput, access_logUncheckedCreateWithoutSchoolInput>
      | access_logCreateWithoutSchoolInput[]
      | access_logUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutSchoolInput | access_logCreateOrConnectWithoutSchoolInput[];
    upsert?: access_logUpsertWithWhereUniqueWithoutSchoolInput | access_logUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: access_logCreateManySchoolInputEnvelope;
    set?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    disconnect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    delete?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    update?: access_logUpdateWithWhereUniqueWithoutSchoolInput | access_logUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: access_logUpdateManyWithWhereWithoutSchoolInput | access_logUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: access_logScalarWhereInput | access_logScalarWhereInput[];
  };

  export type incidentUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<incidentCreateWithoutSchoolInput, incidentUncheckedCreateWithoutSchoolInput>
      | incidentCreateWithoutSchoolInput[]
      | incidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutSchoolInput | incidentCreateOrConnectWithoutSchoolInput[];
    upsert?: incidentUpsertWithWhereUniqueWithoutSchoolInput | incidentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: incidentCreateManySchoolInputEnvelope;
    set?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    disconnect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    delete?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    update?: incidentUpdateWithWhereUniqueWithoutSchoolInput | incidentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: incidentUpdateManyWithWhereWithoutSchoolInput | incidentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: incidentScalarWhereInput | incidentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    upsert?: userUpsertWithoutSchoolInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSchoolInput, userUpdateWithoutSchoolInput>,
      userUncheckedUpdateWithoutSchoolInput
    >;
  };

  export type security_systemUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<security_systemCreateWithoutSchoolInput, security_systemUncheckedCreateWithoutSchoolInput>
      | security_systemCreateWithoutSchoolInput[]
      | security_systemUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?:
      | security_systemCreateOrConnectWithoutSchoolInput
      | security_systemCreateOrConnectWithoutSchoolInput[];
    upsert?:
      | security_systemUpsertWithWhereUniqueWithoutSchoolInput
      | security_systemUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: security_systemCreateManySchoolInputEnvelope;
    set?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    disconnect?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    delete?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    connect?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    update?:
      | security_systemUpdateWithWhereUniqueWithoutSchoolInput
      | security_systemUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?:
      | security_systemUpdateManyWithWhereWithoutSchoolInput
      | security_systemUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: security_systemScalarWhereInput | security_systemScalarWhereInput[];
  };

  export type access_logUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<access_logCreateWithoutSchoolInput, access_logUncheckedCreateWithoutSchoolInput>
      | access_logCreateWithoutSchoolInput[]
      | access_logUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutSchoolInput | access_logCreateOrConnectWithoutSchoolInput[];
    upsert?: access_logUpsertWithWhereUniqueWithoutSchoolInput | access_logUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: access_logCreateManySchoolInputEnvelope;
    set?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    disconnect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    delete?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    update?: access_logUpdateWithWhereUniqueWithoutSchoolInput | access_logUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: access_logUpdateManyWithWhereWithoutSchoolInput | access_logUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: access_logScalarWhereInput | access_logScalarWhereInput[];
  };

  export type incidentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<incidentCreateWithoutSchoolInput, incidentUncheckedCreateWithoutSchoolInput>
      | incidentCreateWithoutSchoolInput[]
      | incidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutSchoolInput | incidentCreateOrConnectWithoutSchoolInput[];
    upsert?: incidentUpsertWithWhereUniqueWithoutSchoolInput | incidentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: incidentCreateManySchoolInputEnvelope;
    set?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    disconnect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    delete?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    update?: incidentUpdateWithWhereUniqueWithoutSchoolInput | incidentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: incidentUpdateManyWithWhereWithoutSchoolInput | incidentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: incidentScalarWhereInput | incidentScalarWhereInput[];
  };

  export type security_systemUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<security_systemCreateWithoutSchoolInput, security_systemUncheckedCreateWithoutSchoolInput>
      | security_systemCreateWithoutSchoolInput[]
      | security_systemUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?:
      | security_systemCreateOrConnectWithoutSchoolInput
      | security_systemCreateOrConnectWithoutSchoolInput[];
    upsert?:
      | security_systemUpsertWithWhereUniqueWithoutSchoolInput
      | security_systemUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: security_systemCreateManySchoolInputEnvelope;
    set?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    disconnect?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    delete?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    connect?: security_systemWhereUniqueInput | security_systemWhereUniqueInput[];
    update?:
      | security_systemUpdateWithWhereUniqueWithoutSchoolInput
      | security_systemUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?:
      | security_systemUpdateManyWithWhereWithoutSchoolInput
      | security_systemUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: security_systemScalarWhereInput | security_systemScalarWhereInput[];
  };

  export type maintenance_logCreateNestedManyWithoutSecurity_systemInput = {
    create?:
      | XOR<maintenance_logCreateWithoutSecurity_systemInput, maintenance_logUncheckedCreateWithoutSecurity_systemInput>
      | maintenance_logCreateWithoutSecurity_systemInput[]
      | maintenance_logUncheckedCreateWithoutSecurity_systemInput[];
    connectOrCreate?:
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput[];
    createMany?: maintenance_logCreateManySecurity_systemInputEnvelope;
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
  };

  export type schoolCreateNestedOneWithoutSecurity_systemInput = {
    create?: XOR<schoolCreateWithoutSecurity_systemInput, schoolUncheckedCreateWithoutSecurity_systemInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutSecurity_systemInput;
    connect?: schoolWhereUniqueInput;
  };

  export type maintenance_logUncheckedCreateNestedManyWithoutSecurity_systemInput = {
    create?:
      | XOR<maintenance_logCreateWithoutSecurity_systemInput, maintenance_logUncheckedCreateWithoutSecurity_systemInput>
      | maintenance_logCreateWithoutSecurity_systemInput[]
      | maintenance_logUncheckedCreateWithoutSecurity_systemInput[];
    connectOrCreate?:
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput[];
    createMany?: maintenance_logCreateManySecurity_systemInputEnvelope;
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
  };

  export type maintenance_logUpdateManyWithoutSecurity_systemNestedInput = {
    create?:
      | XOR<maintenance_logCreateWithoutSecurity_systemInput, maintenance_logUncheckedCreateWithoutSecurity_systemInput>
      | maintenance_logCreateWithoutSecurity_systemInput[]
      | maintenance_logUncheckedCreateWithoutSecurity_systemInput[];
    connectOrCreate?:
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput[];
    upsert?:
      | maintenance_logUpsertWithWhereUniqueWithoutSecurity_systemInput
      | maintenance_logUpsertWithWhereUniqueWithoutSecurity_systemInput[];
    createMany?: maintenance_logCreateManySecurity_systemInputEnvelope;
    set?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    disconnect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    delete?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    update?:
      | maintenance_logUpdateWithWhereUniqueWithoutSecurity_systemInput
      | maintenance_logUpdateWithWhereUniqueWithoutSecurity_systemInput[];
    updateMany?:
      | maintenance_logUpdateManyWithWhereWithoutSecurity_systemInput
      | maintenance_logUpdateManyWithWhereWithoutSecurity_systemInput[];
    deleteMany?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[];
  };

  export type schoolUpdateOneRequiredWithoutSecurity_systemNestedInput = {
    create?: XOR<schoolCreateWithoutSecurity_systemInput, schoolUncheckedCreateWithoutSecurity_systemInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutSecurity_systemInput;
    upsert?: schoolUpsertWithoutSecurity_systemInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutSecurity_systemInput, schoolUpdateWithoutSecurity_systemInput>,
      schoolUncheckedUpdateWithoutSecurity_systemInput
    >;
  };

  export type maintenance_logUncheckedUpdateManyWithoutSecurity_systemNestedInput = {
    create?:
      | XOR<maintenance_logCreateWithoutSecurity_systemInput, maintenance_logUncheckedCreateWithoutSecurity_systemInput>
      | maintenance_logCreateWithoutSecurity_systemInput[]
      | maintenance_logUncheckedCreateWithoutSecurity_systemInput[];
    connectOrCreate?:
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput
      | maintenance_logCreateOrConnectWithoutSecurity_systemInput[];
    upsert?:
      | maintenance_logUpsertWithWhereUniqueWithoutSecurity_systemInput
      | maintenance_logUpsertWithWhereUniqueWithoutSecurity_systemInput[];
    createMany?: maintenance_logCreateManySecurity_systemInputEnvelope;
    set?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    disconnect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    delete?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    update?:
      | maintenance_logUpdateWithWhereUniqueWithoutSecurity_systemInput
      | maintenance_logUpdateWithWhereUniqueWithoutSecurity_systemInput[];
    updateMany?:
      | maintenance_logUpdateManyWithWhereWithoutSecurity_systemInput
      | maintenance_logUpdateManyWithWhereWithoutSecurity_systemInput[];
    deleteMany?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[];
  };

  export type access_logCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<access_logCreateWithoutUserInput, access_logUncheckedCreateWithoutUserInput>
      | access_logCreateWithoutUserInput[]
      | access_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutUserInput | access_logCreateOrConnectWithoutUserInput[];
    createMany?: access_logCreateManyUserInputEnvelope;
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
  };

  export type incidentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<incidentCreateWithoutUserInput, incidentUncheckedCreateWithoutUserInput>
      | incidentCreateWithoutUserInput[]
      | incidentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutUserInput | incidentCreateOrConnectWithoutUserInput[];
    createMany?: incidentCreateManyUserInputEnvelope;
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
  };

  export type maintenance_logCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<maintenance_logCreateWithoutUserInput, maintenance_logUncheckedCreateWithoutUserInput>
      | maintenance_logCreateWithoutUserInput[]
      | maintenance_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: maintenance_logCreateOrConnectWithoutUserInput | maintenance_logCreateOrConnectWithoutUserInput[];
    createMany?: maintenance_logCreateManyUserInputEnvelope;
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
  };

  export type schoolCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type access_logUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<access_logCreateWithoutUserInput, access_logUncheckedCreateWithoutUserInput>
      | access_logCreateWithoutUserInput[]
      | access_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutUserInput | access_logCreateOrConnectWithoutUserInput[];
    createMany?: access_logCreateManyUserInputEnvelope;
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
  };

  export type incidentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<incidentCreateWithoutUserInput, incidentUncheckedCreateWithoutUserInput>
      | incidentCreateWithoutUserInput[]
      | incidentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutUserInput | incidentCreateOrConnectWithoutUserInput[];
    createMany?: incidentCreateManyUserInputEnvelope;
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
  };

  export type maintenance_logUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<maintenance_logCreateWithoutUserInput, maintenance_logUncheckedCreateWithoutUserInput>
      | maintenance_logCreateWithoutUserInput[]
      | maintenance_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: maintenance_logCreateOrConnectWithoutUserInput | maintenance_logCreateOrConnectWithoutUserInput[];
    createMany?: maintenance_logCreateManyUserInputEnvelope;
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
  };

  export type schoolUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type access_logUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<access_logCreateWithoutUserInput, access_logUncheckedCreateWithoutUserInput>
      | access_logCreateWithoutUserInput[]
      | access_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutUserInput | access_logCreateOrConnectWithoutUserInput[];
    upsert?: access_logUpsertWithWhereUniqueWithoutUserInput | access_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: access_logCreateManyUserInputEnvelope;
    set?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    disconnect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    delete?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    update?: access_logUpdateWithWhereUniqueWithoutUserInput | access_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: access_logUpdateManyWithWhereWithoutUserInput | access_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: access_logScalarWhereInput | access_logScalarWhereInput[];
  };

  export type incidentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<incidentCreateWithoutUserInput, incidentUncheckedCreateWithoutUserInput>
      | incidentCreateWithoutUserInput[]
      | incidentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutUserInput | incidentCreateOrConnectWithoutUserInput[];
    upsert?: incidentUpsertWithWhereUniqueWithoutUserInput | incidentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: incidentCreateManyUserInputEnvelope;
    set?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    disconnect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    delete?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    update?: incidentUpdateWithWhereUniqueWithoutUserInput | incidentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: incidentUpdateManyWithWhereWithoutUserInput | incidentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: incidentScalarWhereInput | incidentScalarWhereInput[];
  };

  export type maintenance_logUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<maintenance_logCreateWithoutUserInput, maintenance_logUncheckedCreateWithoutUserInput>
      | maintenance_logCreateWithoutUserInput[]
      | maintenance_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: maintenance_logCreateOrConnectWithoutUserInput | maintenance_logCreateOrConnectWithoutUserInput[];
    upsert?:
      | maintenance_logUpsertWithWhereUniqueWithoutUserInput
      | maintenance_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: maintenance_logCreateManyUserInputEnvelope;
    set?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    disconnect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    delete?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    update?:
      | maintenance_logUpdateWithWhereUniqueWithoutUserInput
      | maintenance_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | maintenance_logUpdateManyWithWhereWithoutUserInput
      | maintenance_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[];
  };

  export type schoolUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type access_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<access_logCreateWithoutUserInput, access_logUncheckedCreateWithoutUserInput>
      | access_logCreateWithoutUserInput[]
      | access_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: access_logCreateOrConnectWithoutUserInput | access_logCreateOrConnectWithoutUserInput[];
    upsert?: access_logUpsertWithWhereUniqueWithoutUserInput | access_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: access_logCreateManyUserInputEnvelope;
    set?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    disconnect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    delete?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    connect?: access_logWhereUniqueInput | access_logWhereUniqueInput[];
    update?: access_logUpdateWithWhereUniqueWithoutUserInput | access_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: access_logUpdateManyWithWhereWithoutUserInput | access_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: access_logScalarWhereInput | access_logScalarWhereInput[];
  };

  export type incidentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<incidentCreateWithoutUserInput, incidentUncheckedCreateWithoutUserInput>
      | incidentCreateWithoutUserInput[]
      | incidentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: incidentCreateOrConnectWithoutUserInput | incidentCreateOrConnectWithoutUserInput[];
    upsert?: incidentUpsertWithWhereUniqueWithoutUserInput | incidentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: incidentCreateManyUserInputEnvelope;
    set?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    disconnect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    delete?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    connect?: incidentWhereUniqueInput | incidentWhereUniqueInput[];
    update?: incidentUpdateWithWhereUniqueWithoutUserInput | incidentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: incidentUpdateManyWithWhereWithoutUserInput | incidentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: incidentScalarWhereInput | incidentScalarWhereInput[];
  };

  export type maintenance_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<maintenance_logCreateWithoutUserInput, maintenance_logUncheckedCreateWithoutUserInput>
      | maintenance_logCreateWithoutUserInput[]
      | maintenance_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: maintenance_logCreateOrConnectWithoutUserInput | maintenance_logCreateOrConnectWithoutUserInput[];
    upsert?:
      | maintenance_logUpsertWithWhereUniqueWithoutUserInput
      | maintenance_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: maintenance_logCreateManyUserInputEnvelope;
    set?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    disconnect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    delete?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[];
    update?:
      | maintenance_logUpdateWithWhereUniqueWithoutUserInput
      | maintenance_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | maintenance_logUpdateManyWithWhereWithoutUserInput
      | maintenance_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[];
  };

  export type schoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type schoolCreateWithoutAccess_logInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    incident?: incidentCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    security_system?: security_systemCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutAccess_logInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    incident?: incidentUncheckedCreateNestedManyWithoutSchoolInput;
    security_system?: security_systemUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutAccess_logInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutAccess_logInput, schoolUncheckedCreateWithoutAccess_logInput>;
  };

  export type userCreateWithoutAccess_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incident?: incidentCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAccess_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incident?: incidentUncheckedCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAccess_logInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAccess_logInput, userUncheckedCreateWithoutAccess_logInput>;
  };

  export type schoolUpsertWithoutAccess_logInput = {
    update: XOR<schoolUpdateWithoutAccess_logInput, schoolUncheckedUpdateWithoutAccess_logInput>;
    create: XOR<schoolCreateWithoutAccess_logInput, schoolUncheckedCreateWithoutAccess_logInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutAccess_logInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutAccess_logInput, schoolUncheckedUpdateWithoutAccess_logInput>;
  };

  export type schoolUpdateWithoutAccess_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    incident?: incidentUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    security_system?: security_systemUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutAccess_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    incident?: incidentUncheckedUpdateManyWithoutSchoolNestedInput;
    security_system?: security_systemUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutAccess_logInput = {
    update: XOR<userUpdateWithoutAccess_logInput, userUncheckedUpdateWithoutAccess_logInput>;
    create: XOR<userCreateWithoutAccess_logInput, userUncheckedCreateWithoutAccess_logInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAccess_logInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAccess_logInput, userUncheckedUpdateWithoutAccess_logInput>;
  };

  export type userUpdateWithoutAccess_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incident?: incidentUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAccess_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incident?: incidentUncheckedUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutIncidentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutIncidentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logUncheckedCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutIncidentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutIncidentInput, userUncheckedCreateWithoutIncidentInput>;
  };

  export type schoolCreateWithoutIncidentInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    access_log?: access_logCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    security_system?: security_systemCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutIncidentInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    access_log?: access_logUncheckedCreateNestedManyWithoutSchoolInput;
    security_system?: security_systemUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutIncidentInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutIncidentInput, schoolUncheckedCreateWithoutIncidentInput>;
  };

  export type userUpsertWithoutIncidentInput = {
    update: XOR<userUpdateWithoutIncidentInput, userUncheckedUpdateWithoutIncidentInput>;
    create: XOR<userCreateWithoutIncidentInput, userUncheckedCreateWithoutIncidentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutIncidentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutIncidentInput, userUncheckedUpdateWithoutIncidentInput>;
  };

  export type userUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUncheckedUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type schoolUpsertWithoutIncidentInput = {
    update: XOR<schoolUpdateWithoutIncidentInput, schoolUncheckedUpdateWithoutIncidentInput>;
    create: XOR<schoolCreateWithoutIncidentInput, schoolUncheckedCreateWithoutIncidentInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutIncidentInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutIncidentInput, schoolUncheckedUpdateWithoutIncidentInput>;
  };

  export type schoolUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    security_system?: security_systemUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUncheckedUpdateManyWithoutSchoolNestedInput;
    security_system?: security_systemUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userCreateWithoutMaintenance_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logCreateNestedManyWithoutUserInput;
    incident?: incidentCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMaintenance_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logUncheckedCreateNestedManyWithoutUserInput;
    incident?: incidentUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMaintenance_logInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMaintenance_logInput, userUncheckedCreateWithoutMaintenance_logInput>;
  };

  export type security_systemCreateWithoutMaintenance_logInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutSecurity_systemInput;
  };

  export type security_systemUncheckedCreateWithoutMaintenance_logInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type security_systemCreateOrConnectWithoutMaintenance_logInput = {
    where: security_systemWhereUniqueInput;
    create: XOR<
      security_systemCreateWithoutMaintenance_logInput,
      security_systemUncheckedCreateWithoutMaintenance_logInput
    >;
  };

  export type userUpsertWithoutMaintenance_logInput = {
    update: XOR<userUpdateWithoutMaintenance_logInput, userUncheckedUpdateWithoutMaintenance_logInput>;
    create: XOR<userCreateWithoutMaintenance_logInput, userUncheckedCreateWithoutMaintenance_logInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMaintenance_logInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMaintenance_logInput, userUncheckedUpdateWithoutMaintenance_logInput>;
  };

  export type userUpdateWithoutMaintenance_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUpdateManyWithoutUserNestedInput;
    incident?: incidentUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMaintenance_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUncheckedUpdateManyWithoutUserNestedInput;
    incident?: incidentUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type security_systemUpsertWithoutMaintenance_logInput = {
    update: XOR<
      security_systemUpdateWithoutMaintenance_logInput,
      security_systemUncheckedUpdateWithoutMaintenance_logInput
    >;
    create: XOR<
      security_systemCreateWithoutMaintenance_logInput,
      security_systemUncheckedCreateWithoutMaintenance_logInput
    >;
    where?: security_systemWhereInput;
  };

  export type security_systemUpdateToOneWithWhereWithoutMaintenance_logInput = {
    where?: security_systemWhereInput;
    data: XOR<
      security_systemUpdateWithoutMaintenance_logInput,
      security_systemUncheckedUpdateWithoutMaintenance_logInput
    >;
  };

  export type security_systemUpdateWithoutMaintenance_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutSecurity_systemNestedInput;
  };

  export type security_systemUncheckedUpdateWithoutMaintenance_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type access_logCreateWithoutSchoolInput = {
    id?: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAccess_logInput;
  };

  export type access_logUncheckedCreateWithoutSchoolInput = {
    id?: string;
    user_id: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type access_logCreateOrConnectWithoutSchoolInput = {
    where: access_logWhereUniqueInput;
    create: XOR<access_logCreateWithoutSchoolInput, access_logUncheckedCreateWithoutSchoolInput>;
  };

  export type access_logCreateManySchoolInputEnvelope = {
    data: access_logCreateManySchoolInput | access_logCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type incidentCreateWithoutSchoolInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutIncidentInput;
  };

  export type incidentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    reported_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incidentCreateOrConnectWithoutSchoolInput = {
    where: incidentWhereUniqueInput;
    create: XOR<incidentCreateWithoutSchoolInput, incidentUncheckedCreateWithoutSchoolInput>;
  };

  export type incidentCreateManySchoolInputEnvelope = {
    data: incidentCreateManySchoolInput | incidentCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logCreateNestedManyWithoutUserInput;
    incident?: incidentCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    access_log?: access_logUncheckedCreateNestedManyWithoutUserInput;
    incident?: incidentUncheckedCreateNestedManyWithoutUserInput;
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSchoolInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
  };

  export type security_systemCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    maintenance_log?: maintenance_logCreateNestedManyWithoutSecurity_systemInput;
  };

  export type security_systemUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutSecurity_systemInput;
  };

  export type security_systemCreateOrConnectWithoutSchoolInput = {
    where: security_systemWhereUniqueInput;
    create: XOR<security_systemCreateWithoutSchoolInput, security_systemUncheckedCreateWithoutSchoolInput>;
  };

  export type security_systemCreateManySchoolInputEnvelope = {
    data: security_systemCreateManySchoolInput | security_systemCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type access_logUpsertWithWhereUniqueWithoutSchoolInput = {
    where: access_logWhereUniqueInput;
    update: XOR<access_logUpdateWithoutSchoolInput, access_logUncheckedUpdateWithoutSchoolInput>;
    create: XOR<access_logCreateWithoutSchoolInput, access_logUncheckedCreateWithoutSchoolInput>;
  };

  export type access_logUpdateWithWhereUniqueWithoutSchoolInput = {
    where: access_logWhereUniqueInput;
    data: XOR<access_logUpdateWithoutSchoolInput, access_logUncheckedUpdateWithoutSchoolInput>;
  };

  export type access_logUpdateManyWithWhereWithoutSchoolInput = {
    where: access_logScalarWhereInput;
    data: XOR<access_logUpdateManyMutationInput, access_logUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type access_logScalarWhereInput = {
    AND?: access_logScalarWhereInput | access_logScalarWhereInput[];
    OR?: access_logScalarWhereInput[];
    NOT?: access_logScalarWhereInput | access_logScalarWhereInput[];
    id?: UuidFilter<'access_log'> | string;
    user_id?: UuidFilter<'access_log'> | string;
    school_id?: UuidFilter<'access_log'> | string;
    access_time?: DateTimeFilter<'access_log'> | Date | string;
    exit_time?: DateTimeNullableFilter<'access_log'> | Date | string | null;
    access_point?: StringFilter<'access_log'> | string;
    purpose?: StringFilter<'access_log'> | string;
    created_at?: DateTimeFilter<'access_log'> | Date | string;
    updated_at?: DateTimeFilter<'access_log'> | Date | string;
  };

  export type incidentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: incidentWhereUniqueInput;
    update: XOR<incidentUpdateWithoutSchoolInput, incidentUncheckedUpdateWithoutSchoolInput>;
    create: XOR<incidentCreateWithoutSchoolInput, incidentUncheckedCreateWithoutSchoolInput>;
  };

  export type incidentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: incidentWhereUniqueInput;
    data: XOR<incidentUpdateWithoutSchoolInput, incidentUncheckedUpdateWithoutSchoolInput>;
  };

  export type incidentUpdateManyWithWhereWithoutSchoolInput = {
    where: incidentScalarWhereInput;
    data: XOR<incidentUpdateManyMutationInput, incidentUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type incidentScalarWhereInput = {
    AND?: incidentScalarWhereInput | incidentScalarWhereInput[];
    OR?: incidentScalarWhereInput[];
    NOT?: incidentScalarWhereInput | incidentScalarWhereInput[];
    id?: UuidFilter<'incident'> | string;
    incident_type?: StringFilter<'incident'> | string;
    incident_date?: DateTimeFilter<'incident'> | Date | string;
    description?: StringFilter<'incident'> | string;
    school_id?: UuidFilter<'incident'> | string;
    reported_by?: UuidFilter<'incident'> | string;
    created_at?: DateTimeFilter<'incident'> | Date | string;
    updated_at?: DateTimeFilter<'incident'> | Date | string;
  };

  export type userUpsertWithoutSchoolInput = {
    update: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSchoolInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
  };

  export type userUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUpdateManyWithoutUserNestedInput;
    incident?: incidentUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    access_log?: access_logUncheckedUpdateManyWithoutUserNestedInput;
    incident?: incidentUncheckedUpdateManyWithoutUserNestedInput;
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type security_systemUpsertWithWhereUniqueWithoutSchoolInput = {
    where: security_systemWhereUniqueInput;
    update: XOR<security_systemUpdateWithoutSchoolInput, security_systemUncheckedUpdateWithoutSchoolInput>;
    create: XOR<security_systemCreateWithoutSchoolInput, security_systemUncheckedCreateWithoutSchoolInput>;
  };

  export type security_systemUpdateWithWhereUniqueWithoutSchoolInput = {
    where: security_systemWhereUniqueInput;
    data: XOR<security_systemUpdateWithoutSchoolInput, security_systemUncheckedUpdateWithoutSchoolInput>;
  };

  export type security_systemUpdateManyWithWhereWithoutSchoolInput = {
    where: security_systemScalarWhereInput;
    data: XOR<security_systemUpdateManyMutationInput, security_systemUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type security_systemScalarWhereInput = {
    AND?: security_systemScalarWhereInput | security_systemScalarWhereInput[];
    OR?: security_systemScalarWhereInput[];
    NOT?: security_systemScalarWhereInput | security_systemScalarWhereInput[];
    id?: UuidFilter<'security_system'> | string;
    name?: StringFilter<'security_system'> | string;
    model?: StringFilter<'security_system'> | string;
    manufacturer?: StringFilter<'security_system'> | string;
    installation_date?: DateTimeFilter<'security_system'> | Date | string;
    last_maintenance_date?: DateTimeNullableFilter<'security_system'> | Date | string | null;
    school_id?: UuidFilter<'security_system'> | string;
    created_at?: DateTimeFilter<'security_system'> | Date | string;
    updated_at?: DateTimeFilter<'security_system'> | Date | string;
  };

  export type maintenance_logCreateWithoutSecurity_systemInput = {
    id?: string;
    maintenance_date: Date | string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMaintenance_logInput;
  };

  export type maintenance_logUncheckedCreateWithoutSecurity_systemInput = {
    id?: string;
    maintenance_date: Date | string;
    maintained_by: string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenance_logCreateOrConnectWithoutSecurity_systemInput = {
    where: maintenance_logWhereUniqueInput;
    create: XOR<
      maintenance_logCreateWithoutSecurity_systemInput,
      maintenance_logUncheckedCreateWithoutSecurity_systemInput
    >;
  };

  export type maintenance_logCreateManySecurity_systemInputEnvelope = {
    data: maintenance_logCreateManySecurity_systemInput | maintenance_logCreateManySecurity_systemInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutSecurity_systemInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    access_log?: access_logCreateNestedManyWithoutSchoolInput;
    incident?: incidentCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutSecurity_systemInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    access_log?: access_logUncheckedCreateNestedManyWithoutSchoolInput;
    incident?: incidentUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutSecurity_systemInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutSecurity_systemInput, schoolUncheckedCreateWithoutSecurity_systemInput>;
  };

  export type maintenance_logUpsertWithWhereUniqueWithoutSecurity_systemInput = {
    where: maintenance_logWhereUniqueInput;
    update: XOR<
      maintenance_logUpdateWithoutSecurity_systemInput,
      maintenance_logUncheckedUpdateWithoutSecurity_systemInput
    >;
    create: XOR<
      maintenance_logCreateWithoutSecurity_systemInput,
      maintenance_logUncheckedCreateWithoutSecurity_systemInput
    >;
  };

  export type maintenance_logUpdateWithWhereUniqueWithoutSecurity_systemInput = {
    where: maintenance_logWhereUniqueInput;
    data: XOR<
      maintenance_logUpdateWithoutSecurity_systemInput,
      maintenance_logUncheckedUpdateWithoutSecurity_systemInput
    >;
  };

  export type maintenance_logUpdateManyWithWhereWithoutSecurity_systemInput = {
    where: maintenance_logScalarWhereInput;
    data: XOR<maintenance_logUpdateManyMutationInput, maintenance_logUncheckedUpdateManyWithoutSecurity_systemInput>;
  };

  export type maintenance_logScalarWhereInput = {
    AND?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[];
    OR?: maintenance_logScalarWhereInput[];
    NOT?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[];
    id?: UuidFilter<'maintenance_log'> | string;
    security_system_id?: UuidFilter<'maintenance_log'> | string;
    maintenance_date?: DateTimeFilter<'maintenance_log'> | Date | string;
    maintained_by?: UuidFilter<'maintenance_log'> | string;
    description?: StringFilter<'maintenance_log'> | string;
    next_maintenance_date?: DateTimeNullableFilter<'maintenance_log'> | Date | string | null;
    created_at?: DateTimeFilter<'maintenance_log'> | Date | string;
    updated_at?: DateTimeFilter<'maintenance_log'> | Date | string;
  };

  export type schoolUpsertWithoutSecurity_systemInput = {
    update: XOR<schoolUpdateWithoutSecurity_systemInput, schoolUncheckedUpdateWithoutSecurity_systemInput>;
    create: XOR<schoolCreateWithoutSecurity_systemInput, schoolUncheckedCreateWithoutSecurity_systemInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutSecurity_systemInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutSecurity_systemInput, schoolUncheckedUpdateWithoutSecurity_systemInput>;
  };

  export type schoolUpdateWithoutSecurity_systemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUpdateManyWithoutSchoolNestedInput;
    incident?: incidentUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutSecurity_systemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUncheckedUpdateManyWithoutSchoolNestedInput;
    incident?: incidentUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type access_logCreateWithoutUserInput = {
    id?: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutAccess_logInput;
  };

  export type access_logUncheckedCreateWithoutUserInput = {
    id?: string;
    school_id: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type access_logCreateOrConnectWithoutUserInput = {
    where: access_logWhereUniqueInput;
    create: XOR<access_logCreateWithoutUserInput, access_logUncheckedCreateWithoutUserInput>;
  };

  export type access_logCreateManyUserInputEnvelope = {
    data: access_logCreateManyUserInput | access_logCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type incidentCreateWithoutUserInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutIncidentInput;
  };

  export type incidentUncheckedCreateWithoutUserInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incidentCreateOrConnectWithoutUserInput = {
    where: incidentWhereUniqueInput;
    create: XOR<incidentCreateWithoutUserInput, incidentUncheckedCreateWithoutUserInput>;
  };

  export type incidentCreateManyUserInputEnvelope = {
    data: incidentCreateManyUserInput | incidentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type maintenance_logCreateWithoutUserInput = {
    id?: string;
    maintenance_date: Date | string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    security_system: security_systemCreateNestedOneWithoutMaintenance_logInput;
  };

  export type maintenance_logUncheckedCreateWithoutUserInput = {
    id?: string;
    security_system_id: string;
    maintenance_date: Date | string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenance_logCreateOrConnectWithoutUserInput = {
    where: maintenance_logWhereUniqueInput;
    create: XOR<maintenance_logCreateWithoutUserInput, maintenance_logUncheckedCreateWithoutUserInput>;
  };

  export type maintenance_logCreateManyUserInputEnvelope = {
    data: maintenance_logCreateManyUserInput | maintenance_logCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    access_log?: access_logCreateNestedManyWithoutSchoolInput;
    incident?: incidentCreateNestedManyWithoutSchoolInput;
    security_system?: security_systemCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    access_log?: access_logUncheckedCreateNestedManyWithoutSchoolInput;
    incident?: incidentUncheckedCreateNestedManyWithoutSchoolInput;
    security_system?: security_systemUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutUserInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolCreateManyUserInputEnvelope = {
    data: schoolCreateManyUserInput | schoolCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type access_logUpsertWithWhereUniqueWithoutUserInput = {
    where: access_logWhereUniqueInput;
    update: XOR<access_logUpdateWithoutUserInput, access_logUncheckedUpdateWithoutUserInput>;
    create: XOR<access_logCreateWithoutUserInput, access_logUncheckedCreateWithoutUserInput>;
  };

  export type access_logUpdateWithWhereUniqueWithoutUserInput = {
    where: access_logWhereUniqueInput;
    data: XOR<access_logUpdateWithoutUserInput, access_logUncheckedUpdateWithoutUserInput>;
  };

  export type access_logUpdateManyWithWhereWithoutUserInput = {
    where: access_logScalarWhereInput;
    data: XOR<access_logUpdateManyMutationInput, access_logUncheckedUpdateManyWithoutUserInput>;
  };

  export type incidentUpsertWithWhereUniqueWithoutUserInput = {
    where: incidentWhereUniqueInput;
    update: XOR<incidentUpdateWithoutUserInput, incidentUncheckedUpdateWithoutUserInput>;
    create: XOR<incidentCreateWithoutUserInput, incidentUncheckedCreateWithoutUserInput>;
  };

  export type incidentUpdateWithWhereUniqueWithoutUserInput = {
    where: incidentWhereUniqueInput;
    data: XOR<incidentUpdateWithoutUserInput, incidentUncheckedUpdateWithoutUserInput>;
  };

  export type incidentUpdateManyWithWhereWithoutUserInput = {
    where: incidentScalarWhereInput;
    data: XOR<incidentUpdateManyMutationInput, incidentUncheckedUpdateManyWithoutUserInput>;
  };

  export type maintenance_logUpsertWithWhereUniqueWithoutUserInput = {
    where: maintenance_logWhereUniqueInput;
    update: XOR<maintenance_logUpdateWithoutUserInput, maintenance_logUncheckedUpdateWithoutUserInput>;
    create: XOR<maintenance_logCreateWithoutUserInput, maintenance_logUncheckedCreateWithoutUserInput>;
  };

  export type maintenance_logUpdateWithWhereUniqueWithoutUserInput = {
    where: maintenance_logWhereUniqueInput;
    data: XOR<maintenance_logUpdateWithoutUserInput, maintenance_logUncheckedUpdateWithoutUserInput>;
  };

  export type maintenance_logUpdateManyWithWhereWithoutUserInput = {
    where: maintenance_logScalarWhereInput;
    data: XOR<maintenance_logUpdateManyMutationInput, maintenance_logUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolUpsertWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    update: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolUpdateWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    data: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
  };

  export type schoolUpdateManyWithWhereWithoutUserInput = {
    where: schoolScalarWhereInput;
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolScalarWhereInput = {
    AND?: schoolScalarWhereInput | schoolScalarWhereInput[];
    OR?: schoolScalarWhereInput[];
    NOT?: schoolScalarWhereInput | schoolScalarWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    location?: StringNullableFilter<'school'> | string | null;
    established_year?: IntNullableFilter<'school'> | number | null;
    total_students?: IntNullableFilter<'school'> | number | null;
    total_staff?: IntNullableFilter<'school'> | number | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
  };

  export type access_logCreateManySchoolInput = {
    id?: string;
    user_id: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incidentCreateManySchoolInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    reported_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type security_systemCreateManySchoolInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    installation_date: Date | string;
    last_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type access_logUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAccess_logNestedInput;
  };

  export type access_logUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type access_logUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutIncidentNestedInput;
  };

  export type incidentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    reported_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    reported_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type security_systemUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_log?: maintenance_logUpdateManyWithoutSecurity_systemNestedInput;
  };

  export type security_systemUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutSecurity_systemNestedInput;
  };

  export type security_systemUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    last_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logCreateManySecurity_systemInput = {
    id?: string;
    maintenance_date: Date | string;
    maintained_by: string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenance_logUpdateWithoutSecurity_systemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMaintenance_logNestedInput;
  };

  export type maintenance_logUncheckedUpdateWithoutSecurity_systemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintained_by?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logUncheckedUpdateManyWithoutSecurity_systemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintained_by?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type access_logCreateManyUserInput = {
    id?: string;
    school_id: string;
    access_time: Date | string;
    exit_time?: Date | string | null;
    access_point: string;
    purpose: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incidentCreateManyUserInput = {
    id?: string;
    incident_type: string;
    incident_date: Date | string;
    description: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenance_logCreateManyUserInput = {
    id?: string;
    security_system_id: string;
    maintenance_date: Date | string;
    description: string;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_year?: number | null;
    total_students?: number | null;
    total_staff?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type access_logUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutAccess_logNestedInput;
  };

  export type access_logUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type access_logUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    exit_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    access_point?: StringFieldUpdateOperationsInput | string;
    purpose?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutIncidentNestedInput;
  };

  export type incidentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incidentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incident_type?: StringFieldUpdateOperationsInput | string;
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    security_system?: security_systemUpdateOneRequiredWithoutMaintenance_logNestedInput;
  };

  export type maintenance_logUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    security_system_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenance_logUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    security_system_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: StringFieldUpdateOperationsInput | string;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUpdateManyWithoutSchoolNestedInput;
    incident?: incidentUpdateManyWithoutSchoolNestedInput;
    security_system?: security_systemUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    access_log?: access_logUncheckedUpdateManyWithoutSchoolNestedInput;
    incident?: incidentUncheckedUpdateManyWithoutSchoolNestedInput;
    security_system?: security_systemUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_year?: NullableIntFieldUpdateOperationsInput | number | null;
    total_students?: NullableIntFieldUpdateOperationsInput | number | null;
    total_staff?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use SchoolCountOutputTypeDefaultArgs instead
   */
  export type SchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Security_systemCountOutputTypeDefaultArgs instead
   */
  export type Security_systemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Security_systemCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use access_logDefaultArgs instead
   */
  export type access_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    access_logDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use incidentDefaultArgs instead
   */
  export type incidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    incidentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use maintenance_logDefaultArgs instead
   */
  export type maintenance_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    maintenance_logDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use schoolDefaultArgs instead
   */
  export type schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    schoolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use security_systemDefaultArgs instead
   */
  export type security_systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    security_systemDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
