#!/usr/bin/env bash
set -euo pipefail

REPO="GGx321/asmlk-dev"

echo "Syncing issues from $REPO..."
gh issue list --repo "$REPO" --state open --json number,title,labels,assignees --limit 50
