
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Dish
 * 
 */
export type Dish = $Result.DefaultSelection<Prisma.$DishPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model Order_applies_Voucher
 * 
 */
export type Order_applies_Voucher = $Result.DefaultSelection<Prisma.$Order_applies_VoucherPayload>
/**
 * Model Order_have_Item
 * 
 */
export type Order_have_Item = $Result.DefaultSelection<Prisma.$Order_have_ItemPayload>
/**
 * Model Customer_have_Voucher
 * 
 */
export type Customer_have_Voucher = $Result.DefaultSelection<Prisma.$Customer_have_VoucherPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TableType: {
  TWO_SEATER: 'TWO_SEATER',
  FOUR_SEATER: 'FOUR_SEATER',
  ROUND: 'ROUND',
  LONG: 'LONG',
  OUTDOOR: 'OUTDOOR',
  WINDOW_SIDE: 'WINDOW_SIDE',
  FAMILY: 'FAMILY',
  VIP: 'VIP',
  BAR_COUNTER: 'BAR_COUNTER',
  RESERVED: 'RESERVED'
};

export type TableType = (typeof TableType)[keyof typeof TableType]


export const DishCategory: {
  APPETIZER: 'APPETIZER',
  MAIN_COURSE: 'MAIN_COURSE',
  DESSERT: 'DESSERT',
  SIDE_DISH: 'SIDE_DISH',
  VEGETARIAN: 'VEGETARIAN',
  SPECIALTY: 'SPECIALTY',
  DAILY_SPECIAL: 'DAILY_SPECIAL',
  GRILLED: 'GRILLED',
  FRIED: 'FRIED',
  SOUP: 'SOUP',
  SALAD: 'SALAD',
  BEVERAGE: 'BEVERAGE'
};

export type DishCategory = (typeof DishCategory)[keyof typeof DishCategory]

}

export type TableType = $Enums.TableType

export const TableType: typeof $Enums.TableType

export type DishCategory = $Enums.DishCategory

export const DishCategory: typeof $Enums.DishCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_applies_Voucher`: Exposes CRUD operations for the **Order_applies_Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_applies_Vouchers
    * const order_applies_Vouchers = await prisma.order_applies_Voucher.findMany()
    * ```
    */
  get order_applies_Voucher(): Prisma.Order_applies_VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_have_Item`: Exposes CRUD operations for the **Order_have_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_have_Items
    * const order_have_Items = await prisma.order_have_Item.findMany()
    * ```
    */
  get order_have_Item(): Prisma.Order_have_ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer_have_Voucher`: Exposes CRUD operations for the **Customer_have_Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_have_Vouchers
    * const customer_have_Vouchers = await prisma.customer_have_Voucher.findMany()
    * ```
    */
  get customer_have_Voucher(): Prisma.Customer_have_VoucherDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Customer: 'Customer',
    Item: 'Item',
    Dish: 'Dish',
    Table: 'Table',
    Order: 'Order',
    Voucher: 'Voucher',
    Order_applies_Voucher: 'Order_applies_Voucher',
    Order_have_Item: 'Order_have_Item',
    Customer_have_Voucher: 'Customer_have_Voucher'
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
      modelProps: "customer" | "item" | "dish" | "table" | "order" | "voucher" | "order_applies_Voucher" | "order_have_Item" | "customer_have_Voucher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Dish: {
        payload: Prisma.$DishPayload<ExtArgs>
        fields: Prisma.DishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findFirst: {
            args: Prisma.DishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findMany: {
            args: Prisma.DishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          create: {
            args: Prisma.DishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          createMany: {
            args: Prisma.DishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          delete: {
            args: Prisma.DishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          update: {
            args: Prisma.DishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          deleteMany: {
            args: Prisma.DishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          upsert: {
            args: Prisma.DishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          aggregate: {
            args: Prisma.DishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDish>
          }
          groupBy: {
            args: Prisma.DishGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCountArgs<ExtArgs>
            result: $Utils.Optional<DishCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      Order_applies_Voucher: {
        payload: Prisma.$Order_applies_VoucherPayload<ExtArgs>
        fields: Prisma.Order_applies_VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_applies_VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_applies_VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>
          }
          findFirst: {
            args: Prisma.Order_applies_VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_applies_VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>
          }
          findMany: {
            args: Prisma.Order_applies_VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>[]
          }
          create: {
            args: Prisma.Order_applies_VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>
          }
          createMany: {
            args: Prisma.Order_applies_VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Order_applies_VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>[]
          }
          delete: {
            args: Prisma.Order_applies_VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>
          }
          update: {
            args: Prisma.Order_applies_VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>
          }
          deleteMany: {
            args: Prisma.Order_applies_VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Order_applies_VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Order_applies_VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>[]
          }
          upsert: {
            args: Prisma.Order_applies_VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_applies_VoucherPayload>
          }
          aggregate: {
            args: Prisma.Order_applies_VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_applies_Voucher>
          }
          groupBy: {
            args: Prisma.Order_applies_VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_applies_VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_applies_VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<Order_applies_VoucherCountAggregateOutputType> | number
          }
        }
      }
      Order_have_Item: {
        payload: Prisma.$Order_have_ItemPayload<ExtArgs>
        fields: Prisma.Order_have_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_have_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_have_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>
          }
          findFirst: {
            args: Prisma.Order_have_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_have_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>
          }
          findMany: {
            args: Prisma.Order_have_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>[]
          }
          create: {
            args: Prisma.Order_have_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>
          }
          createMany: {
            args: Prisma.Order_have_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Order_have_ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>[]
          }
          delete: {
            args: Prisma.Order_have_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>
          }
          update: {
            args: Prisma.Order_have_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>
          }
          deleteMany: {
            args: Prisma.Order_have_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Order_have_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Order_have_ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>[]
          }
          upsert: {
            args: Prisma.Order_have_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_have_ItemPayload>
          }
          aggregate: {
            args: Prisma.Order_have_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_have_Item>
          }
          groupBy: {
            args: Prisma.Order_have_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_have_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_have_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_have_ItemCountAggregateOutputType> | number
          }
        }
      }
      Customer_have_Voucher: {
        payload: Prisma.$Customer_have_VoucherPayload<ExtArgs>
        fields: Prisma.Customer_have_VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Customer_have_VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Customer_have_VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>
          }
          findFirst: {
            args: Prisma.Customer_have_VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Customer_have_VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>
          }
          findMany: {
            args: Prisma.Customer_have_VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>[]
          }
          create: {
            args: Prisma.Customer_have_VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>
          }
          createMany: {
            args: Prisma.Customer_have_VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Customer_have_VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>[]
          }
          delete: {
            args: Prisma.Customer_have_VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>
          }
          update: {
            args: Prisma.Customer_have_VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>
          }
          deleteMany: {
            args: Prisma.Customer_have_VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Customer_have_VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Customer_have_VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>[]
          }
          upsert: {
            args: Prisma.Customer_have_VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_have_VoucherPayload>
          }
          aggregate: {
            args: Prisma.Customer_have_VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer_have_Voucher>
          }
          groupBy: {
            args: Prisma.Customer_have_VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<Customer_have_VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.Customer_have_VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<Customer_have_VoucherCountAggregateOutputType> | number
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
    customer?: CustomerOmit
    item?: ItemOmit
    dish?: DishOmit
    table?: TableOmit
    order?: OrderOmit
    voucher?: VoucherOmit
    order_applies_Voucher?: Order_applies_VoucherOmit
    order_have_Item?: Order_have_ItemOmit
    customer_have_Voucher?: Customer_have_VoucherOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    customer_have_voucher: number
    order: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_have_voucher?: boolean | CustomerCountOutputTypeCountCustomer_have_voucherArgs
    order?: boolean | CustomerCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCustomer_have_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Customer_have_VoucherWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    order_have_item: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_have_item?: boolean | ItemCountOutputTypeCountOrder_have_itemArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOrder_have_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_have_ItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_applies_voucher: number
    order_have_item: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_applies_voucher?: boolean | OrderCountOutputTypeCountOrder_applies_voucherArgs
    order_have_item?: boolean | OrderCountOutputTypeCountOrder_have_itemArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_applies_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_applies_VoucherWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_have_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_have_ItemWhereInput
  }


  /**
   * Count Type VoucherCountOutputType
   */

  export type VoucherCountOutputType = {
    customer_have_voucher: number
    order_applies_voucher: number
  }

  export type VoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_have_voucher?: boolean | VoucherCountOutputTypeCountCustomer_have_voucherArgs
    order_applies_voucher?: boolean | VoucherCountOutputTypeCountOrder_applies_voucherArgs
  }

  // Custom InputTypes
  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherCountOutputType
     */
    select?: VoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountCustomer_have_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Customer_have_VoucherWhereInput
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountOrder_applies_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_applies_VoucherWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    address: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    address: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone_number: number
    address: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    customer_have_voucher?: boolean | Customer$customer_have_voucherArgs<ExtArgs>
    order?: boolean | Customer$orderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password" | "phone_number" | "address", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_have_voucher?: boolean | Customer$customer_have_voucherArgs<ExtArgs>
    order?: boolean | Customer$orderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      customer_have_voucher: Prisma.$Customer_have_VoucherPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone_number: string
      address: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer_have_voucher<T extends Customer$customer_have_voucherArgs<ExtArgs> = {}>(args?: Subset<T, Customer$customer_have_voucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends Customer$orderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly first_name: FieldRef<"Customer", 'String'>
    readonly last_name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly phone_number: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.customer_have_voucher
   */
  export type Customer$customer_have_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    where?: Customer_have_VoucherWhereInput
    orderBy?: Customer_have_VoucherOrderByWithRelationInput | Customer_have_VoucherOrderByWithRelationInput[]
    cursor?: Customer_have_VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_have_VoucherScalarFieldEnum | Customer_have_VoucherScalarFieldEnum[]
  }

  /**
   * Customer.order
   */
  export type Customer$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dish?: boolean | Item$dishArgs<ExtArgs>
    order_have_item?: boolean | Item$order_have_itemArgs<ExtArgs>
    table?: boolean | Item$tableArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | Item$dishArgs<ExtArgs>
    order_have_item?: boolean | Item$order_have_itemArgs<ExtArgs>
    table?: boolean | Item$tableArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      dish: Prisma.$DishPayload<ExtArgs> | null
      order_have_item: Prisma.$Order_have_ItemPayload<ExtArgs>[]
      table: Prisma.$TablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dish<T extends Item$dishArgs<ExtArgs> = {}>(args?: Subset<T, Item$dishArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_have_item<T extends Item$order_have_itemArgs<ExtArgs> = {}>(args?: Subset<T, Item$order_have_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    table<T extends Item$tableArgs<ExtArgs> = {}>(args?: Subset<T, Item$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data?: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.dish
   */
  export type Item$dishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    where?: DishWhereInput
  }

  /**
   * Item.order_have_item
   */
  export type Item$order_have_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    where?: Order_have_ItemWhereInput
    orderBy?: Order_have_ItemOrderByWithRelationInput | Order_have_ItemOrderByWithRelationInput[]
    cursor?: Order_have_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_have_ItemScalarFieldEnum | Order_have_ItemScalarFieldEnum[]
  }

  /**
   * Item.table
   */
  export type Item$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Dish
   */

  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type DishSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type DishMinAggregateOutputType = {
    id: number | null
    dish_type: $Enums.DishCategory | null
    price: number | null
  }

  export type DishMaxAggregateOutputType = {
    id: number | null
    dish_type: $Enums.DishCategory | null
    price: number | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    dish_type: number
    price: number
    _all: number
  }


  export type DishAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type DishSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type DishMinAggregateInputType = {
    id?: true
    dish_type?: true
    price?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    dish_type?: true
    price?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    dish_type?: true
    price?: true
    _all?: true
  }

  export type DishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dish to aggregate.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
    orderBy?: DishOrderByWithAggregationInput | DishOrderByWithAggregationInput[]
    by: DishScalarFieldEnum[] | DishScalarFieldEnum
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _avg?: DishAvgAggregateInputType
    _sum?: DishSumAggregateInputType
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }

  export type DishGroupByOutputType = {
    id: number
    dish_type: $Enums.DishCategory
    price: number
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dish_type?: boolean
    price?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dish_type?: boolean
    price?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dish_type?: boolean
    price?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectScalar = {
    id?: boolean
    dish_type?: boolean
    price?: boolean
  }

  export type DishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dish_type" | "price", ExtArgs["result"]["dish"]>
  export type DishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type DishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type DishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $DishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dish"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dish_type: $Enums.DishCategory
      price: number
    }, ExtArgs["result"]["dish"]>
    composites: {}
  }

  type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = $Result.GetResult<Prisma.$DishPayload, S>

  type DishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCountAggregateInputType | true
    }

  export interface DishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dish'], meta: { name: 'Dish' } }
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishFindUniqueArgs>(args: SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishFindFirstArgs>(args?: SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishFindManyArgs>(args?: SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
     */
    create<T extends DishCreateArgs>(args: SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dishes.
     * @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCreateManyArgs>(args?: SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
     */
    delete<T extends DishDeleteArgs>(args: SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishUpdateArgs>(args: SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishDeleteManyArgs>(args?: SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishUpdateManyArgs>(args: SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.updateManyAndReturn({
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
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
     */
    upsert<T extends DishUpsertArgs>(args: SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
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
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dish model
   */
  readonly fields: DishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dish model
   */ 
  interface DishFieldRefs {
    readonly id: FieldRef<"Dish", 'Int'>
    readonly dish_type: FieldRef<"Dish", 'DishCategory'>
    readonly price: FieldRef<"Dish", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dish findUnique
   */
  export type DishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findFirst
   */
  export type DishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findMany
   */
  export type DishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish create
   */
  export type DishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to create a Dish.
     */
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }

  /**
   * Dish createMany
   */
  export type DishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish createManyAndReturn
   */
  export type DishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish update
   */
  export type DishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to update a Dish.
     */
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish updateManyAndReturn
   */
  export type DishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish upsert
   */
  export type DishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The filter to search for the Dish to update in case it exists.
     */
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     */
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }

  /**
   * Dish delete
   */
  export type DishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter which Dish to delete.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dish without action
   */
  export type DishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    id: number | null
  }

  export type TableSumAggregateOutputType = {
    id: number | null
  }

  export type TableMinAggregateOutputType = {
    id: number | null
    table_type: $Enums.TableType | null
  }

  export type TableMaxAggregateOutputType = {
    id: number | null
    table_type: $Enums.TableType | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    table_type: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    id?: true
  }

  export type TableSumAggregateInputType = {
    id?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    table_type?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    table_type?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    table_type?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: number
    table_type: $Enums.TableType
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    table_type?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    table_type?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    table_type?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    table_type?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "table_type", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      table_type: $Enums.TableType
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
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
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Table model
   */ 
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'Int'>
    readonly table_type: FieldRef<"Table", 'TableType'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    total_price: number | null
    customer_id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    total_price: number | null
    customer_id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    order_date: Date | null
    total_price: number | null
    customer_id: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    order_date: Date | null
    total_price: number | null
    customer_id: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    order_date: number
    total_price: number
    customer_id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    total_price?: true
    customer_id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    total_price?: true
    customer_id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    order_date?: true
    total_price?: true
    customer_id?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    order_date?: true
    total_price?: true
    customer_id?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    order_date?: true
    total_price?: true
    customer_id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    order_date: Date
    total_price: number
    customer_id: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_date?: boolean
    total_price?: boolean
    customer_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    order_applies_voucher?: boolean | Order$order_applies_voucherArgs<ExtArgs>
    order_have_item?: boolean | Order$order_have_itemArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_date?: boolean
    total_price?: boolean
    customer_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_date?: boolean
    total_price?: boolean
    customer_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    order_date?: boolean
    total_price?: boolean
    customer_id?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_date" | "total_price" | "customer_id", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    order_applies_voucher?: boolean | Order$order_applies_voucherArgs<ExtArgs>
    order_have_item?: boolean | Order$order_have_itemArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      order_applies_voucher: Prisma.$Order_applies_VoucherPayload<ExtArgs>[]
      order_have_item: Prisma.$Order_have_ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_date: Date
      total_price: number
      customer_id: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_applies_voucher<T extends Order$order_applies_voucherArgs<ExtArgs> = {}>(args?: Subset<T, Order$order_applies_voucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_have_item<T extends Order$order_have_itemArgs<ExtArgs> = {}>(args?: Subset<T, Order$order_have_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly order_date: FieldRef<"Order", 'DateTime'>
    readonly total_price: FieldRef<"Order", 'Int'>
    readonly customer_id: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.order_applies_voucher
   */
  export type Order$order_applies_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    where?: Order_applies_VoucherWhereInput
    orderBy?: Order_applies_VoucherOrderByWithRelationInput | Order_applies_VoucherOrderByWithRelationInput[]
    cursor?: Order_applies_VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_applies_VoucherScalarFieldEnum | Order_applies_VoucherScalarFieldEnum[]
  }

  /**
   * Order.order_have_item
   */
  export type Order$order_have_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    where?: Order_have_ItemWhereInput
    orderBy?: Order_have_ItemOrderByWithRelationInput | Order_have_ItemOrderByWithRelationInput[]
    cursor?: Order_have_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_have_ItemScalarFieldEnum | Order_have_ItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    id: number | null
    expiration_date: number | null
  }

  export type VoucherSumAggregateOutputType = {
    id: number | null
    expiration_date: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: number | null
    denomination: string | null
    issue_date: Date | null
    expiration_date: number | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: number | null
    denomination: string | null
    issue_date: Date | null
    expiration_date: number | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    denomination: number
    issue_date: number
    expiration_date: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    id?: true
    expiration_date?: true
  }

  export type VoucherSumAggregateInputType = {
    id?: true
    expiration_date?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    denomination?: true
    issue_date?: true
    expiration_date?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    denomination?: true
    issue_date?: true
    expiration_date?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    denomination?: true
    issue_date?: true
    expiration_date?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: number
    denomination: string
    issue_date: Date
    expiration_date: number
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denomination?: boolean
    issue_date?: boolean
    expiration_date?: boolean
    customer_have_voucher?: boolean | Voucher$customer_have_voucherArgs<ExtArgs>
    order_applies_voucher?: boolean | Voucher$order_applies_voucherArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denomination?: boolean
    issue_date?: boolean
    expiration_date?: boolean
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denomination?: boolean
    issue_date?: boolean
    expiration_date?: boolean
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    denomination?: boolean
    issue_date?: boolean
    expiration_date?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "denomination" | "issue_date" | "expiration_date", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_have_voucher?: boolean | Voucher$customer_have_voucherArgs<ExtArgs>
    order_applies_voucher?: boolean | Voucher$order_applies_voucherArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      customer_have_voucher: Prisma.$Customer_have_VoucherPayload<ExtArgs>[]
      order_applies_voucher: Prisma.$Order_applies_VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      denomination: string
      issue_date: Date
      expiration_date: number
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer_have_voucher<T extends Voucher$customer_have_voucherArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$customer_have_voucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_applies_voucher<T extends Voucher$order_applies_voucherArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$order_applies_voucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Voucher model
   */ 
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'Int'>
    readonly denomination: FieldRef<"Voucher", 'String'>
    readonly issue_date: FieldRef<"Voucher", 'DateTime'>
    readonly expiration_date: FieldRef<"Voucher", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.customer_have_voucher
   */
  export type Voucher$customer_have_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    where?: Customer_have_VoucherWhereInput
    orderBy?: Customer_have_VoucherOrderByWithRelationInput | Customer_have_VoucherOrderByWithRelationInput[]
    cursor?: Customer_have_VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_have_VoucherScalarFieldEnum | Customer_have_VoucherScalarFieldEnum[]
  }

  /**
   * Voucher.order_applies_voucher
   */
  export type Voucher$order_applies_voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    where?: Order_applies_VoucherWhereInput
    orderBy?: Order_applies_VoucherOrderByWithRelationInput | Order_applies_VoucherOrderByWithRelationInput[]
    cursor?: Order_applies_VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_applies_VoucherScalarFieldEnum | Order_applies_VoucherScalarFieldEnum[]
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model Order_applies_Voucher
   */

  export type AggregateOrder_applies_Voucher = {
    _count: Order_applies_VoucherCountAggregateOutputType | null
    _avg: Order_applies_VoucherAvgAggregateOutputType | null
    _sum: Order_applies_VoucherSumAggregateOutputType | null
    _min: Order_applies_VoucherMinAggregateOutputType | null
    _max: Order_applies_VoucherMaxAggregateOutputType | null
  }

  export type Order_applies_VoucherAvgAggregateOutputType = {
    order_id: number | null
    voucher_id: number | null
  }

  export type Order_applies_VoucherSumAggregateOutputType = {
    order_id: number | null
    voucher_id: number | null
  }

  export type Order_applies_VoucherMinAggregateOutputType = {
    order_id: number | null
    voucher_id: number | null
  }

  export type Order_applies_VoucherMaxAggregateOutputType = {
    order_id: number | null
    voucher_id: number | null
  }

  export type Order_applies_VoucherCountAggregateOutputType = {
    order_id: number
    voucher_id: number
    _all: number
  }


  export type Order_applies_VoucherAvgAggregateInputType = {
    order_id?: true
    voucher_id?: true
  }

  export type Order_applies_VoucherSumAggregateInputType = {
    order_id?: true
    voucher_id?: true
  }

  export type Order_applies_VoucherMinAggregateInputType = {
    order_id?: true
    voucher_id?: true
  }

  export type Order_applies_VoucherMaxAggregateInputType = {
    order_id?: true
    voucher_id?: true
  }

  export type Order_applies_VoucherCountAggregateInputType = {
    order_id?: true
    voucher_id?: true
    _all?: true
  }

  export type Order_applies_VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_applies_Voucher to aggregate.
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_applies_Vouchers to fetch.
     */
    orderBy?: Order_applies_VoucherOrderByWithRelationInput | Order_applies_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_applies_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_applies_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_applies_Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_applies_Vouchers
    **/
    _count?: true | Order_applies_VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_applies_VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_applies_VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_applies_VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_applies_VoucherMaxAggregateInputType
  }

  export type GetOrder_applies_VoucherAggregateType<T extends Order_applies_VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_applies_Voucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_applies_Voucher[P]>
      : GetScalarType<T[P], AggregateOrder_applies_Voucher[P]>
  }




  export type Order_applies_VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_applies_VoucherWhereInput
    orderBy?: Order_applies_VoucherOrderByWithAggregationInput | Order_applies_VoucherOrderByWithAggregationInput[]
    by: Order_applies_VoucherScalarFieldEnum[] | Order_applies_VoucherScalarFieldEnum
    having?: Order_applies_VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_applies_VoucherCountAggregateInputType | true
    _avg?: Order_applies_VoucherAvgAggregateInputType
    _sum?: Order_applies_VoucherSumAggregateInputType
    _min?: Order_applies_VoucherMinAggregateInputType
    _max?: Order_applies_VoucherMaxAggregateInputType
  }

  export type Order_applies_VoucherGroupByOutputType = {
    order_id: number
    voucher_id: number
    _count: Order_applies_VoucherCountAggregateOutputType | null
    _avg: Order_applies_VoucherAvgAggregateOutputType | null
    _sum: Order_applies_VoucherSumAggregateOutputType | null
    _min: Order_applies_VoucherMinAggregateOutputType | null
    _max: Order_applies_VoucherMaxAggregateOutputType | null
  }

  type GetOrder_applies_VoucherGroupByPayload<T extends Order_applies_VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_applies_VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_applies_VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_applies_VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], Order_applies_VoucherGroupByOutputType[P]>
        }
      >
    >


  export type Order_applies_VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    voucher_id?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_applies_Voucher"]>

  export type Order_applies_VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    voucher_id?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_applies_Voucher"]>

  export type Order_applies_VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    voucher_id?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_applies_Voucher"]>

  export type Order_applies_VoucherSelectScalar = {
    order_id?: boolean
    voucher_id?: boolean
  }

  export type Order_applies_VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "voucher_id", ExtArgs["result"]["order_applies_Voucher"]>
  export type Order_applies_VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type Order_applies_VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type Order_applies_VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }

  export type $Order_applies_VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_applies_Voucher"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      voucher_id: number
    }, ExtArgs["result"]["order_applies_Voucher"]>
    composites: {}
  }

  type Order_applies_VoucherGetPayload<S extends boolean | null | undefined | Order_applies_VoucherDefaultArgs> = $Result.GetResult<Prisma.$Order_applies_VoucherPayload, S>

  type Order_applies_VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Order_applies_VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_applies_VoucherCountAggregateInputType | true
    }

  export interface Order_applies_VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_applies_Voucher'], meta: { name: 'Order_applies_Voucher' } }
    /**
     * Find zero or one Order_applies_Voucher that matches the filter.
     * @param {Order_applies_VoucherFindUniqueArgs} args - Arguments to find a Order_applies_Voucher
     * @example
     * // Get one Order_applies_Voucher
     * const order_applies_Voucher = await prisma.order_applies_Voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Order_applies_VoucherFindUniqueArgs>(args: SelectSubset<T, Order_applies_VoucherFindUniqueArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_applies_Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Order_applies_VoucherFindUniqueOrThrowArgs} args - Arguments to find a Order_applies_Voucher
     * @example
     * // Get one Order_applies_Voucher
     * const order_applies_Voucher = await prisma.order_applies_Voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Order_applies_VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, Order_applies_VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_applies_Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherFindFirstArgs} args - Arguments to find a Order_applies_Voucher
     * @example
     * // Get one Order_applies_Voucher
     * const order_applies_Voucher = await prisma.order_applies_Voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Order_applies_VoucherFindFirstArgs>(args?: SelectSubset<T, Order_applies_VoucherFindFirstArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_applies_Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherFindFirstOrThrowArgs} args - Arguments to find a Order_applies_Voucher
     * @example
     * // Get one Order_applies_Voucher
     * const order_applies_Voucher = await prisma.order_applies_Voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Order_applies_VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, Order_applies_VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_applies_Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_applies_Vouchers
     * const order_applies_Vouchers = await prisma.order_applies_Voucher.findMany()
     * 
     * // Get first 10 Order_applies_Vouchers
     * const order_applies_Vouchers = await prisma.order_applies_Voucher.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const order_applies_VoucherWithOrder_idOnly = await prisma.order_applies_Voucher.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends Order_applies_VoucherFindManyArgs>(args?: SelectSubset<T, Order_applies_VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_applies_Voucher.
     * @param {Order_applies_VoucherCreateArgs} args - Arguments to create a Order_applies_Voucher.
     * @example
     * // Create one Order_applies_Voucher
     * const Order_applies_Voucher = await prisma.order_applies_Voucher.create({
     *   data: {
     *     // ... data to create a Order_applies_Voucher
     *   }
     * })
     * 
     */
    create<T extends Order_applies_VoucherCreateArgs>(args: SelectSubset<T, Order_applies_VoucherCreateArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_applies_Vouchers.
     * @param {Order_applies_VoucherCreateManyArgs} args - Arguments to create many Order_applies_Vouchers.
     * @example
     * // Create many Order_applies_Vouchers
     * const order_applies_Voucher = await prisma.order_applies_Voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Order_applies_VoucherCreateManyArgs>(args?: SelectSubset<T, Order_applies_VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_applies_Vouchers and returns the data saved in the database.
     * @param {Order_applies_VoucherCreateManyAndReturnArgs} args - Arguments to create many Order_applies_Vouchers.
     * @example
     * // Create many Order_applies_Vouchers
     * const order_applies_Voucher = await prisma.order_applies_Voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_applies_Vouchers and only return the `order_id`
     * const order_applies_VoucherWithOrder_idOnly = await prisma.order_applies_Voucher.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Order_applies_VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, Order_applies_VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_applies_Voucher.
     * @param {Order_applies_VoucherDeleteArgs} args - Arguments to delete one Order_applies_Voucher.
     * @example
     * // Delete one Order_applies_Voucher
     * const Order_applies_Voucher = await prisma.order_applies_Voucher.delete({
     *   where: {
     *     // ... filter to delete one Order_applies_Voucher
     *   }
     * })
     * 
     */
    delete<T extends Order_applies_VoucherDeleteArgs>(args: SelectSubset<T, Order_applies_VoucherDeleteArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_applies_Voucher.
     * @param {Order_applies_VoucherUpdateArgs} args - Arguments to update one Order_applies_Voucher.
     * @example
     * // Update one Order_applies_Voucher
     * const order_applies_Voucher = await prisma.order_applies_Voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Order_applies_VoucherUpdateArgs>(args: SelectSubset<T, Order_applies_VoucherUpdateArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_applies_Vouchers.
     * @param {Order_applies_VoucherDeleteManyArgs} args - Arguments to filter Order_applies_Vouchers to delete.
     * @example
     * // Delete a few Order_applies_Vouchers
     * const { count } = await prisma.order_applies_Voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Order_applies_VoucherDeleteManyArgs>(args?: SelectSubset<T, Order_applies_VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_applies_Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_applies_Vouchers
     * const order_applies_Voucher = await prisma.order_applies_Voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Order_applies_VoucherUpdateManyArgs>(args: SelectSubset<T, Order_applies_VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_applies_Vouchers and returns the data updated in the database.
     * @param {Order_applies_VoucherUpdateManyAndReturnArgs} args - Arguments to update many Order_applies_Vouchers.
     * @example
     * // Update many Order_applies_Vouchers
     * const order_applies_Voucher = await prisma.order_applies_Voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_applies_Vouchers and only return the `order_id`
     * const order_applies_VoucherWithOrder_idOnly = await prisma.order_applies_Voucher.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends Order_applies_VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, Order_applies_VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_applies_Voucher.
     * @param {Order_applies_VoucherUpsertArgs} args - Arguments to update or create a Order_applies_Voucher.
     * @example
     * // Update or create a Order_applies_Voucher
     * const order_applies_Voucher = await prisma.order_applies_Voucher.upsert({
     *   create: {
     *     // ... data to create a Order_applies_Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_applies_Voucher we want to update
     *   }
     * })
     */
    upsert<T extends Order_applies_VoucherUpsertArgs>(args: SelectSubset<T, Order_applies_VoucherUpsertArgs<ExtArgs>>): Prisma__Order_applies_VoucherClient<$Result.GetResult<Prisma.$Order_applies_VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_applies_Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherCountArgs} args - Arguments to filter Order_applies_Vouchers to count.
     * @example
     * // Count the number of Order_applies_Vouchers
     * const count = await prisma.order_applies_Voucher.count({
     *   where: {
     *     // ... the filter for the Order_applies_Vouchers we want to count
     *   }
     * })
    **/
    count<T extends Order_applies_VoucherCountArgs>(
      args?: Subset<T, Order_applies_VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_applies_VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_applies_Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_applies_VoucherAggregateArgs>(args: Subset<T, Order_applies_VoucherAggregateArgs>): Prisma.PrismaPromise<GetOrder_applies_VoucherAggregateType<T>>

    /**
     * Group by Order_applies_Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_applies_VoucherGroupByArgs} args - Group by arguments.
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
      T extends Order_applies_VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_applies_VoucherGroupByArgs['orderBy'] }
        : { orderBy?: Order_applies_VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Order_applies_VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_applies_VoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_applies_Voucher model
   */
  readonly fields: Order_applies_VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_applies_Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_applies_VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends VoucherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoucherDefaultArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order_applies_Voucher model
   */ 
  interface Order_applies_VoucherFieldRefs {
    readonly order_id: FieldRef<"Order_applies_Voucher", 'Int'>
    readonly voucher_id: FieldRef<"Order_applies_Voucher", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order_applies_Voucher findUnique
   */
  export type Order_applies_VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Order_applies_Voucher to fetch.
     */
    where: Order_applies_VoucherWhereUniqueInput
  }

  /**
   * Order_applies_Voucher findUniqueOrThrow
   */
  export type Order_applies_VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Order_applies_Voucher to fetch.
     */
    where: Order_applies_VoucherWhereUniqueInput
  }

  /**
   * Order_applies_Voucher findFirst
   */
  export type Order_applies_VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Order_applies_Voucher to fetch.
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_applies_Vouchers to fetch.
     */
    orderBy?: Order_applies_VoucherOrderByWithRelationInput | Order_applies_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_applies_Vouchers.
     */
    cursor?: Order_applies_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_applies_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_applies_Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_applies_Vouchers.
     */
    distinct?: Order_applies_VoucherScalarFieldEnum | Order_applies_VoucherScalarFieldEnum[]
  }

  /**
   * Order_applies_Voucher findFirstOrThrow
   */
  export type Order_applies_VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Order_applies_Voucher to fetch.
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_applies_Vouchers to fetch.
     */
    orderBy?: Order_applies_VoucherOrderByWithRelationInput | Order_applies_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_applies_Vouchers.
     */
    cursor?: Order_applies_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_applies_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_applies_Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_applies_Vouchers.
     */
    distinct?: Order_applies_VoucherScalarFieldEnum | Order_applies_VoucherScalarFieldEnum[]
  }

  /**
   * Order_applies_Voucher findMany
   */
  export type Order_applies_VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Order_applies_Vouchers to fetch.
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_applies_Vouchers to fetch.
     */
    orderBy?: Order_applies_VoucherOrderByWithRelationInput | Order_applies_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_applies_Vouchers.
     */
    cursor?: Order_applies_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_applies_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_applies_Vouchers.
     */
    skip?: number
    distinct?: Order_applies_VoucherScalarFieldEnum | Order_applies_VoucherScalarFieldEnum[]
  }

  /**
   * Order_applies_Voucher create
   */
  export type Order_applies_VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_applies_Voucher.
     */
    data: XOR<Order_applies_VoucherCreateInput, Order_applies_VoucherUncheckedCreateInput>
  }

  /**
   * Order_applies_Voucher createMany
   */
  export type Order_applies_VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_applies_Vouchers.
     */
    data: Order_applies_VoucherCreateManyInput | Order_applies_VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order_applies_Voucher createManyAndReturn
   */
  export type Order_applies_VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Order_applies_Vouchers.
     */
    data: Order_applies_VoucherCreateManyInput | Order_applies_VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_applies_Voucher update
   */
  export type Order_applies_VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_applies_Voucher.
     */
    data: XOR<Order_applies_VoucherUpdateInput, Order_applies_VoucherUncheckedUpdateInput>
    /**
     * Choose, which Order_applies_Voucher to update.
     */
    where: Order_applies_VoucherWhereUniqueInput
  }

  /**
   * Order_applies_Voucher updateMany
   */
  export type Order_applies_VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_applies_Vouchers.
     */
    data: XOR<Order_applies_VoucherUpdateManyMutationInput, Order_applies_VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Order_applies_Vouchers to update
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * Limit how many Order_applies_Vouchers to update.
     */
    limit?: number
  }

  /**
   * Order_applies_Voucher updateManyAndReturn
   */
  export type Order_applies_VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Order_applies_Vouchers.
     */
    data: XOR<Order_applies_VoucherUpdateManyMutationInput, Order_applies_VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Order_applies_Vouchers to update
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * Limit how many Order_applies_Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_applies_Voucher upsert
   */
  export type Order_applies_VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_applies_Voucher to update in case it exists.
     */
    where: Order_applies_VoucherWhereUniqueInput
    /**
     * In case the Order_applies_Voucher found by the `where` argument doesn't exist, create a new Order_applies_Voucher with this data.
     */
    create: XOR<Order_applies_VoucherCreateInput, Order_applies_VoucherUncheckedCreateInput>
    /**
     * In case the Order_applies_Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_applies_VoucherUpdateInput, Order_applies_VoucherUncheckedUpdateInput>
  }

  /**
   * Order_applies_Voucher delete
   */
  export type Order_applies_VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
    /**
     * Filter which Order_applies_Voucher to delete.
     */
    where: Order_applies_VoucherWhereUniqueInput
  }

  /**
   * Order_applies_Voucher deleteMany
   */
  export type Order_applies_VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_applies_Vouchers to delete
     */
    where?: Order_applies_VoucherWhereInput
    /**
     * Limit how many Order_applies_Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Order_applies_Voucher without action
   */
  export type Order_applies_VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_applies_Voucher
     */
    select?: Order_applies_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_applies_Voucher
     */
    omit?: Order_applies_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_applies_VoucherInclude<ExtArgs> | null
  }


  /**
   * Model Order_have_Item
   */

  export type AggregateOrder_have_Item = {
    _count: Order_have_ItemCountAggregateOutputType | null
    _avg: Order_have_ItemAvgAggregateOutputType | null
    _sum: Order_have_ItemSumAggregateOutputType | null
    _min: Order_have_ItemMinAggregateOutputType | null
    _max: Order_have_ItemMaxAggregateOutputType | null
  }

  export type Order_have_ItemAvgAggregateOutputType = {
    order_id: number | null
    item_id: number | null
  }

  export type Order_have_ItemSumAggregateOutputType = {
    order_id: number | null
    item_id: number | null
  }

  export type Order_have_ItemMinAggregateOutputType = {
    order_id: number | null
    item_id: number | null
  }

  export type Order_have_ItemMaxAggregateOutputType = {
    order_id: number | null
    item_id: number | null
  }

  export type Order_have_ItemCountAggregateOutputType = {
    order_id: number
    item_id: number
    _all: number
  }


  export type Order_have_ItemAvgAggregateInputType = {
    order_id?: true
    item_id?: true
  }

  export type Order_have_ItemSumAggregateInputType = {
    order_id?: true
    item_id?: true
  }

  export type Order_have_ItemMinAggregateInputType = {
    order_id?: true
    item_id?: true
  }

  export type Order_have_ItemMaxAggregateInputType = {
    order_id?: true
    item_id?: true
  }

  export type Order_have_ItemCountAggregateInputType = {
    order_id?: true
    item_id?: true
    _all?: true
  }

  export type Order_have_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_have_Item to aggregate.
     */
    where?: Order_have_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_have_Items to fetch.
     */
    orderBy?: Order_have_ItemOrderByWithRelationInput | Order_have_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_have_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_have_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_have_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_have_Items
    **/
    _count?: true | Order_have_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_have_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_have_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_have_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_have_ItemMaxAggregateInputType
  }

  export type GetOrder_have_ItemAggregateType<T extends Order_have_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_have_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_have_Item[P]>
      : GetScalarType<T[P], AggregateOrder_have_Item[P]>
  }




  export type Order_have_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_have_ItemWhereInput
    orderBy?: Order_have_ItemOrderByWithAggregationInput | Order_have_ItemOrderByWithAggregationInput[]
    by: Order_have_ItemScalarFieldEnum[] | Order_have_ItemScalarFieldEnum
    having?: Order_have_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_have_ItemCountAggregateInputType | true
    _avg?: Order_have_ItemAvgAggregateInputType
    _sum?: Order_have_ItemSumAggregateInputType
    _min?: Order_have_ItemMinAggregateInputType
    _max?: Order_have_ItemMaxAggregateInputType
  }

  export type Order_have_ItemGroupByOutputType = {
    order_id: number
    item_id: number
    _count: Order_have_ItemCountAggregateOutputType | null
    _avg: Order_have_ItemAvgAggregateOutputType | null
    _sum: Order_have_ItemSumAggregateOutputType | null
    _min: Order_have_ItemMinAggregateOutputType | null
    _max: Order_have_ItemMaxAggregateOutputType | null
  }

  type GetOrder_have_ItemGroupByPayload<T extends Order_have_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_have_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_have_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_have_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_have_ItemGroupByOutputType[P]>
        }
      >
    >


  export type Order_have_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    item_id?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_have_Item"]>

  export type Order_have_ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    item_id?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_have_Item"]>

  export type Order_have_ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    item_id?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_have_Item"]>

  export type Order_have_ItemSelectScalar = {
    order_id?: boolean
    item_id?: boolean
  }

  export type Order_have_ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "item_id", ExtArgs["result"]["order_have_Item"]>
  export type Order_have_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type Order_have_ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type Order_have_ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $Order_have_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_have_Item"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      item_id: number
    }, ExtArgs["result"]["order_have_Item"]>
    composites: {}
  }

  type Order_have_ItemGetPayload<S extends boolean | null | undefined | Order_have_ItemDefaultArgs> = $Result.GetResult<Prisma.$Order_have_ItemPayload, S>

  type Order_have_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Order_have_ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_have_ItemCountAggregateInputType | true
    }

  export interface Order_have_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_have_Item'], meta: { name: 'Order_have_Item' } }
    /**
     * Find zero or one Order_have_Item that matches the filter.
     * @param {Order_have_ItemFindUniqueArgs} args - Arguments to find a Order_have_Item
     * @example
     * // Get one Order_have_Item
     * const order_have_Item = await prisma.order_have_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Order_have_ItemFindUniqueArgs>(args: SelectSubset<T, Order_have_ItemFindUniqueArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_have_Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Order_have_ItemFindUniqueOrThrowArgs} args - Arguments to find a Order_have_Item
     * @example
     * // Get one Order_have_Item
     * const order_have_Item = await prisma.order_have_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Order_have_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, Order_have_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_have_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemFindFirstArgs} args - Arguments to find a Order_have_Item
     * @example
     * // Get one Order_have_Item
     * const order_have_Item = await prisma.order_have_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Order_have_ItemFindFirstArgs>(args?: SelectSubset<T, Order_have_ItemFindFirstArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_have_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemFindFirstOrThrowArgs} args - Arguments to find a Order_have_Item
     * @example
     * // Get one Order_have_Item
     * const order_have_Item = await prisma.order_have_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Order_have_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, Order_have_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_have_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_have_Items
     * const order_have_Items = await prisma.order_have_Item.findMany()
     * 
     * // Get first 10 Order_have_Items
     * const order_have_Items = await prisma.order_have_Item.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const order_have_ItemWithOrder_idOnly = await prisma.order_have_Item.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends Order_have_ItemFindManyArgs>(args?: SelectSubset<T, Order_have_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_have_Item.
     * @param {Order_have_ItemCreateArgs} args - Arguments to create a Order_have_Item.
     * @example
     * // Create one Order_have_Item
     * const Order_have_Item = await prisma.order_have_Item.create({
     *   data: {
     *     // ... data to create a Order_have_Item
     *   }
     * })
     * 
     */
    create<T extends Order_have_ItemCreateArgs>(args: SelectSubset<T, Order_have_ItemCreateArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_have_Items.
     * @param {Order_have_ItemCreateManyArgs} args - Arguments to create many Order_have_Items.
     * @example
     * // Create many Order_have_Items
     * const order_have_Item = await prisma.order_have_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Order_have_ItemCreateManyArgs>(args?: SelectSubset<T, Order_have_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_have_Items and returns the data saved in the database.
     * @param {Order_have_ItemCreateManyAndReturnArgs} args - Arguments to create many Order_have_Items.
     * @example
     * // Create many Order_have_Items
     * const order_have_Item = await prisma.order_have_Item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_have_Items and only return the `order_id`
     * const order_have_ItemWithOrder_idOnly = await prisma.order_have_Item.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Order_have_ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, Order_have_ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_have_Item.
     * @param {Order_have_ItemDeleteArgs} args - Arguments to delete one Order_have_Item.
     * @example
     * // Delete one Order_have_Item
     * const Order_have_Item = await prisma.order_have_Item.delete({
     *   where: {
     *     // ... filter to delete one Order_have_Item
     *   }
     * })
     * 
     */
    delete<T extends Order_have_ItemDeleteArgs>(args: SelectSubset<T, Order_have_ItemDeleteArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_have_Item.
     * @param {Order_have_ItemUpdateArgs} args - Arguments to update one Order_have_Item.
     * @example
     * // Update one Order_have_Item
     * const order_have_Item = await prisma.order_have_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Order_have_ItemUpdateArgs>(args: SelectSubset<T, Order_have_ItemUpdateArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_have_Items.
     * @param {Order_have_ItemDeleteManyArgs} args - Arguments to filter Order_have_Items to delete.
     * @example
     * // Delete a few Order_have_Items
     * const { count } = await prisma.order_have_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Order_have_ItemDeleteManyArgs>(args?: SelectSubset<T, Order_have_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_have_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_have_Items
     * const order_have_Item = await prisma.order_have_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Order_have_ItemUpdateManyArgs>(args: SelectSubset<T, Order_have_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_have_Items and returns the data updated in the database.
     * @param {Order_have_ItemUpdateManyAndReturnArgs} args - Arguments to update many Order_have_Items.
     * @example
     * // Update many Order_have_Items
     * const order_have_Item = await prisma.order_have_Item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_have_Items and only return the `order_id`
     * const order_have_ItemWithOrder_idOnly = await prisma.order_have_Item.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends Order_have_ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, Order_have_ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_have_Item.
     * @param {Order_have_ItemUpsertArgs} args - Arguments to update or create a Order_have_Item.
     * @example
     * // Update or create a Order_have_Item
     * const order_have_Item = await prisma.order_have_Item.upsert({
     *   create: {
     *     // ... data to create a Order_have_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_have_Item we want to update
     *   }
     * })
     */
    upsert<T extends Order_have_ItemUpsertArgs>(args: SelectSubset<T, Order_have_ItemUpsertArgs<ExtArgs>>): Prisma__Order_have_ItemClient<$Result.GetResult<Prisma.$Order_have_ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_have_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemCountArgs} args - Arguments to filter Order_have_Items to count.
     * @example
     * // Count the number of Order_have_Items
     * const count = await prisma.order_have_Item.count({
     *   where: {
     *     // ... the filter for the Order_have_Items we want to count
     *   }
     * })
    **/
    count<T extends Order_have_ItemCountArgs>(
      args?: Subset<T, Order_have_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_have_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_have_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_have_ItemAggregateArgs>(args: Subset<T, Order_have_ItemAggregateArgs>): Prisma.PrismaPromise<GetOrder_have_ItemAggregateType<T>>

    /**
     * Group by Order_have_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_have_ItemGroupByArgs} args - Group by arguments.
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
      T extends Order_have_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_have_ItemGroupByArgs['orderBy'] }
        : { orderBy?: Order_have_ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Order_have_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_have_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_have_Item model
   */
  readonly fields: Order_have_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_have_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_have_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order_have_Item model
   */ 
  interface Order_have_ItemFieldRefs {
    readonly order_id: FieldRef<"Order_have_Item", 'Int'>
    readonly item_id: FieldRef<"Order_have_Item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order_have_Item findUnique
   */
  export type Order_have_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_have_Item to fetch.
     */
    where: Order_have_ItemWhereUniqueInput
  }

  /**
   * Order_have_Item findUniqueOrThrow
   */
  export type Order_have_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_have_Item to fetch.
     */
    where: Order_have_ItemWhereUniqueInput
  }

  /**
   * Order_have_Item findFirst
   */
  export type Order_have_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_have_Item to fetch.
     */
    where?: Order_have_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_have_Items to fetch.
     */
    orderBy?: Order_have_ItemOrderByWithRelationInput | Order_have_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_have_Items.
     */
    cursor?: Order_have_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_have_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_have_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_have_Items.
     */
    distinct?: Order_have_ItemScalarFieldEnum | Order_have_ItemScalarFieldEnum[]
  }

  /**
   * Order_have_Item findFirstOrThrow
   */
  export type Order_have_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_have_Item to fetch.
     */
    where?: Order_have_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_have_Items to fetch.
     */
    orderBy?: Order_have_ItemOrderByWithRelationInput | Order_have_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_have_Items.
     */
    cursor?: Order_have_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_have_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_have_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_have_Items.
     */
    distinct?: Order_have_ItemScalarFieldEnum | Order_have_ItemScalarFieldEnum[]
  }

  /**
   * Order_have_Item findMany
   */
  export type Order_have_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_have_Items to fetch.
     */
    where?: Order_have_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_have_Items to fetch.
     */
    orderBy?: Order_have_ItemOrderByWithRelationInput | Order_have_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_have_Items.
     */
    cursor?: Order_have_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_have_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_have_Items.
     */
    skip?: number
    distinct?: Order_have_ItemScalarFieldEnum | Order_have_ItemScalarFieldEnum[]
  }

  /**
   * Order_have_Item create
   */
  export type Order_have_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_have_Item.
     */
    data: XOR<Order_have_ItemCreateInput, Order_have_ItemUncheckedCreateInput>
  }

  /**
   * Order_have_Item createMany
   */
  export type Order_have_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_have_Items.
     */
    data: Order_have_ItemCreateManyInput | Order_have_ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order_have_Item createManyAndReturn
   */
  export type Order_have_ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Order_have_Items.
     */
    data: Order_have_ItemCreateManyInput | Order_have_ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_have_Item update
   */
  export type Order_have_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_have_Item.
     */
    data: XOR<Order_have_ItemUpdateInput, Order_have_ItemUncheckedUpdateInput>
    /**
     * Choose, which Order_have_Item to update.
     */
    where: Order_have_ItemWhereUniqueInput
  }

  /**
   * Order_have_Item updateMany
   */
  export type Order_have_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_have_Items.
     */
    data: XOR<Order_have_ItemUpdateManyMutationInput, Order_have_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Order_have_Items to update
     */
    where?: Order_have_ItemWhereInput
    /**
     * Limit how many Order_have_Items to update.
     */
    limit?: number
  }

  /**
   * Order_have_Item updateManyAndReturn
   */
  export type Order_have_ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * The data used to update Order_have_Items.
     */
    data: XOR<Order_have_ItemUpdateManyMutationInput, Order_have_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Order_have_Items to update
     */
    where?: Order_have_ItemWhereInput
    /**
     * Limit how many Order_have_Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_have_Item upsert
   */
  export type Order_have_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_have_Item to update in case it exists.
     */
    where: Order_have_ItemWhereUniqueInput
    /**
     * In case the Order_have_Item found by the `where` argument doesn't exist, create a new Order_have_Item with this data.
     */
    create: XOR<Order_have_ItemCreateInput, Order_have_ItemUncheckedCreateInput>
    /**
     * In case the Order_have_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_have_ItemUpdateInput, Order_have_ItemUncheckedUpdateInput>
  }

  /**
   * Order_have_Item delete
   */
  export type Order_have_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
    /**
     * Filter which Order_have_Item to delete.
     */
    where: Order_have_ItemWhereUniqueInput
  }

  /**
   * Order_have_Item deleteMany
   */
  export type Order_have_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_have_Items to delete
     */
    where?: Order_have_ItemWhereInput
    /**
     * Limit how many Order_have_Items to delete.
     */
    limit?: number
  }

  /**
   * Order_have_Item without action
   */
  export type Order_have_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_have_Item
     */
    select?: Order_have_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_have_Item
     */
    omit?: Order_have_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_have_ItemInclude<ExtArgs> | null
  }


  /**
   * Model Customer_have_Voucher
   */

  export type AggregateCustomer_have_Voucher = {
    _count: Customer_have_VoucherCountAggregateOutputType | null
    _avg: Customer_have_VoucherAvgAggregateOutputType | null
    _sum: Customer_have_VoucherSumAggregateOutputType | null
    _min: Customer_have_VoucherMinAggregateOutputType | null
    _max: Customer_have_VoucherMaxAggregateOutputType | null
  }

  export type Customer_have_VoucherAvgAggregateOutputType = {
    customer_id: number | null
    voucher_id: number | null
  }

  export type Customer_have_VoucherSumAggregateOutputType = {
    customer_id: number | null
    voucher_id: number | null
  }

  export type Customer_have_VoucherMinAggregateOutputType = {
    customer_id: number | null
    voucher_id: number | null
  }

  export type Customer_have_VoucherMaxAggregateOutputType = {
    customer_id: number | null
    voucher_id: number | null
  }

  export type Customer_have_VoucherCountAggregateOutputType = {
    customer_id: number
    voucher_id: number
    _all: number
  }


  export type Customer_have_VoucherAvgAggregateInputType = {
    customer_id?: true
    voucher_id?: true
  }

  export type Customer_have_VoucherSumAggregateInputType = {
    customer_id?: true
    voucher_id?: true
  }

  export type Customer_have_VoucherMinAggregateInputType = {
    customer_id?: true
    voucher_id?: true
  }

  export type Customer_have_VoucherMaxAggregateInputType = {
    customer_id?: true
    voucher_id?: true
  }

  export type Customer_have_VoucherCountAggregateInputType = {
    customer_id?: true
    voucher_id?: true
    _all?: true
  }

  export type Customer_have_VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer_have_Voucher to aggregate.
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_have_Vouchers to fetch.
     */
    orderBy?: Customer_have_VoucherOrderByWithRelationInput | Customer_have_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Customer_have_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_have_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_have_Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customer_have_Vouchers
    **/
    _count?: true | Customer_have_VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customer_have_VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customer_have_VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_have_VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_have_VoucherMaxAggregateInputType
  }

  export type GetCustomer_have_VoucherAggregateType<T extends Customer_have_VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_have_Voucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_have_Voucher[P]>
      : GetScalarType<T[P], AggregateCustomer_have_Voucher[P]>
  }




  export type Customer_have_VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Customer_have_VoucherWhereInput
    orderBy?: Customer_have_VoucherOrderByWithAggregationInput | Customer_have_VoucherOrderByWithAggregationInput[]
    by: Customer_have_VoucherScalarFieldEnum[] | Customer_have_VoucherScalarFieldEnum
    having?: Customer_have_VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_have_VoucherCountAggregateInputType | true
    _avg?: Customer_have_VoucherAvgAggregateInputType
    _sum?: Customer_have_VoucherSumAggregateInputType
    _min?: Customer_have_VoucherMinAggregateInputType
    _max?: Customer_have_VoucherMaxAggregateInputType
  }

  export type Customer_have_VoucherGroupByOutputType = {
    customer_id: number
    voucher_id: number
    _count: Customer_have_VoucherCountAggregateOutputType | null
    _avg: Customer_have_VoucherAvgAggregateOutputType | null
    _sum: Customer_have_VoucherSumAggregateOutputType | null
    _min: Customer_have_VoucherMinAggregateOutputType | null
    _max: Customer_have_VoucherMaxAggregateOutputType | null
  }

  type GetCustomer_have_VoucherGroupByPayload<T extends Customer_have_VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_have_VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_have_VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_have_VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_have_VoucherGroupByOutputType[P]>
        }
      >
    >


  export type Customer_have_VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    voucher_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_have_Voucher"]>

  export type Customer_have_VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    voucher_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_have_Voucher"]>

  export type Customer_have_VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    voucher_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_have_Voucher"]>

  export type Customer_have_VoucherSelectScalar = {
    customer_id?: boolean
    voucher_id?: boolean
  }

  export type Customer_have_VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "voucher_id", ExtArgs["result"]["customer_have_Voucher"]>
  export type Customer_have_VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type Customer_have_VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type Customer_have_VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }

  export type $Customer_have_VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer_have_Voucher"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      voucher_id: number
    }, ExtArgs["result"]["customer_have_Voucher"]>
    composites: {}
  }

  type Customer_have_VoucherGetPayload<S extends boolean | null | undefined | Customer_have_VoucherDefaultArgs> = $Result.GetResult<Prisma.$Customer_have_VoucherPayload, S>

  type Customer_have_VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Customer_have_VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Customer_have_VoucherCountAggregateInputType | true
    }

  export interface Customer_have_VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer_have_Voucher'], meta: { name: 'Customer_have_Voucher' } }
    /**
     * Find zero or one Customer_have_Voucher that matches the filter.
     * @param {Customer_have_VoucherFindUniqueArgs} args - Arguments to find a Customer_have_Voucher
     * @example
     * // Get one Customer_have_Voucher
     * const customer_have_Voucher = await prisma.customer_have_Voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Customer_have_VoucherFindUniqueArgs>(args: SelectSubset<T, Customer_have_VoucherFindUniqueArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer_have_Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Customer_have_VoucherFindUniqueOrThrowArgs} args - Arguments to find a Customer_have_Voucher
     * @example
     * // Get one Customer_have_Voucher
     * const customer_have_Voucher = await prisma.customer_have_Voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Customer_have_VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, Customer_have_VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_have_Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherFindFirstArgs} args - Arguments to find a Customer_have_Voucher
     * @example
     * // Get one Customer_have_Voucher
     * const customer_have_Voucher = await prisma.customer_have_Voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Customer_have_VoucherFindFirstArgs>(args?: SelectSubset<T, Customer_have_VoucherFindFirstArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_have_Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherFindFirstOrThrowArgs} args - Arguments to find a Customer_have_Voucher
     * @example
     * // Get one Customer_have_Voucher
     * const customer_have_Voucher = await prisma.customer_have_Voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Customer_have_VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, Customer_have_VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customer_have_Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_have_Vouchers
     * const customer_have_Vouchers = await prisma.customer_have_Voucher.findMany()
     * 
     * // Get first 10 Customer_have_Vouchers
     * const customer_have_Vouchers = await prisma.customer_have_Voucher.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customer_have_VoucherWithCustomer_idOnly = await prisma.customer_have_Voucher.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends Customer_have_VoucherFindManyArgs>(args?: SelectSubset<T, Customer_have_VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer_have_Voucher.
     * @param {Customer_have_VoucherCreateArgs} args - Arguments to create a Customer_have_Voucher.
     * @example
     * // Create one Customer_have_Voucher
     * const Customer_have_Voucher = await prisma.customer_have_Voucher.create({
     *   data: {
     *     // ... data to create a Customer_have_Voucher
     *   }
     * })
     * 
     */
    create<T extends Customer_have_VoucherCreateArgs>(args: SelectSubset<T, Customer_have_VoucherCreateArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customer_have_Vouchers.
     * @param {Customer_have_VoucherCreateManyArgs} args - Arguments to create many Customer_have_Vouchers.
     * @example
     * // Create many Customer_have_Vouchers
     * const customer_have_Voucher = await prisma.customer_have_Voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Customer_have_VoucherCreateManyArgs>(args?: SelectSubset<T, Customer_have_VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customer_have_Vouchers and returns the data saved in the database.
     * @param {Customer_have_VoucherCreateManyAndReturnArgs} args - Arguments to create many Customer_have_Vouchers.
     * @example
     * // Create many Customer_have_Vouchers
     * const customer_have_Voucher = await prisma.customer_have_Voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customer_have_Vouchers and only return the `customer_id`
     * const customer_have_VoucherWithCustomer_idOnly = await prisma.customer_have_Voucher.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Customer_have_VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, Customer_have_VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer_have_Voucher.
     * @param {Customer_have_VoucherDeleteArgs} args - Arguments to delete one Customer_have_Voucher.
     * @example
     * // Delete one Customer_have_Voucher
     * const Customer_have_Voucher = await prisma.customer_have_Voucher.delete({
     *   where: {
     *     // ... filter to delete one Customer_have_Voucher
     *   }
     * })
     * 
     */
    delete<T extends Customer_have_VoucherDeleteArgs>(args: SelectSubset<T, Customer_have_VoucherDeleteArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer_have_Voucher.
     * @param {Customer_have_VoucherUpdateArgs} args - Arguments to update one Customer_have_Voucher.
     * @example
     * // Update one Customer_have_Voucher
     * const customer_have_Voucher = await prisma.customer_have_Voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Customer_have_VoucherUpdateArgs>(args: SelectSubset<T, Customer_have_VoucherUpdateArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customer_have_Vouchers.
     * @param {Customer_have_VoucherDeleteManyArgs} args - Arguments to filter Customer_have_Vouchers to delete.
     * @example
     * // Delete a few Customer_have_Vouchers
     * const { count } = await prisma.customer_have_Voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Customer_have_VoucherDeleteManyArgs>(args?: SelectSubset<T, Customer_have_VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_have_Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_have_Vouchers
     * const customer_have_Voucher = await prisma.customer_have_Voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Customer_have_VoucherUpdateManyArgs>(args: SelectSubset<T, Customer_have_VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_have_Vouchers and returns the data updated in the database.
     * @param {Customer_have_VoucherUpdateManyAndReturnArgs} args - Arguments to update many Customer_have_Vouchers.
     * @example
     * // Update many Customer_have_Vouchers
     * const customer_have_Voucher = await prisma.customer_have_Voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customer_have_Vouchers and only return the `customer_id`
     * const customer_have_VoucherWithCustomer_idOnly = await prisma.customer_have_Voucher.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends Customer_have_VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, Customer_have_VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer_have_Voucher.
     * @param {Customer_have_VoucherUpsertArgs} args - Arguments to update or create a Customer_have_Voucher.
     * @example
     * // Update or create a Customer_have_Voucher
     * const customer_have_Voucher = await prisma.customer_have_Voucher.upsert({
     *   create: {
     *     // ... data to create a Customer_have_Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_have_Voucher we want to update
     *   }
     * })
     */
    upsert<T extends Customer_have_VoucherUpsertArgs>(args: SelectSubset<T, Customer_have_VoucherUpsertArgs<ExtArgs>>): Prisma__Customer_have_VoucherClient<$Result.GetResult<Prisma.$Customer_have_VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customer_have_Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherCountArgs} args - Arguments to filter Customer_have_Vouchers to count.
     * @example
     * // Count the number of Customer_have_Vouchers
     * const count = await prisma.customer_have_Voucher.count({
     *   where: {
     *     // ... the filter for the Customer_have_Vouchers we want to count
     *   }
     * })
    **/
    count<T extends Customer_have_VoucherCountArgs>(
      args?: Subset<T, Customer_have_VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_have_VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_have_Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Customer_have_VoucherAggregateArgs>(args: Subset<T, Customer_have_VoucherAggregateArgs>): Prisma.PrismaPromise<GetCustomer_have_VoucherAggregateType<T>>

    /**
     * Group by Customer_have_Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_have_VoucherGroupByArgs} args - Group by arguments.
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
      T extends Customer_have_VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Customer_have_VoucherGroupByArgs['orderBy'] }
        : { orderBy?: Customer_have_VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Customer_have_VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_have_VoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer_have_Voucher model
   */
  readonly fields: Customer_have_VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer_have_Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Customer_have_VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends VoucherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoucherDefaultArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Customer_have_Voucher model
   */ 
  interface Customer_have_VoucherFieldRefs {
    readonly customer_id: FieldRef<"Customer_have_Voucher", 'Int'>
    readonly voucher_id: FieldRef<"Customer_have_Voucher", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer_have_Voucher findUnique
   */
  export type Customer_have_VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Customer_have_Voucher to fetch.
     */
    where: Customer_have_VoucherWhereUniqueInput
  }

  /**
   * Customer_have_Voucher findUniqueOrThrow
   */
  export type Customer_have_VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Customer_have_Voucher to fetch.
     */
    where: Customer_have_VoucherWhereUniqueInput
  }

  /**
   * Customer_have_Voucher findFirst
   */
  export type Customer_have_VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Customer_have_Voucher to fetch.
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_have_Vouchers to fetch.
     */
    orderBy?: Customer_have_VoucherOrderByWithRelationInput | Customer_have_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_have_Vouchers.
     */
    cursor?: Customer_have_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_have_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_have_Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_have_Vouchers.
     */
    distinct?: Customer_have_VoucherScalarFieldEnum | Customer_have_VoucherScalarFieldEnum[]
  }

  /**
   * Customer_have_Voucher findFirstOrThrow
   */
  export type Customer_have_VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Customer_have_Voucher to fetch.
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_have_Vouchers to fetch.
     */
    orderBy?: Customer_have_VoucherOrderByWithRelationInput | Customer_have_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_have_Vouchers.
     */
    cursor?: Customer_have_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_have_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_have_Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_have_Vouchers.
     */
    distinct?: Customer_have_VoucherScalarFieldEnum | Customer_have_VoucherScalarFieldEnum[]
  }

  /**
   * Customer_have_Voucher findMany
   */
  export type Customer_have_VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Customer_have_Vouchers to fetch.
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_have_Vouchers to fetch.
     */
    orderBy?: Customer_have_VoucherOrderByWithRelationInput | Customer_have_VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customer_have_Vouchers.
     */
    cursor?: Customer_have_VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_have_Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_have_Vouchers.
     */
    skip?: number
    distinct?: Customer_have_VoucherScalarFieldEnum | Customer_have_VoucherScalarFieldEnum[]
  }

  /**
   * Customer_have_Voucher create
   */
  export type Customer_have_VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer_have_Voucher.
     */
    data: XOR<Customer_have_VoucherCreateInput, Customer_have_VoucherUncheckedCreateInput>
  }

  /**
   * Customer_have_Voucher createMany
   */
  export type Customer_have_VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customer_have_Vouchers.
     */
    data: Customer_have_VoucherCreateManyInput | Customer_have_VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer_have_Voucher createManyAndReturn
   */
  export type Customer_have_VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Customer_have_Vouchers.
     */
    data: Customer_have_VoucherCreateManyInput | Customer_have_VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer_have_Voucher update
   */
  export type Customer_have_VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer_have_Voucher.
     */
    data: XOR<Customer_have_VoucherUpdateInput, Customer_have_VoucherUncheckedUpdateInput>
    /**
     * Choose, which Customer_have_Voucher to update.
     */
    where: Customer_have_VoucherWhereUniqueInput
  }

  /**
   * Customer_have_Voucher updateMany
   */
  export type Customer_have_VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customer_have_Vouchers.
     */
    data: XOR<Customer_have_VoucherUpdateManyMutationInput, Customer_have_VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Customer_have_Vouchers to update
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * Limit how many Customer_have_Vouchers to update.
     */
    limit?: number
  }

  /**
   * Customer_have_Voucher updateManyAndReturn
   */
  export type Customer_have_VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Customer_have_Vouchers.
     */
    data: XOR<Customer_have_VoucherUpdateManyMutationInput, Customer_have_VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Customer_have_Vouchers to update
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * Limit how many Customer_have_Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer_have_Voucher upsert
   */
  export type Customer_have_VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer_have_Voucher to update in case it exists.
     */
    where: Customer_have_VoucherWhereUniqueInput
    /**
     * In case the Customer_have_Voucher found by the `where` argument doesn't exist, create a new Customer_have_Voucher with this data.
     */
    create: XOR<Customer_have_VoucherCreateInput, Customer_have_VoucherUncheckedCreateInput>
    /**
     * In case the Customer_have_Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Customer_have_VoucherUpdateInput, Customer_have_VoucherUncheckedUpdateInput>
  }

  /**
   * Customer_have_Voucher delete
   */
  export type Customer_have_VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
    /**
     * Filter which Customer_have_Voucher to delete.
     */
    where: Customer_have_VoucherWhereUniqueInput
  }

  /**
   * Customer_have_Voucher deleteMany
   */
  export type Customer_have_VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer_have_Vouchers to delete
     */
    where?: Customer_have_VoucherWhereInput
    /**
     * Limit how many Customer_have_Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Customer_have_Voucher without action
   */
  export type Customer_have_VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_have_Voucher
     */
    select?: Customer_have_VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_have_Voucher
     */
    omit?: Customer_have_VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_have_VoucherInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    address: 'address'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const DishScalarFieldEnum: {
    id: 'id',
    dish_type: 'dish_type',
    price: 'price'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    table_type: 'table_type'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    order_date: 'order_date',
    total_price: 'total_price',
    customer_id: 'customer_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    denomination: 'denomination',
    issue_date: 'issue_date',
    expiration_date: 'expiration_date'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const Order_applies_VoucherScalarFieldEnum: {
    order_id: 'order_id',
    voucher_id: 'voucher_id'
  };

  export type Order_applies_VoucherScalarFieldEnum = (typeof Order_applies_VoucherScalarFieldEnum)[keyof typeof Order_applies_VoucherScalarFieldEnum]


  export const Order_have_ItemScalarFieldEnum: {
    order_id: 'order_id',
    item_id: 'item_id'
  };

  export type Order_have_ItemScalarFieldEnum = (typeof Order_have_ItemScalarFieldEnum)[keyof typeof Order_have_ItemScalarFieldEnum]


  export const Customer_have_VoucherScalarFieldEnum: {
    customer_id: 'customer_id',
    voucher_id: 'voucher_id'
  };

  export type Customer_have_VoucherScalarFieldEnum = (typeof Customer_have_VoucherScalarFieldEnum)[keyof typeof Customer_have_VoucherScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DishCategory'
   */
  export type EnumDishCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishCategory'>
    


  /**
   * Reference to a field of type 'DishCategory[]'
   */
  export type ListEnumDishCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishCategory[]'>
    


  /**
   * Reference to a field of type 'TableType'
   */
  export type EnumTableTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableType'>
    


  /**
   * Reference to a field of type 'TableType[]'
   */
  export type ListEnumTableTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    phone_number?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    customer_have_voucher?: Customer_have_VoucherListRelationFilter
    order?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    customer_have_voucher?: Customer_have_VoucherOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    phone_number?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    customer_have_voucher?: Customer_have_VoucherListRelationFilter
    order?: OrderListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    first_name?: StringWithAggregatesFilter<"Customer"> | string
    last_name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringWithAggregatesFilter<"Customer"> | string
    phone_number?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    dish?: XOR<DishNullableScalarRelationFilter, DishWhereInput> | null
    order_have_item?: Order_have_ItemListRelationFilter
    table?: XOR<TableNullableScalarRelationFilter, TableWhereInput> | null
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    dish?: DishOrderByWithRelationInput
    order_have_item?: Order_have_ItemOrderByRelationAggregateInput
    table?: TableOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    dish?: XOR<DishNullableScalarRelationFilter, DishWhereInput> | null
    order_have_item?: Order_have_ItemListRelationFilter
    table?: XOR<TableNullableScalarRelationFilter, TableWhereInput> | null
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
  }

  export type DishWhereInput = {
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    id?: IntFilter<"Dish"> | number
    dish_type?: EnumDishCategoryFilter<"Dish"> | $Enums.DishCategory
    price?: IntFilter<"Dish"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    dish_type?: SortOrder
    price?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    dish_type?: EnumDishCategoryFilter<"Dish"> | $Enums.DishCategory
    price?: IntFilter<"Dish"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    dish_type?: SortOrder
    price?: SortOrder
    _count?: DishCountOrderByAggregateInput
    _avg?: DishAvgOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
    _sum?: DishSumOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    OR?: DishScalarWhereWithAggregatesInput[]
    NOT?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dish"> | number
    dish_type?: EnumDishCategoryWithAggregatesFilter<"Dish"> | $Enums.DishCategory
    price?: IntWithAggregatesFilter<"Dish"> | number
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: IntFilter<"Table"> | number
    table_type?: EnumTableTypeFilter<"Table"> | $Enums.TableType
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    table_type?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    table_type?: EnumTableTypeFilter<"Table"> | $Enums.TableType
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    table_type?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Table"> | number
    table_type?: EnumTableTypeWithAggregatesFilter<"Table"> | $Enums.TableType
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    order_date?: DateTimeFilter<"Order"> | Date | string
    total_price?: IntFilter<"Order"> | number
    customer_id?: IntFilter<"Order"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    order_applies_voucher?: Order_applies_VoucherListRelationFilter
    order_have_item?: Order_have_ItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    order_applies_voucher?: Order_applies_VoucherOrderByRelationAggregateInput
    order_have_item?: Order_have_ItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    order_date?: DateTimeFilter<"Order"> | Date | string
    total_price?: IntFilter<"Order"> | number
    customer_id?: IntFilter<"Order"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    order_applies_voucher?: Order_applies_VoucherListRelationFilter
    order_have_item?: Order_have_ItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    order_date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    total_price?: IntWithAggregatesFilter<"Order"> | number
    customer_id?: IntWithAggregatesFilter<"Order"> | number
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: IntFilter<"Voucher"> | number
    denomination?: StringFilter<"Voucher"> | string
    issue_date?: DateTimeFilter<"Voucher"> | Date | string
    expiration_date?: IntFilter<"Voucher"> | number
    customer_have_voucher?: Customer_have_VoucherListRelationFilter
    order_applies_voucher?: Order_applies_VoucherListRelationFilter
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    denomination?: SortOrder
    issue_date?: SortOrder
    expiration_date?: SortOrder
    customer_have_voucher?: Customer_have_VoucherOrderByRelationAggregateInput
    order_applies_voucher?: Order_applies_VoucherOrderByRelationAggregateInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    denomination?: StringFilter<"Voucher"> | string
    issue_date?: DateTimeFilter<"Voucher"> | Date | string
    expiration_date?: IntFilter<"Voucher"> | number
    customer_have_voucher?: Customer_have_VoucherListRelationFilter
    order_applies_voucher?: Order_applies_VoucherListRelationFilter
  }, "id">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    denomination?: SortOrder
    issue_date?: SortOrder
    expiration_date?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Voucher"> | number
    denomination?: StringWithAggregatesFilter<"Voucher"> | string
    issue_date?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    expiration_date?: IntWithAggregatesFilter<"Voucher"> | number
  }

  export type Order_applies_VoucherWhereInput = {
    AND?: Order_applies_VoucherWhereInput | Order_applies_VoucherWhereInput[]
    OR?: Order_applies_VoucherWhereInput[]
    NOT?: Order_applies_VoucherWhereInput | Order_applies_VoucherWhereInput[]
    order_id?: IntFilter<"Order_applies_Voucher"> | number
    voucher_id?: IntFilter<"Order_applies_Voucher"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }

  export type Order_applies_VoucherOrderByWithRelationInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
    order?: OrderOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
  }

  export type Order_applies_VoucherWhereUniqueInput = Prisma.AtLeast<{
    order_id_voucher_id?: Order_applies_VoucherOrder_idVoucher_idCompoundUniqueInput
    AND?: Order_applies_VoucherWhereInput | Order_applies_VoucherWhereInput[]
    OR?: Order_applies_VoucherWhereInput[]
    NOT?: Order_applies_VoucherWhereInput | Order_applies_VoucherWhereInput[]
    order_id?: IntFilter<"Order_applies_Voucher"> | number
    voucher_id?: IntFilter<"Order_applies_Voucher"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }, "order_id_voucher_id">

  export type Order_applies_VoucherOrderByWithAggregationInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
    _count?: Order_applies_VoucherCountOrderByAggregateInput
    _avg?: Order_applies_VoucherAvgOrderByAggregateInput
    _max?: Order_applies_VoucherMaxOrderByAggregateInput
    _min?: Order_applies_VoucherMinOrderByAggregateInput
    _sum?: Order_applies_VoucherSumOrderByAggregateInput
  }

  export type Order_applies_VoucherScalarWhereWithAggregatesInput = {
    AND?: Order_applies_VoucherScalarWhereWithAggregatesInput | Order_applies_VoucherScalarWhereWithAggregatesInput[]
    OR?: Order_applies_VoucherScalarWhereWithAggregatesInput[]
    NOT?: Order_applies_VoucherScalarWhereWithAggregatesInput | Order_applies_VoucherScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Order_applies_Voucher"> | number
    voucher_id?: IntWithAggregatesFilter<"Order_applies_Voucher"> | number
  }

  export type Order_have_ItemWhereInput = {
    AND?: Order_have_ItemWhereInput | Order_have_ItemWhereInput[]
    OR?: Order_have_ItemWhereInput[]
    NOT?: Order_have_ItemWhereInput | Order_have_ItemWhereInput[]
    order_id?: IntFilter<"Order_have_Item"> | number
    item_id?: IntFilter<"Order_have_Item"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type Order_have_ItemOrderByWithRelationInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    item?: ItemOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type Order_have_ItemWhereUniqueInput = Prisma.AtLeast<{
    order_id_item_id?: Order_have_ItemOrder_idItem_idCompoundUniqueInput
    AND?: Order_have_ItemWhereInput | Order_have_ItemWhereInput[]
    OR?: Order_have_ItemWhereInput[]
    NOT?: Order_have_ItemWhereInput | Order_have_ItemWhereInput[]
    order_id?: IntFilter<"Order_have_Item"> | number
    item_id?: IntFilter<"Order_have_Item"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "order_id_item_id">

  export type Order_have_ItemOrderByWithAggregationInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    _count?: Order_have_ItemCountOrderByAggregateInput
    _avg?: Order_have_ItemAvgOrderByAggregateInput
    _max?: Order_have_ItemMaxOrderByAggregateInput
    _min?: Order_have_ItemMinOrderByAggregateInput
    _sum?: Order_have_ItemSumOrderByAggregateInput
  }

  export type Order_have_ItemScalarWhereWithAggregatesInput = {
    AND?: Order_have_ItemScalarWhereWithAggregatesInput | Order_have_ItemScalarWhereWithAggregatesInput[]
    OR?: Order_have_ItemScalarWhereWithAggregatesInput[]
    NOT?: Order_have_ItemScalarWhereWithAggregatesInput | Order_have_ItemScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Order_have_Item"> | number
    item_id?: IntWithAggregatesFilter<"Order_have_Item"> | number
  }

  export type Customer_have_VoucherWhereInput = {
    AND?: Customer_have_VoucherWhereInput | Customer_have_VoucherWhereInput[]
    OR?: Customer_have_VoucherWhereInput[]
    NOT?: Customer_have_VoucherWhereInput | Customer_have_VoucherWhereInput[]
    customer_id?: IntFilter<"Customer_have_Voucher"> | number
    voucher_id?: IntFilter<"Customer_have_Voucher"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }

  export type Customer_have_VoucherOrderByWithRelationInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
  }

  export type Customer_have_VoucherWhereUniqueInput = Prisma.AtLeast<{
    customer_id_voucher_id?: Customer_have_VoucherCustomer_idVoucher_idCompoundUniqueInput
    AND?: Customer_have_VoucherWhereInput | Customer_have_VoucherWhereInput[]
    OR?: Customer_have_VoucherWhereInput[]
    NOT?: Customer_have_VoucherWhereInput | Customer_have_VoucherWhereInput[]
    customer_id?: IntFilter<"Customer_have_Voucher"> | number
    voucher_id?: IntFilter<"Customer_have_Voucher"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }, "customer_id_voucher_id">

  export type Customer_have_VoucherOrderByWithAggregationInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
    _count?: Customer_have_VoucherCountOrderByAggregateInput
    _avg?: Customer_have_VoucherAvgOrderByAggregateInput
    _max?: Customer_have_VoucherMaxOrderByAggregateInput
    _min?: Customer_have_VoucherMinOrderByAggregateInput
    _sum?: Customer_have_VoucherSumOrderByAggregateInput
  }

  export type Customer_have_VoucherScalarWhereWithAggregatesInput = {
    AND?: Customer_have_VoucherScalarWhereWithAggregatesInput | Customer_have_VoucherScalarWhereWithAggregatesInput[]
    OR?: Customer_have_VoucherScalarWhereWithAggregatesInput[]
    NOT?: Customer_have_VoucherScalarWhereWithAggregatesInput | Customer_have_VoucherScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"Customer_have_Voucher"> | number
    voucher_id?: IntWithAggregatesFilter<"Customer_have_Voucher"> | number
  }

  export type CustomerCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    customer_have_voucher?: Customer_have_VoucherCreateNestedManyWithoutCustomerInput
    order?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    customer_have_voucher?: Customer_have_VoucherUncheckedCreateNestedManyWithoutCustomerInput
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    customer_have_voucher?: Customer_have_VoucherUpdateManyWithoutCustomerNestedInput
    order?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    customer_have_voucher?: Customer_have_VoucherUncheckedUpdateManyWithoutCustomerNestedInput
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
  }

  export type CustomerUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    dish?: DishCreateNestedOneWithoutItemInput
    order_have_item?: Order_have_ItemCreateNestedManyWithoutItemInput
    table?: TableCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    dish?: DishUncheckedCreateNestedOneWithoutItemInput
    order_have_item?: Order_have_ItemUncheckedCreateNestedManyWithoutItemInput
    table?: TableUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemUpdateInput = {
    dish?: DishUpdateOneWithoutItemNestedInput
    order_have_item?: Order_have_ItemUpdateManyWithoutItemNestedInput
    table?: TableUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dish?: DishUncheckedUpdateOneWithoutItemNestedInput
    order_have_item?: Order_have_ItemUncheckedUpdateManyWithoutItemNestedInput
    table?: TableUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
  }

  export type ItemUpdateManyMutationInput = {

  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type DishCreateInput = {
    dish_type: $Enums.DishCategory
    price: number
    item: ItemCreateNestedOneWithoutDishInput
  }

  export type DishUncheckedCreateInput = {
    id: number
    dish_type: $Enums.DishCategory
    price: number
  }

  export type DishUpdateInput = {
    dish_type?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    price?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutDishNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dish_type?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    price?: IntFieldUpdateOperationsInput | number
  }

  export type DishCreateManyInput = {
    id: number
    dish_type: $Enums.DishCategory
    price: number
  }

  export type DishUpdateManyMutationInput = {
    dish_type?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    price?: IntFieldUpdateOperationsInput | number
  }

  export type DishUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dish_type?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TableCreateInput = {
    table_type: $Enums.TableType
    item: ItemCreateNestedOneWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id: number
    table_type: $Enums.TableType
  }

  export type TableUpdateInput = {
    table_type?: EnumTableTypeFieldUpdateOperationsInput | $Enums.TableType
    item?: ItemUpdateOneRequiredWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_type?: EnumTableTypeFieldUpdateOperationsInput | $Enums.TableType
  }

  export type TableCreateManyInput = {
    id: number
    table_type: $Enums.TableType
  }

  export type TableUpdateManyMutationInput = {
    table_type?: EnumTableTypeFieldUpdateOperationsInput | $Enums.TableType
  }

  export type TableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_type?: EnumTableTypeFieldUpdateOperationsInput | $Enums.TableType
  }

  export type OrderCreateInput = {
    order_date?: Date | string
    total_price?: number
    customer: CustomerCreateNestedOneWithoutOrderInput
    order_applies_voucher?: Order_applies_VoucherCreateNestedManyWithoutOrderInput
    order_have_item?: Order_have_ItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    order_date?: Date | string
    total_price?: number
    customer_id: number
    order_applies_voucher?: Order_applies_VoucherUncheckedCreateNestedManyWithoutOrderInput
    order_have_item?: Order_have_ItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput
    order_applies_voucher?: Order_applies_VoucherUpdateManyWithoutOrderNestedInput
    order_have_item?: Order_have_ItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    order_applies_voucher?: Order_applies_VoucherUncheckedUpdateManyWithoutOrderNestedInput
    order_have_item?: Order_have_ItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    order_date?: Date | string
    total_price?: number
    customer_id: number
  }

  export type OrderUpdateManyMutationInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type VoucherCreateInput = {
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
    customer_have_voucher?: Customer_have_VoucherCreateNestedManyWithoutVoucherInput
    order_applies_voucher?: Order_applies_VoucherCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: number
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
    customer_have_voucher?: Customer_have_VoucherUncheckedCreateNestedManyWithoutVoucherInput
    order_applies_voucher?: Order_applies_VoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUpdateInput = {
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
    customer_have_voucher?: Customer_have_VoucherUpdateManyWithoutVoucherNestedInput
    order_applies_voucher?: Order_applies_VoucherUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
    customer_have_voucher?: Customer_have_VoucherUncheckedUpdateManyWithoutVoucherNestedInput
    order_applies_voucher?: Order_applies_VoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherCreateManyInput = {
    id?: number
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
  }

  export type VoucherUpdateManyMutationInput = {
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
  }

  export type Order_applies_VoucherCreateInput = {
    order: OrderCreateNestedOneWithoutOrder_applies_voucherInput
    voucher: VoucherCreateNestedOneWithoutOrder_applies_voucherInput
  }

  export type Order_applies_VoucherUncheckedCreateInput = {
    order_id: number
    voucher_id: number
  }

  export type Order_applies_VoucherUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutOrder_applies_voucherNestedInput
    voucher?: VoucherUpdateOneRequiredWithoutOrder_applies_voucherNestedInput
  }

  export type Order_applies_VoucherUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_applies_VoucherCreateManyInput = {
    order_id: number
    voucher_id: number
  }

  export type Order_applies_VoucherUpdateManyMutationInput = {

  }

  export type Order_applies_VoucherUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemCreateInput = {
    item: ItemCreateNestedOneWithoutOrder_have_itemInput
    order: OrderCreateNestedOneWithoutOrder_have_itemInput
  }

  export type Order_have_ItemUncheckedCreateInput = {
    order_id: number
    item_id: number
  }

  export type Order_have_ItemUpdateInput = {
    item?: ItemUpdateOneRequiredWithoutOrder_have_itemNestedInput
    order?: OrderUpdateOneRequiredWithoutOrder_have_itemNestedInput
  }

  export type Order_have_ItemUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemCreateManyInput = {
    order_id: number
    item_id: number
  }

  export type Order_have_ItemUpdateManyMutationInput = {

  }

  export type Order_have_ItemUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type Customer_have_VoucherCreateInput = {
    customer: CustomerCreateNestedOneWithoutCustomer_have_voucherInput
    voucher: VoucherCreateNestedOneWithoutCustomer_have_voucherInput
  }

  export type Customer_have_VoucherUncheckedCreateInput = {
    customer_id: number
    voucher_id: number
  }

  export type Customer_have_VoucherUpdateInput = {
    customer?: CustomerUpdateOneRequiredWithoutCustomer_have_voucherNestedInput
    voucher?: VoucherUpdateOneRequiredWithoutCustomer_have_voucherNestedInput
  }

  export type Customer_have_VoucherUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Customer_have_VoucherCreateManyInput = {
    customer_id: number
    voucher_id: number
  }

  export type Customer_have_VoucherUpdateManyMutationInput = {

  }

  export type Customer_have_VoucherUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type Customer_have_VoucherListRelationFilter = {
    every?: Customer_have_VoucherWhereInput
    some?: Customer_have_VoucherWhereInput
    none?: Customer_have_VoucherWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type Customer_have_VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DishNullableScalarRelationFilter = {
    is?: DishWhereInput | null
    isNot?: DishWhereInput | null
  }

  export type Order_have_ItemListRelationFilter = {
    every?: Order_have_ItemWhereInput
    some?: Order_have_ItemWhereInput
    none?: Order_have_ItemWhereInput
  }

  export type TableNullableScalarRelationFilter = {
    is?: TableWhereInput | null
    isNot?: TableWhereInput | null
  }

  export type Order_have_ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDishCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryFilter<$PrismaModel> | $Enums.DishCategory
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    dish_type?: SortOrder
    price?: SortOrder
  }

  export type DishAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    dish_type?: SortOrder
    price?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    dish_type?: SortOrder
    price?: SortOrder
  }

  export type DishSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type EnumDishCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DishCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDishCategoryFilter<$PrismaModel>
    _max?: NestedEnumDishCategoryFilter<$PrismaModel>
  }

  export type EnumTableTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TableType | EnumTableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTableTypeFilter<$PrismaModel> | $Enums.TableType
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    table_type?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    table_type?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    table_type?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTableTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableType | EnumTableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTableTypeWithAggregatesFilter<$PrismaModel> | $Enums.TableType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableTypeFilter<$PrismaModel>
    _max?: NestedEnumTableTypeFilter<$PrismaModel>
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

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type Order_applies_VoucherListRelationFilter = {
    every?: Order_applies_VoucherWhereInput
    some?: Order_applies_VoucherWhereInput
    none?: Order_applies_VoucherWhereInput
  }

  export type Order_applies_VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    order_date?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    customer_id?: SortOrder
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

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    denomination?: SortOrder
    issue_date?: SortOrder
    expiration_date?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    id?: SortOrder
    expiration_date?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    denomination?: SortOrder
    issue_date?: SortOrder
    expiration_date?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    denomination?: SortOrder
    issue_date?: SortOrder
    expiration_date?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    id?: SortOrder
    expiration_date?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type VoucherScalarRelationFilter = {
    is?: VoucherWhereInput
    isNot?: VoucherWhereInput
  }

  export type Order_applies_VoucherOrder_idVoucher_idCompoundUniqueInput = {
    order_id: number
    voucher_id: number
  }

  export type Order_applies_VoucherCountOrderByAggregateInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Order_applies_VoucherAvgOrderByAggregateInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Order_applies_VoucherMaxOrderByAggregateInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Order_applies_VoucherMinOrderByAggregateInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Order_applies_VoucherSumOrderByAggregateInput = {
    order_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Order_have_ItemOrder_idItem_idCompoundUniqueInput = {
    order_id: number
    item_id: number
  }

  export type Order_have_ItemCountOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
  }

  export type Order_have_ItemAvgOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
  }

  export type Order_have_ItemMaxOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
  }

  export type Order_have_ItemMinOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
  }

  export type Order_have_ItemSumOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
  }

  export type Customer_have_VoucherCustomer_idVoucher_idCompoundUniqueInput = {
    customer_id: number
    voucher_id: number
  }

  export type Customer_have_VoucherCountOrderByAggregateInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Customer_have_VoucherAvgOrderByAggregateInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Customer_have_VoucherMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Customer_have_VoucherMinOrderByAggregateInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Customer_have_VoucherSumOrderByAggregateInput = {
    customer_id?: SortOrder
    voucher_id?: SortOrder
  }

  export type Customer_have_VoucherCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutCustomerInput, Customer_have_VoucherUncheckedCreateWithoutCustomerInput> | Customer_have_VoucherCreateWithoutCustomerInput[] | Customer_have_VoucherUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutCustomerInput | Customer_have_VoucherCreateOrConnectWithoutCustomerInput[]
    createMany?: Customer_have_VoucherCreateManyCustomerInputEnvelope
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type Customer_have_VoucherUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutCustomerInput, Customer_have_VoucherUncheckedCreateWithoutCustomerInput> | Customer_have_VoucherCreateWithoutCustomerInput[] | Customer_have_VoucherUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutCustomerInput | Customer_have_VoucherCreateOrConnectWithoutCustomerInput[]
    createMany?: Customer_have_VoucherCreateManyCustomerInputEnvelope
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Customer_have_VoucherUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutCustomerInput, Customer_have_VoucherUncheckedCreateWithoutCustomerInput> | Customer_have_VoucherCreateWithoutCustomerInput[] | Customer_have_VoucherUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutCustomerInput | Customer_have_VoucherCreateOrConnectWithoutCustomerInput[]
    upsert?: Customer_have_VoucherUpsertWithWhereUniqueWithoutCustomerInput | Customer_have_VoucherUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: Customer_have_VoucherCreateManyCustomerInputEnvelope
    set?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    disconnect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    delete?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    update?: Customer_have_VoucherUpdateWithWhereUniqueWithoutCustomerInput | Customer_have_VoucherUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: Customer_have_VoucherUpdateManyWithWhereWithoutCustomerInput | Customer_have_VoucherUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: Customer_have_VoucherScalarWhereInput | Customer_have_VoucherScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Customer_have_VoucherUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutCustomerInput, Customer_have_VoucherUncheckedCreateWithoutCustomerInput> | Customer_have_VoucherCreateWithoutCustomerInput[] | Customer_have_VoucherUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutCustomerInput | Customer_have_VoucherCreateOrConnectWithoutCustomerInput[]
    upsert?: Customer_have_VoucherUpsertWithWhereUniqueWithoutCustomerInput | Customer_have_VoucherUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: Customer_have_VoucherCreateManyCustomerInputEnvelope
    set?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    disconnect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    delete?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    update?: Customer_have_VoucherUpdateWithWhereUniqueWithoutCustomerInput | Customer_have_VoucherUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: Customer_have_VoucherUpdateManyWithWhereWithoutCustomerInput | Customer_have_VoucherUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: Customer_have_VoucherScalarWhereInput | Customer_have_VoucherScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DishCreateNestedOneWithoutItemInput = {
    create?: XOR<DishCreateWithoutItemInput, DishUncheckedCreateWithoutItemInput>
    connectOrCreate?: DishCreateOrConnectWithoutItemInput
    connect?: DishWhereUniqueInput
  }

  export type Order_have_ItemCreateNestedManyWithoutItemInput = {
    create?: XOR<Order_have_ItemCreateWithoutItemInput, Order_have_ItemUncheckedCreateWithoutItemInput> | Order_have_ItemCreateWithoutItemInput[] | Order_have_ItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutItemInput | Order_have_ItemCreateOrConnectWithoutItemInput[]
    createMany?: Order_have_ItemCreateManyItemInputEnvelope
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
  }

  export type TableCreateNestedOneWithoutItemInput = {
    create?: XOR<TableCreateWithoutItemInput, TableUncheckedCreateWithoutItemInput>
    connectOrCreate?: TableCreateOrConnectWithoutItemInput
    connect?: TableWhereUniqueInput
  }

  export type DishUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<DishCreateWithoutItemInput, DishUncheckedCreateWithoutItemInput>
    connectOrCreate?: DishCreateOrConnectWithoutItemInput
    connect?: DishWhereUniqueInput
  }

  export type Order_have_ItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<Order_have_ItemCreateWithoutItemInput, Order_have_ItemUncheckedCreateWithoutItemInput> | Order_have_ItemCreateWithoutItemInput[] | Order_have_ItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutItemInput | Order_have_ItemCreateOrConnectWithoutItemInput[]
    createMany?: Order_have_ItemCreateManyItemInputEnvelope
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<TableCreateWithoutItemInput, TableUncheckedCreateWithoutItemInput>
    connectOrCreate?: TableCreateOrConnectWithoutItemInput
    connect?: TableWhereUniqueInput
  }

  export type DishUpdateOneWithoutItemNestedInput = {
    create?: XOR<DishCreateWithoutItemInput, DishUncheckedCreateWithoutItemInput>
    connectOrCreate?: DishCreateOrConnectWithoutItemInput
    upsert?: DishUpsertWithoutItemInput
    disconnect?: DishWhereInput | boolean
    delete?: DishWhereInput | boolean
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutItemInput, DishUpdateWithoutItemInput>, DishUncheckedUpdateWithoutItemInput>
  }

  export type Order_have_ItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<Order_have_ItemCreateWithoutItemInput, Order_have_ItemUncheckedCreateWithoutItemInput> | Order_have_ItemCreateWithoutItemInput[] | Order_have_ItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutItemInput | Order_have_ItemCreateOrConnectWithoutItemInput[]
    upsert?: Order_have_ItemUpsertWithWhereUniqueWithoutItemInput | Order_have_ItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: Order_have_ItemCreateManyItemInputEnvelope
    set?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    disconnect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    delete?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    update?: Order_have_ItemUpdateWithWhereUniqueWithoutItemInput | Order_have_ItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: Order_have_ItemUpdateManyWithWhereWithoutItemInput | Order_have_ItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: Order_have_ItemScalarWhereInput | Order_have_ItemScalarWhereInput[]
  }

  export type TableUpdateOneWithoutItemNestedInput = {
    create?: XOR<TableCreateWithoutItemInput, TableUncheckedCreateWithoutItemInput>
    connectOrCreate?: TableCreateOrConnectWithoutItemInput
    upsert?: TableUpsertWithoutItemInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutItemInput, TableUpdateWithoutItemInput>, TableUncheckedUpdateWithoutItemInput>
  }

  export type DishUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<DishCreateWithoutItemInput, DishUncheckedCreateWithoutItemInput>
    connectOrCreate?: DishCreateOrConnectWithoutItemInput
    upsert?: DishUpsertWithoutItemInput
    disconnect?: DishWhereInput | boolean
    delete?: DishWhereInput | boolean
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutItemInput, DishUpdateWithoutItemInput>, DishUncheckedUpdateWithoutItemInput>
  }

  export type Order_have_ItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<Order_have_ItemCreateWithoutItemInput, Order_have_ItemUncheckedCreateWithoutItemInput> | Order_have_ItemCreateWithoutItemInput[] | Order_have_ItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutItemInput | Order_have_ItemCreateOrConnectWithoutItemInput[]
    upsert?: Order_have_ItemUpsertWithWhereUniqueWithoutItemInput | Order_have_ItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: Order_have_ItemCreateManyItemInputEnvelope
    set?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    disconnect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    delete?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    update?: Order_have_ItemUpdateWithWhereUniqueWithoutItemInput | Order_have_ItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: Order_have_ItemUpdateManyWithWhereWithoutItemInput | Order_have_ItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: Order_have_ItemScalarWhereInput | Order_have_ItemScalarWhereInput[]
  }

  export type TableUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<TableCreateWithoutItemInput, TableUncheckedCreateWithoutItemInput>
    connectOrCreate?: TableCreateOrConnectWithoutItemInput
    upsert?: TableUpsertWithoutItemInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutItemInput, TableUpdateWithoutItemInput>, TableUncheckedUpdateWithoutItemInput>
  }

  export type ItemCreateNestedOneWithoutDishInput = {
    create?: XOR<ItemCreateWithoutDishInput, ItemUncheckedCreateWithoutDishInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDishInput
    connect?: ItemWhereUniqueInput
  }

  export type EnumDishCategoryFieldUpdateOperationsInput = {
    set?: $Enums.DishCategory
  }

  export type ItemUpdateOneRequiredWithoutDishNestedInput = {
    create?: XOR<ItemCreateWithoutDishInput, ItemUncheckedCreateWithoutDishInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDishInput
    upsert?: ItemUpsertWithoutDishInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutDishInput, ItemUpdateWithoutDishInput>, ItemUncheckedUpdateWithoutDishInput>
  }

  export type ItemCreateNestedOneWithoutTableInput = {
    create?: XOR<ItemCreateWithoutTableInput, ItemUncheckedCreateWithoutTableInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTableInput
    connect?: ItemWhereUniqueInput
  }

  export type EnumTableTypeFieldUpdateOperationsInput = {
    set?: $Enums.TableType
  }

  export type ItemUpdateOneRequiredWithoutTableNestedInput = {
    create?: XOR<ItemCreateWithoutTableInput, ItemUncheckedCreateWithoutTableInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTableInput
    upsert?: ItemUpsertWithoutTableInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutTableInput, ItemUpdateWithoutTableInput>, ItemUncheckedUpdateWithoutTableInput>
  }

  export type CustomerCreateNestedOneWithoutOrderInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type Order_applies_VoucherCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutOrderInput, Order_applies_VoucherUncheckedCreateWithoutOrderInput> | Order_applies_VoucherCreateWithoutOrderInput[] | Order_applies_VoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutOrderInput | Order_applies_VoucherCreateOrConnectWithoutOrderInput[]
    createMany?: Order_applies_VoucherCreateManyOrderInputEnvelope
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
  }

  export type Order_have_ItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_have_ItemCreateWithoutOrderInput, Order_have_ItemUncheckedCreateWithoutOrderInput> | Order_have_ItemCreateWithoutOrderInput[] | Order_have_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutOrderInput | Order_have_ItemCreateOrConnectWithoutOrderInput[]
    createMany?: Order_have_ItemCreateManyOrderInputEnvelope
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
  }

  export type Order_applies_VoucherUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutOrderInput, Order_applies_VoucherUncheckedCreateWithoutOrderInput> | Order_applies_VoucherCreateWithoutOrderInput[] | Order_applies_VoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutOrderInput | Order_applies_VoucherCreateOrConnectWithoutOrderInput[]
    createMany?: Order_applies_VoucherCreateManyOrderInputEnvelope
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
  }

  export type Order_have_ItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_have_ItemCreateWithoutOrderInput, Order_have_ItemUncheckedCreateWithoutOrderInput> | Order_have_ItemCreateWithoutOrderInput[] | Order_have_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutOrderInput | Order_have_ItemCreateOrConnectWithoutOrderInput[]
    createMany?: Order_have_ItemCreateManyOrderInputEnvelope
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    upsert?: CustomerUpsertWithoutOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrderInput, CustomerUpdateWithoutOrderInput>, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type Order_applies_VoucherUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutOrderInput, Order_applies_VoucherUncheckedCreateWithoutOrderInput> | Order_applies_VoucherCreateWithoutOrderInput[] | Order_applies_VoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutOrderInput | Order_applies_VoucherCreateOrConnectWithoutOrderInput[]
    upsert?: Order_applies_VoucherUpsertWithWhereUniqueWithoutOrderInput | Order_applies_VoucherUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_applies_VoucherCreateManyOrderInputEnvelope
    set?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    disconnect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    delete?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    update?: Order_applies_VoucherUpdateWithWhereUniqueWithoutOrderInput | Order_applies_VoucherUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_applies_VoucherUpdateManyWithWhereWithoutOrderInput | Order_applies_VoucherUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_applies_VoucherScalarWhereInput | Order_applies_VoucherScalarWhereInput[]
  }

  export type Order_have_ItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_have_ItemCreateWithoutOrderInput, Order_have_ItemUncheckedCreateWithoutOrderInput> | Order_have_ItemCreateWithoutOrderInput[] | Order_have_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutOrderInput | Order_have_ItemCreateOrConnectWithoutOrderInput[]
    upsert?: Order_have_ItemUpsertWithWhereUniqueWithoutOrderInput | Order_have_ItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_have_ItemCreateManyOrderInputEnvelope
    set?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    disconnect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    delete?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    update?: Order_have_ItemUpdateWithWhereUniqueWithoutOrderInput | Order_have_ItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_have_ItemUpdateManyWithWhereWithoutOrderInput | Order_have_ItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_have_ItemScalarWhereInput | Order_have_ItemScalarWhereInput[]
  }

  export type Order_applies_VoucherUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutOrderInput, Order_applies_VoucherUncheckedCreateWithoutOrderInput> | Order_applies_VoucherCreateWithoutOrderInput[] | Order_applies_VoucherUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutOrderInput | Order_applies_VoucherCreateOrConnectWithoutOrderInput[]
    upsert?: Order_applies_VoucherUpsertWithWhereUniqueWithoutOrderInput | Order_applies_VoucherUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_applies_VoucherCreateManyOrderInputEnvelope
    set?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    disconnect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    delete?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    update?: Order_applies_VoucherUpdateWithWhereUniqueWithoutOrderInput | Order_applies_VoucherUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_applies_VoucherUpdateManyWithWhereWithoutOrderInput | Order_applies_VoucherUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_applies_VoucherScalarWhereInput | Order_applies_VoucherScalarWhereInput[]
  }

  export type Order_have_ItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_have_ItemCreateWithoutOrderInput, Order_have_ItemUncheckedCreateWithoutOrderInput> | Order_have_ItemCreateWithoutOrderInput[] | Order_have_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_have_ItemCreateOrConnectWithoutOrderInput | Order_have_ItemCreateOrConnectWithoutOrderInput[]
    upsert?: Order_have_ItemUpsertWithWhereUniqueWithoutOrderInput | Order_have_ItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_have_ItemCreateManyOrderInputEnvelope
    set?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    disconnect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    delete?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    connect?: Order_have_ItemWhereUniqueInput | Order_have_ItemWhereUniqueInput[]
    update?: Order_have_ItemUpdateWithWhereUniqueWithoutOrderInput | Order_have_ItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_have_ItemUpdateManyWithWhereWithoutOrderInput | Order_have_ItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_have_ItemScalarWhereInput | Order_have_ItemScalarWhereInput[]
  }

  export type Customer_have_VoucherCreateNestedManyWithoutVoucherInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutVoucherInput, Customer_have_VoucherUncheckedCreateWithoutVoucherInput> | Customer_have_VoucherCreateWithoutVoucherInput[] | Customer_have_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutVoucherInput | Customer_have_VoucherCreateOrConnectWithoutVoucherInput[]
    createMany?: Customer_have_VoucherCreateManyVoucherInputEnvelope
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
  }

  export type Order_applies_VoucherCreateNestedManyWithoutVoucherInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutVoucherInput, Order_applies_VoucherUncheckedCreateWithoutVoucherInput> | Order_applies_VoucherCreateWithoutVoucherInput[] | Order_applies_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutVoucherInput | Order_applies_VoucherCreateOrConnectWithoutVoucherInput[]
    createMany?: Order_applies_VoucherCreateManyVoucherInputEnvelope
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
  }

  export type Customer_have_VoucherUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutVoucherInput, Customer_have_VoucherUncheckedCreateWithoutVoucherInput> | Customer_have_VoucherCreateWithoutVoucherInput[] | Customer_have_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutVoucherInput | Customer_have_VoucherCreateOrConnectWithoutVoucherInput[]
    createMany?: Customer_have_VoucherCreateManyVoucherInputEnvelope
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
  }

  export type Order_applies_VoucherUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutVoucherInput, Order_applies_VoucherUncheckedCreateWithoutVoucherInput> | Order_applies_VoucherCreateWithoutVoucherInput[] | Order_applies_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutVoucherInput | Order_applies_VoucherCreateOrConnectWithoutVoucherInput[]
    createMany?: Order_applies_VoucherCreateManyVoucherInputEnvelope
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
  }

  export type Customer_have_VoucherUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutVoucherInput, Customer_have_VoucherUncheckedCreateWithoutVoucherInput> | Customer_have_VoucherCreateWithoutVoucherInput[] | Customer_have_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutVoucherInput | Customer_have_VoucherCreateOrConnectWithoutVoucherInput[]
    upsert?: Customer_have_VoucherUpsertWithWhereUniqueWithoutVoucherInput | Customer_have_VoucherUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: Customer_have_VoucherCreateManyVoucherInputEnvelope
    set?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    disconnect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    delete?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    update?: Customer_have_VoucherUpdateWithWhereUniqueWithoutVoucherInput | Customer_have_VoucherUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: Customer_have_VoucherUpdateManyWithWhereWithoutVoucherInput | Customer_have_VoucherUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: Customer_have_VoucherScalarWhereInput | Customer_have_VoucherScalarWhereInput[]
  }

  export type Order_applies_VoucherUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutVoucherInput, Order_applies_VoucherUncheckedCreateWithoutVoucherInput> | Order_applies_VoucherCreateWithoutVoucherInput[] | Order_applies_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutVoucherInput | Order_applies_VoucherCreateOrConnectWithoutVoucherInput[]
    upsert?: Order_applies_VoucherUpsertWithWhereUniqueWithoutVoucherInput | Order_applies_VoucherUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: Order_applies_VoucherCreateManyVoucherInputEnvelope
    set?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    disconnect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    delete?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    update?: Order_applies_VoucherUpdateWithWhereUniqueWithoutVoucherInput | Order_applies_VoucherUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: Order_applies_VoucherUpdateManyWithWhereWithoutVoucherInput | Order_applies_VoucherUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: Order_applies_VoucherScalarWhereInput | Order_applies_VoucherScalarWhereInput[]
  }

  export type Customer_have_VoucherUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<Customer_have_VoucherCreateWithoutVoucherInput, Customer_have_VoucherUncheckedCreateWithoutVoucherInput> | Customer_have_VoucherCreateWithoutVoucherInput[] | Customer_have_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Customer_have_VoucherCreateOrConnectWithoutVoucherInput | Customer_have_VoucherCreateOrConnectWithoutVoucherInput[]
    upsert?: Customer_have_VoucherUpsertWithWhereUniqueWithoutVoucherInput | Customer_have_VoucherUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: Customer_have_VoucherCreateManyVoucherInputEnvelope
    set?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    disconnect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    delete?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    connect?: Customer_have_VoucherWhereUniqueInput | Customer_have_VoucherWhereUniqueInput[]
    update?: Customer_have_VoucherUpdateWithWhereUniqueWithoutVoucherInput | Customer_have_VoucherUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: Customer_have_VoucherUpdateManyWithWhereWithoutVoucherInput | Customer_have_VoucherUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: Customer_have_VoucherScalarWhereInput | Customer_have_VoucherScalarWhereInput[]
  }

  export type Order_applies_VoucherUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<Order_applies_VoucherCreateWithoutVoucherInput, Order_applies_VoucherUncheckedCreateWithoutVoucherInput> | Order_applies_VoucherCreateWithoutVoucherInput[] | Order_applies_VoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: Order_applies_VoucherCreateOrConnectWithoutVoucherInput | Order_applies_VoucherCreateOrConnectWithoutVoucherInput[]
    upsert?: Order_applies_VoucherUpsertWithWhereUniqueWithoutVoucherInput | Order_applies_VoucherUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: Order_applies_VoucherCreateManyVoucherInputEnvelope
    set?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    disconnect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    delete?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    connect?: Order_applies_VoucherWhereUniqueInput | Order_applies_VoucherWhereUniqueInput[]
    update?: Order_applies_VoucherUpdateWithWhereUniqueWithoutVoucherInput | Order_applies_VoucherUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: Order_applies_VoucherUpdateManyWithWhereWithoutVoucherInput | Order_applies_VoucherUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: Order_applies_VoucherScalarWhereInput | Order_applies_VoucherScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrder_applies_voucherInput = {
    create?: XOR<OrderCreateWithoutOrder_applies_voucherInput, OrderUncheckedCreateWithoutOrder_applies_voucherInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_applies_voucherInput
    connect?: OrderWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutOrder_applies_voucherInput = {
    create?: XOR<VoucherCreateWithoutOrder_applies_voucherInput, VoucherUncheckedCreateWithoutOrder_applies_voucherInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutOrder_applies_voucherInput
    connect?: VoucherWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrder_applies_voucherNestedInput = {
    create?: XOR<OrderCreateWithoutOrder_applies_voucherInput, OrderUncheckedCreateWithoutOrder_applies_voucherInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_applies_voucherInput
    upsert?: OrderUpsertWithoutOrder_applies_voucherInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrder_applies_voucherInput, OrderUpdateWithoutOrder_applies_voucherInput>, OrderUncheckedUpdateWithoutOrder_applies_voucherInput>
  }

  export type VoucherUpdateOneRequiredWithoutOrder_applies_voucherNestedInput = {
    create?: XOR<VoucherCreateWithoutOrder_applies_voucherInput, VoucherUncheckedCreateWithoutOrder_applies_voucherInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutOrder_applies_voucherInput
    upsert?: VoucherUpsertWithoutOrder_applies_voucherInput
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutOrder_applies_voucherInput, VoucherUpdateWithoutOrder_applies_voucherInput>, VoucherUncheckedUpdateWithoutOrder_applies_voucherInput>
  }

  export type ItemCreateNestedOneWithoutOrder_have_itemInput = {
    create?: XOR<ItemCreateWithoutOrder_have_itemInput, ItemUncheckedCreateWithoutOrder_have_itemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrder_have_itemInput
    connect?: ItemWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutOrder_have_itemInput = {
    create?: XOR<OrderCreateWithoutOrder_have_itemInput, OrderUncheckedCreateWithoutOrder_have_itemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_have_itemInput
    connect?: OrderWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutOrder_have_itemNestedInput = {
    create?: XOR<ItemCreateWithoutOrder_have_itemInput, ItemUncheckedCreateWithoutOrder_have_itemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrder_have_itemInput
    upsert?: ItemUpsertWithoutOrder_have_itemInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOrder_have_itemInput, ItemUpdateWithoutOrder_have_itemInput>, ItemUncheckedUpdateWithoutOrder_have_itemInput>
  }

  export type OrderUpdateOneRequiredWithoutOrder_have_itemNestedInput = {
    create?: XOR<OrderCreateWithoutOrder_have_itemInput, OrderUncheckedCreateWithoutOrder_have_itemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_have_itemInput
    upsert?: OrderUpsertWithoutOrder_have_itemInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrder_have_itemInput, OrderUpdateWithoutOrder_have_itemInput>, OrderUncheckedUpdateWithoutOrder_have_itemInput>
  }

  export type CustomerCreateNestedOneWithoutCustomer_have_voucherInput = {
    create?: XOR<CustomerCreateWithoutCustomer_have_voucherInput, CustomerUncheckedCreateWithoutCustomer_have_voucherInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_have_voucherInput
    connect?: CustomerWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutCustomer_have_voucherInput = {
    create?: XOR<VoucherCreateWithoutCustomer_have_voucherInput, VoucherUncheckedCreateWithoutCustomer_have_voucherInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutCustomer_have_voucherInput
    connect?: VoucherWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutCustomer_have_voucherNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomer_have_voucherInput, CustomerUncheckedCreateWithoutCustomer_have_voucherInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_have_voucherInput
    upsert?: CustomerUpsertWithoutCustomer_have_voucherInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomer_have_voucherInput, CustomerUpdateWithoutCustomer_have_voucherInput>, CustomerUncheckedUpdateWithoutCustomer_have_voucherInput>
  }

  export type VoucherUpdateOneRequiredWithoutCustomer_have_voucherNestedInput = {
    create?: XOR<VoucherCreateWithoutCustomer_have_voucherInput, VoucherUncheckedCreateWithoutCustomer_have_voucherInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutCustomer_have_voucherInput
    upsert?: VoucherUpsertWithoutCustomer_have_voucherInput
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutCustomer_have_voucherInput, VoucherUpdateWithoutCustomer_have_voucherInput>, VoucherUncheckedUpdateWithoutCustomer_have_voucherInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumDishCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryFilter<$PrismaModel> | $Enums.DishCategory
  }

  export type NestedEnumDishCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DishCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDishCategoryFilter<$PrismaModel>
    _max?: NestedEnumDishCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTableTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TableType | EnumTableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTableTypeFilter<$PrismaModel> | $Enums.TableType
  }

  export type NestedEnumTableTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableType | EnumTableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableType[] | ListEnumTableTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTableTypeWithAggregatesFilter<$PrismaModel> | $Enums.TableType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableTypeFilter<$PrismaModel>
    _max?: NestedEnumTableTypeFilter<$PrismaModel>
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

  export type Customer_have_VoucherCreateWithoutCustomerInput = {
    voucher: VoucherCreateNestedOneWithoutCustomer_have_voucherInput
  }

  export type Customer_have_VoucherUncheckedCreateWithoutCustomerInput = {
    voucher_id: number
  }

  export type Customer_have_VoucherCreateOrConnectWithoutCustomerInput = {
    where: Customer_have_VoucherWhereUniqueInput
    create: XOR<Customer_have_VoucherCreateWithoutCustomerInput, Customer_have_VoucherUncheckedCreateWithoutCustomerInput>
  }

  export type Customer_have_VoucherCreateManyCustomerInputEnvelope = {
    data: Customer_have_VoucherCreateManyCustomerInput | Customer_have_VoucherCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    order_date?: Date | string
    total_price?: number
    order_applies_voucher?: Order_applies_VoucherCreateNestedManyWithoutOrderInput
    order_have_item?: Order_have_ItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    order_date?: Date | string
    total_price?: number
    order_applies_voucher?: Order_applies_VoucherUncheckedCreateNestedManyWithoutOrderInput
    order_have_item?: Order_have_ItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type Customer_have_VoucherUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Customer_have_VoucherWhereUniqueInput
    update: XOR<Customer_have_VoucherUpdateWithoutCustomerInput, Customer_have_VoucherUncheckedUpdateWithoutCustomerInput>
    create: XOR<Customer_have_VoucherCreateWithoutCustomerInput, Customer_have_VoucherUncheckedCreateWithoutCustomerInput>
  }

  export type Customer_have_VoucherUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Customer_have_VoucherWhereUniqueInput
    data: XOR<Customer_have_VoucherUpdateWithoutCustomerInput, Customer_have_VoucherUncheckedUpdateWithoutCustomerInput>
  }

  export type Customer_have_VoucherUpdateManyWithWhereWithoutCustomerInput = {
    where: Customer_have_VoucherScalarWhereInput
    data: XOR<Customer_have_VoucherUpdateManyMutationInput, Customer_have_VoucherUncheckedUpdateManyWithoutCustomerInput>
  }

  export type Customer_have_VoucherScalarWhereInput = {
    AND?: Customer_have_VoucherScalarWhereInput | Customer_have_VoucherScalarWhereInput[]
    OR?: Customer_have_VoucherScalarWhereInput[]
    NOT?: Customer_have_VoucherScalarWhereInput | Customer_have_VoucherScalarWhereInput[]
    customer_id?: IntFilter<"Customer_have_Voucher"> | number
    voucher_id?: IntFilter<"Customer_have_Voucher"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    order_date?: DateTimeFilter<"Order"> | Date | string
    total_price?: IntFilter<"Order"> | number
    customer_id?: IntFilter<"Order"> | number
  }

  export type DishCreateWithoutItemInput = {
    dish_type: $Enums.DishCategory
    price: number
  }

  export type DishUncheckedCreateWithoutItemInput = {
    dish_type: $Enums.DishCategory
    price: number
  }

  export type DishCreateOrConnectWithoutItemInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutItemInput, DishUncheckedCreateWithoutItemInput>
  }

  export type Order_have_ItemCreateWithoutItemInput = {
    order: OrderCreateNestedOneWithoutOrder_have_itemInput
  }

  export type Order_have_ItemUncheckedCreateWithoutItemInput = {
    order_id: number
  }

  export type Order_have_ItemCreateOrConnectWithoutItemInput = {
    where: Order_have_ItemWhereUniqueInput
    create: XOR<Order_have_ItemCreateWithoutItemInput, Order_have_ItemUncheckedCreateWithoutItemInput>
  }

  export type Order_have_ItemCreateManyItemInputEnvelope = {
    data: Order_have_ItemCreateManyItemInput | Order_have_ItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutItemInput = {
    table_type: $Enums.TableType
  }

  export type TableUncheckedCreateWithoutItemInput = {
    table_type: $Enums.TableType
  }

  export type TableCreateOrConnectWithoutItemInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutItemInput, TableUncheckedCreateWithoutItemInput>
  }

  export type DishUpsertWithoutItemInput = {
    update: XOR<DishUpdateWithoutItemInput, DishUncheckedUpdateWithoutItemInput>
    create: XOR<DishCreateWithoutItemInput, DishUncheckedCreateWithoutItemInput>
    where?: DishWhereInput
  }

  export type DishUpdateToOneWithWhereWithoutItemInput = {
    where?: DishWhereInput
    data: XOR<DishUpdateWithoutItemInput, DishUncheckedUpdateWithoutItemInput>
  }

  export type DishUpdateWithoutItemInput = {
    dish_type?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    price?: IntFieldUpdateOperationsInput | number
  }

  export type DishUncheckedUpdateWithoutItemInput = {
    dish_type?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    price?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemUpsertWithWhereUniqueWithoutItemInput = {
    where: Order_have_ItemWhereUniqueInput
    update: XOR<Order_have_ItemUpdateWithoutItemInput, Order_have_ItemUncheckedUpdateWithoutItemInput>
    create: XOR<Order_have_ItemCreateWithoutItemInput, Order_have_ItemUncheckedCreateWithoutItemInput>
  }

  export type Order_have_ItemUpdateWithWhereUniqueWithoutItemInput = {
    where: Order_have_ItemWhereUniqueInput
    data: XOR<Order_have_ItemUpdateWithoutItemInput, Order_have_ItemUncheckedUpdateWithoutItemInput>
  }

  export type Order_have_ItemUpdateManyWithWhereWithoutItemInput = {
    where: Order_have_ItemScalarWhereInput
    data: XOR<Order_have_ItemUpdateManyMutationInput, Order_have_ItemUncheckedUpdateManyWithoutItemInput>
  }

  export type Order_have_ItemScalarWhereInput = {
    AND?: Order_have_ItemScalarWhereInput | Order_have_ItemScalarWhereInput[]
    OR?: Order_have_ItemScalarWhereInput[]
    NOT?: Order_have_ItemScalarWhereInput | Order_have_ItemScalarWhereInput[]
    order_id?: IntFilter<"Order_have_Item"> | number
    item_id?: IntFilter<"Order_have_Item"> | number
  }

  export type TableUpsertWithoutItemInput = {
    update: XOR<TableUpdateWithoutItemInput, TableUncheckedUpdateWithoutItemInput>
    create: XOR<TableCreateWithoutItemInput, TableUncheckedCreateWithoutItemInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutItemInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutItemInput, TableUncheckedUpdateWithoutItemInput>
  }

  export type TableUpdateWithoutItemInput = {
    table_type?: EnumTableTypeFieldUpdateOperationsInput | $Enums.TableType
  }

  export type TableUncheckedUpdateWithoutItemInput = {
    table_type?: EnumTableTypeFieldUpdateOperationsInput | $Enums.TableType
  }

  export type ItemCreateWithoutDishInput = {
    order_have_item?: Order_have_ItemCreateNestedManyWithoutItemInput
    table?: TableCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutDishInput = {
    id?: number
    order_have_item?: Order_have_ItemUncheckedCreateNestedManyWithoutItemInput
    table?: TableUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutDishInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutDishInput, ItemUncheckedCreateWithoutDishInput>
  }

  export type ItemUpsertWithoutDishInput = {
    update: XOR<ItemUpdateWithoutDishInput, ItemUncheckedUpdateWithoutDishInput>
    create: XOR<ItemCreateWithoutDishInput, ItemUncheckedCreateWithoutDishInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutDishInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutDishInput, ItemUncheckedUpdateWithoutDishInput>
  }

  export type ItemUpdateWithoutDishInput = {
    order_have_item?: Order_have_ItemUpdateManyWithoutItemNestedInput
    table?: TableUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutDishInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_have_item?: Order_have_ItemUncheckedUpdateManyWithoutItemNestedInput
    table?: TableUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemCreateWithoutTableInput = {
    dish?: DishCreateNestedOneWithoutItemInput
    order_have_item?: Order_have_ItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTableInput = {
    id?: number
    dish?: DishUncheckedCreateNestedOneWithoutItemInput
    order_have_item?: Order_have_ItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTableInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTableInput, ItemUncheckedCreateWithoutTableInput>
  }

  export type ItemUpsertWithoutTableInput = {
    update: XOR<ItemUpdateWithoutTableInput, ItemUncheckedUpdateWithoutTableInput>
    create: XOR<ItemCreateWithoutTableInput, ItemUncheckedCreateWithoutTableInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutTableInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutTableInput, ItemUncheckedUpdateWithoutTableInput>
  }

  export type ItemUpdateWithoutTableInput = {
    dish?: DishUpdateOneWithoutItemNestedInput
    order_have_item?: Order_have_ItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    dish?: DishUncheckedUpdateOneWithoutItemNestedInput
    order_have_item?: Order_have_ItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type CustomerCreateWithoutOrderInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    customer_have_voucher?: Customer_have_VoucherCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrderInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    customer_have_voucher?: Customer_have_VoucherUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
  }

  export type Order_applies_VoucherCreateWithoutOrderInput = {
    voucher: VoucherCreateNestedOneWithoutOrder_applies_voucherInput
  }

  export type Order_applies_VoucherUncheckedCreateWithoutOrderInput = {
    voucher_id: number
  }

  export type Order_applies_VoucherCreateOrConnectWithoutOrderInput = {
    where: Order_applies_VoucherWhereUniqueInput
    create: XOR<Order_applies_VoucherCreateWithoutOrderInput, Order_applies_VoucherUncheckedCreateWithoutOrderInput>
  }

  export type Order_applies_VoucherCreateManyOrderInputEnvelope = {
    data: Order_applies_VoucherCreateManyOrderInput | Order_applies_VoucherCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type Order_have_ItemCreateWithoutOrderInput = {
    item: ItemCreateNestedOneWithoutOrder_have_itemInput
  }

  export type Order_have_ItemUncheckedCreateWithoutOrderInput = {
    item_id: number
  }

  export type Order_have_ItemCreateOrConnectWithoutOrderInput = {
    where: Order_have_ItemWhereUniqueInput
    create: XOR<Order_have_ItemCreateWithoutOrderInput, Order_have_ItemUncheckedCreateWithoutOrderInput>
  }

  export type Order_have_ItemCreateManyOrderInputEnvelope = {
    data: Order_have_ItemCreateManyOrderInput | Order_have_ItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrderInput = {
    update: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type CustomerUpdateWithoutOrderInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    customer_have_voucher?: Customer_have_VoucherUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    customer_have_voucher?: Customer_have_VoucherUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type Order_applies_VoucherUpsertWithWhereUniqueWithoutOrderInput = {
    where: Order_applies_VoucherWhereUniqueInput
    update: XOR<Order_applies_VoucherUpdateWithoutOrderInput, Order_applies_VoucherUncheckedUpdateWithoutOrderInput>
    create: XOR<Order_applies_VoucherCreateWithoutOrderInput, Order_applies_VoucherUncheckedCreateWithoutOrderInput>
  }

  export type Order_applies_VoucherUpdateWithWhereUniqueWithoutOrderInput = {
    where: Order_applies_VoucherWhereUniqueInput
    data: XOR<Order_applies_VoucherUpdateWithoutOrderInput, Order_applies_VoucherUncheckedUpdateWithoutOrderInput>
  }

  export type Order_applies_VoucherUpdateManyWithWhereWithoutOrderInput = {
    where: Order_applies_VoucherScalarWhereInput
    data: XOR<Order_applies_VoucherUpdateManyMutationInput, Order_applies_VoucherUncheckedUpdateManyWithoutOrderInput>
  }

  export type Order_applies_VoucherScalarWhereInput = {
    AND?: Order_applies_VoucherScalarWhereInput | Order_applies_VoucherScalarWhereInput[]
    OR?: Order_applies_VoucherScalarWhereInput[]
    NOT?: Order_applies_VoucherScalarWhereInput | Order_applies_VoucherScalarWhereInput[]
    order_id?: IntFilter<"Order_applies_Voucher"> | number
    voucher_id?: IntFilter<"Order_applies_Voucher"> | number
  }

  export type Order_have_ItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: Order_have_ItemWhereUniqueInput
    update: XOR<Order_have_ItemUpdateWithoutOrderInput, Order_have_ItemUncheckedUpdateWithoutOrderInput>
    create: XOR<Order_have_ItemCreateWithoutOrderInput, Order_have_ItemUncheckedCreateWithoutOrderInput>
  }

  export type Order_have_ItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: Order_have_ItemWhereUniqueInput
    data: XOR<Order_have_ItemUpdateWithoutOrderInput, Order_have_ItemUncheckedUpdateWithoutOrderInput>
  }

  export type Order_have_ItemUpdateManyWithWhereWithoutOrderInput = {
    where: Order_have_ItemScalarWhereInput
    data: XOR<Order_have_ItemUpdateManyMutationInput, Order_have_ItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type Customer_have_VoucherCreateWithoutVoucherInput = {
    customer: CustomerCreateNestedOneWithoutCustomer_have_voucherInput
  }

  export type Customer_have_VoucherUncheckedCreateWithoutVoucherInput = {
    customer_id: number
  }

  export type Customer_have_VoucherCreateOrConnectWithoutVoucherInput = {
    where: Customer_have_VoucherWhereUniqueInput
    create: XOR<Customer_have_VoucherCreateWithoutVoucherInput, Customer_have_VoucherUncheckedCreateWithoutVoucherInput>
  }

  export type Customer_have_VoucherCreateManyVoucherInputEnvelope = {
    data: Customer_have_VoucherCreateManyVoucherInput | Customer_have_VoucherCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type Order_applies_VoucherCreateWithoutVoucherInput = {
    order: OrderCreateNestedOneWithoutOrder_applies_voucherInput
  }

  export type Order_applies_VoucherUncheckedCreateWithoutVoucherInput = {
    order_id: number
  }

  export type Order_applies_VoucherCreateOrConnectWithoutVoucherInput = {
    where: Order_applies_VoucherWhereUniqueInput
    create: XOR<Order_applies_VoucherCreateWithoutVoucherInput, Order_applies_VoucherUncheckedCreateWithoutVoucherInput>
  }

  export type Order_applies_VoucherCreateManyVoucherInputEnvelope = {
    data: Order_applies_VoucherCreateManyVoucherInput | Order_applies_VoucherCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type Customer_have_VoucherUpsertWithWhereUniqueWithoutVoucherInput = {
    where: Customer_have_VoucherWhereUniqueInput
    update: XOR<Customer_have_VoucherUpdateWithoutVoucherInput, Customer_have_VoucherUncheckedUpdateWithoutVoucherInput>
    create: XOR<Customer_have_VoucherCreateWithoutVoucherInput, Customer_have_VoucherUncheckedCreateWithoutVoucherInput>
  }

  export type Customer_have_VoucherUpdateWithWhereUniqueWithoutVoucherInput = {
    where: Customer_have_VoucherWhereUniqueInput
    data: XOR<Customer_have_VoucherUpdateWithoutVoucherInput, Customer_have_VoucherUncheckedUpdateWithoutVoucherInput>
  }

  export type Customer_have_VoucherUpdateManyWithWhereWithoutVoucherInput = {
    where: Customer_have_VoucherScalarWhereInput
    data: XOR<Customer_have_VoucherUpdateManyMutationInput, Customer_have_VoucherUncheckedUpdateManyWithoutVoucherInput>
  }

  export type Order_applies_VoucherUpsertWithWhereUniqueWithoutVoucherInput = {
    where: Order_applies_VoucherWhereUniqueInput
    update: XOR<Order_applies_VoucherUpdateWithoutVoucherInput, Order_applies_VoucherUncheckedUpdateWithoutVoucherInput>
    create: XOR<Order_applies_VoucherCreateWithoutVoucherInput, Order_applies_VoucherUncheckedCreateWithoutVoucherInput>
  }

  export type Order_applies_VoucherUpdateWithWhereUniqueWithoutVoucherInput = {
    where: Order_applies_VoucherWhereUniqueInput
    data: XOR<Order_applies_VoucherUpdateWithoutVoucherInput, Order_applies_VoucherUncheckedUpdateWithoutVoucherInput>
  }

  export type Order_applies_VoucherUpdateManyWithWhereWithoutVoucherInput = {
    where: Order_applies_VoucherScalarWhereInput
    data: XOR<Order_applies_VoucherUpdateManyMutationInput, Order_applies_VoucherUncheckedUpdateManyWithoutVoucherInput>
  }

  export type OrderCreateWithoutOrder_applies_voucherInput = {
    order_date?: Date | string
    total_price?: number
    customer: CustomerCreateNestedOneWithoutOrderInput
    order_have_item?: Order_have_ItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrder_applies_voucherInput = {
    id?: number
    order_date?: Date | string
    total_price?: number
    customer_id: number
    order_have_item?: Order_have_ItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrder_applies_voucherInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrder_applies_voucherInput, OrderUncheckedCreateWithoutOrder_applies_voucherInput>
  }

  export type VoucherCreateWithoutOrder_applies_voucherInput = {
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
    customer_have_voucher?: Customer_have_VoucherCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutOrder_applies_voucherInput = {
    id?: number
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
    customer_have_voucher?: Customer_have_VoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutOrder_applies_voucherInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutOrder_applies_voucherInput, VoucherUncheckedCreateWithoutOrder_applies_voucherInput>
  }

  export type OrderUpsertWithoutOrder_applies_voucherInput = {
    update: XOR<OrderUpdateWithoutOrder_applies_voucherInput, OrderUncheckedUpdateWithoutOrder_applies_voucherInput>
    create: XOR<OrderCreateWithoutOrder_applies_voucherInput, OrderUncheckedCreateWithoutOrder_applies_voucherInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrder_applies_voucherInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrder_applies_voucherInput, OrderUncheckedUpdateWithoutOrder_applies_voucherInput>
  }

  export type OrderUpdateWithoutOrder_applies_voucherInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput
    order_have_item?: Order_have_ItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrder_applies_voucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    order_have_item?: Order_have_ItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type VoucherUpsertWithoutOrder_applies_voucherInput = {
    update: XOR<VoucherUpdateWithoutOrder_applies_voucherInput, VoucherUncheckedUpdateWithoutOrder_applies_voucherInput>
    create: XOR<VoucherCreateWithoutOrder_applies_voucherInput, VoucherUncheckedCreateWithoutOrder_applies_voucherInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutOrder_applies_voucherInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutOrder_applies_voucherInput, VoucherUncheckedUpdateWithoutOrder_applies_voucherInput>
  }

  export type VoucherUpdateWithoutOrder_applies_voucherInput = {
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
    customer_have_voucher?: Customer_have_VoucherUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutOrder_applies_voucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
    customer_have_voucher?: Customer_have_VoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type ItemCreateWithoutOrder_have_itemInput = {
    dish?: DishCreateNestedOneWithoutItemInput
    table?: TableCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOrder_have_itemInput = {
    id?: number
    dish?: DishUncheckedCreateNestedOneWithoutItemInput
    table?: TableUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOrder_have_itemInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOrder_have_itemInput, ItemUncheckedCreateWithoutOrder_have_itemInput>
  }

  export type OrderCreateWithoutOrder_have_itemInput = {
    order_date?: Date | string
    total_price?: number
    customer: CustomerCreateNestedOneWithoutOrderInput
    order_applies_voucher?: Order_applies_VoucherCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrder_have_itemInput = {
    id?: number
    order_date?: Date | string
    total_price?: number
    customer_id: number
    order_applies_voucher?: Order_applies_VoucherUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrder_have_itemInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrder_have_itemInput, OrderUncheckedCreateWithoutOrder_have_itemInput>
  }

  export type ItemUpsertWithoutOrder_have_itemInput = {
    update: XOR<ItemUpdateWithoutOrder_have_itemInput, ItemUncheckedUpdateWithoutOrder_have_itemInput>
    create: XOR<ItemCreateWithoutOrder_have_itemInput, ItemUncheckedCreateWithoutOrder_have_itemInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOrder_have_itemInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOrder_have_itemInput, ItemUncheckedUpdateWithoutOrder_have_itemInput>
  }

  export type ItemUpdateWithoutOrder_have_itemInput = {
    dish?: DishUpdateOneWithoutItemNestedInput
    table?: TableUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOrder_have_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    dish?: DishUncheckedUpdateOneWithoutItemNestedInput
    table?: TableUncheckedUpdateOneWithoutItemNestedInput
  }

  export type OrderUpsertWithoutOrder_have_itemInput = {
    update: XOR<OrderUpdateWithoutOrder_have_itemInput, OrderUncheckedUpdateWithoutOrder_have_itemInput>
    create: XOR<OrderCreateWithoutOrder_have_itemInput, OrderUncheckedCreateWithoutOrder_have_itemInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrder_have_itemInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrder_have_itemInput, OrderUncheckedUpdateWithoutOrder_have_itemInput>
  }

  export type OrderUpdateWithoutOrder_have_itemInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput
    order_applies_voucher?: Order_applies_VoucherUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrder_have_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    order_applies_voucher?: Order_applies_VoucherUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type CustomerCreateWithoutCustomer_have_voucherInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    order?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCustomer_have_voucherInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCustomer_have_voucherInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomer_have_voucherInput, CustomerUncheckedCreateWithoutCustomer_have_voucherInput>
  }

  export type VoucherCreateWithoutCustomer_have_voucherInput = {
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
    order_applies_voucher?: Order_applies_VoucherCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutCustomer_have_voucherInput = {
    id?: number
    denomination: string
    issue_date?: Date | string
    expiration_date?: number
    order_applies_voucher?: Order_applies_VoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutCustomer_have_voucherInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutCustomer_have_voucherInput, VoucherUncheckedCreateWithoutCustomer_have_voucherInput>
  }

  export type CustomerUpsertWithoutCustomer_have_voucherInput = {
    update: XOR<CustomerUpdateWithoutCustomer_have_voucherInput, CustomerUncheckedUpdateWithoutCustomer_have_voucherInput>
    create: XOR<CustomerCreateWithoutCustomer_have_voucherInput, CustomerUncheckedCreateWithoutCustomer_have_voucherInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomer_have_voucherInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomer_have_voucherInput, CustomerUncheckedUpdateWithoutCustomer_have_voucherInput>
  }

  export type CustomerUpdateWithoutCustomer_have_voucherInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCustomer_have_voucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type VoucherUpsertWithoutCustomer_have_voucherInput = {
    update: XOR<VoucherUpdateWithoutCustomer_have_voucherInput, VoucherUncheckedUpdateWithoutCustomer_have_voucherInput>
    create: XOR<VoucherCreateWithoutCustomer_have_voucherInput, VoucherUncheckedCreateWithoutCustomer_have_voucherInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutCustomer_have_voucherInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutCustomer_have_voucherInput, VoucherUncheckedUpdateWithoutCustomer_have_voucherInput>
  }

  export type VoucherUpdateWithoutCustomer_have_voucherInput = {
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
    order_applies_voucher?: Order_applies_VoucherUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutCustomer_have_voucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    denomination?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration_date?: IntFieldUpdateOperationsInput | number
    order_applies_voucher?: Order_applies_VoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type Customer_have_VoucherCreateManyCustomerInput = {
    voucher_id: number
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    order_date?: Date | string
    total_price?: number
  }

  export type Customer_have_VoucherUpdateWithoutCustomerInput = {
    voucher?: VoucherUpdateOneRequiredWithoutCustomer_have_voucherNestedInput
  }

  export type Customer_have_VoucherUncheckedUpdateWithoutCustomerInput = {
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Customer_have_VoucherUncheckedUpdateManyWithoutCustomerInput = {
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutCustomerInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    order_applies_voucher?: Order_applies_VoucherUpdateManyWithoutOrderNestedInput
    order_have_item?: Order_have_ItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
    order_applies_voucher?: Order_applies_VoucherUncheckedUpdateManyWithoutOrderNestedInput
    order_have_item?: Order_have_ItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemCreateManyItemInput = {
    order_id: number
  }

  export type Order_have_ItemUpdateWithoutItemInput = {
    order?: OrderUpdateOneRequiredWithoutOrder_have_itemNestedInput
  }

  export type Order_have_ItemUncheckedUpdateWithoutItemInput = {
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemUncheckedUpdateManyWithoutItemInput = {
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_applies_VoucherCreateManyOrderInput = {
    voucher_id: number
  }

  export type Order_have_ItemCreateManyOrderInput = {
    item_id: number
  }

  export type Order_applies_VoucherUpdateWithoutOrderInput = {
    voucher?: VoucherUpdateOneRequiredWithoutOrder_applies_voucherNestedInput
  }

  export type Order_applies_VoucherUncheckedUpdateWithoutOrderInput = {
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_applies_VoucherUncheckedUpdateManyWithoutOrderInput = {
    voucher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemUpdateWithoutOrderInput = {
    item?: ItemUpdateOneRequiredWithoutOrder_have_itemNestedInput
  }

  export type Order_have_ItemUncheckedUpdateWithoutOrderInput = {
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_have_ItemUncheckedUpdateManyWithoutOrderInput = {
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type Customer_have_VoucherCreateManyVoucherInput = {
    customer_id: number
  }

  export type Order_applies_VoucherCreateManyVoucherInput = {
    order_id: number
  }

  export type Customer_have_VoucherUpdateWithoutVoucherInput = {
    customer?: CustomerUpdateOneRequiredWithoutCustomer_have_voucherNestedInput
  }

  export type Customer_have_VoucherUncheckedUpdateWithoutVoucherInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type Customer_have_VoucherUncheckedUpdateManyWithoutVoucherInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_applies_VoucherUpdateWithoutVoucherInput = {
    order?: OrderUpdateOneRequiredWithoutOrder_applies_voucherNestedInput
  }

  export type Order_applies_VoucherUncheckedUpdateWithoutVoucherInput = {
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type Order_applies_VoucherUncheckedUpdateManyWithoutVoucherInput = {
    order_id?: IntFieldUpdateOperationsInput | number
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