#!/usr/bin/env bash
set -e
set -o pipefail

MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
UP_DIR=`echo $MY_DIR | sed 's/\/scripts//g'`

echo HI!
