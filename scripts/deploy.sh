#!/bin/bash

GIT_VERSION="v1.0.0"

git tag ${GIT_VERSION}
git push origin ${GIT_VERSION}
