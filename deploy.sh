#!/usr/bin/env sh

set -e

npm run build
cd dist

git init
git checkout -b main
git add -A
git commit -M "deploy"

# git push -f git@github.com:CritianRodriguez042502/agency_view.git main:gh-pages