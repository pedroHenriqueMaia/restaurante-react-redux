#!/bin/bash

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Run ESLint
echo -e "${YELLOW}Running ESLint...${NC}"
npx eslint .

# Check ESLint status
ESLINT_EXIT=$?

# If ESLint found errors, prevent commit
if [ $ESLINT_EXIT -ne 0 ]; then
    echo -e "${RED}ESLint found issues. Commit aborted.${NC}"
    exit 1
fi

# If no issues found, allow commit
echo -e "${GREEN}ESLint passed. Proceeding with commit.${NC}"
exit 0
