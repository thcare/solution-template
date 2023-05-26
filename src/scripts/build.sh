#!/bin/bash
set -euo pipefail

# The build steps for the solution.

echo "Generating Schema and Migrations..."
thfx prisma

if grep -q 'graphql(' src/graphql/queries.ts; then
  echo "Generating GraphQL Client..."
  graphql-codegen
fi

echo "Compiling TypeScript..."
tsc

echo "Compiling Solution..."
node dist/scripts/compile.js

echo "Done!"
