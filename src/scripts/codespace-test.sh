#!/bin/bash

solution_dir=$(pwd)

echo "Building solution..."
npm run build
npm pack

cd ../web.th.care
echo "Ingesting solution in web..."
npm run solution:ingest $solution_dir/thcare-solution-1.0.0.tgz

cd ../api.th.care
echo "Ingesting solution in api..."
npm run solution:ingest $solution_dir/thcare-solution-1.0.0.tgz

echo "Ready, now you may run dev."
