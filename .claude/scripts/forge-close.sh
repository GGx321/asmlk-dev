#!/usr/bin/env bash
set -euo pipefail

REPO="GGx321/asmlk-dev"

if [ -z "${1:-}" ]; then
  echo "Usage: forge-close.sh <issue-number>"
  exit 1
fi

echo "Closing issue #$1 in $REPO..."
gh issue close "$1" --repo "$REPO"
