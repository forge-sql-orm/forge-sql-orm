#!/bin/bash
set -e

# Colors (disabled when not a TTY so pipes work)
if [[ -t 1 ]]; then
  RED='\033[0;31m'
  GREEN='\033[0;32m'
  YELLOW='\033[1;33m'
  BLUE='\033[0;34m'
  CYAN='\033[0;36m'
  BOLD='\033[1m'
  RESET='\033[0m'
else
  RED= GREEN= YELLOW= BLUE= CYAN= BOLD= RESET=
fi

STEP=0
step() { STEP=$((STEP + 1)); echo -e "${CYAN}[Step ${STEP}]${RESET} ${*}"; }
section() { echo -e "\n${BOLD}${BLUE}══════════════════════════════════════════════════════════${RESET}\n${BOLD}${BLUE}  ${*}${RESET}\n${BOLD}${BLUE}══════════════════════════════════════════════════════════${RESET}"; }
run() { echo -e "${YELLOW}  →${RESET} $*"; "$@"; }

section "Root package (forge-sql-orm)"
step "Updating dependencies (ncu -u)..."
run ncu -u --dep prod,dev,peer
step "Removing node_modules and package-lock.json..."
run rm -rf node_modules package-lock.json
step "Installing dependencies (npm i)..."
run npm i
step "Running knip..."
run npm run knip
step "Running lint:fix..."
run npm run lint:fix
step "Building..."
run npm run build
step "Staging package.json and package-lock.json..."
run git add package.json package-lock.json

section "forge-sql-orm-cli"
step "Updating dependencies (ncu -u)..."
cd forge-sql-orm-cli
run ncu -u --dep prod,dev,peer
step "Removing node_modules and package-lock.json..."
run rm -rf node_modules package-lock.json
step "Installing dependencies (npm i)..."
run npm i
step "Running knip..."
run npm run knip
step "Building CLI..."
run npm run build

section "Examples"
cd ../examples

section "forge-sql-orm-example-drizzle-driver-simple"
cd forge-sql-orm-example-drizzle-driver-simple
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-dynamic"
cd forge-sql-orm-example-dynamic
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-optimistic-locking"
cd forge-sql-orm-example-optimistic-locking
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-query-analyses"
cd forge-sql-orm-example-query-analyses
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-analize/*
cd ../../..

section "forge-sql-orm-example-simple"
cd forge-sql-orm-example-simple
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-checklist"
cd forge-sql-orm-example-checklist
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-article/*
cd ../../..

section "forge-sql-orm-example-org-tracker"
cd forge-sql-orm-example-org-tracker
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-sql-executor"
cd forge-sql-orm-example-sql-executor
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-cache"
cd forge-sql-orm-example-cache
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Staging package files..."
run git add package.json package-lock.json
step "Static UI: removing and updating deps..."
cd static/forge-orm-example
run rm -rf node_modules package-lock.json
run ncu -u --dep prod,dev,peer
run rm -rf package-lock.json
step "Static UI: installing and knip..."
run npm i
run npm run knip
step "Static UI: building..."
run npm run build
sleep 2
step "Staging static build..."
run git add package.json package-lock.json
run git add -f build-static/*
cd ../../..

section "forge-sql-orm-example-ui-kit"
cd forge-sql-orm-example-ui-kit
step "Removing node_modules and lock file..."
run rm -rf node_modules package-lock.json
step "Updating dependencies (ncu)..."
run ncu -u --dep prod,dev,peer
step "Installing dependencies..."
run npm i
step "Running knip..."
run npm run knip
step "Building (build:ci)..."
run npm run build:ci
step "Staging package files..."
run git add package.json package-lock.json
cd ..

section "Format"
cd ..
step "Running format..."
run npm run format
echo -e "\n${GREEN}${BOLD}Done.${RESET}\n"