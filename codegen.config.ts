import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";
import {
  BigIntResolver,
  ByteResolver,
  TimestampResolver,
} from "graphql-scalars";

const subgraphUrl = process.env.SUBGRAPH_URL;

if (!subgraphUrl) {
  throw new Error("Missing SUBGRAPH_URL environment variable");
}

const config: CodegenConfig = {
  emitLegacyCommonJSImports: false,
  schema: subgraphUrl,
  generates: {
    "src/subgraphs/lilnouns.gen.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        strictScalars: false,
        scalars: {
          BigInt: BigIntResolver,
          Bytes: ByteResolver,
          Timestamp: TimestampResolver,
        },
        useTypeImports: true,
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
  },
};

export default config;
