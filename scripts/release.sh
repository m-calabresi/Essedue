#!/bin/bash

GIT_VERSION=""

# Check if version follows 'vX.Y.Z' or 'vX.Y.Z-suffix123' format
if [[ ! $GIT_VERSION =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9]+)?$ ]]; then
    echo "Error: Version '$GIT_VERSION' doesn't follow formats 'v1.2.3' or 'v1.2.3-suffix123'"
    exit 1
fi

git tag ${GIT_VERSION}
git push origin ${GIT_VERSION}
