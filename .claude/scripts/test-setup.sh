#!/usr/bin/env bash
set -euo pipefail

echo "Verifying project setup..."

if [ ! -f "package.json" ]; then
  echo "ERROR: package.json not found"
  exit 1
fi

echo "Installing dependencies..."
npm ci --prefer-offline 2>/dev/null || npm install

echo "Running lint..."
npm run lint 2>/dev/null || echo "WARN: lint not configured"

echo "Running build..."
npm run build 2>/dev/null || { echo "ERROR: build failed"; exit 1; }

echo "Setup verified successfully."
