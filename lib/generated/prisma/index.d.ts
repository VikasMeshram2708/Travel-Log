
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TripLog
 * 
 */
export type TripLog = $Result.DefaultSelection<Prisma.$TripLogPayload>
/**
 * Model MediaFile
 * 
 */
export type MediaFile = $Result.DefaultSelection<Prisma.$MediaFilePayload>
/**
 * Model ContactUs
 * 
 */
export type ContactUs = $Result.DefaultSelection<Prisma.$ContactUsPayload>
/**
 * Model NewLetter
 * 
 */
export type NewLetter = $Result.DefaultSelection<Prisma.$NewLetterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MediaFileType: {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE'
};

export type MediaFileType = (typeof MediaFileType)[keyof typeof MediaFileType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MediaFileType = $Enums.MediaFileType

export const MediaFileType: typeof $Enums.MediaFileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripLog`: Exposes CRUD operations for the **TripLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripLogs
    * const tripLogs = await prisma.tripLog.findMany()
    * ```
    */
  get tripLog(): Prisma.TripLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaFile`: Exposes CRUD operations for the **MediaFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaFiles
    * const mediaFiles = await prisma.mediaFile.findMany()
    * ```
    */
  get mediaFile(): Prisma.MediaFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactUs`: Exposes CRUD operations for the **ContactUs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactuses
    * const contactuses = await prisma.contactUs.findMany()
    * ```
    */
  get contactUs(): Prisma.ContactUsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newLetter`: Exposes CRUD operations for the **NewLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewLetters
    * const newLetters = await prisma.newLetter.findMany()
    * ```
    */
  get newLetter(): Prisma.NewLetterDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    TripLog: 'TripLog',
    MediaFile: 'MediaFile',
    ContactUs: 'ContactUs',
    NewLetter: 'NewLetter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tripLog" | "mediaFile" | "contactUs" | "newLetter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TripLog: {
        payload: Prisma.$TripLogPayload<ExtArgs>
        fields: Prisma.TripLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>
          }
          findFirst: {
            args: Prisma.TripLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>
          }
          findMany: {
            args: Prisma.TripLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>[]
          }
          create: {
            args: Prisma.TripLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>
          }
          createMany: {
            args: Prisma.TripLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>[]
          }
          delete: {
            args: Prisma.TripLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>
          }
          update: {
            args: Prisma.TripLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>
          }
          deleteMany: {
            args: Prisma.TripLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>[]
          }
          upsert: {
            args: Prisma.TripLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLogPayload>
          }
          aggregate: {
            args: Prisma.TripLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripLog>
          }
          groupBy: {
            args: Prisma.TripLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripLogCountArgs<ExtArgs>
            result: $Utils.Optional<TripLogCountAggregateOutputType> | number
          }
        }
      }
      MediaFile: {
        payload: Prisma.$MediaFilePayload<ExtArgs>
        fields: Prisma.MediaFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          findFirst: {
            args: Prisma.MediaFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          findMany: {
            args: Prisma.MediaFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>[]
          }
          create: {
            args: Prisma.MediaFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          createMany: {
            args: Prisma.MediaFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>[]
          }
          delete: {
            args: Prisma.MediaFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          update: {
            args: Prisma.MediaFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          deleteMany: {
            args: Prisma.MediaFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>[]
          }
          upsert: {
            args: Prisma.MediaFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          aggregate: {
            args: Prisma.MediaFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaFile>
          }
          groupBy: {
            args: Prisma.MediaFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaFileCountArgs<ExtArgs>
            result: $Utils.Optional<MediaFileCountAggregateOutputType> | number
          }
        }
      }
      ContactUs: {
        payload: Prisma.$ContactUsPayload<ExtArgs>
        fields: Prisma.ContactUsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactUsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactUsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          findFirst: {
            args: Prisma.ContactUsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactUsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          findMany: {
            args: Prisma.ContactUsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          create: {
            args: Prisma.ContactUsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          createMany: {
            args: Prisma.ContactUsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactUsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          delete: {
            args: Prisma.ContactUsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          update: {
            args: Prisma.ContactUsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          deleteMany: {
            args: Prisma.ContactUsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>[]
          }
          upsert: {
            args: Prisma.ContactUsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsPayload>
          }
          aggregate: {
            args: Prisma.ContactUsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactUs>
          }
          groupBy: {
            args: Prisma.ContactUsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactUsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactUsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactUsCountAggregateOutputType> | number
          }
        }
      }
      NewLetter: {
        payload: Prisma.$NewLetterPayload<ExtArgs>
        fields: Prisma.NewLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>
          }
          findFirst: {
            args: Prisma.NewLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>
          }
          findMany: {
            args: Prisma.NewLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>[]
          }
          create: {
            args: Prisma.NewLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>
          }
          createMany: {
            args: Prisma.NewLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>[]
          }
          delete: {
            args: Prisma.NewLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>
          }
          update: {
            args: Prisma.NewLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>
          }
          deleteMany: {
            args: Prisma.NewLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>[]
          }
          upsert: {
            args: Prisma.NewLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewLetterPayload>
          }
          aggregate: {
            args: Prisma.NewLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewLetter>
          }
          groupBy: {
            args: Prisma.NewLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewLetterCountArgs<ExtArgs>
            result: $Utils.Optional<NewLetterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tripLog?: TripLogOmit
    mediaFile?: MediaFileOmit
    contactUs?: ContactUsOmit
    newLetter?: NewLetterOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tripLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripLogs?: boolean | UserCountOutputTypeCountTripLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripLogWhereInput
  }


  /**
   * Count Type TripLogCountOutputType
   */

  export type TripLogCountOutputType = {
    mediaFiles: number
  }

  export type TripLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaFiles?: boolean | TripLogCountOutputTypeCountMediaFilesArgs
  }

  // Custom InputTypes
  /**
   * TripLogCountOutputType without action
   */
  export type TripLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLogCountOutputType
     */
    select?: TripLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripLogCountOutputType without action
   */
  export type TripLogCountOutputTypeCountMediaFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    tenantId: string | null
    name: string | null
    role: $Enums.UserRole | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    tenantId: string | null
    name: string | null
    role: $Enums.UserRole | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    tenantId: number
    name: number
    role: number
    picture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    tenantId?: true
    name?: true
    role?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    tenantId?: true
    name?: true
    role?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    tenantId?: true
    name?: true
    role?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    tenantId: string
    name: string
    role: $Enums.UserRole
    picture: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tenantId?: boolean
    name?: boolean
    role?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripLogs?: boolean | User$tripLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tenantId?: boolean
    name?: boolean
    role?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tenantId?: boolean
    name?: boolean
    role?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    tenantId?: boolean
    name?: boolean
    role?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "tenantId" | "name" | "role" | "picture" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripLogs?: boolean | User$tripLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tripLogs: Prisma.$TripLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      tenantId: string
      name: string
      role: $Enums.UserRole
      picture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripLogs<T extends User$tripLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly picture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tripLogs
   */
  export type User$tripLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    where?: TripLogWhereInput
    orderBy?: TripLogOrderByWithRelationInput | TripLogOrderByWithRelationInput[]
    cursor?: TripLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripLogScalarFieldEnum | TripLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TripLog
   */

  export type AggregateTripLog = {
    _count: TripLogCountAggregateOutputType | null
    _min: TripLogMinAggregateOutputType | null
    _max: TripLogMaxAggregateOutputType | null
  }

  export type TripLogMinAggregateOutputType = {
    id: string | null
    country: string | null
    countryCode: string | null
    city: string | null
    location: string | null
    latitude: string | null
    longitude: string | null
    visitedOn: Date | null
    duration: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TripLogMaxAggregateOutputType = {
    id: string | null
    country: string | null
    countryCode: string | null
    city: string | null
    location: string | null
    latitude: string | null
    longitude: string | null
    visitedOn: Date | null
    duration: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TripLogCountAggregateOutputType = {
    id: number
    country: number
    countryCode: number
    city: number
    location: number
    latitude: number
    longitude: number
    visitedOn: number
    duration: number
    notes: number
    tags: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TripLogMinAggregateInputType = {
    id?: true
    country?: true
    countryCode?: true
    city?: true
    location?: true
    latitude?: true
    longitude?: true
    visitedOn?: true
    duration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TripLogMaxAggregateInputType = {
    id?: true
    country?: true
    countryCode?: true
    city?: true
    location?: true
    latitude?: true
    longitude?: true
    visitedOn?: true
    duration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TripLogCountAggregateInputType = {
    id?: true
    country?: true
    countryCode?: true
    city?: true
    location?: true
    latitude?: true
    longitude?: true
    visitedOn?: true
    duration?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TripLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripLog to aggregate.
     */
    where?: TripLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLogs to fetch.
     */
    orderBy?: TripLogOrderByWithRelationInput | TripLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripLogs
    **/
    _count?: true | TripLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripLogMaxAggregateInputType
  }

  export type GetTripLogAggregateType<T extends TripLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTripLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripLog[P]>
      : GetScalarType<T[P], AggregateTripLog[P]>
  }




  export type TripLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripLogWhereInput
    orderBy?: TripLogOrderByWithAggregationInput | TripLogOrderByWithAggregationInput[]
    by: TripLogScalarFieldEnum[] | TripLogScalarFieldEnum
    having?: TripLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripLogCountAggregateInputType | true
    _min?: TripLogMinAggregateInputType
    _max?: TripLogMaxAggregateInputType
  }

  export type TripLogGroupByOutputType = {
    id: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date
    duration: string
    notes: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: TripLogCountAggregateOutputType | null
    _min: TripLogMinAggregateOutputType | null
    _max: TripLogMaxAggregateOutputType | null
  }

  type GetTripLogGroupByPayload<T extends TripLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripLogGroupByOutputType[P]>
            : GetScalarType<T[P], TripLogGroupByOutputType[P]>
        }
      >
    >


  export type TripLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    countryCode?: boolean
    city?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    visitedOn?: boolean
    duration?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    mediaFiles?: boolean | TripLog$mediaFilesArgs<ExtArgs>
    user?: boolean | TripLog$userArgs<ExtArgs>
    _count?: boolean | TripLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripLog"]>

  export type TripLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    countryCode?: boolean
    city?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    visitedOn?: boolean
    duration?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | TripLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["tripLog"]>

  export type TripLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    countryCode?: boolean
    city?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    visitedOn?: boolean
    duration?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | TripLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["tripLog"]>

  export type TripLogSelectScalar = {
    id?: boolean
    country?: boolean
    countryCode?: boolean
    city?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    visitedOn?: boolean
    duration?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TripLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "countryCode" | "city" | "location" | "latitude" | "longitude" | "visitedOn" | "duration" | "notes" | "tags" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["tripLog"]>
  export type TripLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaFiles?: boolean | TripLog$mediaFilesArgs<ExtArgs>
    user?: boolean | TripLog$userArgs<ExtArgs>
    _count?: boolean | TripLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TripLog$userArgs<ExtArgs>
  }
  export type TripLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TripLog$userArgs<ExtArgs>
  }

  export type $TripLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripLog"
    objects: {
      mediaFiles: Prisma.$MediaFilePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      country: string
      countryCode: string
      city: string
      location: string
      latitude: string
      longitude: string
      visitedOn: Date
      duration: string
      notes: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["tripLog"]>
    composites: {}
  }

  type TripLogGetPayload<S extends boolean | null | undefined | TripLogDefaultArgs> = $Result.GetResult<Prisma.$TripLogPayload, S>

  type TripLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripLogCountAggregateInputType | true
    }

  export interface TripLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripLog'], meta: { name: 'TripLog' } }
    /**
     * Find zero or one TripLog that matches the filter.
     * @param {TripLogFindUniqueArgs} args - Arguments to find a TripLog
     * @example
     * // Get one TripLog
     * const tripLog = await prisma.tripLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripLogFindUniqueArgs>(args: SelectSubset<T, TripLogFindUniqueArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripLogFindUniqueOrThrowArgs} args - Arguments to find a TripLog
     * @example
     * // Get one TripLog
     * const tripLog = await prisma.tripLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TripLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogFindFirstArgs} args - Arguments to find a TripLog
     * @example
     * // Get one TripLog
     * const tripLog = await prisma.tripLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripLogFindFirstArgs>(args?: SelectSubset<T, TripLogFindFirstArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogFindFirstOrThrowArgs} args - Arguments to find a TripLog
     * @example
     * // Get one TripLog
     * const tripLog = await prisma.tripLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TripLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripLogs
     * const tripLogs = await prisma.tripLog.findMany()
     * 
     * // Get first 10 TripLogs
     * const tripLogs = await prisma.tripLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripLogWithIdOnly = await prisma.tripLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripLogFindManyArgs>(args?: SelectSubset<T, TripLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripLog.
     * @param {TripLogCreateArgs} args - Arguments to create a TripLog.
     * @example
     * // Create one TripLog
     * const TripLog = await prisma.tripLog.create({
     *   data: {
     *     // ... data to create a TripLog
     *   }
     * })
     * 
     */
    create<T extends TripLogCreateArgs>(args: SelectSubset<T, TripLogCreateArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripLogs.
     * @param {TripLogCreateManyArgs} args - Arguments to create many TripLogs.
     * @example
     * // Create many TripLogs
     * const tripLog = await prisma.tripLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripLogCreateManyArgs>(args?: SelectSubset<T, TripLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripLogs and returns the data saved in the database.
     * @param {TripLogCreateManyAndReturnArgs} args - Arguments to create many TripLogs.
     * @example
     * // Create many TripLogs
     * const tripLog = await prisma.tripLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripLogs and only return the `id`
     * const tripLogWithIdOnly = await prisma.tripLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TripLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripLog.
     * @param {TripLogDeleteArgs} args - Arguments to delete one TripLog.
     * @example
     * // Delete one TripLog
     * const TripLog = await prisma.tripLog.delete({
     *   where: {
     *     // ... filter to delete one TripLog
     *   }
     * })
     * 
     */
    delete<T extends TripLogDeleteArgs>(args: SelectSubset<T, TripLogDeleteArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripLog.
     * @param {TripLogUpdateArgs} args - Arguments to update one TripLog.
     * @example
     * // Update one TripLog
     * const tripLog = await prisma.tripLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripLogUpdateArgs>(args: SelectSubset<T, TripLogUpdateArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripLogs.
     * @param {TripLogDeleteManyArgs} args - Arguments to filter TripLogs to delete.
     * @example
     * // Delete a few TripLogs
     * const { count } = await prisma.tripLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripLogDeleteManyArgs>(args?: SelectSubset<T, TripLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripLogs
     * const tripLog = await prisma.tripLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripLogUpdateManyArgs>(args: SelectSubset<T, TripLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripLogs and returns the data updated in the database.
     * @param {TripLogUpdateManyAndReturnArgs} args - Arguments to update many TripLogs.
     * @example
     * // Update many TripLogs
     * const tripLog = await prisma.tripLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripLogs and only return the `id`
     * const tripLogWithIdOnly = await prisma.tripLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TripLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripLog.
     * @param {TripLogUpsertArgs} args - Arguments to update or create a TripLog.
     * @example
     * // Update or create a TripLog
     * const tripLog = await prisma.tripLog.upsert({
     *   create: {
     *     // ... data to create a TripLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripLog we want to update
     *   }
     * })
     */
    upsert<T extends TripLogUpsertArgs>(args: SelectSubset<T, TripLogUpsertArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogCountArgs} args - Arguments to filter TripLogs to count.
     * @example
     * // Count the number of TripLogs
     * const count = await prisma.tripLog.count({
     *   where: {
     *     // ... the filter for the TripLogs we want to count
     *   }
     * })
    **/
    count<T extends TripLogCountArgs>(
      args?: Subset<T, TripLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripLogAggregateArgs>(args: Subset<T, TripLogAggregateArgs>): Prisma.PrismaPromise<GetTripLogAggregateType<T>>

    /**
     * Group by TripLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLogGroupByArgs} args - Group by arguments.
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
      T extends TripLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripLogGroupByArgs['orderBy'] }
        : { orderBy?: TripLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripLog model
   */
  readonly fields: TripLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediaFiles<T extends TripLog$mediaFilesArgs<ExtArgs> = {}>(args?: Subset<T, TripLog$mediaFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends TripLog$userArgs<ExtArgs> = {}>(args?: Subset<T, TripLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripLog model
   */
  interface TripLogFieldRefs {
    readonly id: FieldRef<"TripLog", 'String'>
    readonly country: FieldRef<"TripLog", 'String'>
    readonly countryCode: FieldRef<"TripLog", 'String'>
    readonly city: FieldRef<"TripLog", 'String'>
    readonly location: FieldRef<"TripLog", 'String'>
    readonly latitude: FieldRef<"TripLog", 'String'>
    readonly longitude: FieldRef<"TripLog", 'String'>
    readonly visitedOn: FieldRef<"TripLog", 'DateTime'>
    readonly duration: FieldRef<"TripLog", 'String'>
    readonly notes: FieldRef<"TripLog", 'String'>
    readonly tags: FieldRef<"TripLog", 'String[]'>
    readonly createdAt: FieldRef<"TripLog", 'DateTime'>
    readonly updatedAt: FieldRef<"TripLog", 'DateTime'>
    readonly userId: FieldRef<"TripLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripLog findUnique
   */
  export type TripLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * Filter, which TripLog to fetch.
     */
    where: TripLogWhereUniqueInput
  }

  /**
   * TripLog findUniqueOrThrow
   */
  export type TripLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * Filter, which TripLog to fetch.
     */
    where: TripLogWhereUniqueInput
  }

  /**
   * TripLog findFirst
   */
  export type TripLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * Filter, which TripLog to fetch.
     */
    where?: TripLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLogs to fetch.
     */
    orderBy?: TripLogOrderByWithRelationInput | TripLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripLogs.
     */
    cursor?: TripLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripLogs.
     */
    distinct?: TripLogScalarFieldEnum | TripLogScalarFieldEnum[]
  }

  /**
   * TripLog findFirstOrThrow
   */
  export type TripLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * Filter, which TripLog to fetch.
     */
    where?: TripLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLogs to fetch.
     */
    orderBy?: TripLogOrderByWithRelationInput | TripLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripLogs.
     */
    cursor?: TripLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripLogs.
     */
    distinct?: TripLogScalarFieldEnum | TripLogScalarFieldEnum[]
  }

  /**
   * TripLog findMany
   */
  export type TripLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * Filter, which TripLogs to fetch.
     */
    where?: TripLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLogs to fetch.
     */
    orderBy?: TripLogOrderByWithRelationInput | TripLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripLogs.
     */
    cursor?: TripLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLogs.
     */
    skip?: number
    distinct?: TripLogScalarFieldEnum | TripLogScalarFieldEnum[]
  }

  /**
   * TripLog create
   */
  export type TripLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TripLog.
     */
    data: XOR<TripLogCreateInput, TripLogUncheckedCreateInput>
  }

  /**
   * TripLog createMany
   */
  export type TripLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripLogs.
     */
    data: TripLogCreateManyInput | TripLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripLog createManyAndReturn
   */
  export type TripLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * The data used to create many TripLogs.
     */
    data: TripLogCreateManyInput | TripLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripLog update
   */
  export type TripLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TripLog.
     */
    data: XOR<TripLogUpdateInput, TripLogUncheckedUpdateInput>
    /**
     * Choose, which TripLog to update.
     */
    where: TripLogWhereUniqueInput
  }

  /**
   * TripLog updateMany
   */
  export type TripLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripLogs.
     */
    data: XOR<TripLogUpdateManyMutationInput, TripLogUncheckedUpdateManyInput>
    /**
     * Filter which TripLogs to update
     */
    where?: TripLogWhereInput
    /**
     * Limit how many TripLogs to update.
     */
    limit?: number
  }

  /**
   * TripLog updateManyAndReturn
   */
  export type TripLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * The data used to update TripLogs.
     */
    data: XOR<TripLogUpdateManyMutationInput, TripLogUncheckedUpdateManyInput>
    /**
     * Filter which TripLogs to update
     */
    where?: TripLogWhereInput
    /**
     * Limit how many TripLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripLog upsert
   */
  export type TripLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TripLog to update in case it exists.
     */
    where: TripLogWhereUniqueInput
    /**
     * In case the TripLog found by the `where` argument doesn't exist, create a new TripLog with this data.
     */
    create: XOR<TripLogCreateInput, TripLogUncheckedCreateInput>
    /**
     * In case the TripLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripLogUpdateInput, TripLogUncheckedUpdateInput>
  }

  /**
   * TripLog delete
   */
  export type TripLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    /**
     * Filter which TripLog to delete.
     */
    where: TripLogWhereUniqueInput
  }

  /**
   * TripLog deleteMany
   */
  export type TripLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripLogs to delete
     */
    where?: TripLogWhereInput
    /**
     * Limit how many TripLogs to delete.
     */
    limit?: number
  }

  /**
   * TripLog.mediaFiles
   */
  export type TripLog$mediaFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    where?: MediaFileWhereInput
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    cursor?: MediaFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * TripLog.user
   */
  export type TripLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TripLog without action
   */
  export type TripLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
  }


  /**
   * Model MediaFile
   */

  export type AggregateMediaFile = {
    _count: MediaFileCountAggregateOutputType | null
    _min: MediaFileMinAggregateOutputType | null
    _max: MediaFileMaxAggregateOutputType | null
  }

  export type MediaFileMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    fileSize: string | null
    url: string | null
    mediaType: $Enums.MediaFileType | null
    tripLogId: string | null
  }

  export type MediaFileMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    fileSize: string | null
    url: string | null
    mediaType: $Enums.MediaFileType | null
    tripLogId: string | null
  }

  export type MediaFileCountAggregateOutputType = {
    id: number
    fileId: number
    fileSize: number
    url: number
    mediaType: number
    tripLogId: number
    _all: number
  }


  export type MediaFileMinAggregateInputType = {
    id?: true
    fileId?: true
    fileSize?: true
    url?: true
    mediaType?: true
    tripLogId?: true
  }

  export type MediaFileMaxAggregateInputType = {
    id?: true
    fileId?: true
    fileSize?: true
    url?: true
    mediaType?: true
    tripLogId?: true
  }

  export type MediaFileCountAggregateInputType = {
    id?: true
    fileId?: true
    fileSize?: true
    url?: true
    mediaType?: true
    tripLogId?: true
    _all?: true
  }

  export type MediaFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFile to aggregate.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaFiles
    **/
    _count?: true | MediaFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaFileMaxAggregateInputType
  }

  export type GetMediaFileAggregateType<T extends MediaFileAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaFile[P]>
      : GetScalarType<T[P], AggregateMediaFile[P]>
  }




  export type MediaFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFileWhereInput
    orderBy?: MediaFileOrderByWithAggregationInput | MediaFileOrderByWithAggregationInput[]
    by: MediaFileScalarFieldEnum[] | MediaFileScalarFieldEnum
    having?: MediaFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaFileCountAggregateInputType | true
    _min?: MediaFileMinAggregateInputType
    _max?: MediaFileMaxAggregateInputType
  }

  export type MediaFileGroupByOutputType = {
    id: string
    fileId: string
    fileSize: string
    url: string
    mediaType: $Enums.MediaFileType
    tripLogId: string | null
    _count: MediaFileCountAggregateOutputType | null
    _min: MediaFileMinAggregateOutputType | null
    _max: MediaFileMaxAggregateOutputType | null
  }

  type GetMediaFileGroupByPayload<T extends MediaFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaFileGroupByOutputType[P]>
            : GetScalarType<T[P], MediaFileGroupByOutputType[P]>
        }
      >
    >


  export type MediaFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    fileSize?: boolean
    url?: boolean
    mediaType?: boolean
    tripLogId?: boolean
    tripLog?: boolean | MediaFile$tripLogArgs<ExtArgs>
  }, ExtArgs["result"]["mediaFile"]>

  export type MediaFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    fileSize?: boolean
    url?: boolean
    mediaType?: boolean
    tripLogId?: boolean
    tripLog?: boolean | MediaFile$tripLogArgs<ExtArgs>
  }, ExtArgs["result"]["mediaFile"]>

  export type MediaFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    fileSize?: boolean
    url?: boolean
    mediaType?: boolean
    tripLogId?: boolean
    tripLog?: boolean | MediaFile$tripLogArgs<ExtArgs>
  }, ExtArgs["result"]["mediaFile"]>

  export type MediaFileSelectScalar = {
    id?: boolean
    fileId?: boolean
    fileSize?: boolean
    url?: boolean
    mediaType?: boolean
    tripLogId?: boolean
  }

  export type MediaFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "fileSize" | "url" | "mediaType" | "tripLogId", ExtArgs["result"]["mediaFile"]>
  export type MediaFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripLog?: boolean | MediaFile$tripLogArgs<ExtArgs>
  }
  export type MediaFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripLog?: boolean | MediaFile$tripLogArgs<ExtArgs>
  }
  export type MediaFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripLog?: boolean | MediaFile$tripLogArgs<ExtArgs>
  }

  export type $MediaFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaFile"
    objects: {
      tripLog: Prisma.$TripLogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      fileSize: string
      url: string
      mediaType: $Enums.MediaFileType
      tripLogId: string | null
    }, ExtArgs["result"]["mediaFile"]>
    composites: {}
  }

  type MediaFileGetPayload<S extends boolean | null | undefined | MediaFileDefaultArgs> = $Result.GetResult<Prisma.$MediaFilePayload, S>

  type MediaFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaFileCountAggregateInputType | true
    }

  export interface MediaFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaFile'], meta: { name: 'MediaFile' } }
    /**
     * Find zero or one MediaFile that matches the filter.
     * @param {MediaFileFindUniqueArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFileFindUniqueArgs>(args: SelectSubset<T, MediaFileFindUniqueArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFileFindUniqueOrThrowArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFileFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindFirstArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFileFindFirstArgs>(args?: SelectSubset<T, MediaFileFindFirstArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindFirstOrThrowArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFileFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaFiles
     * const mediaFiles = await prisma.mediaFile.findMany()
     * 
     * // Get first 10 MediaFiles
     * const mediaFiles = await prisma.mediaFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaFileWithIdOnly = await prisma.mediaFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFileFindManyArgs>(args?: SelectSubset<T, MediaFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaFile.
     * @param {MediaFileCreateArgs} args - Arguments to create a MediaFile.
     * @example
     * // Create one MediaFile
     * const MediaFile = await prisma.mediaFile.create({
     *   data: {
     *     // ... data to create a MediaFile
     *   }
     * })
     * 
     */
    create<T extends MediaFileCreateArgs>(args: SelectSubset<T, MediaFileCreateArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaFiles.
     * @param {MediaFileCreateManyArgs} args - Arguments to create many MediaFiles.
     * @example
     * // Create many MediaFiles
     * const mediaFile = await prisma.mediaFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaFileCreateManyArgs>(args?: SelectSubset<T, MediaFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaFiles and returns the data saved in the database.
     * @param {MediaFileCreateManyAndReturnArgs} args - Arguments to create many MediaFiles.
     * @example
     * // Create many MediaFiles
     * const mediaFile = await prisma.mediaFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaFiles and only return the `id`
     * const mediaFileWithIdOnly = await prisma.mediaFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaFileCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaFile.
     * @param {MediaFileDeleteArgs} args - Arguments to delete one MediaFile.
     * @example
     * // Delete one MediaFile
     * const MediaFile = await prisma.mediaFile.delete({
     *   where: {
     *     // ... filter to delete one MediaFile
     *   }
     * })
     * 
     */
    delete<T extends MediaFileDeleteArgs>(args: SelectSubset<T, MediaFileDeleteArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaFile.
     * @param {MediaFileUpdateArgs} args - Arguments to update one MediaFile.
     * @example
     * // Update one MediaFile
     * const mediaFile = await prisma.mediaFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaFileUpdateArgs>(args: SelectSubset<T, MediaFileUpdateArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaFiles.
     * @param {MediaFileDeleteManyArgs} args - Arguments to filter MediaFiles to delete.
     * @example
     * // Delete a few MediaFiles
     * const { count } = await prisma.mediaFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaFileDeleteManyArgs>(args?: SelectSubset<T, MediaFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaFiles
     * const mediaFile = await prisma.mediaFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaFileUpdateManyArgs>(args: SelectSubset<T, MediaFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaFiles and returns the data updated in the database.
     * @param {MediaFileUpdateManyAndReturnArgs} args - Arguments to update many MediaFiles.
     * @example
     * // Update many MediaFiles
     * const mediaFile = await prisma.mediaFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaFiles and only return the `id`
     * const mediaFileWithIdOnly = await prisma.mediaFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaFileUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaFile.
     * @param {MediaFileUpsertArgs} args - Arguments to update or create a MediaFile.
     * @example
     * // Update or create a MediaFile
     * const mediaFile = await prisma.mediaFile.upsert({
     *   create: {
     *     // ... data to create a MediaFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaFile we want to update
     *   }
     * })
     */
    upsert<T extends MediaFileUpsertArgs>(args: SelectSubset<T, MediaFileUpsertArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileCountArgs} args - Arguments to filter MediaFiles to count.
     * @example
     * // Count the number of MediaFiles
     * const count = await prisma.mediaFile.count({
     *   where: {
     *     // ... the filter for the MediaFiles we want to count
     *   }
     * })
    **/
    count<T extends MediaFileCountArgs>(
      args?: Subset<T, MediaFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaFileAggregateArgs>(args: Subset<T, MediaFileAggregateArgs>): Prisma.PrismaPromise<GetMediaFileAggregateType<T>>

    /**
     * Group by MediaFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileGroupByArgs} args - Group by arguments.
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
      T extends MediaFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaFileGroupByArgs['orderBy'] }
        : { orderBy?: MediaFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaFile model
   */
  readonly fields: MediaFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripLog<T extends MediaFile$tripLogArgs<ExtArgs> = {}>(args?: Subset<T, MediaFile$tripLogArgs<ExtArgs>>): Prisma__TripLogClient<$Result.GetResult<Prisma.$TripLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaFile model
   */
  interface MediaFileFieldRefs {
    readonly id: FieldRef<"MediaFile", 'String'>
    readonly fileId: FieldRef<"MediaFile", 'String'>
    readonly fileSize: FieldRef<"MediaFile", 'String'>
    readonly url: FieldRef<"MediaFile", 'String'>
    readonly mediaType: FieldRef<"MediaFile", 'MediaFileType'>
    readonly tripLogId: FieldRef<"MediaFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaFile findUnique
   */
  export type MediaFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile findUniqueOrThrow
   */
  export type MediaFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile findFirst
   */
  export type MediaFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFiles.
     */
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile findFirstOrThrow
   */
  export type MediaFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFiles.
     */
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile findMany
   */
  export type MediaFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFiles to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile create
   */
  export type MediaFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaFile.
     */
    data: XOR<MediaFileCreateInput, MediaFileUncheckedCreateInput>
  }

  /**
   * MediaFile createMany
   */
  export type MediaFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaFiles.
     */
    data: MediaFileCreateManyInput | MediaFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaFile createManyAndReturn
   */
  export type MediaFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * The data used to create many MediaFiles.
     */
    data: MediaFileCreateManyInput | MediaFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaFile update
   */
  export type MediaFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaFile.
     */
    data: XOR<MediaFileUpdateInput, MediaFileUncheckedUpdateInput>
    /**
     * Choose, which MediaFile to update.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile updateMany
   */
  export type MediaFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaFiles.
     */
    data: XOR<MediaFileUpdateManyMutationInput, MediaFileUncheckedUpdateManyInput>
    /**
     * Filter which MediaFiles to update
     */
    where?: MediaFileWhereInput
    /**
     * Limit how many MediaFiles to update.
     */
    limit?: number
  }

  /**
   * MediaFile updateManyAndReturn
   */
  export type MediaFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * The data used to update MediaFiles.
     */
    data: XOR<MediaFileUpdateManyMutationInput, MediaFileUncheckedUpdateManyInput>
    /**
     * Filter which MediaFiles to update
     */
    where?: MediaFileWhereInput
    /**
     * Limit how many MediaFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaFile upsert
   */
  export type MediaFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaFile to update in case it exists.
     */
    where: MediaFileWhereUniqueInput
    /**
     * In case the MediaFile found by the `where` argument doesn't exist, create a new MediaFile with this data.
     */
    create: XOR<MediaFileCreateInput, MediaFileUncheckedCreateInput>
    /**
     * In case the MediaFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaFileUpdateInput, MediaFileUncheckedUpdateInput>
  }

  /**
   * MediaFile delete
   */
  export type MediaFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter which MediaFile to delete.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile deleteMany
   */
  export type MediaFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFiles to delete
     */
    where?: MediaFileWhereInput
    /**
     * Limit how many MediaFiles to delete.
     */
    limit?: number
  }

  /**
   * MediaFile.tripLog
   */
  export type MediaFile$tripLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLog
     */
    select?: TripLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLog
     */
    omit?: TripLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLogInclude<ExtArgs> | null
    where?: TripLogWhereInput
  }

  /**
   * MediaFile without action
   */
  export type MediaFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFile
     */
    omit?: MediaFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
  }


  /**
   * Model ContactUs
   */

  export type AggregateContactUs = {
    _count: ContactUsCountAggregateOutputType | null
    _min: ContactUsMinAggregateOutputType | null
    _max: ContactUsMaxAggregateOutputType | null
  }

  export type ContactUsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactUsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactUsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactUsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactUsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactUsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactUsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUs to aggregate.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactuses
    **/
    _count?: true | ContactUsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactUsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactUsMaxAggregateInputType
  }

  export type GetContactUsAggregateType<T extends ContactUsAggregateArgs> = {
        [P in keyof T & keyof AggregateContactUs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactUs[P]>
      : GetScalarType<T[P], AggregateContactUs[P]>
  }




  export type ContactUsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUsWhereInput
    orderBy?: ContactUsOrderByWithAggregationInput | ContactUsOrderByWithAggregationInput[]
    by: ContactUsScalarFieldEnum[] | ContactUsScalarFieldEnum
    having?: ContactUsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactUsCountAggregateInputType | true
    _min?: ContactUsMinAggregateInputType
    _max?: ContactUsMaxAggregateInputType
  }

  export type ContactUsGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ContactUsCountAggregateOutputType | null
    _min: ContactUsMinAggregateOutputType | null
    _max: ContactUsMaxAggregateOutputType | null
  }

  type GetContactUsGroupByPayload<T extends ContactUsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactUsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactUsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactUsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactUsGroupByOutputType[P]>
        }
      >
    >


  export type ContactUsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactUs"]>

  export type ContactUsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactUsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["contactUs"]>

  export type $ContactUsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactUs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactUs"]>
    composites: {}
  }

  type ContactUsGetPayload<S extends boolean | null | undefined | ContactUsDefaultArgs> = $Result.GetResult<Prisma.$ContactUsPayload, S>

  type ContactUsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactUsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactUsCountAggregateInputType | true
    }

  export interface ContactUsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactUs'], meta: { name: 'ContactUs' } }
    /**
     * Find zero or one ContactUs that matches the filter.
     * @param {ContactUsFindUniqueArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactUsFindUniqueArgs>(args: SelectSubset<T, ContactUsFindUniqueArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactUs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactUsFindUniqueOrThrowArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactUsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactUsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindFirstArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactUsFindFirstArgs>(args?: SelectSubset<T, ContactUsFindFirstArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindFirstOrThrowArgs} args - Arguments to find a ContactUs
     * @example
     * // Get one ContactUs
     * const contactUs = await prisma.contactUs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactUsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactUsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactuses
     * const contactuses = await prisma.contactUs.findMany()
     * 
     * // Get first 10 Contactuses
     * const contactuses = await prisma.contactUs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactUsFindManyArgs>(args?: SelectSubset<T, ContactUsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactUs.
     * @param {ContactUsCreateArgs} args - Arguments to create a ContactUs.
     * @example
     * // Create one ContactUs
     * const ContactUs = await prisma.contactUs.create({
     *   data: {
     *     // ... data to create a ContactUs
     *   }
     * })
     * 
     */
    create<T extends ContactUsCreateArgs>(args: SelectSubset<T, ContactUsCreateArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactuses.
     * @param {ContactUsCreateManyArgs} args - Arguments to create many Contactuses.
     * @example
     * // Create many Contactuses
     * const contactUs = await prisma.contactUs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactUsCreateManyArgs>(args?: SelectSubset<T, ContactUsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactuses and returns the data saved in the database.
     * @param {ContactUsCreateManyAndReturnArgs} args - Arguments to create many Contactuses.
     * @example
     * // Create many Contactuses
     * const contactUs = await prisma.contactUs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactuses and only return the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactUsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactUsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactUs.
     * @param {ContactUsDeleteArgs} args - Arguments to delete one ContactUs.
     * @example
     * // Delete one ContactUs
     * const ContactUs = await prisma.contactUs.delete({
     *   where: {
     *     // ... filter to delete one ContactUs
     *   }
     * })
     * 
     */
    delete<T extends ContactUsDeleteArgs>(args: SelectSubset<T, ContactUsDeleteArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactUs.
     * @param {ContactUsUpdateArgs} args - Arguments to update one ContactUs.
     * @example
     * // Update one ContactUs
     * const contactUs = await prisma.contactUs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUsUpdateArgs>(args: SelectSubset<T, ContactUsUpdateArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactuses.
     * @param {ContactUsDeleteManyArgs} args - Arguments to filter Contactuses to delete.
     * @example
     * // Delete a few Contactuses
     * const { count } = await prisma.contactUs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactUsDeleteManyArgs>(args?: SelectSubset<T, ContactUsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactuses
     * const contactUs = await prisma.contactUs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUsUpdateManyArgs>(args: SelectSubset<T, ContactUsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactuses and returns the data updated in the database.
     * @param {ContactUsUpdateManyAndReturnArgs} args - Arguments to update many Contactuses.
     * @example
     * // Update many Contactuses
     * const contactUs = await prisma.contactUs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactuses and only return the `id`
     * const contactUsWithIdOnly = await prisma.contactUs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactUs.
     * @param {ContactUsUpsertArgs} args - Arguments to update or create a ContactUs.
     * @example
     * // Update or create a ContactUs
     * const contactUs = await prisma.contactUs.upsert({
     *   create: {
     *     // ... data to create a ContactUs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactUs we want to update
     *   }
     * })
     */
    upsert<T extends ContactUsUpsertArgs>(args: SelectSubset<T, ContactUsUpsertArgs<ExtArgs>>): Prisma__ContactUsClient<$Result.GetResult<Prisma.$ContactUsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsCountArgs} args - Arguments to filter Contactuses to count.
     * @example
     * // Count the number of Contactuses
     * const count = await prisma.contactUs.count({
     *   where: {
     *     // ... the filter for the Contactuses we want to count
     *   }
     * })
    **/
    count<T extends ContactUsCountArgs>(
      args?: Subset<T, ContactUsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactUsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactUsAggregateArgs>(args: Subset<T, ContactUsAggregateArgs>): Prisma.PrismaPromise<GetContactUsAggregateType<T>>

    /**
     * Group by ContactUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsGroupByArgs} args - Group by arguments.
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
      T extends ContactUsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactUsGroupByArgs['orderBy'] }
        : { orderBy?: ContactUsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactUsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactUsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactUs model
   */
  readonly fields: ContactUsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactUs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactUsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactUs model
   */
  interface ContactUsFieldRefs {
    readonly id: FieldRef<"ContactUs", 'String'>
    readonly name: FieldRef<"ContactUs", 'String'>
    readonly email: FieldRef<"ContactUs", 'String'>
    readonly subject: FieldRef<"ContactUs", 'String'>
    readonly message: FieldRef<"ContactUs", 'String'>
    readonly createdAt: FieldRef<"ContactUs", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactUs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactUs findUnique
   */
  export type ContactUsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs findUniqueOrThrow
   */
  export type ContactUsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs findFirst
   */
  export type ContactUsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactuses.
     */
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }

  /**
   * ContactUs findFirstOrThrow
   */
  export type ContactUsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which ContactUs to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactuses.
     */
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }

  /**
   * ContactUs findMany
   */
  export type ContactUsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter, which Contactuses to fetch.
     */
    where?: ContactUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactuses to fetch.
     */
    orderBy?: ContactUsOrderByWithRelationInput | ContactUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactuses.
     */
    cursor?: ContactUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactuses.
     */
    skip?: number
    distinct?: ContactUsScalarFieldEnum | ContactUsScalarFieldEnum[]
  }

  /**
   * ContactUs create
   */
  export type ContactUsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactUs.
     */
    data: XOR<ContactUsCreateInput, ContactUsUncheckedCreateInput>
  }

  /**
   * ContactUs createMany
   */
  export type ContactUsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactuses.
     */
    data: ContactUsCreateManyInput | ContactUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactUs createManyAndReturn
   */
  export type ContactUsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data used to create many Contactuses.
     */
    data: ContactUsCreateManyInput | ContactUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactUs update
   */
  export type ContactUsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactUs.
     */
    data: XOR<ContactUsUpdateInput, ContactUsUncheckedUpdateInput>
    /**
     * Choose, which ContactUs to update.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs updateMany
   */
  export type ContactUsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactuses.
     */
    data: XOR<ContactUsUpdateManyMutationInput, ContactUsUncheckedUpdateManyInput>
    /**
     * Filter which Contactuses to update
     */
    where?: ContactUsWhereInput
    /**
     * Limit how many Contactuses to update.
     */
    limit?: number
  }

  /**
   * ContactUs updateManyAndReturn
   */
  export type ContactUsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The data used to update Contactuses.
     */
    data: XOR<ContactUsUpdateManyMutationInput, ContactUsUncheckedUpdateManyInput>
    /**
     * Filter which Contactuses to update
     */
    where?: ContactUsWhereInput
    /**
     * Limit how many Contactuses to update.
     */
    limit?: number
  }

  /**
   * ContactUs upsert
   */
  export type ContactUsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactUs to update in case it exists.
     */
    where: ContactUsWhereUniqueInput
    /**
     * In case the ContactUs found by the `where` argument doesn't exist, create a new ContactUs with this data.
     */
    create: XOR<ContactUsCreateInput, ContactUsUncheckedCreateInput>
    /**
     * In case the ContactUs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUsUpdateInput, ContactUsUncheckedUpdateInput>
  }

  /**
   * ContactUs delete
   */
  export type ContactUsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
    /**
     * Filter which ContactUs to delete.
     */
    where: ContactUsWhereUniqueInput
  }

  /**
   * ContactUs deleteMany
   */
  export type ContactUsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactuses to delete
     */
    where?: ContactUsWhereInput
    /**
     * Limit how many Contactuses to delete.
     */
    limit?: number
  }

  /**
   * ContactUs without action
   */
  export type ContactUsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUs
     */
    select?: ContactUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUs
     */
    omit?: ContactUsOmit<ExtArgs> | null
  }


  /**
   * Model NewLetter
   */

  export type AggregateNewLetter = {
    _count: NewLetterCountAggregateOutputType | null
    _min: NewLetterMinAggregateOutputType | null
    _max: NewLetterMaxAggregateOutputType | null
  }

  export type NewLetterMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewLetterMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewLetterCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewLetterMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewLetterMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewLetterCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewLetter to aggregate.
     */
    where?: NewLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewLetters to fetch.
     */
    orderBy?: NewLetterOrderByWithRelationInput | NewLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewLetters
    **/
    _count?: true | NewLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewLetterMaxAggregateInputType
  }

  export type GetNewLetterAggregateType<T extends NewLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewLetter[P]>
      : GetScalarType<T[P], AggregateNewLetter[P]>
  }




  export type NewLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewLetterWhereInput
    orderBy?: NewLetterOrderByWithAggregationInput | NewLetterOrderByWithAggregationInput[]
    by: NewLetterScalarFieldEnum[] | NewLetterScalarFieldEnum
    having?: NewLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewLetterCountAggregateInputType | true
    _min?: NewLetterMinAggregateInputType
    _max?: NewLetterMaxAggregateInputType
  }

  export type NewLetterGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: NewLetterCountAggregateOutputType | null
    _min: NewLetterMinAggregateOutputType | null
    _max: NewLetterMaxAggregateOutputType | null
  }

  type GetNewLetterGroupByPayload<T extends NewLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewLetterGroupByOutputType[P]>
            : GetScalarType<T[P], NewLetterGroupByOutputType[P]>
        }
      >
    >


  export type NewLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newLetter"]>

  export type NewLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newLetter"]>

  export type NewLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newLetter"]>

  export type NewLetterSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["newLetter"]>

  export type $NewLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewLetter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newLetter"]>
    composites: {}
  }

  type NewLetterGetPayload<S extends boolean | null | undefined | NewLetterDefaultArgs> = $Result.GetResult<Prisma.$NewLetterPayload, S>

  type NewLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewLetterCountAggregateInputType | true
    }

  export interface NewLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewLetter'], meta: { name: 'NewLetter' } }
    /**
     * Find zero or one NewLetter that matches the filter.
     * @param {NewLetterFindUniqueArgs} args - Arguments to find a NewLetter
     * @example
     * // Get one NewLetter
     * const newLetter = await prisma.newLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewLetterFindUniqueArgs>(args: SelectSubset<T, NewLetterFindUniqueArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewLetterFindUniqueOrThrowArgs} args - Arguments to find a NewLetter
     * @example
     * // Get one NewLetter
     * const newLetter = await prisma.newLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, NewLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterFindFirstArgs} args - Arguments to find a NewLetter
     * @example
     * // Get one NewLetter
     * const newLetter = await prisma.newLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewLetterFindFirstArgs>(args?: SelectSubset<T, NewLetterFindFirstArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterFindFirstOrThrowArgs} args - Arguments to find a NewLetter
     * @example
     * // Get one NewLetter
     * const newLetter = await prisma.newLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, NewLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewLetters
     * const newLetters = await prisma.newLetter.findMany()
     * 
     * // Get first 10 NewLetters
     * const newLetters = await prisma.newLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newLetterWithIdOnly = await prisma.newLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewLetterFindManyArgs>(args?: SelectSubset<T, NewLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewLetter.
     * @param {NewLetterCreateArgs} args - Arguments to create a NewLetter.
     * @example
     * // Create one NewLetter
     * const NewLetter = await prisma.newLetter.create({
     *   data: {
     *     // ... data to create a NewLetter
     *   }
     * })
     * 
     */
    create<T extends NewLetterCreateArgs>(args: SelectSubset<T, NewLetterCreateArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewLetters.
     * @param {NewLetterCreateManyArgs} args - Arguments to create many NewLetters.
     * @example
     * // Create many NewLetters
     * const newLetter = await prisma.newLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewLetterCreateManyArgs>(args?: SelectSubset<T, NewLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewLetters and returns the data saved in the database.
     * @param {NewLetterCreateManyAndReturnArgs} args - Arguments to create many NewLetters.
     * @example
     * // Create many NewLetters
     * const newLetter = await prisma.newLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewLetters and only return the `id`
     * const newLetterWithIdOnly = await prisma.newLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, NewLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewLetter.
     * @param {NewLetterDeleteArgs} args - Arguments to delete one NewLetter.
     * @example
     * // Delete one NewLetter
     * const NewLetter = await prisma.newLetter.delete({
     *   where: {
     *     // ... filter to delete one NewLetter
     *   }
     * })
     * 
     */
    delete<T extends NewLetterDeleteArgs>(args: SelectSubset<T, NewLetterDeleteArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewLetter.
     * @param {NewLetterUpdateArgs} args - Arguments to update one NewLetter.
     * @example
     * // Update one NewLetter
     * const newLetter = await prisma.newLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewLetterUpdateArgs>(args: SelectSubset<T, NewLetterUpdateArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewLetters.
     * @param {NewLetterDeleteManyArgs} args - Arguments to filter NewLetters to delete.
     * @example
     * // Delete a few NewLetters
     * const { count } = await prisma.newLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewLetterDeleteManyArgs>(args?: SelectSubset<T, NewLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewLetters
     * const newLetter = await prisma.newLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewLetterUpdateManyArgs>(args: SelectSubset<T, NewLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewLetters and returns the data updated in the database.
     * @param {NewLetterUpdateManyAndReturnArgs} args - Arguments to update many NewLetters.
     * @example
     * // Update many NewLetters
     * const newLetter = await prisma.newLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewLetters and only return the `id`
     * const newLetterWithIdOnly = await prisma.newLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, NewLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewLetter.
     * @param {NewLetterUpsertArgs} args - Arguments to update or create a NewLetter.
     * @example
     * // Update or create a NewLetter
     * const newLetter = await prisma.newLetter.upsert({
     *   create: {
     *     // ... data to create a NewLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewLetter we want to update
     *   }
     * })
     */
    upsert<T extends NewLetterUpsertArgs>(args: SelectSubset<T, NewLetterUpsertArgs<ExtArgs>>): Prisma__NewLetterClient<$Result.GetResult<Prisma.$NewLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterCountArgs} args - Arguments to filter NewLetters to count.
     * @example
     * // Count the number of NewLetters
     * const count = await prisma.newLetter.count({
     *   where: {
     *     // ... the filter for the NewLetters we want to count
     *   }
     * })
    **/
    count<T extends NewLetterCountArgs>(
      args?: Subset<T, NewLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewLetterAggregateArgs>(args: Subset<T, NewLetterAggregateArgs>): Prisma.PrismaPromise<GetNewLetterAggregateType<T>>

    /**
     * Group by NewLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewLetterGroupByArgs} args - Group by arguments.
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
      T extends NewLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewLetterGroupByArgs['orderBy'] }
        : { orderBy?: NewLetterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewLetter model
   */
  readonly fields: NewLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewLetter model
   */
  interface NewLetterFieldRefs {
    readonly id: FieldRef<"NewLetter", 'String'>
    readonly email: FieldRef<"NewLetter", 'String'>
    readonly createdAt: FieldRef<"NewLetter", 'DateTime'>
    readonly updatedAt: FieldRef<"NewLetter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewLetter findUnique
   */
  export type NewLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewLetter to fetch.
     */
    where: NewLetterWhereUniqueInput
  }

  /**
   * NewLetter findUniqueOrThrow
   */
  export type NewLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewLetter to fetch.
     */
    where: NewLetterWhereUniqueInput
  }

  /**
   * NewLetter findFirst
   */
  export type NewLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewLetter to fetch.
     */
    where?: NewLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewLetters to fetch.
     */
    orderBy?: NewLetterOrderByWithRelationInput | NewLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewLetters.
     */
    cursor?: NewLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewLetters.
     */
    distinct?: NewLetterScalarFieldEnum | NewLetterScalarFieldEnum[]
  }

  /**
   * NewLetter findFirstOrThrow
   */
  export type NewLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewLetter to fetch.
     */
    where?: NewLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewLetters to fetch.
     */
    orderBy?: NewLetterOrderByWithRelationInput | NewLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewLetters.
     */
    cursor?: NewLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewLetters.
     */
    distinct?: NewLetterScalarFieldEnum | NewLetterScalarFieldEnum[]
  }

  /**
   * NewLetter findMany
   */
  export type NewLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewLetters to fetch.
     */
    where?: NewLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewLetters to fetch.
     */
    orderBy?: NewLetterOrderByWithRelationInput | NewLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewLetters.
     */
    cursor?: NewLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewLetters.
     */
    skip?: number
    distinct?: NewLetterScalarFieldEnum | NewLetterScalarFieldEnum[]
  }

  /**
   * NewLetter create
   */
  export type NewLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * The data needed to create a NewLetter.
     */
    data: XOR<NewLetterCreateInput, NewLetterUncheckedCreateInput>
  }

  /**
   * NewLetter createMany
   */
  export type NewLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewLetters.
     */
    data: NewLetterCreateManyInput | NewLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewLetter createManyAndReturn
   */
  export type NewLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * The data used to create many NewLetters.
     */
    data: NewLetterCreateManyInput | NewLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewLetter update
   */
  export type NewLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * The data needed to update a NewLetter.
     */
    data: XOR<NewLetterUpdateInput, NewLetterUncheckedUpdateInput>
    /**
     * Choose, which NewLetter to update.
     */
    where: NewLetterWhereUniqueInput
  }

  /**
   * NewLetter updateMany
   */
  export type NewLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewLetters.
     */
    data: XOR<NewLetterUpdateManyMutationInput, NewLetterUncheckedUpdateManyInput>
    /**
     * Filter which NewLetters to update
     */
    where?: NewLetterWhereInput
    /**
     * Limit how many NewLetters to update.
     */
    limit?: number
  }

  /**
   * NewLetter updateManyAndReturn
   */
  export type NewLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * The data used to update NewLetters.
     */
    data: XOR<NewLetterUpdateManyMutationInput, NewLetterUncheckedUpdateManyInput>
    /**
     * Filter which NewLetters to update
     */
    where?: NewLetterWhereInput
    /**
     * Limit how many NewLetters to update.
     */
    limit?: number
  }

  /**
   * NewLetter upsert
   */
  export type NewLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * The filter to search for the NewLetter to update in case it exists.
     */
    where: NewLetterWhereUniqueInput
    /**
     * In case the NewLetter found by the `where` argument doesn't exist, create a new NewLetter with this data.
     */
    create: XOR<NewLetterCreateInput, NewLetterUncheckedCreateInput>
    /**
     * In case the NewLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewLetterUpdateInput, NewLetterUncheckedUpdateInput>
  }

  /**
   * NewLetter delete
   */
  export type NewLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
    /**
     * Filter which NewLetter to delete.
     */
    where: NewLetterWhereUniqueInput
  }

  /**
   * NewLetter deleteMany
   */
  export type NewLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewLetters to delete
     */
    where?: NewLetterWhereInput
    /**
     * Limit how many NewLetters to delete.
     */
    limit?: number
  }

  /**
   * NewLetter without action
   */
  export type NewLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewLetter
     */
    select?: NewLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewLetter
     */
    omit?: NewLetterOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    tenantId: 'tenantId',
    name: 'name',
    role: 'role',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripLogScalarFieldEnum: {
    id: 'id',
    country: 'country',
    countryCode: 'countryCode',
    city: 'city',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    visitedOn: 'visitedOn',
    duration: 'duration',
    notes: 'notes',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TripLogScalarFieldEnum = (typeof TripLogScalarFieldEnum)[keyof typeof TripLogScalarFieldEnum]


  export const MediaFileScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    fileSize: 'fileSize',
    url: 'url',
    mediaType: 'mediaType',
    tripLogId: 'tripLogId'
  };

  export type MediaFileScalarFieldEnum = (typeof MediaFileScalarFieldEnum)[keyof typeof MediaFileScalarFieldEnum]


  export const ContactUsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactUsScalarFieldEnum = (typeof ContactUsScalarFieldEnum)[keyof typeof ContactUsScalarFieldEnum]


  export const NewLetterScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewLetterScalarFieldEnum = (typeof NewLetterScalarFieldEnum)[keyof typeof NewLetterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MediaFileType'
   */
  export type EnumMediaFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaFileType'>
    


  /**
   * Reference to a field of type 'MediaFileType[]'
   */
  export type ListEnumMediaFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaFileType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tripLogs?: TripLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripLogs?: TripLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    tenantId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tripLogs?: TripLogListRelationFilter
  }, "id" | "email" | "tenantId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripLogWhereInput = {
    AND?: TripLogWhereInput | TripLogWhereInput[]
    OR?: TripLogWhereInput[]
    NOT?: TripLogWhereInput | TripLogWhereInput[]
    id?: StringFilter<"TripLog"> | string
    country?: StringFilter<"TripLog"> | string
    countryCode?: StringFilter<"TripLog"> | string
    city?: StringFilter<"TripLog"> | string
    location?: StringFilter<"TripLog"> | string
    latitude?: StringFilter<"TripLog"> | string
    longitude?: StringFilter<"TripLog"> | string
    visitedOn?: DateTimeFilter<"TripLog"> | Date | string
    duration?: StringFilter<"TripLog"> | string
    notes?: StringNullableFilter<"TripLog"> | string | null
    tags?: StringNullableListFilter<"TripLog">
    createdAt?: DateTimeFilter<"TripLog"> | Date | string
    updatedAt?: DateTimeFilter<"TripLog"> | Date | string
    userId?: StringNullableFilter<"TripLog"> | string | null
    mediaFiles?: MediaFileListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TripLogOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    city?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visitedOn?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    mediaFiles?: MediaFileOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TripLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripLogWhereInput | TripLogWhereInput[]
    OR?: TripLogWhereInput[]
    NOT?: TripLogWhereInput | TripLogWhereInput[]
    country?: StringFilter<"TripLog"> | string
    countryCode?: StringFilter<"TripLog"> | string
    city?: StringFilter<"TripLog"> | string
    location?: StringFilter<"TripLog"> | string
    latitude?: StringFilter<"TripLog"> | string
    longitude?: StringFilter<"TripLog"> | string
    visitedOn?: DateTimeFilter<"TripLog"> | Date | string
    duration?: StringFilter<"TripLog"> | string
    notes?: StringNullableFilter<"TripLog"> | string | null
    tags?: StringNullableListFilter<"TripLog">
    createdAt?: DateTimeFilter<"TripLog"> | Date | string
    updatedAt?: DateTimeFilter<"TripLog"> | Date | string
    userId?: StringNullableFilter<"TripLog"> | string | null
    mediaFiles?: MediaFileListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TripLogOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    city?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visitedOn?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TripLogCountOrderByAggregateInput
    _max?: TripLogMaxOrderByAggregateInput
    _min?: TripLogMinOrderByAggregateInput
  }

  export type TripLogScalarWhereWithAggregatesInput = {
    AND?: TripLogScalarWhereWithAggregatesInput | TripLogScalarWhereWithAggregatesInput[]
    OR?: TripLogScalarWhereWithAggregatesInput[]
    NOT?: TripLogScalarWhereWithAggregatesInput | TripLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripLog"> | string
    country?: StringWithAggregatesFilter<"TripLog"> | string
    countryCode?: StringWithAggregatesFilter<"TripLog"> | string
    city?: StringWithAggregatesFilter<"TripLog"> | string
    location?: StringWithAggregatesFilter<"TripLog"> | string
    latitude?: StringWithAggregatesFilter<"TripLog"> | string
    longitude?: StringWithAggregatesFilter<"TripLog"> | string
    visitedOn?: DateTimeWithAggregatesFilter<"TripLog"> | Date | string
    duration?: StringWithAggregatesFilter<"TripLog"> | string
    notes?: StringNullableWithAggregatesFilter<"TripLog"> | string | null
    tags?: StringNullableListFilter<"TripLog">
    createdAt?: DateTimeWithAggregatesFilter<"TripLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripLog"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"TripLog"> | string | null
  }

  export type MediaFileWhereInput = {
    AND?: MediaFileWhereInput | MediaFileWhereInput[]
    OR?: MediaFileWhereInput[]
    NOT?: MediaFileWhereInput | MediaFileWhereInput[]
    id?: StringFilter<"MediaFile"> | string
    fileId?: StringFilter<"MediaFile"> | string
    fileSize?: StringFilter<"MediaFile"> | string
    url?: StringFilter<"MediaFile"> | string
    mediaType?: EnumMediaFileTypeFilter<"MediaFile"> | $Enums.MediaFileType
    tripLogId?: StringNullableFilter<"MediaFile"> | string | null
    tripLog?: XOR<TripLogNullableScalarRelationFilter, TripLogWhereInput> | null
  }

  export type MediaFileOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    fileSize?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    tripLogId?: SortOrderInput | SortOrder
    tripLog?: TripLogOrderByWithRelationInput
  }

  export type MediaFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId?: string
    AND?: MediaFileWhereInput | MediaFileWhereInput[]
    OR?: MediaFileWhereInput[]
    NOT?: MediaFileWhereInput | MediaFileWhereInput[]
    fileSize?: StringFilter<"MediaFile"> | string
    url?: StringFilter<"MediaFile"> | string
    mediaType?: EnumMediaFileTypeFilter<"MediaFile"> | $Enums.MediaFileType
    tripLogId?: StringNullableFilter<"MediaFile"> | string | null
    tripLog?: XOR<TripLogNullableScalarRelationFilter, TripLogWhereInput> | null
  }, "id" | "fileId">

  export type MediaFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    fileSize?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    tripLogId?: SortOrderInput | SortOrder
    _count?: MediaFileCountOrderByAggregateInput
    _max?: MediaFileMaxOrderByAggregateInput
    _min?: MediaFileMinOrderByAggregateInput
  }

  export type MediaFileScalarWhereWithAggregatesInput = {
    AND?: MediaFileScalarWhereWithAggregatesInput | MediaFileScalarWhereWithAggregatesInput[]
    OR?: MediaFileScalarWhereWithAggregatesInput[]
    NOT?: MediaFileScalarWhereWithAggregatesInput | MediaFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaFile"> | string
    fileId?: StringWithAggregatesFilter<"MediaFile"> | string
    fileSize?: StringWithAggregatesFilter<"MediaFile"> | string
    url?: StringWithAggregatesFilter<"MediaFile"> | string
    mediaType?: EnumMediaFileTypeWithAggregatesFilter<"MediaFile"> | $Enums.MediaFileType
    tripLogId?: StringNullableWithAggregatesFilter<"MediaFile"> | string | null
  }

  export type ContactUsWhereInput = {
    AND?: ContactUsWhereInput | ContactUsWhereInput[]
    OR?: ContactUsWhereInput[]
    NOT?: ContactUsWhereInput | ContactUsWhereInput[]
    id?: StringFilter<"ContactUs"> | string
    name?: StringFilter<"ContactUs"> | string
    email?: StringFilter<"ContactUs"> | string
    subject?: StringFilter<"ContactUs"> | string
    message?: StringFilter<"ContactUs"> | string
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
  }

  export type ContactUsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactUsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ContactUsWhereInput | ContactUsWhereInput[]
    OR?: ContactUsWhereInput[]
    NOT?: ContactUsWhereInput | ContactUsWhereInput[]
    name?: StringFilter<"ContactUs"> | string
    subject?: StringFilter<"ContactUs"> | string
    message?: StringFilter<"ContactUs"> | string
    createdAt?: DateTimeFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeFilter<"ContactUs"> | Date | string
  }, "id" | "email">

  export type ContactUsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactUsCountOrderByAggregateInput
    _max?: ContactUsMaxOrderByAggregateInput
    _min?: ContactUsMinOrderByAggregateInput
  }

  export type ContactUsScalarWhereWithAggregatesInput = {
    AND?: ContactUsScalarWhereWithAggregatesInput | ContactUsScalarWhereWithAggregatesInput[]
    OR?: ContactUsScalarWhereWithAggregatesInput[]
    NOT?: ContactUsScalarWhereWithAggregatesInput | ContactUsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactUs"> | string
    name?: StringWithAggregatesFilter<"ContactUs"> | string
    email?: StringWithAggregatesFilter<"ContactUs"> | string
    subject?: StringWithAggregatesFilter<"ContactUs"> | string
    message?: StringWithAggregatesFilter<"ContactUs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactUs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactUs"> | Date | string
  }

  export type NewLetterWhereInput = {
    AND?: NewLetterWhereInput | NewLetterWhereInput[]
    OR?: NewLetterWhereInput[]
    NOT?: NewLetterWhereInput | NewLetterWhereInput[]
    id?: StringFilter<"NewLetter"> | string
    email?: StringFilter<"NewLetter"> | string
    createdAt?: DateTimeFilter<"NewLetter"> | Date | string
    updatedAt?: DateTimeFilter<"NewLetter"> | Date | string
  }

  export type NewLetterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: NewLetterWhereInput | NewLetterWhereInput[]
    OR?: NewLetterWhereInput[]
    NOT?: NewLetterWhereInput | NewLetterWhereInput[]
    createdAt?: DateTimeFilter<"NewLetter"> | Date | string
    updatedAt?: DateTimeFilter<"NewLetter"> | Date | string
  }, "id" | "email">

  export type NewLetterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewLetterCountOrderByAggregateInput
    _max?: NewLetterMaxOrderByAggregateInput
    _min?: NewLetterMinOrderByAggregateInput
  }

  export type NewLetterScalarWhereWithAggregatesInput = {
    AND?: NewLetterScalarWhereWithAggregatesInput | NewLetterScalarWhereWithAggregatesInput[]
    OR?: NewLetterScalarWhereWithAggregatesInput[]
    NOT?: NewLetterScalarWhereWithAggregatesInput | NewLetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewLetter"> | string
    email?: StringWithAggregatesFilter<"NewLetter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewLetter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewLetter"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    tenantId: string
    name: string
    role?: $Enums.UserRole
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripLogs?: TripLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    tenantId: string
    name: string
    role?: $Enums.UserRole
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripLogs?: TripLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripLogs?: TripLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripLogs?: TripLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    tenantId: string
    name: string
    role?: $Enums.UserRole
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripLogCreateInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaFiles?: MediaFileCreateNestedManyWithoutTripLogInput
    user?: UserCreateNestedOneWithoutTripLogsInput
  }

  export type TripLogUncheckedCreateInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    mediaFiles?: MediaFileUncheckedCreateNestedManyWithoutTripLogInput
  }

  export type TripLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaFiles?: MediaFileUpdateManyWithoutTripLogNestedInput
    user?: UserUpdateOneWithoutTripLogsNestedInput
  }

  export type TripLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaFiles?: MediaFileUncheckedUpdateManyWithoutTripLogNestedInput
  }

  export type TripLogCreateManyInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TripLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaFileCreateInput = {
    id?: string
    fileId: string
    fileSize: string
    url: string
    mediaType?: $Enums.MediaFileType
    tripLog?: TripLogCreateNestedOneWithoutMediaFilesInput
  }

  export type MediaFileUncheckedCreateInput = {
    id?: string
    fileId: string
    fileSize: string
    url: string
    mediaType?: $Enums.MediaFileType
    tripLogId?: string | null
  }

  export type MediaFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
    tripLog?: TripLogUpdateOneWithoutMediaFilesNestedInput
  }

  export type MediaFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
    tripLogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaFileCreateManyInput = {
    id?: string
    fileId: string
    fileSize: string
    url: string
    mediaType?: $Enums.MediaFileType
    tripLogId?: string | null
  }

  export type MediaFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
  }

  export type MediaFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
    tripLogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUsCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsCreateManyInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewLetterCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewLetterUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewLetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewLetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewLetterCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewLetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewLetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TripLogListRelationFilter = {
    every?: TripLogWhereInput
    some?: TripLogWhereInput
    none?: TripLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MediaFileListRelationFilter = {
    every?: MediaFileWhereInput
    some?: MediaFileWhereInput
    none?: MediaFileWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MediaFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripLogCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    city?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visitedOn?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripLogMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    city?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visitedOn?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripLogMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    city?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visitedOn?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumMediaFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaFileType | EnumMediaFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaFileTypeFilter<$PrismaModel> | $Enums.MediaFileType
  }

  export type TripLogNullableScalarRelationFilter = {
    is?: TripLogWhereInput | null
    isNot?: TripLogWhereInput | null
  }

  export type MediaFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    fileSize?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    tripLogId?: SortOrder
  }

  export type MediaFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    fileSize?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    tripLogId?: SortOrder
  }

  export type MediaFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    fileSize?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    tripLogId?: SortOrder
  }

  export type EnumMediaFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaFileType | EnumMediaFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaFileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaFileTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaFileTypeFilter<$PrismaModel>
  }

  export type ContactUsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactUsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactUsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewLetterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewLetterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripLogCreateNestedManyWithoutUserInput = {
    create?: XOR<TripLogCreateWithoutUserInput, TripLogUncheckedCreateWithoutUserInput> | TripLogCreateWithoutUserInput[] | TripLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLogCreateOrConnectWithoutUserInput | TripLogCreateOrConnectWithoutUserInput[]
    createMany?: TripLogCreateManyUserInputEnvelope
    connect?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
  }

  export type TripLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripLogCreateWithoutUserInput, TripLogUncheckedCreateWithoutUserInput> | TripLogCreateWithoutUserInput[] | TripLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLogCreateOrConnectWithoutUserInput | TripLogCreateOrConnectWithoutUserInput[]
    createMany?: TripLogCreateManyUserInputEnvelope
    connect?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripLogCreateWithoutUserInput, TripLogUncheckedCreateWithoutUserInput> | TripLogCreateWithoutUserInput[] | TripLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLogCreateOrConnectWithoutUserInput | TripLogCreateOrConnectWithoutUserInput[]
    upsert?: TripLogUpsertWithWhereUniqueWithoutUserInput | TripLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripLogCreateManyUserInputEnvelope
    set?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    disconnect?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    delete?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    connect?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    update?: TripLogUpdateWithWhereUniqueWithoutUserInput | TripLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripLogUpdateManyWithWhereWithoutUserInput | TripLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripLogScalarWhereInput | TripLogScalarWhereInput[]
  }

  export type TripLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripLogCreateWithoutUserInput, TripLogUncheckedCreateWithoutUserInput> | TripLogCreateWithoutUserInput[] | TripLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLogCreateOrConnectWithoutUserInput | TripLogCreateOrConnectWithoutUserInput[]
    upsert?: TripLogUpsertWithWhereUniqueWithoutUserInput | TripLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripLogCreateManyUserInputEnvelope
    set?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    disconnect?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    delete?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    connect?: TripLogWhereUniqueInput | TripLogWhereUniqueInput[]
    update?: TripLogUpdateWithWhereUniqueWithoutUserInput | TripLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripLogUpdateManyWithWhereWithoutUserInput | TripLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripLogScalarWhereInput | TripLogScalarWhereInput[]
  }

  export type TripLogCreatetagsInput = {
    set: string[]
  }

  export type MediaFileCreateNestedManyWithoutTripLogInput = {
    create?: XOR<MediaFileCreateWithoutTripLogInput, MediaFileUncheckedCreateWithoutTripLogInput> | MediaFileCreateWithoutTripLogInput[] | MediaFileUncheckedCreateWithoutTripLogInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutTripLogInput | MediaFileCreateOrConnectWithoutTripLogInput[]
    createMany?: MediaFileCreateManyTripLogInputEnvelope
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTripLogsInput = {
    create?: XOR<UserCreateWithoutTripLogsInput, UserUncheckedCreateWithoutTripLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripLogsInput
    connect?: UserWhereUniqueInput
  }

  export type MediaFileUncheckedCreateNestedManyWithoutTripLogInput = {
    create?: XOR<MediaFileCreateWithoutTripLogInput, MediaFileUncheckedCreateWithoutTripLogInput> | MediaFileCreateWithoutTripLogInput[] | MediaFileUncheckedCreateWithoutTripLogInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutTripLogInput | MediaFileCreateOrConnectWithoutTripLogInput[]
    createMany?: MediaFileCreateManyTripLogInputEnvelope
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
  }

  export type TripLogUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MediaFileUpdateManyWithoutTripLogNestedInput = {
    create?: XOR<MediaFileCreateWithoutTripLogInput, MediaFileUncheckedCreateWithoutTripLogInput> | MediaFileCreateWithoutTripLogInput[] | MediaFileUncheckedCreateWithoutTripLogInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutTripLogInput | MediaFileCreateOrConnectWithoutTripLogInput[]
    upsert?: MediaFileUpsertWithWhereUniqueWithoutTripLogInput | MediaFileUpsertWithWhereUniqueWithoutTripLogInput[]
    createMany?: MediaFileCreateManyTripLogInputEnvelope
    set?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    disconnect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    delete?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    update?: MediaFileUpdateWithWhereUniqueWithoutTripLogInput | MediaFileUpdateWithWhereUniqueWithoutTripLogInput[]
    updateMany?: MediaFileUpdateManyWithWhereWithoutTripLogInput | MediaFileUpdateManyWithWhereWithoutTripLogInput[]
    deleteMany?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTripLogsNestedInput = {
    create?: XOR<UserCreateWithoutTripLogsInput, UserUncheckedCreateWithoutTripLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripLogsInput
    upsert?: UserUpsertWithoutTripLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripLogsInput, UserUpdateWithoutTripLogsInput>, UserUncheckedUpdateWithoutTripLogsInput>
  }

  export type MediaFileUncheckedUpdateManyWithoutTripLogNestedInput = {
    create?: XOR<MediaFileCreateWithoutTripLogInput, MediaFileUncheckedCreateWithoutTripLogInput> | MediaFileCreateWithoutTripLogInput[] | MediaFileUncheckedCreateWithoutTripLogInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutTripLogInput | MediaFileCreateOrConnectWithoutTripLogInput[]
    upsert?: MediaFileUpsertWithWhereUniqueWithoutTripLogInput | MediaFileUpsertWithWhereUniqueWithoutTripLogInput[]
    createMany?: MediaFileCreateManyTripLogInputEnvelope
    set?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    disconnect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    delete?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    update?: MediaFileUpdateWithWhereUniqueWithoutTripLogInput | MediaFileUpdateWithWhereUniqueWithoutTripLogInput[]
    updateMany?: MediaFileUpdateManyWithWhereWithoutTripLogInput | MediaFileUpdateManyWithWhereWithoutTripLogInput[]
    deleteMany?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
  }

  export type TripLogCreateNestedOneWithoutMediaFilesInput = {
    create?: XOR<TripLogCreateWithoutMediaFilesInput, TripLogUncheckedCreateWithoutMediaFilesInput>
    connectOrCreate?: TripLogCreateOrConnectWithoutMediaFilesInput
    connect?: TripLogWhereUniqueInput
  }

  export type EnumMediaFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaFileType
  }

  export type TripLogUpdateOneWithoutMediaFilesNestedInput = {
    create?: XOR<TripLogCreateWithoutMediaFilesInput, TripLogUncheckedCreateWithoutMediaFilesInput>
    connectOrCreate?: TripLogCreateOrConnectWithoutMediaFilesInput
    upsert?: TripLogUpsertWithoutMediaFilesInput
    disconnect?: TripLogWhereInput | boolean
    delete?: TripLogWhereInput | boolean
    connect?: TripLogWhereUniqueInput
    update?: XOR<XOR<TripLogUpdateToOneWithWhereWithoutMediaFilesInput, TripLogUpdateWithoutMediaFilesInput>, TripLogUncheckedUpdateWithoutMediaFilesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMediaFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaFileType | EnumMediaFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaFileTypeFilter<$PrismaModel> | $Enums.MediaFileType
  }

  export type NestedEnumMediaFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaFileType | EnumMediaFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaFileType[] | ListEnumMediaFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaFileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaFileTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaFileTypeFilter<$PrismaModel>
  }

  export type TripLogCreateWithoutUserInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaFiles?: MediaFileCreateNestedManyWithoutTripLogInput
  }

  export type TripLogUncheckedCreateWithoutUserInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaFiles?: MediaFileUncheckedCreateNestedManyWithoutTripLogInput
  }

  export type TripLogCreateOrConnectWithoutUserInput = {
    where: TripLogWhereUniqueInput
    create: XOR<TripLogCreateWithoutUserInput, TripLogUncheckedCreateWithoutUserInput>
  }

  export type TripLogCreateManyUserInputEnvelope = {
    data: TripLogCreateManyUserInput | TripLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripLogUpsertWithWhereUniqueWithoutUserInput = {
    where: TripLogWhereUniqueInput
    update: XOR<TripLogUpdateWithoutUserInput, TripLogUncheckedUpdateWithoutUserInput>
    create: XOR<TripLogCreateWithoutUserInput, TripLogUncheckedCreateWithoutUserInput>
  }

  export type TripLogUpdateWithWhereUniqueWithoutUserInput = {
    where: TripLogWhereUniqueInput
    data: XOR<TripLogUpdateWithoutUserInput, TripLogUncheckedUpdateWithoutUserInput>
  }

  export type TripLogUpdateManyWithWhereWithoutUserInput = {
    where: TripLogScalarWhereInput
    data: XOR<TripLogUpdateManyMutationInput, TripLogUncheckedUpdateManyWithoutUserInput>
  }

  export type TripLogScalarWhereInput = {
    AND?: TripLogScalarWhereInput | TripLogScalarWhereInput[]
    OR?: TripLogScalarWhereInput[]
    NOT?: TripLogScalarWhereInput | TripLogScalarWhereInput[]
    id?: StringFilter<"TripLog"> | string
    country?: StringFilter<"TripLog"> | string
    countryCode?: StringFilter<"TripLog"> | string
    city?: StringFilter<"TripLog"> | string
    location?: StringFilter<"TripLog"> | string
    latitude?: StringFilter<"TripLog"> | string
    longitude?: StringFilter<"TripLog"> | string
    visitedOn?: DateTimeFilter<"TripLog"> | Date | string
    duration?: StringFilter<"TripLog"> | string
    notes?: StringNullableFilter<"TripLog"> | string | null
    tags?: StringNullableListFilter<"TripLog">
    createdAt?: DateTimeFilter<"TripLog"> | Date | string
    updatedAt?: DateTimeFilter<"TripLog"> | Date | string
    userId?: StringNullableFilter<"TripLog"> | string | null
  }

  export type MediaFileCreateWithoutTripLogInput = {
    id?: string
    fileId: string
    fileSize: string
    url: string
    mediaType?: $Enums.MediaFileType
  }

  export type MediaFileUncheckedCreateWithoutTripLogInput = {
    id?: string
    fileId: string
    fileSize: string
    url: string
    mediaType?: $Enums.MediaFileType
  }

  export type MediaFileCreateOrConnectWithoutTripLogInput = {
    where: MediaFileWhereUniqueInput
    create: XOR<MediaFileCreateWithoutTripLogInput, MediaFileUncheckedCreateWithoutTripLogInput>
  }

  export type MediaFileCreateManyTripLogInputEnvelope = {
    data: MediaFileCreateManyTripLogInput | MediaFileCreateManyTripLogInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTripLogsInput = {
    id?: string
    email: string
    tenantId: string
    name: string
    role?: $Enums.UserRole
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTripLogsInput = {
    id?: string
    email: string
    tenantId: string
    name: string
    role?: $Enums.UserRole
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTripLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripLogsInput, UserUncheckedCreateWithoutTripLogsInput>
  }

  export type MediaFileUpsertWithWhereUniqueWithoutTripLogInput = {
    where: MediaFileWhereUniqueInput
    update: XOR<MediaFileUpdateWithoutTripLogInput, MediaFileUncheckedUpdateWithoutTripLogInput>
    create: XOR<MediaFileCreateWithoutTripLogInput, MediaFileUncheckedCreateWithoutTripLogInput>
  }

  export type MediaFileUpdateWithWhereUniqueWithoutTripLogInput = {
    where: MediaFileWhereUniqueInput
    data: XOR<MediaFileUpdateWithoutTripLogInput, MediaFileUncheckedUpdateWithoutTripLogInput>
  }

  export type MediaFileUpdateManyWithWhereWithoutTripLogInput = {
    where: MediaFileScalarWhereInput
    data: XOR<MediaFileUpdateManyMutationInput, MediaFileUncheckedUpdateManyWithoutTripLogInput>
  }

  export type MediaFileScalarWhereInput = {
    AND?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
    OR?: MediaFileScalarWhereInput[]
    NOT?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
    id?: StringFilter<"MediaFile"> | string
    fileId?: StringFilter<"MediaFile"> | string
    fileSize?: StringFilter<"MediaFile"> | string
    url?: StringFilter<"MediaFile"> | string
    mediaType?: EnumMediaFileTypeFilter<"MediaFile"> | $Enums.MediaFileType
    tripLogId?: StringNullableFilter<"MediaFile"> | string | null
  }

  export type UserUpsertWithoutTripLogsInput = {
    update: XOR<UserUpdateWithoutTripLogsInput, UserUncheckedUpdateWithoutTripLogsInput>
    create: XOR<UserCreateWithoutTripLogsInput, UserUncheckedCreateWithoutTripLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripLogsInput, UserUncheckedUpdateWithoutTripLogsInput>
  }

  export type UserUpdateWithoutTripLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTripLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripLogCreateWithoutMediaFilesInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTripLogsInput
  }

  export type TripLogUncheckedCreateWithoutMediaFilesInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TripLogCreateOrConnectWithoutMediaFilesInput = {
    where: TripLogWhereUniqueInput
    create: XOR<TripLogCreateWithoutMediaFilesInput, TripLogUncheckedCreateWithoutMediaFilesInput>
  }

  export type TripLogUpsertWithoutMediaFilesInput = {
    update: XOR<TripLogUpdateWithoutMediaFilesInput, TripLogUncheckedUpdateWithoutMediaFilesInput>
    create: XOR<TripLogCreateWithoutMediaFilesInput, TripLogUncheckedCreateWithoutMediaFilesInput>
    where?: TripLogWhereInput
  }

  export type TripLogUpdateToOneWithWhereWithoutMediaFilesInput = {
    where?: TripLogWhereInput
    data: XOR<TripLogUpdateWithoutMediaFilesInput, TripLogUncheckedUpdateWithoutMediaFilesInput>
  }

  export type TripLogUpdateWithoutMediaFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTripLogsNestedInput
  }

  export type TripLogUncheckedUpdateWithoutMediaFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripLogCreateManyUserInput = {
    id?: string
    country: string
    countryCode: string
    city: string
    location: string
    latitude: string
    longitude: string
    visitedOn: Date | string
    duration: string
    notes?: string | null
    tags?: TripLogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaFiles?: MediaFileUpdateManyWithoutTripLogNestedInput
  }

  export type TripLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaFiles?: MediaFileUncheckedUpdateManyWithoutTripLogNestedInput
  }

  export type TripLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    visitedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TripLogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileCreateManyTripLogInput = {
    id?: string
    fileId: string
    fileSize: string
    url: string
    mediaType?: $Enums.MediaFileType
  }

  export type MediaFileUpdateWithoutTripLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
  }

  export type MediaFileUncheckedUpdateWithoutTripLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
  }

  export type MediaFileUncheckedUpdateManyWithoutTripLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    fileSize?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaFileTypeFieldUpdateOperationsInput | $Enums.MediaFileType
  }



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